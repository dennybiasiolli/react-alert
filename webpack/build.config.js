const path = require('path');
const config = require('./base.config');
const webpackUMDExternal = require('webpack-umd-external');

config.entry = {
  alert: [
    path.resolve(__dirname, '../index.js'),
  ]
};

config.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: '[name].js',
  publicPath: '/dist',
  devtoolModuleFilenameTemplate: '../[resource-path]',
  libraryTarget: 'umd',
  library: 'react-alert'
};

config.externals = webpackUMDExternal({
  'react': 'react',
  'react-dom': 'react-dom',
  'react-addons-css-transition-group': 'react-addons-css-transition-group'
});

module.exports = config;
