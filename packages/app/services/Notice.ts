import prisma from '@/services/InitPrisma';
import { createTransport } from 'nodemailer';
import webPush, { PushSubscription, SendResult } from 'web-push';

interface WebPushContent {
  title: string;
  message: string;
}

/**
 * Prisma 上の user id を元にユーザーへ通知を配信する。
 * 成功時は true を返す。それ以外は false とする
 */
export async function webPushByUserId(userId: string, content: WebPushContent): Promise<SendResult> {
  const r = await prisma.pushSubscriptionField.findUnique({ where: { userId } });

  if (!r) {
    return {
      body: 'system error',
      statusCode: 500,
      headers: {},
    };
  }

  const subscription: PushSubscription = {
    endpoint: r.endpoint,
    keys: {
      p256dh: r.p256dh,
      auth: r.auth,
    },
  };

  return await webPush.sendNotification(subscription, JSON.stringify(content));
}

/**
 * メールの送信
 * 対応サービス： https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
 */
export async function sendMail(to: string, subject: string, text: string): Promise<void> {
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === 'true' ? true : false,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASSWORD,
    },
  });

  await transporter.sendMail({ from: process.env.MAIL_AUTH_USER, to, subject, text });
}
