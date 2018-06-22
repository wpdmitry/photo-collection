const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack');


module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },

  mode: 'development',
  watch: true,
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    publicPath: '/',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
          }
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   minChunks: 2,
    // })
    // new ExtractTextPlugin('index.css')
  ],

  resolve: {
    extensions: ['.jsx', '.js', '.css', '.scss', '*']
  },
};