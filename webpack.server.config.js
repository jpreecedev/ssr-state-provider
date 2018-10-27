const nodeExternals = require("webpack-node-externals")
const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  target: "node",
  externals: nodeExternals(),
  devtool: "source-map",
  entry: {
    main: "./src/server/index.jsx"
  },
  output: {
    filename: "./server/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
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
