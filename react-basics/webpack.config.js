// to transpile and bundle
var webpack = require("webpack")
// to access file system
var path = require("path")

// distribution folder will be created automatically
// will hold the output of webpack (site to serve)
var DIST_DIR = path.resolve(__dirname, "dist")
// where to find the original source code
var SRC_DIR = path.resolve(__dirname, "src")

// webpack configuration
var config = {
  // entry point to start bundling (dependency of imports needed in files)
  entry: SRC_DIR + "/app/index.js",
  output: {
    // where to output the distribution (created automaticallly)
    path: DIST_DIR + "/app",
    filename: "bundle.js",

    // specify path to dist folder once it is deployed on a real server
    // very useful for webpack-dev-server to figure out paths
    publicPath: "/app/"
  },
  // entry & output will bundle, but not transpile
  // module will transpile code
  module: {
    loaders: [{
      // files to look at (reg expression)
      test: /\.js?/,
      // where to find the files
      include: SRC_DIR,
      // babel loader to transpile
      loader: "babel-loader",
      // add presets
      query: {
        presets: ["react", "es2015", "stage-2"]
      }
    }]
  }
}

// export this so webpack uses it
module.exports = config
