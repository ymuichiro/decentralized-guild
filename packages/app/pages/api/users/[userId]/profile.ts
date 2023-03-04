import { PostUserProfileImageRequest } from '@/../oas/types';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { formParseForFileUpload } from '@/services/Parser';
import { createHash } from 'crypto';
import formidable from 'formidable';
import fs from 'fs';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'POST') {
      return postRequest(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

/**
 * @description POST:/api/user/upload/profile upload user profile
 * @description oas が multipart/form-data をサポートしていないため、OAS未使用
 * @description multiple: false
 *     1. ユーザーのプロフィールをアップロードする
 *     2. 古い画像ファイルのパスがサーバー上であれば削除する
 *     3. User Field のレコードを更新する
 */
async function postRequest(req: NextApiRequest, res: NextApiResponse<void>) {
  const { userId } = req.query as unknown as PostUserProfileImageRequest;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id || session.user.id !== userId) {
    return res.status(401).end();
  }

  try {
    const { files } = await formParseForFileUpload(req);
    // generate file path
    const file: formidable.File = files.file as formidable.File;
    const ext: string = mimeTypeToExtention(file.mimetype);
    const hash: string = createHash('md5').update(session.user.id).digest('hex');

    // for handle write
    const uploadDir: string = path.join('public', 'uploads', 'profile');
    const uploadPath: string = path.resolve(uploadDir, `${hash}${ext}`);
    // for prisma update & until 500,000 byte = 500KB
    const profileDir: string = path.join('/', 'uploads', 'profile', `${hash}${ext}`);
    if (file.size > 500000) {
      throw new Error('file size is too large');
    }

    // handle write
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    fs.renameSync(file.filepath, uploadPath);

    await prisma.user.update({
      select: { image: true },
      where: { id: session.user.id },
      data: { image: profileDir },
    });

    return res.status(204).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(404).end();
  }
}

function mimeTypeToExtention(mimeType: string | null): string {
  switch (mimeType) {
    case 'image/jpeg':
      return '.jpg';
    case 'image/png':
      return '.png';
    default:
      throw new Error(`invalid mimeType: ${mimeType ?? 'null'}`);
  }
}
