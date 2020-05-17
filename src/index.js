// JS
// import './js/'

// SCSS
// import './assets/sass/style.scss'

// SVG imports for the sprite
// import './assets/sprite-icons/info.svg'
// import './assets/sprite-icons/notifications.svg'
// import './assets/sprite-icons/person.svg'

// import sprite from 'svg-sprite-loader/plugin'
// console.log(sprite)
// window.addEventListener('DOMContentLoaded', () => {
// 	sprite.render(document.body)
// })
// function requireAll(r) {
// 	r.keys().forEach(r);
// }
//
// requireAll(require.context('./assets/sprite-icons/', true, /\.svg$/));


import symbolData from './assets/sprite-icons/info.svg';
// => {id string, width: string, height: string, viewBox: string, url: string}

console.log('symbolData', symbolData);

// window.addEventListener('DOMContentLoaded', () => {
// 	const image = `<img width="${symbolData.width}" height="${symbolData.height}" src="${symbolData.url}">`;
// 	const usage = `<svg viewBox="${symbolData.viewBox}"><use xlink:href="${symbolData.url}"></use></svg>`;
//
// 	document.body.innerHTML = `${image} ${usage}`;
// });


