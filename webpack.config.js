const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    mihail: './src/js/mihail.js',
    searchLogic: './src/js/search.js',
    searchPage: './src/js/searchPage.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: false,
        filename: './html/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Mihail.html',
      inject: false,
      filename: './html/authors/Mihail.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search.html',
      inject: false,
      filename: './html/search.html'
    })
  ]
};
