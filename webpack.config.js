"use strict";
const path = require("path");
const loaders = require("./webpack.loader");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const config = {
  target: "web",
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    index: "./src/index.tsx",
  }, // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    // libraryTarget: 'commonjs2',
  },
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: [".ts", ".js", ".jsx", ".tsx"],
  },
  ...loaders,
  plugins: [new ReactRefreshPlugin()],
};

module.exports = config;
