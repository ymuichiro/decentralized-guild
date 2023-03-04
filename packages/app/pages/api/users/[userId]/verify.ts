import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { AccountSystem } from '@/services/AccountSystem';
import { AccountUser } from '@/services/AccountUser';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next/types';
import type { PostUserPublicKeyRequest, PostUserVerifyRequestBody } from 'oas/types';

/** ユーザーの public key を検証 */
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
 * @description クライアントサイドでユーザーの秘密鍵を元に暗号化されたメッセージを受信し、正しく複合可能かで秘密鍵の所有を検証する
 * @description PublicKey は一度登録を行うと変更は不可能とする
 */
async function postRequest(req: NextApiRequest, res: NextApiResponse<void>) {
  const { userId } = req.query as unknown as PostUserPublicKeyRequest;
  const { encryptedMessage, publicKey } = req.body as PostUserVerifyRequestBody;
  const session: Session | null = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id || session.user.id !== userId) {
    return res.status(401).end();
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { publicKey: true } });
  if (!user) return res.status(401).end();
  if (!publicKey || !encryptedMessage || user.publicKey) return res.status(404).end();

  const network: NetworkSymbol = new NetworkSymbol();
  const systemAccount: AccountSystem = new AccountSystem(network.networkType);
  const userAccount: AccountUser = new AccountUser(publicKey, network.networkType);
  const result: boolean = systemAccount.verifyEncryptedToken(encryptedMessage, userAccount);
  if (!result) {
    return res.status(404).end();
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      publicKey: publicKey,
    },
  });

  return res.status(204).end();
}
