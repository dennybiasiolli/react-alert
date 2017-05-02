var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      ]
    }, {
      test: /\.(jpg|png|gif)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=80000'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl']
  }
};