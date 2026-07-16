/// <reference types="vite/client" />

declare module "*.css?inline" {
  const styles: string;
  export default styles;
}

declare module "*.css" {
  const styles: string;
  export default styles;
}
