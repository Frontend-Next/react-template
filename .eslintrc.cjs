module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "@tanstack/query"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeParameter",
        format: ["UPPER_CASE"],
      },
    ],
  },
};

// {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "prettier",
//     "plugin:@tanstack/eslint-plugin-query/recommended",
//     "plugin:@typescript-eslint/recommended-type-checked",
//     "plugin:@typescript-eslint/stylistic-type-checked",
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": "latest",
//     "sourceType": "module",
//     "project": "./tsconfig.json"
//   },
//   "plugins": [
//     "react",
//     "@typescript-eslint",
//     "prettier",
//     "simple-import-sort",
//     "@tanstack/query"
//   ],
//   "settings": {
//     "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
//     "import/resolver": {
//       "typescript": {
//         "directory": "./tsconfig.json"
//       },
//       "node": {
//         "extensions": [".js", ".jsx", ".ts", ".tsx"]
//       }
//     }
//   },
//   "rules": {
//     "prettier/prettier": ["error", { "singleQuote": "false" }],
//     "@tanstack/query/exhaustive-deps": "error",
//     "react/react-in-jsx-scope": "off",
//     "react/prop-types": "off",
//     "react/jsx-no-bind": "off",
//     "react/function-component-definition": [
//       2,
//       { "namedComponents": "arrow-function" }
//     ],
//     "import/prefer-default-export": "off",
//     "import/no-named-as-default": "off",
//     "simple-import-sort/imports": "warn",
//     "simple-import-sort/exports": "warn",
//     "@typescript-eslint/ban-ts-comment": "warn"
//   }
// }
