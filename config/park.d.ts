declare module "bun" {
  interface Env {
    OUTDIR: string;
  }
  export var codepark: { entry?: string };
}
