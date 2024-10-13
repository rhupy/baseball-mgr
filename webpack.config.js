const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const commonConfig = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      fsevents: false,
    },
  },
};

const mainConfig = {
  ...commonConfig,
  target: "electron-main",
  entry: "./src/main.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const rendererConfig = {
  ...commonConfig,
  target: "web",
  entry: "./src/renderer.tsx",
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "dist"),
  //   },
  //   port: 4000,
  //   hot: true,
  // },
};

module.exports = [mainConfig, rendererConfig];
