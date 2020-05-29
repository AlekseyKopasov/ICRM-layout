// webpack.settings.js - webpack settings config
const fs = require('fs')
const path = require('path')
// Webpack settings exports
// noinspection WebpackConfigHighlighting



module.exports = {
	name: 'ICRM',
	PATHS: {
		src: path.join(__dirname, '/src'),
		dist: {
			base: path.join(__dirname, '/public/'),
			clean: [
				'**/*',
			]
		},
		assets: '/assets/',
},
	PAGES: {
		dir: path.resolve(__dirname, './src/pug/pages'),
		files: fs.readdirSync(path.resolve(__dirname, './src/pug/pages'))
		.filter(fileName => fileName.endsWith('.pug')),
	},
	urls: {
		live: 'https://example.com/',
		local: 'http://example.test/',
		publicPath: () => process.env.PUBLIC_PATH || '',
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
