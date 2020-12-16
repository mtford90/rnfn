module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react",
    "import",
    "prettier",
    "promise",
    "@typescript-eslint",
    "jest",
    "react-hooks",
  ],
  globals: {
    __DEV__: true,
    fetch: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "sort-imports": "off",
    "import/order": "warn",
    "max-classes-per-file": "warn",
    "no-plusplus": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": "off",
    "no-useless-constructor": "off",
    camelcase: "off",
    "no-shadow": "warn",
    "no-use-before-define": "off",

    // TypeScript
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/ban-types": "warn",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // React
    "react/require-default-props": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx", ".js"] }],
    "react/prop-types": ["off", {}],
    "react/jsx-props-no-spreading": 0,

    // React Hooks
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",

    // Jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jest/no-restricted-matchers": [
      "warn",
      {
        toBeTruthy: null,
        toBeFalsy: null,
      },
    ],

    "react-hooks/rules-of-hooks": "error",

    // TODO: Turn this on once we're ready to deal with the consequences...
    // There is no way to turn off autofix for this rule and adding missing deps to hooks could introduce bugs
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".jsx", ".tsx", ".json", ".js"],
      },
    },
    "import/extensions": [".ts", ".mjs", ".jsx", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  env: {
    "jest/globals": true,
  },
  overrides: [
    {
      files: ["__tests__/**/*.{ts,tsx}", "src/**/*.{test,spec}.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
