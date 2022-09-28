// https://babeljs.io/docs/en/

"use strict";

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
