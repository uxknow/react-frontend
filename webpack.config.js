const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.main.js",
    clean: true,
    publicPath: "/",
    assetModuleFilename: "assets/images/sidebar/[name].[ext]",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      home: path.resolve(__dirname, "./src/components/home"),
      login: path.resolve(__dirname, "./src/components/auth/login"),
      register: path.resolve(__dirname, "./src/components/auth/register"),
      router: path.resolve(__dirname, "./src/utils/router"),
    },
  },
  devServer: {
    port: "3000",
    static: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    open: true,
    //host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/template.html"),
      filename: "index.html",
    }),
  ],
};
