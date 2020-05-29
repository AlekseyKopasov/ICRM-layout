// webpack.dev.js - developmental builds

// node modules
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// config files
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const settings = require('./webpack.settings.js');

// Configure the webpack-dev-server
const configureDevServer = () => {
	return {
		public: settings.devServerConfig.public(),
		contentBase: settings.PATHS.dist.base,
		host: settings.devServerConfig.host(),
		port: settings.devServerConfig.port(),
		https: !!parseInt(settings.devServerConfig.https()),
		// disableHostCheck: true,
		hot: true,
		overlay: true,
		// watchContentBase: true,
		// watchOptions: {
		// 	poll: !!parseInt(settings.devServerConfig.poll()),
		// 	ignored: /node_modules/,
		// },
		// headers: {
		// 	'Access-Control-Allow-Origin': '*'
		// },
	};
};

// Configure Image loader
const configureImageLoader = () => {
	return {
		test: /\.(png|jpe?g|gif|svg|webp)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'img/[name].[hash].[ext]'
				}
			}
		]
	};
};

// Configure the Postcss loader
const configureCssLoader = () => {
	return {
		test: /\.(scss|css)$/,
		use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
				options: {
					url: false,
					importLoaders: 2,
					sourceMap: true
				}
			},
			{
				loader: 'resolve-url-loader'
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true
				}
			}
		]
	};
};

// Development module exports
module.exports = merge(
	common.baseConfig,
	{
		output: {
			filename: path.join('./js', '[name].[hash].js'),
			publicPath: settings.devServerConfig.public() + '/',
		},
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: configureDevServer(),
		module: {
			rules: [
				configureCssLoader(),
				configureImageLoader(),
			],
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		],
	}
);
