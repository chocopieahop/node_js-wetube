module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unexpected-multiline": "error",
    "no-extra-semi": "error",
  },
};
