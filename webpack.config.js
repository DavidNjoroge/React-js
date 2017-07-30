
var path = require("path");
var BabelPlugin = require ("babel-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  plugins:[
    new BabelPlugin({
      test:/\.js$/,
      include: SRC_DIR,
      presets:
      ['es2015']

    })
  ]

};
module.exports = config;
