// node modules
const fs = require('fs')
const path = require('path')

// webpack constants
const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '/public/'),
	assets: '/assets/'
};

const ENTRIES = {
	'vendor': 'js/vendor.js',
	'main': 'index.js',
}

const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs
.readdirSync(PAGES_DIR)
.filter(fileName => fileName.endsWith('.pug'));

const URLS = {
	live: 'https://example.com/',
	local: 'http://example.test/',
	publicPath: () => process.env.PUBLIC_PATH || PATHS.dist,
}

const CSS_NAME = 'styles'

const babelLoaderConfig = {
	exclude: [
		/(node_modules|bower_components)/
	],
}

const devServerConfig = {
	public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8081',
	host: () => process.env.DEVSERVER_HOST || 'localhost',
	poll: () => process.env.DEVSERVER_POLL || false,
	port: () => process.env.DEVSERVER_PORT || 8081,
	https: () => process.env.DEVSERVER_HTTPS || false,
}

// Constants module exports
// noinspection WebpackConfigHighlighting
module.exports = {
	PATHS : PATHS,
	ENTRIES: ENTRIES,
	PAGES_DIR: PAGES_DIR,
	PAGES: PAGES,
	URLS: URLS,
	CSS_NAME: CSS_NAME,
	babelLoaderConfig: babelLoaderConfig,
	devServerConfig: devServerConfig
}