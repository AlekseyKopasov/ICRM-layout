// webpack.dev.js - developmental builds

// node modules
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

// config files
const baseConfig = require('./webpack.base')
const CONSTANTS = require('./webpack.const')
const pkg = require('../package.json')

// Configure the webpack-dev-server
const configureDevServer = () => {
	return {
		publicPath: CONSTANTS.devServerConfig.public(),
		contentBase: CONSTANTS.PATHS.dist,
		hot: true,
		overlay: true,
		watchContentBase: true,
		port: CONSTANTS.devServerConfig.port(),

		// public: baseConfig.devServerConfig.public(),
		// contentBase: baseConfig.PATHS.dist.base,
		// host: baseConfig.devServerConfig.host(),
		// port: baseConfig.devServerConfig.port(),
		// https: !!parseInt(baseConfig.devServerConfig.https()),
		// disableHostCheck: true,
		// hot: true,
		// overlay: true,
		// watchContentBase: true,
		// watchOptions: {
		// 	poll: !!parseInt(baseConfig.devServerConfig.poll()),
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
					name: 'img/[name].[ext]'
				}
			}
		]
	};
};

// Configure the Postcss loader
const configureCssLoader = () => {
	return {
		test: /\.scss$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: { sourceMap: true }
			}, {
				loader: 'postcss-loader',
				options: { sourceMap: true, config: { path: 'postcss.config.js' } }
			}, {
				loader: 'sass-loader',
				options: { sourceMap: true }
			}
		]
	}
};

// Development module exports
module.exports = merge(
	baseConfig,
	{
		output: {
			filename: path.join('./js', '[name].[hash].js'),
			publicPath: CONSTANTS.devServerConfig.public() + '/',
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
