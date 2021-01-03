const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: isProd ? './src/index.ts' : './src/dev.ts',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    port: 9009,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'public/index.html',
    }),
  ],
  output: {
    library: 'VanillaCalendar',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
  },
};
