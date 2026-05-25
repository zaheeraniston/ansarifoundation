const eslintConfig = [{
  rules: {
    // TypeScript rules
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    
    // React rules
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    
    // General JavaScript rules
    "prefer-const": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-undef": "off",
  },
}, {
  ignores: ["node_modules/**", "dist/**", "build/**", "examples/**", "skills/**"]
}];

export default eslintConfig;
