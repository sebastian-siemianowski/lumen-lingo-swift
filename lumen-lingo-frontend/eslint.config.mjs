import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import i18next from "eslint-plugin-i18next";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: { i18next },
    rules: {
      "i18next/no-literal-string": [
        "warn",
        {
          mode: "jsx-only",
          "jsx-attributes": {
            include: ["title", "placeholder", "aria-label", "alt", "content"],
          },
          words: {
            exclude: [
              "LumenLingo",
              "Lumen",
              "Lingo",
              "LumenLingo home",
            ],
          },
          "should-validate-template": false,
        },
      ],
    },
  },
]);

export default eslintConfig;
