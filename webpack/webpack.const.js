// node modules
const fs = require('fs')
const path = require('path')

// webpack constants
const PATHS = {
	src: path.join(__dirname, '../src/'),
	dist: path.join(__dirname, '../build/'),
	assets: '/assets/',
	clean: '[**/*]'
};

const ENTRIES = {
	'vendor': 'js/vendor.js',
	'main': 'index.js',
}

const CSS_NAME = 'styles'

const babelLoaderConfig = {
	exclude: [
		/(node_modules|bower_components)/
	],
}

const devServerConfig = {
	public: () => process.env.DEVSERVER_PUBLIC || '/',
	port: () => process.env.DEVSERVER_PORT || 8081,
}

// Constants module exports
// noinspection WebpackConfigHighlighting
module.exports = {
	PATHS,
	ENTRIES,
	// PAGES_DIR,
	// PAGES,
	// URLS,
	CSS_NAME,
	babelLoaderConfig,
	devServerConfig
}