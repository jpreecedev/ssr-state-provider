const { resolve } = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: resolve("./src/client/index.jsx")
  },
  output: {
    filename: "./client/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      }
    ]
  }
})
