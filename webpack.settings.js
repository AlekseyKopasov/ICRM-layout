// webpack.settings.js - webpack settings config
const fs = require('fs')
const path = require('path')
// Webpack settings exports
// noinspection WebpackConfigHighlighting


module.exports = {
	name: 'ICRM',

	paths: {
		src: {
			base: (path.resolve(__dirname, './src')),
			css: (path.resolve(__dirname, './src/css')),
			js: (path.resolve(__dirname, './src/js')),
		},
		dist: {
			base: '/public/',
			clean: [
				'**/*',
			]
		},
		pages: {
			baseDir: (path.resolve(__dirname, './src/pug/pages')),
			pugFiles: fs.readdirSync(path.resolve(__dirname, './src/pug/pages'))
			.filter(fileName => fileName.endsWith('.pug')),
		},
		assets: '/assets/'
	},
	urls: {
		live: 'https://example.com/',
		local: 'http://example.test/',
		publicPath: () => process.env.PUBLIC_PATH || '/src',
	},
	vars: {
		cssName: 'styles'
	},
	entries: {
		'libs': '/vendor.js',
		'main': '/',
	},
	babelLoaderConfig: {
		exclude: [
			/(node_modules|bower_components)/
		],
	},
	devServerConfig: {
		public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8080',
		host: () => process.env.DEVSERVER_HOST || 'localhost',
		poll: () => process.env.DEVSERVER_POLL || false,
		port: () => process.env.DEVSERVER_PORT || 8081,
		https: () => process.env.DEVSERVER_HTTPS || false,
	},
	manifestConfig: {
		basePath: ''
	},
}