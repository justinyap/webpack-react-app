/* https://eslint.org/docs/ */

module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  plugins: [
    "import",       // https://www.npmjs.com/package/eslint-plugin-import
    "jsx-a11y",     // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    "promise",      // https://www.npmjs.com/package/eslint-plugin-promise
    "react",        // https://www.npmjs.com/package/eslint-plugin-react
    "react-hooks",  // https://www.npmjs.com/package/eslint-plugin-react-hooks
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // eslint
    "semi": ["error", "always"],
    "indent": [ "warn", 2 ],
    "quotes": ["warn", "double"],
    "linebreak-style": [ "error", "unix" ],
    "eol-last": ["error", "always"],

    // eslint-plugin-react
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "react": {
      "version": "detect"
    },
  },
  overrides: [],
};
