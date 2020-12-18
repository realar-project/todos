var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
};
