// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.extends("next", "next/core-web-vitals"),
];
