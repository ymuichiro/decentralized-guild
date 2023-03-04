import { ValidationError } from '@/services/Error';
import prisma from '@/services/InitPrisma';
import { Logger } from '@/services/Logger';
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    Logger.info('access', req);
    if (req.method === 'POST') {
      return await POST(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    Logger.error(err, 'Internal Error');
    return res.status(500).end();
  }
}

async function POST(_: NextApiRequest, res: NextApiResponse<void>) {
  // prisma
  try {
    await prisma.$connect();
  } catch (err) {
    Logger.error(err, 'prisma connection error');
    return res.status(500).end();
  } finally {
    await prisma.$disconnect();
  }

  // env
  if (!process.env.OAUTH_GITHUB_CLIENT_ID) {
    Logger.error(new ValidationError('OAUTH_GITHUB_CLIENT_ID is not set'));
    return res.status(500).end();
  }
  if (!process.env.OAUTH_GITHUB_CLIENT_SECRET) {
    Logger.error(new ValidationError('OAUTH_GITHUB_CLIENT_SECRET is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXTAUTH_SECRET) {
    Logger.error(new ValidationError('NEXTAUTH_SECRET is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXTAUTH_URL) {
    Logger.error(new ValidationError('NEXTAUTH_URL is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY) {
    Logger.error(new ValidationError('NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY is not set'));
    return res.status(500).end();
  }
  if (!process.env.WEB_PUSH_PRIVATE_KEY) {
    Logger.error(new ValidationError('WEB_PUSH_PRIVATE_KEY is not set'));
    return res.status(500).end();
  }
  if (!process.env.WEB_PUSH_EMAIL) {
    Logger.error(new ValidationError('WEB_PUSH_EMAIL is not set'));
    return res.status(500).end();
  }
  if (!process.env.MAIL_HOST) {
    Logger.error(new ValidationError('MAIL_HOST is not set'));
    return res.status(500).end();
  }
  if (!process.env.MAIL_PORT || Number(process.env.MAIL_PORT).toString() === 'NaN') {
    Logger.error(new ValidationError('MAIL_PORT is not set'));
    return res.status(500).end();
  }
  if (!process.env.MAIL_SECURE) {
    Logger.error(new ValidationError('MAIL_SECURE is not set'));
    return res.status(500).end();
  }
  if (!process.env.MAIL_AUTH_USER) {
    Logger.error(new ValidationError('MAIL_AUTH_USER is not set'));
    return res.status(500).end();
  }
  if (!process.env.MAIL_AUTH_PASSWORD) {
    Logger.error(new ValidationError('MAIL_AUTH_PASSWORD is not set'));
    return res.status(500).end();
  }
  if (!process.env.SYMBOL_ADMIN_PRIVATEKEY) {
    Logger.error(new ValidationError('SYMBOL_ADMIN_PRIVATEKEY is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_NODE) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_NODE is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_NODE_WS) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_NODE_WS is not set'));
    return res.status(500).end();
  }
  if (
    !process.env.NEXT_PUBLIC_SYMBOL_NETWORKTYPE ||
    ![104, 152].includes(Number(process.env.NEXT_PUBLIC_SYMBOL_NETWORKTYPE))
  ) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_NETWORKTYPE is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_GENERATION_HASH_SEED) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_GENERATION_HASH_SEED is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_EPOCH_ADJUSTMENT) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_EPOCH_ADJUSTMENT is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_ID) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_ID is not set'));
    return res.status(500).end();
  }
  if (
    !process.env.NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_DIVISIVILITY ||
    Number(process.env.NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_DIVISIVILITY).toString() === 'NaN'
  ) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_DIVISIVILITY is not set'));
    return res.status(500).end();
  }
  if (
    !process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_DIVISIVILITY ||
    Number(process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_DIVISIVILITY).toString() === 'NaN'
  ) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_CURRENCY_DIVISIVILITY is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_WORLD_NAME) {
    Logger.error(new ValidationError('NEXT_PUBLIC_WORLD_NAME is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYMBOL_SYSTEM_PUBLICKEY) {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYMBOL_SYSTEM_PUBLICKEY is not set'));
    return res.status(500).end();
  }
  if (!process.env.NEXT_PUBLIC_SYSTEM_FEE || Number(process.env.NEXT_PUBLIC_SYSTEM_FEE).toString() === 'NaN') {
    Logger.error(new ValidationError('NEXT_PUBLIC_SYSTEM_FEE is not set'));
    return res.status(500).end();
  }

  return res.status(204).end();
}
