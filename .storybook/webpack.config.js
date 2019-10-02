const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');


// FIX for react-docgen-typescript-loader
const compilerOptions = {
  ...require("../tsconfig.json").compilerOptions,
  // For allowSyntheticDefaultImports/esModuleInterop, a target of "es6" or
  // above is required. ts-loader will load the project tsconfig.json normally
  // with its compilation settings.
  target: "esnext",
};
// If you have the compiler option "moduleResolution", delete it. You'll get
// an error otherwise.
delete compilerOptions.moduleResolution;

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

  entry: APP_PATH,


  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            // commenting this out, improves performance significantly
            loader: 'react-docgen-typescript-loader',
            options: { compilerOptions },
          },
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              parser: 'typescript',
              uglyCommentsRegex: [/^tslint.*/, /^global.*/],
            },
          }
        ]
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

  plugins: [
    // new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin(),
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
