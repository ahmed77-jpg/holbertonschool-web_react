const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
	hot: true,
	static: path.resolve(__dirname, 'dist'),
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: './dist/index.html',
	  filename: 'index.js',
      title: 'Holberton Dashboard',
    }),
  ],
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env', '@babel/react']
		}
	  },
	  {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	  },
	  {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
  	  },
	],
  },
};
