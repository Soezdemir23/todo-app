const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: ['url-loader']
      },{
      test: /\.(svg)$/i,
      type: 'asset/inline'
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Todo",
      template: "src/templates/index.html"
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }, optimization: {
    runtimeChunk : 'single'
  }
};