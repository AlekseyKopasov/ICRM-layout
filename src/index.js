// JS
import './js/'

// SCSS
import './assets/sass/style.scss'

// SVG sprite
function requireAll(r) {
	r.keys().forEach(r);
	console.log(r.keys());
}

requireAll(require.context('./assets/img/svg-sprite/', true, /\.svg$/));

