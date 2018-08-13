const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ["./src/index.js", "react-hot-loader/patch"],
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "bundled.js",
    crossOriginLoading: "anonymous"
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$|js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$|scss$|sass$/,
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [htmlPlugin, HotModuleReplacementPlugin]
  // new ExtractTextPlugin('dist/style.css', {
  //   allChunks: true
  //
};
