/**
 * declare of environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    readonly OAUTH_GITHUB_CLIENT_ID: string;
    readonly OAUTH_GITHUB_CLIENT_SECRET: string;
    readonly OAUTH_GOOGLE_CLIENT_ID: string;
    readonly OAUTH_GOOGLE_CLIENT_SECRET: string;
    readonly SYMBOL_ADMIN_PRIVATEKEY: string;
    readonly WEB_PUSH_PRIVATE_KEY: string;
    readonly WEB_PUSH_EMAIL: string;
    readonly NEXT_PUBLIC_SYMBOL_NODE: string;
    readonly NEXT_PUBLIC_SYMBOL_NODE_WS: string;
    readonly NEXT_PUBLIC_SYMBOL_GENERATION_HASH_SEED: string;
    readonly NEXT_PUBLIC_SYMBOL_EPOCH_ADJUSTMENT: string;
    readonly NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID: string;
    readonly NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_ID: string;
    readonly NEXT_PUBLIC_SYMBOL_RTP_MOSAIC_DIVISIVILITY: string;
    readonly NEXT_PUBLIC_SYMBOL_CURRENCY_DIVISIVILITY: string;
    readonly NEXT_PUBLIC_WORLD_NAME: string;
    readonly NEXT_PUBLIC_SYMBOL_SYSTEM_PUBLICKEY: string;
    readonly NEXT_PUBLIC_SYMBOL_NETWORKTYPE: string;
    readonly NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY: string;
    readonly NEXT_PUBLIC_SYSTEM_FEE: string;
    readonly MAIL_HOST: string;
    readonly MAIL_PORT: string;
    readonly MAIL_SECURE: string;
    readonly MAIL_AUTH_USER: string;
    readonly MAIL_AUTH_PASSWORD: string;
  }
}
