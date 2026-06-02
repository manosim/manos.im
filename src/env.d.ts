interface ImportMetaEnv {
  readonly ENVIRONMENT: string;
  readonly SITE_URL: string;
  readonly PUBLIC_GTAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
