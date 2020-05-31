// webpack.prod.js - production builds
// node modules
// const glob = require('glob-all');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// config files
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const settings = require('./webpack.settings.js');

// Configure Bundle Analyzer
const configureBundleAnalyzer = () => {
	return {
		analyzerMode: 'static',
		reportFilename: 'report.html',
		openAnalyzer: false,
	};
};

// Configure Clean webpack
const configureCleanWebpack = () => {
	return {
		cleanOnceBeforeBuildPatterns: settings.PATHS.clean,
		verbose: true,
		dry: false
	};
};

// Configure Html webpack
const configureHtml = (page) => {
	return (
		new HtmlWebpackPlugin({
			template: `${settings.PAGES.base}/${page}`,
			filename: `./${page.replace(/\.pug/,'.html')}`,
			inject: true,
			// chunksSortMode: 'none'
		})
	);
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
			},
			{
				loader: 'img-loader',
				options: {
					plugins: [
						require('imagemin-gifsicle')({
							interlaced: true,
						}),
						require('imagemin-mozjpeg')({
							progressive: true,
							arithmetic: false,
						}),
						require('imagemin-optipng')({
							optimizationLevel: 5,
						}),
						require('imagemin-svgo')({
							plugins: [
								{convertPathData: false},
							]
						}),
					]
				}
			}
		]
	};
};

// Configure optimization
const configureOptimization = () => {
	return {
		splitChunks: {
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				// common: false,
				styles: {
					name: settings.vars.cssName,
					test: /\.(css|scss)$/,
					chunks: 'all',
					enforce: true,
				}
			}
		},
		minimizer: [
			new TerserPlugin(
				configureTerser()
			),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						// inline: false,
						// annotation: false,
					},
					// safe: true,
					discardComments: false
				},
			})
		]
	};
};

// Configure Postcss loader
const configureScssLoader = () => {
	return {
		test: /\.scss$/,
		use: [
			// 'style-loader',
			MiniCssExtractPlugin.loader,
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
}
// Configure css loader
// const configureCssLoader = () => {
// 	return {
// 		test: /\.css$/,
// 		use: [
// 			// 'style-loader',
// 			MiniCssExtractPlugin.loader,
// 			{
// 				loader: 'css-loader',
// 				options: { sourceMap: true }
// 			}, {
// 				loader: 'postcss-loader',
// 				options: {
// 					sourceMap: true,
// 					config: {
// 						path: 'postcss.config.js'
// 					}
// 				}
// 			}
// 		]
// 	}
// }

// Configure terser
const configureTerser = () => {
	return {
		cache: true,
		parallel: true,
		sourceMap: true
	};
};

// Configure pug
const configurePugLoader = () => {
	return {
		test: /\.pug$/,
		loader: 'pug-loader',
		options: {
			pretty: true
		}
	};
};

// Production module exports
module.exports = [
	merge(
		common.baseConfig,
		{
			output: {
				filename: path.join('./js', '[name].js'),
				// path: settings.PATHS.dist,
				publicPath: ''
			},
			mode: 'production',
			devtool: 'source-map',
			optimization: configureOptimization(),
			module: {
				rules: [
					configureScssLoader(),
					// configureCssLoader(),
					configureImageLoader(),
					configurePugLoader(),
				],
			},
			plugins: [
				new CleanWebpackPlugin(
					configureCleanWebpack()
				),
				new MiniCssExtractPlugin({
					filename: 'css/[name].css',
				}),
				...settings.PAGES.files.map(
					page => configureHtml(page)
				),
				new ImageminWebpWebpackPlugin(),
				new BundleAnalyzerPlugin(
					configureBundleAnalyzer(),
				),
			]
		}
	),
];

