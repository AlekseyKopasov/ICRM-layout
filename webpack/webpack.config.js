const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
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

const configureOptimizationSripts = () => {
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
			new OptimizeCssAssetWebpackPlugin(),
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

const configureOptimizationImages = () => {
	const option =
		{
			loader: 'image-webpack-loader',
			options: {
				mozjpeg: {
					progressive: true,
					quality: 80
				},
				// optipng.enabled: false will disable optipng
				optipng: {
					enabled: false,
				},
				pngquant: {
					quality: [0.65, 0.90],
					speed: 4
				},
				gifsicle: {
					interlaced: false,
				},
				// the webp option will enable WEBP
				webp: {
					quality: 75
				},
				// svg option
				svgo: {
					plugins: [
						{
							removeViewBox: false
						},
						{
							removeEmptyAttrs: false
						}
					]
				}
			}
		}

	return option
}

const configurePlugins = () => {
	const base = [
		new CleanWebpackPlugin({
			verbose: true,
			dry: false,
			cleanOnceBeforeBuildPatterns: [`${PATHS.dist}`]
		}),
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`
		}),
		new CopyWebpackPlugin( [
			{ from: `${PATHS.assets}img`, to: `${PATHS.dist}img`,	ignore: ['**/sprite/**'] },
			{ from: `${PATHS.assets}fonts`, to: `${PATHS.dist}fonts` },
			{ from: `${PATHS.src}/static`, to: '' }
			],
		),
		new SpriteLoaderPlugin(),

		...PAGES.map(
			page =>
				new HtmlWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page.replace(/\.pug/,'.html')}`
				})
		)
	]

	if (isDev) {
		base.push(
			new webpack.SourceMapDevToolPlugin({
				filename: '[file].map[query]'
			}))
	}

	return base
}

const configureCssLoaders = extra => {
	const loaders = [
				'style-loader',
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

	entry: {
		libs: `${PATHS.src}/js/vendor.js`,
		app: PATHS.src
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
		publicPath: '/'
	},

	devServer: {
		contentBase: PATHS.dist,
		// hot: true,
		port: 8081,
		overlay: {
			warnings: true,
			errors: true
		}
	},

	optimization: configureOptimizationSripts(),

	module: {
		rules: [
			{
				// images / icons
				test: /\.(png|jpe?g|gif|svg|webp)$/,
				include: `${PATHS.assets}img`,
				exclude: [`${PATHS.assets}img/sprite`, `${PATHS.assets}fonts`],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: `${PATHS.assets}img/[name].[ext]`,
							limit: 10000,
							// outputPath: `img`
						}
					},
					// optimizationImages()
				]
			},
			// SVG sprite
			{
				test: /\.svg$/,
				include: [`${PATHS.assets}img/sprite`],
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							esModule: false,
							// publicPath: `${PATHS.dist}img/`,
							outputPath: `${PATHS.assets}img`
						}
					},
					// 'svgo-loader'
				]
			},
			{
				// Pug
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				// JavaScript
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				// Fonts
				test: /\.(woff(2)?|ttf|eot)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				// scss
				test: /\.s[ac]ss$/,
				use: configureCssLoaders('sass-loader')
			},
			{
				// css
				test: /\.css$/,
				use: configureCssLoaders()
			}
		]
	},

	resolve: {
		alias: {
			'~': PATHS.src
		}
	},

	plugins: configurePlugins()
}