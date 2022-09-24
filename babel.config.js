/* https://babeljs.io/docs/en/ */

module.exports = {
  presets: [
    [
      "@babel/preset-env", {}
    ],
    [
      "@babel/preset-react", {
        "runtime": "automatic",
      }
    ],
  ],
};
