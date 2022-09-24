/* https://webpack.js.org/configuration/ */

const path = require("path");

// Plugins //
const HtmlWebpackPlugin = require("html-webpack-plugin"); // https://www.npmjs.com/package/html-webpack-plugin

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ]
      },
      // CSS
      {
        test: /\.(css)$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    port: "3000",
    https: false,
    open: true,
    hot: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
    static: {
      directory: path.join(__dirname, "public")
    },
    historyApiFallback: true,
    compress: false,
  },
};
