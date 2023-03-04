import { PrismaClient } from '@prisma/client';

declare global {
  var _prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    errorFormat: 'minimal',
  });
} else {
  if (!global._prisma) {
    global._prisma = new PrismaClient({
      errorFormat: 'pretty',
    });
  }
  prisma = global._prisma;
}

export default prisma;
