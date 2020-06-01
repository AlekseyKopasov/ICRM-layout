// // webpack.common.js - common webpack config
// // node modules
// const path = require('path');
// const merge = require('webpack-merge');
//
// // webpack plugins
// const CopyWebpackPlugin = require('copy-webpack-plugin');
//
// // config files
// const pkg = require('./package.json');
// const settings = require('./webpack.settings.js');
//
// // Configure Babel loader
// const configureBabelLoader = (browserList) => {
// 	return {
// 		test: /\.js$/,
// 		exclude: settings.babelLoaderConfig.exclude,
// 		use: {
// 			loader: 'babel-loader',
// 			options: {
// 				cacheDirectory: true,
// 				sourceType: 'unambiguous',
// 				presets: [
// 					[
// 						'@babel/preset-env', {
// 						modules: false,
// 						useBuiltIns: 'usage',
// 						targets: {
// 							browsers: browserList,
// 						},
// 					}
// 					],
// 				],
// 				plugins: [
// 					'@babel/plugin-syntax-dynamic-import',
// 					'@babel/plugin-transform-runtime',
// 				],
// 			},
// 		},
// 	};
// };
//
// // Configure Entries
// const configureEntries = () => {
// 	let entries = {};
// 	for (const [key, value] of Object.entries(settings.entries)) {
// 		entries[key] = path.resolve(__dirname, `${settings.PATHS.src}` + value)
// 	}
//
// 	return entries;
// };
//
// // Configure Font loader
// const configureFontLoader = () => {
// 	return {
// 		test: /\.(ttf|eot|woff2?)$/i,
// 		use: [
// 			{
// 				loader: 'file-loader',
// 				options: {
// 					name: 'fonts/[name].[ext]'
// 				}
// 			}
// 		]
// 	};
// };
//
// // The base webpack config
// const baseConfig = {
// 	name: pkg.name,
// 	entry: configureEntries(),
// 	output: {
// 		path: path.resolve(__dirname, `${settings.PATHS.dist}`),
// 		// publicPath: settings.urls.publicPath(),
// 		filename: 'js/[name].js'
// 	},
// 	module: {
// 		rules: [
// 			configureFontLoader(),
// 			configureBabelLoader(Object.values(pkg.browserslist)),
// 		],
// 	},
// 	plugins: [
// 		new CopyWebpackPlugin(
// 			[
// 				{ from: `${settings.PATHS.assets}img`, to: `img`,	ignore: ['**/sprite/**'] },
// 				{ from: `${settings.PATHS.assets}fonts`, to: `${settings.PATHS.dist}fonts` },
// 				{ from: `${settings.PATHS.src}static`, to: '' }
// 			],
// 		)
// 	]
// };
//
// // Common module exports
// // noinspection WebpackConfigHighlighting
// module.exports = {
// 	'baseConfig': merge.strategy({
// 		module: 'prepend',
// 		plugins: 'prepend',
// 	})( baseConfig )
// };
