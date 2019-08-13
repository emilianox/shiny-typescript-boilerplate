const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const merge = require('webpack-merge');
const common = require('../webpack.config.js');


const webpackConfig = merge.smart(common, {
    devtool: '#@source-map',
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  
  });