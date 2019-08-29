const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");


const path = require('path');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  // custom
  optimization: {
    minimizer: [new TerserJSPlugin({
      parallel: true
    }), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: function (chunk) {
            return chunk.name !== 'antd-icons';
          },
        }
      }
    }
  },
  // endcustom

  entry: SRC_PATH,


  output: {
    filename: '[name].[contenthash].js',
    path: DIST_PATH,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'less-loader', // compiles Less to CSS
            options: { javascriptEnabled: true }
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        options: {
          chunkName: 'antd-icons'
        },
        include: [
          require.resolve('@ant-design/icons/lib/dist')
        ]
      }
    ],

  },

  devServer: {
    publicPath: '/',
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(SRC_PATH, 'index.html') }),
    new FixStyleOnlyEntriesPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new MomentLocalesPlugin({
      localesToKeep: []
    }),
    // ...(process.env.NODE_ENV === 'development' ?
    //     [] : [
    //
    //     ]
    // )
  ]
};
