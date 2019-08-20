const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //...
  entry: "./client/index.js",
  devServer: {
    port: 8080,
    hot: true
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist/static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/src/index.html"
    })
  ]
};
