const nodeExternals = require("webpack-node-externals")

module.exports = {
  mode: "development",
  target: "node",
  externals: nodeExternals(),
  devtool: "source-map",
  entry: {
    main: "./src/server/index.js"
  },
  output: {
    filename: "./server/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
}
