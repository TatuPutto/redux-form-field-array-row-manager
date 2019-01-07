const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/* eslint-disable */
module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: path.resolve(__dirname, 'src/playground/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/playground/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'src/playground'),
    inline: true,
    port: 3030,
    stats: 'errors-only'
  }
};
