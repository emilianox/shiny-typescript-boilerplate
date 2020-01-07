const merge = require('webpack-merge');
const fnCommon = require('./webpack.config.js');


const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = fnCommon(null, {})

const webpackConfig = merge.smart(common, {
  devtool: '#@source-map',
  plugins: [
    new BundleAnalyzerPlugin(),
  ]

});

webpackConfig.optimization.minimizer =
  Object.values(merge(common.optimization.minimizer,
    [
      new TerserJSPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ]
  )).map((val) => val)
// console.log('webpack config-----', webpackConfig);


module.exports = webpackConfig
