/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path")

module.exports = {
  mode: "development",
  entry: {
    main: resolve("./src/client/index.js")
  },
  output: {
    filename: "./client/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
}
