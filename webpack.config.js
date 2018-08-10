const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
      // {
      //   test: /\.json$/,
      //   loader: "json-loader"
      // }
    ]
  },
  plugins: [htmlPlugin, HotModuleReplacementPlugin]
};
