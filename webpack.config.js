const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    mihail: './src/js/mihail.js',
    aslyuk: './src/js/aslyuk.js',
    dashuk: './src/js/dashuk.js',
    "korsh-sablin": './src/js/korsh-sablin.js',
    lobach: './src/js/lobach.js',
    orlov: './src/js/orlov.js',
    turov: './src/js/turov.js',
    searchLogic: './src/js/search.js',
    searchPage: './src/js/searchPage.js',
    authorsPage: './src/js/authorsPage.js'
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
      template: './src/pages/authors/Aslyuk.html',
      inject: false,
      filename: './html/authors/Aslyuk.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Dashuk.html',
      inject: false,
      filename: './html/authors/Dashuk.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Korsh-Sablin.html',
      inject: false,
      filename: './html/authors/Korsh-Sablin.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Lobach.html',
      inject: false,
      filename: './html/authors/Lobach.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Orlov.html',
      inject: false,
      filename: './html/authors/Orlov.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/Turov.html',
      inject: false,
      filename: './html/authors/Turov.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search.html',
      inject: false,
      filename: './html/search.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/authors/authors.html',
      inject: false,
      filename: './html/authors/authors.html'
    })
  ]
};
