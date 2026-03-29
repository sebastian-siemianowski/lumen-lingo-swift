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
    rules: {
      // Downgrade new React 19 rules to warnings until codebase is migrated
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/use-memo": "warn",
      "react-hooks/preserve-manual-memoization": "warn",
      // Gradual adoption — too many pre-existing usages to fix at once
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "warn",
    },
  },
  {
    // global-error.tsx and not-found.tsx are outside the Next.js router,
    // so <a> tags are appropriate (no client-side navigation available).
    files: [
      "src/app/global-error.tsx",
      "src/app/not-found.tsx",
    ],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
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
