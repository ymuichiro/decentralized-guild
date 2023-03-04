import type { NextApiRequest } from 'next/types';
import { pino } from 'pino';

export const $logger = pino({ level: process.env.NODE_ENV === 'development' ? 'trace' : 'info' });

interface ApiLogObject {
  req: {
    method?: string;
    path?: string;
  };
  body?: object;
}

function formatter(req: NextApiRequest, obj?: object): ApiLogObject {
  if (obj) {
    return {
      req: {
        method: req.method,
        path: req.url,
      },
      body: obj,
    };
  }
  return {
    req: {
      method: req.method,
      path: req.url,
    },
  };
}

export class Logger {
  protected protected() {}

  static fatal(error: Error | unknown, message?: string): void {
    $logger.fatal(error, message);
  }

  static error(error: Error | unknown, message?: string): void {
    $logger.error(error, message);
  }

  static warn(message: string, req: NextApiRequest, obj?: object): void {
    $logger.warn(formatter(req, obj), message);
  }

  static info(message: string, req: NextApiRequest, obj?: object): void {
    $logger.info(formatter(req, obj), message);
  }

  static debug(message: string, req: NextApiRequest, obj?: object): void {
    $logger.debug(formatter(req, obj), message);
  }

  static trace(message: string, req: NextApiRequest, obj?: object): void {
    $logger.trace(formatter(req, obj), message);
  }

  static _trace(message: string, obj?: object): void {
    $logger.trace({ body: obj }, message);
  }
}
