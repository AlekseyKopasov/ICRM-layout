const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const PATHS = {
	src: path.join(__dirname, '/src'),
	dist: path.join(__dirname, '/public/'),
	assets: '/assets/'
};

const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter(fileName => fileName.endsWith('.pug'));

const optimization = () => {
	const config = {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	}

	if (isProd) {
		config.minimizer = [
			// new OptimizeCssAssetWebpackPlugin(),
			// new TerserWebpackPlugin()
			// new UglifyJsPlugin({
			// 	sourceMap: true,
			// 	uglifyOptions: {
			// 		warnings: false,
			// 		parse: {},
			// 		compress: {},
			// 		mangle: false,
			// 		output: {
			// 			comments: false,
			// 		},
			// 		toplevel: true,
			// 		nameCache: null,
			// 		keep_names: false,
			// 	},
			// })
		]
	}

	return config
}

const plugins = () => {
	const base = [
		// new MiniCssExtractPlugin({
		// 	filename: `${PATHS.assets}css/[name].css`
		// }),
		// new CopyWebpackPlugin( [
		// 	// { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
		// 	{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
		// 	{ from: `${PATHS.src}/static`, to: '' }
		// 	],
		// ),
		new SpriteLoaderPlugin({
			// plainSprite: true
		}),

		// ...PAGES.map(
		// 	page =>
		// 		new HtmlWebpackPlugin({
		// 			template: `${PAGES_DIR}/${page}`,
		// 			filename: `./${page.replace(/\.pug/,'.html')}`
		// 		})
		// )
	]

	if (isDev) {
		// base.push(
		// 	new webpack.SourceMapDevToolPlugin({
		// 		filename: '[file].map'
		// 	}))
	}

	return base
}
const cssLoaders = extra => {
	const loaders = [
			'style-loader',
			// MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: { sourceMap: true }
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					config: { path: `./postcss.config.js` }
				}
			}
		]

		if (extra) {
			loaders.push(extra)
		}

		return loaders
}

module.exports = {
	mode: process.env.NODE_ENV || 'production',
	devtool: isDev ? 'source-map' : '',
	// target: isDev ? 'node' : '',

	entry: {
		// libs: `${PATHS.src}/js/vendor.js`,
		app: PATHS.src
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
		publicPath: '/'
	},

	devServer: {
		// contentBase: PATHS.dist,
		port: 8081,
		overlay: {
			warnings: true,
			errors: true
		}
	},

	optimization: optimization(),

	module: {
		rules: [
			// SVG sprite
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							publicPath: `${PATHS.dist}sprite/`
						}
					},
					'svgo-loader'
				]
			},
			{
				test: /sprite-icons\/.*\.svg$/,
				include: `${PATHS.assets}sprite-icons/`,
				loader: 'svg-sprite-loader',
				options: {
					extract: true,
					spriteFilename: `${PATHS.assets}img/sprite.svg`, // this is the destination of your sprite sheet
					runtimeCompat: true
				}
			},
			// {
			// 	// Pug
			// 	test: /\.pug$/,
			// 	loader: 'pug-loader',
			// 	options: {
			// 		pretty: true
			// 	}
			// },
			{
				// JavaScript
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			// {
			// 	// Fonts
			// 	test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '[name].[ext]'
			// 	}
			// },
			// {
			// 	// images / icons
			// 	// loader: 'url-loader',
			// 	test: /\.(png|jpe?g|gif|ico|svg|webp)$/,
			// 	loader: 'url-loader',
			// 	include: `${PATHS.assets}img/`,
			// 	options: {
			// 		name: '[name].[ext]'
			// 	}
			// },
			// {
			// 	// scss
			// 	test: /\.s[ac]ss$/,
			// 	use: cssLoaders('sass-loader')
			// },
			// {
			// 	// css
			// 	test: /\.css$/,
			// 	use: cssLoaders()
			// }
		]
	},

	resolve: {
		alias: {
			'~': PATHS.src
		}
	},

	plugins: plugins()
}