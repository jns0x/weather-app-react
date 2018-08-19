const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
      {
        test: /\.(png|jpg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$|scss$|sass$/,
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [htmlPlugin, HotModuleReplacementPlugin,
    new CopyWebpackPlugin([
      // relative path is from src
      { from: './favicon.ico' }, // <- your path to favicon
    ])]
};
