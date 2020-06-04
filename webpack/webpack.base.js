// webpack.base.js - webpack base config

// node modules
const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')

// webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// config files
const pkg = require('../package.json')

// webpack constants
const CONSTANTS = require('./webpack.const')

const PAGES_DIR = `${CONSTANTS.PATHS.src}/pug/pages`;
const PAGES = fs
.readdirSync(PAGES_DIR)
.filter(fileName => fileName.endsWith('.pug'));

// Configure Babel loader
const configureBabelLoader = (browserList) => {
	return {
		test: /\.js$/,
		exclude: CONSTANTS.babelLoaderConfig.exclude,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				sourceType: 'unambiguous',
				presets: [
					[
						'@babel/preset-env', {
						modules: false,
						useBuiltIns: 'usage',
						targets: {
							browsers: browserList,
						},
					}
					],
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					'@babel/plugin-transform-runtime',
				],
			},
		},
	};
};

// Configure Entries
const configureEntries = () => {
	let entries = {};
	for (const [key, value] of Object.entries(CONSTANTS.ENTRIES)) {
		entries[key] = path.resolve(__dirname, `${CONSTANTS.PATHS.src}` + value)
	}

	return entries;
};

// Configure Font loader
const configureFontLoader = () => {
	return {
		test: /\.(ttf|eot|woff2?)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			}
		]
	};
};

const configurePugLoader = () => {
	return {
		test: /\.pug$/,
		use: [
			{ loader: 'pug-loader' }
		]
	}
}

// Configure Html webpack
const configureHtml = (page) => {
	return (
		new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `${page.replace(/\.pug/,'.html')}`,
			inject: true,
		})
	);
};

const baseConfig = {
	name: pkg.name,
	entry: configureEntries(),
	output: {
		filename: 'js/[name].js',
		path: CONSTANTS.PATHS.dist
	},
	module: {
		rules: [
			configureFontLoader(),
			configureBabelLoader(Object.values(pkg.browserslist)),
			configurePugLoader(),
		],
	},
	plugins: [
		new CopyWebpackPlugin(
			[
				{ from: `${CONSTANTS.PATHS.assets}img`, to: `img`, ignore: ['**/sprite/**'] },
				{ from: `${CONSTANTS.PATHS.assets}fonts`, to: `${CONSTANTS.PATHS.dist}fonts` },
				{ from: `${CONSTANTS.PATHS.src}static`, to: '' }
			],
		),
		...PAGES.map(
			page => configureHtml(page)
		),
	]
}

// Common module exports
// noinspection WebpackConfigHighlighting
module.exports = {
	'baseConfig': merge.strategy({
		module: 'prepend',
		plugins: 'prepend',
	})( baseConfig )
};