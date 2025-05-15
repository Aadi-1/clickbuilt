import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // extend Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // your own overrides
  {
    rules: {
      // disable the warning about unescaped ' and " in JSX
      "react/no-unescaped-entities": "off",
    },
  },
];
