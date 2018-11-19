const merge = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "../../dist",
    hot: true,
    open: true,
    host: "localhost",
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
