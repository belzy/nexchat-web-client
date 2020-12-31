require('dotenv').config();
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpack    = require('webpack');
const path       = require('path');

// Environment options
const mode = process.env.NODE_ENV !== 'development' ? 'production' : 'development';
const watch = mode !== 'development' ? false : true;
const minimizer = mode === 'production' ? ['...', new HtmlMinimizerPlugin()] : ['...'];

module.exports = {
  mode, 
  watch,
  devtool: 'eval-source-map', 
  optimization: {
    minimize: true,
    minimizer,
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, 
    {
      test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          // options: {
          //   name: '[name].[ext]',
          //   outputPath: 'dist/media'
          // }
        }
      ]
    }, 
    {
      test: /\.svg$/i, 
      use: [{
        loader: 'svg-url-loader'
      }],
    }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist')
        },
      ],
    }),
  ],
}