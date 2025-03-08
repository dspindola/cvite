import civetPlugin from "eslint-plugin-civet/ts";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...civetPlugin.configs.jsRecommended,
  ...civetPlugin.configs.strict,
]);
