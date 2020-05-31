// webpack.settings.js - webpack settings config
const fs = require('fs')
const path = require('path')
// Webpack settings exports
// noinspection WebpackConfigHighlighting

module.exports = {
	name: 'ICRM',
	PATHS: {
		src: path.join(__dirname, '/src/'),
		dist: path.join(__dirname, '/build/'),
		clean: ['**/*'],
		assets: '/assets/',
},
	PAGES: {
		base: path.resolve(__dirname, './src/pug/pages'),
		files: fs.readdirSync(path.resolve(__dirname, './src/pug/pages'))
		.filter(fileName => fileName.endsWith('.pug')),
	},
	urls: {
		live: 'https://example.com/',
		local: 'http://example.test/',
		publicPath: () => process.env.PUBLIC_PATH || '',
	},
	vars: {
		cssName: 'main'
	},
	entries: {
		'libs': 'js/vendor.js',
		'main': 'index.js',
	},
	babelLoaderConfig: {
		exclude: [
			/(node_modules|bower_components)/
		],
	},
	devServerConfig: {
		public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8081',
		host: () => process.env.DEVSERVER_HOST || 'localhost',
		poll: () => process.env.DEVSERVER_POLL || false,
		port: () => process.env.DEVSERVER_PORT || 8081,
		https: () => process.env.DEVSERVER_HTTPS || false,
	},
}
