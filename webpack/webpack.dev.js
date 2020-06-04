// webpack.dev.js - developmental builds

// node modules
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

// config files
const base = require('./webpack.base')
const CONSTANTS = require('./webpack.const')
const pkg = require('../package.json')

// Configure the webpack-dev-server
const configureDevServer = () => {
	return {
		contentBase: CONSTANTS.PATHS.dist,
		overlay: true,
		port: CONSTANTS.devServerConfig.port(),
	};
};

// Configure Image loader
const configureImageLoader = () => {
	return {
		test: /\.(png|jpe?g|gif|svg|webp)$/i,
		// include: `${CONSTANTS.PATHS.assets}img`,
		use: [
			{
				options: {
					name: "img/[name].[ext]",
					outputPath: "img/"
				},
				loader: "url-loader"
			}			// {
			// 	loader: 'url?limit=50000',
			// 	options: {
			// 		name: 'img/[name].[ext]'
			// 	}
			// }
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
	base.baseConfig,
	{
		output: {
			filename: path.join('./js', '[name].[hash].js'),
			path: CONSTANTS.PATHS.dist,
			// publicPath: CONSTANTS.devServerConfig.public()
		},
		mode: 'development',
		devtool: 'inline-source-map',
		watch: true,
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
