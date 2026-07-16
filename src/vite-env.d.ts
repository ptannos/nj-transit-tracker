/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css?inline" {
  const styles: string;
  export default styles;
}

declare module "*.css" {
  const styles: string;
  export default styles;
}
