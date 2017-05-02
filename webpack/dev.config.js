const path = require('path');
const config = require('./base.config');

config.entry = {
  app: [
    path.resolve(__dirname, '../example/index'),
  ]
};

config.output = {
  path: path.resolve(__dirname, '../example'),
  filename: '[name].js',
  publicPath: '/',
  devtoolModuleFilenameTemplate: '../[resource-path]',
  libraryTarget: 'umd',
  library: 'react-alert'
};

config.devtool = 'source-map';

config.devServer = {
  contentBase: './example',
  inline: true,
};

module.exports = config;
