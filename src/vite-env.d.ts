/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: 'production' | 'development';

  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;

  readonly VITE_SENTRY_DSN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
