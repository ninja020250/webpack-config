const path = require("path"); // lấy đường dẫn tuyệt đối của thư mục\
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
var DIST_DIR = path.resolve(__dirname, "../dist/");
var SRC_DIR = path.resolve(__dirname, "../src/");
const Fiber = require("fibers");
const VENDOR_LIBS = [
  "react",
  "react-dom",
  "bootstrap",
  "jquery",
  "redux",
  "redux-thunk",
  "react-redux"
];

const config = {
  entry: {
    bundle: SRC_DIR + "/app/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].[hash].js",
    path: DIST_DIR + "/app"
    // publicPath: DIST_DIR + "/app/"
  },
  module: {
    rules: [
      // es6 loader
      {
        use: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/
      },
      // css loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      // scss loader
    },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              fiber: Fiber
            }
          }
        ]
      },
      {
        use: "file-loader",
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "my toys"
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
