// webpack.prod.js - production builds
// node modules
const glob = require('glob-all');
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
	};
};

// Configure Clean webpack
const configureCleanWebpack = () => {
	return {
		cleanOnceBeforeBuildPatterns: settings.paths.dist.clean,
		verbose: true,
		dry: false
	};
};

// Configure Html webpack
const configureHtml = (page) => {
	return (
		new HtmlWebpackPlugin({
			templateContent: '',
			template: `${settings.paths.pages.baseDir}/${page}`,
			filename: `./${page.replace(/\.pug/,'.html')}`,
			inject: false,
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
					name: 'img/[name].[hash].[ext]'
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
				default: false,
				common: false,
				styles: {
					name: settings.vars.cssName,
					test: /\.(pcss|css|vue)$/,
					chunks: 'all',
					enforce: true
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
						inline: false,
						annotation: true,
					},
					safe: true,
					discardComments: true
				},
			})
		]
	};
};

// Configure Postcss loader
const configureCssLoader = () => {
	return {
		test: /\.(pcss|css)$/,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
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

// Configure terser
const configureTerser = () => {
	return {
		cache: true,
		parallel: true,
		sourceMap: true
	};
};

// Configure pug
const configurePug = () => {
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
				filename: path.join('./js', '[name].[chunkhash].js'),
			},
			mode: 'production',
			devtool: 'source-map',
			optimization: configureOptimization(),
			module: {
				rules: [
					configureCssLoader(),
					configureImageLoader(),
					configurePug(),
				],
			},
			plugins: [
				new CleanWebpackPlugin(
					configureCleanWebpack()
				),
				new MiniCssExtractPlugin({
					path: path.resolve(__dirname, settings.paths.dist.base),
					filename: path.join('./css', '[name].[chunkhash].css'),
				}),
				...settings.paths.pages.pugFiles.map(
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

