const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: {
    errorDetails: true,
    children: true,
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    hot: true,
    historyApiFallback: true,
    port: 3000,
    open: true,
    liveReload: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just Delicious",
      template: "./src/template.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".css", ".json", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
};
