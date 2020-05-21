/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([132,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(127);
            var content = __webpack_require__(128);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(129);
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(130);
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(131);
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
// Module
exports.push([module.i, "@font-face{font-family:PT Sans;font-weight:700;font-style:normal;font-display:swap;src:url(/assets/fonts/PTSans-bold.woff2) format(\"woff2\"),url(/assets/fonts/PTSans-bold.woff) format(\"woff\")}@font-face{font-family:PT Sans;font-weight:400;font-style:normal;font-display:swap;src:url(/assets/fonts/PTSans-regular.woff2) format(\"woff2\"),url(/assets/fonts/PTSans-regular.woff) format(\"woff\")}@font-face{font-family:PT Sans Italic;font-weight:400;font-style:normal;font-display:swap;src:url(/assets/fonts/PTSans-italic.woff2) format(\"woff2\"),url(/assets/fonts/PTSans-italic.woff) format(\"woff\")}@font-face{font-family:Tenor Sans;font-weight:400;font-style:normal;font-display:swap;src:url(/assets/fonts/Tenor_Sans_regular.woff2) format(\"woff2\"),url(/assets/fonts/Tenor_Sans_regular.woff) format(\"woff\")}:root{--black:#010101;--white:#fff;--gray-dark:#333;--blue:#82b1ff;--indigo:#1d35ff;--green:#4caf50;--gray:#9e9e9e;--danger:#e53935;--dark:#343a40;--yellow:#ffd656;--purple:#9c27b0;--light:#f8f9fa}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}html{text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-moz-tap-highlight-color:rgba(0,0,0,0);-ms-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:20px}body,html{scroll-behavior:smooth;line-height:24px}body{margin:0;padding:0;overflow-x:hidden;width:100%;min-width:320px;font-family:PT Sans,Arial,sans-serif;font-weight:400;color:var(--black);background-color:var(--white);font-size:1rem}a{text-decoration:none;color:inherit}a:not([href]){pointer-events:none;cursor:default}main{display:block}input,select,textarea{-webkit-box-sizing:border-box;box-sizing:border-box}button,input,select,textarea{font:inherit}svg{pointer-events:none}fieldset{padding:0;border:none}img{display:block;height:auto;max-height:100%}.visually-hidden{position:absolute;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;border:0}.hidden{display:none!important}.empty-layout{height:100vh;width:100vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(76,175,80,.65)}@media only screen and (max-width:992px){.main-layout nav .brand-logo{left:0;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}@media only screen and (max-width:992px){.main-layout .hide-on-med-and-down{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media only screen and (min-width:601px){.main-layout .nav-wrapper i{height:0;line-height:0}}.main-layout nav ul a:hover,.main-layout nav ul li.active{background-color:rgba(0,0,0,0)}.title{margin:0;padding:0;font-family:Tenor Sans,Arial,sans-serif;font-size:20px;line-height:24px;color:var(--gray-dark);font-weight:700}.title-large{font-size:50px;line-height:1.2}.title-middle{font-size:34px;line-height:1.2}.title-small{font-size:24px;line-height:1.2}.btn-green{line-height:1.2}.btn-green,.btn-green:hover{background-color:var(--green)}.btn-green:hover{opacity:.8}.btn-green:focus{background-color:#357a38}input,input[type=email]:not(.browser-default),input[type=password]:not(.browser-default){height:auto;margin:0;padding:20px 0 10px;font-size:14px;line-height:1.2;-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86)}input:hover,input[type=email]:not(.browser-default):hover,input[type=password]:not(.browser-default):hover{opacity:.5}input:hover+.material-icons,input[type=email]:not(.browser-default):hover+.material-icons,input[type=password]:not(.browser-default):hover+.material-icons{-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86);opacity:.5}input:focus,input[type=email]:not(.browser-default):focus,input[type=password]:not(.browser-default):focus{opacity:1;border-bottom:1px solid var(--blue);-webkit-box-shadow:0 1px 0 0 var(--blue);box-shadow:0 1px 0 0 var(--blue)}input:focus+.material-icons,input:focus+label,input[type=email]:not(.browser-default):focus+.material-icons,input[type=email]:not(.browser-default):focus+label,input[type=password]:not(.browser-default):focus+.material-icons,input[type=password]:not(.browser-default):focus+label{-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86);opacity:1;color:var(--blue)}input.invalid[type=email]:not(.browser-default)+.material-icons,input.invalid[type=email]:not(.browser-default):focus+.material-icons,input.invalid[type=password]:not(.browser-default) input.invalid[type=password]:not(.browser-default):focus+.material-icons{color:var(--danger)}input.valid[type=email]:not(.browser-default)+.material-icons,input.valid[type=password]:not(.browser-default)+.material-icons{color:var(--green)}label{font-size:16px}.input-field>label:not(.label-icon).active{-webkit-transform:translateY(0) scale(.8);-ms-transform:translateY(0) scale(.8);transform:translateY(0) scale(.8)}.material-icons{position:absolute;top:15px;right:5px;color:var(--gray)}small{display:none;position:absolute;bottom:-25px;left:0;color:var(--danger)}small.active{display:block}.ui-kit{width:100%;padding:30px;background-color:var(--white)}.ui-kit .titles{max-width:50%;margin:0 auto}.ui-kit .title-ui{margin-bottom:15px;margin-left:-120px;-webkit-text-decoration:underline var(--blue);text-decoration:underline var(--blue)}.ui-kit ul{margin-bottom:45px}.ui-kit .buttons,.ui-kit form{max-width:50%;margin:0 auto}.ui-kit .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.ui-kit .buttons .title-ui{width:100%}.ui-kit .buttons li{margin-right:25px}.ui-kit .buttons li:last-child{margin-right:0}.page{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:100vh;min-width:320px;background-color:var(--light);overflow-x:hidden}.page__content{position:relative;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.page__footer{-ms-flex-negative:0;flex-shrink:0}.contaiter{padding:50px 25px}.index-page{padding:30px}.index-page ul:not(.browser-default)>li{margin-left:20px;list-style:persian}.index-page a{color:var(--black);display:block;margin-bottom:15px;padding-left:10px;-webkit-transition:color .3s cubic-bezier(.79,.14,.15,.86);-o-transition:color .3s cubic-bezier(.79,.14,.15,.86);transition:color .3s cubic-bezier(.79,.14,.15,.86)}.index-page a:hover{color:var(--blue)}.login-page{position:relative}.login-page h1{margin-bottom:10px;text-align:center}.login-page form{padding:35px 30px;background-color:var(--white);-webkit-box-shadow:0 0 20px 3px rgba(var(--black),.3);box-shadow:0 0 20px 3px rgba(var(--black),.3)}.login-page .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.login-page .input-field{position:relative;min-width:400px;margin-bottom:5px;margin-top:15px}.login-page .btn{height:auto;margin-top:20px;padding:15px}.login-page .btn-green{width:50%;padding:10px 20px}.login-page .form-group__login{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.login-page .form-group__has-account{margin-top:35px;-ms-flex-wrap:wrap;flex-wrap:wrap}.login-page .form-group__has-account p{margin:0 0 5px;font-size:16px}.login-page .form-group__has-account .btn{width:100%;margin:0;padding:0}a{color:var(--gray);-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86)}a:focus,a:hover{color:var(--indigo);opacity:.7;background-color:var(--light)}a:active{opacity:1;background-color:rgba(51,51,51,.1)}.login-page--register .btn-green{width:100%;margin-bottom:25px}.login-page--register .form-group__has-account{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-top:10px}.login-page--register .form-group__has-account p{margin:0 25px 0 0;padding:0;white-space:nowrap;font-size:20px}.login-page--register .form-group__has-account .btn{width:100%;padding:10px 25px;line-height:1.2}.login-page--pass-recovery .btn-green{padding:15px 20px;margin-top:25px}.header{position:relative;width:100%;max-height:64px;z-index:1;-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.5);box-shadow:0 0 4px 0 rgba(0,0,0,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.header__logo-wrap{margin-right:auto;width:20%;background-color:#e9ebff;-webkit-box-shadow:4px 0 4px -4px rgba(1,1,1,.2);box-shadow:4px 0 4px -4px rgba(1,1,1,.2)}.header__logo,.header__logo-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header__logo{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.header__logo-text{margin-bottom:-3px;font-family:Tenor Sans,Arial,sans-serif;font-size:24px;text-decoration:underline}.header__logo-descr{font-size:14px}.header__nav{margin-right:10px}.header .dropdown-trigger{padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.header .dropdown-trigger svg{color:var(--gray);-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86)}.header .dropdown-trigger:focus svg,.header .dropdown-trigger:hover svg{fill:var(--indigo);opacity:.7}.header .dropdown-trigger:active{opacity:1;fill:rgba(51,51,51,.3)}.header .dropdown-content{left:auto;top:51px;right:42px;display:block;opacity:1}.header__user-nav.dropdown-content{display:none}.header .dropdown-content li>a,.header .dropdown-content li>span{padding:17px 29px;font-family:PT Sans,Arial,sans-serif;font-size:18px;line-height:1.2;color:var(--black);-webkit-transition:color .3s cubic-bezier(.79,.14,.15,.86);-o-transition:color .3s cubic-bezier(.79,.14,.15,.86);transition:color .3s cubic-bezier(.79,.14,.15,.86)}.header .dropdown-content li>a{color:var(--gray);-webkit-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);-o-transition:opacity .3s cubic-bezier(.79,.14,.15,.86);transition:opacity .3s cubic-bezier(.79,.14,.15,.86)}.header .dropdown-content li>a:focus,.header .dropdown-content li>a:hover{color:var(--indigo);opacity:.7;background-color:var(--light)}.header .dropdown-content li>a:active{opacity:1;background-color:rgba(51,51,51,.1);color:var(--gray)}.header__notification{position:static;max-width:65px}.header__notification .dropdown-trigger{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:auto}.header__notification-list.dropdown-content{top:-12px;right:-37px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.header__notification-list.dropdown-content li>a{padding:17px 30px 17px 40px}.header__notification-list{max-height:220px;min-width:380px}.header__notification-item{max-width:380px}.header__notification-link{position:relative;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.header__notification-link svg{position:absolute;top:18px;left:10px;width:20px;height:20px;fill:var(--green)}.sidebar{position:absolute;top:0;left:0;width:20%;height:100%;margin-top:63px;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-box-shadow:4px 0 4px -4px rgba(1,1,1,.75);box-shadow:4px 0 4px -4px rgba(1,1,1,.75)}.sidebar,.sidebar__menu,ul.sidebar__menu:not(.browser-default){-webkit-transition:-webkit-transform .3s cubic-bezier(.79,.14,.15,.86);transition:-webkit-transform .3s cubic-bezier(.79,.14,.15,.86);-o-transition:transform .3s cubic-bezier(.79,.14,.15,.86);transition:transform .3s cubic-bezier(.79,.14,.15,.86);transition:transform .3s cubic-bezier(.79,.14,.15,.86),-webkit-transform .3s cubic-bezier(.79,.14,.15,.86)}.sidebar__menu,ul.sidebar__menu:not(.browser-default){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:25px;width:100%}.sidebar__button{position:absolute;top:10px;right:-41px;width:30px;height:30px;background-color:#fff}.sidebar__menu-item{position:relative}.sidebar__menu-icon{position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:30px;height:30px;background-color:purple}.sidebar__menu-link{display:block;padding:21px 44px}.sidebar.collapse{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.sidebar.collapse+.profile{padding-left:25px}.footer{position:relative;z-index:10}.profile{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding-left:20%;-webkit-transition:padding .3s cubic-bezier(.79,.14,.15,.86);-o-transition:padding .3s cubic-bezier(.79,.14,.15,.86);transition:padding .3s cubic-bezier(.79,.14,.15,.86);background-image:url(/src/assets/img/2001-10-a.jpg)}", "",{"version":3,"sources":["C:/Users/kopasov/Documents/Projects/ICRM-layout/src/assets/sass/style.scss"],"names":[],"mappings":"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","file":"style.scss","sourcesContent":["@import url(../../../node_modules/normalize.css);@import url(../../../node_modules/materialize-css/dist/css/materialize.css);@import url(vendor/simplebar.css);@font-face{font-family:\"PT Sans\";font-weight:700;font-style:normal;font-display:swap;src:url(\"/assets/fonts/PTSans-bold.woff2\") format(\"woff2\"),url(\"/assets/fonts/PTSans-bold.woff\") format(\"woff\")}@font-face{font-family:\"PT Sans\";font-weight:400;font-style:normal;font-display:swap;src:url(\"/assets/fonts/PTSans-regular.woff2\") format(\"woff2\"),url(\"/assets/fonts/PTSans-regular.woff\") format(\"woff\")}@font-face{font-family:\"PT Sans Italic\";font-weight:400;font-style:normal;font-display:swap;src:url(\"/assets/fonts/PTSans-italic.woff2\") format(\"woff2\"),url(\"/assets/fonts/PTSans-italic.woff\") format(\"woff\")}@font-face{font-family:\"Tenor Sans\";font-weight:400;font-style:normal;font-display:swap;src:url(\"/assets/fonts/Tenor_Sans_regular.woff2\") format(\"woff2\"),url(\"/assets/fonts/Tenor_Sans_regular.woff\") format(\"woff\")}:root{--black: #010101;--white: #ffffff;--gray-dark: #333333;--blue: #82b1ff;--indigo: #1d35ff;--green: #4caf50;--gray: #9e9e9e;--danger: #e53935;--dark: #343a40;--yellow: #ffd656;--purple: #9c27b0;--light: #f8f9fa}*,*::before,*::after{box-sizing:inherit}html{text-rendering:optimizeLegibility;text-size-adjust:none;box-sizing:border-box;scroll-behavior:smooth;-webkit-tap-highlight-color:rgba(0,0,0,0);-moz-tap-highlight-color:rgba(0,0,0,0);-ms-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:20px;line-height:24px}body{margin:0;padding:0;overflow-x:hidden;width:100%;min-width:320px;font-family:\"PT Sans\",\"Arial\",sans-serif;font-weight:400;color:var(--black);background-color:var(--white);scroll-behavior:smooth;font-size:1rem;line-height:24px}a{text-decoration:none;color:inherit}a:not([href]){pointer-events:none;cursor:default}main{display:block}input,select,textarea{box-sizing:border-box}button,input,textarea,select{font:inherit}svg{pointer-events:none}fieldset{padding:0;border:none}img{display:block;height:auto;max-height:100%}.visually-hidden{position:absolute;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;border:0}.hidden{display:none !important}.empty-layout{height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;background-color:rgba(76,175,80,0.65)}@media only screen and (max-width: 992px){.main-layout nav .brand-logo{left:0;transform:translateX(0)}}@media only screen and (max-width: 992px){.main-layout .hide-on-med-and-down{display:flex !important}}@media only screen and (min-width: 601px){.main-layout .nav-wrapper i{height:0;line-height:0}}.main-layout nav ul a:hover,.main-layout nav ul li.active{background-color:transparent}.title{margin:0;padding:0;font-family:\"Tenor Sans\",\"Arial\",sans-serif;font-size:20px;line-height:24px;color:var(--gray-dark);font-weight:700}.title-large{font-size:50px;line-height:1.2}.title-middle{font-size:34px;line-height:1.2}.title-small{font-size:24px;line-height:1.2}.btn-green{line-height:1.2;background-color:var(--green)}.btn-green:hover{opacity:0.8;background-color:var(--green)}.btn-green:focus{background-color:#357a38}input,input[type=email]:not(.browser-default),input[type=password]:not(.browser-default){height:auto;margin:0;padding:10px 0;padding-top:20px;font-size:14px;line-height:1.2;transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}input:hover,input[type=email]:not(.browser-default):hover,input[type=password]:not(.browser-default):hover{opacity:0.5}input:hover+.material-icons,input[type=email]:not(.browser-default):hover+.material-icons,input[type=password]:not(.browser-default):hover+.material-icons{transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86);opacity:0.5}input:focus,input[type=email]:not(.browser-default):focus,input[type=password]:not(.browser-default):focus{opacity:1;border-bottom:1px solid var(--blue);box-shadow:0 1px 0 0 var(--blue)}input:focus+label,input:focus+.material-icons,input[type=email]:not(.browser-default):focus+label,input[type=email]:not(.browser-default):focus+.material-icons,input[type=password]:not(.browser-default):focus+label,input[type=password]:not(.browser-default):focus+.material-icons{transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86);opacity:1;color:var(--blue)}input.invalid[type=email]:not(.browser-default)+.material-icons,input.invalid[type=email]:not(.browser-default):focus+.material-icons,input.invalid[type=password]:not(.browser-default) input.invalid[type=password]:not(.browser-default):focus+.material-icons{color:var(--danger)}input.valid[type=email]:not(.browser-default)+.material-icons,input.valid[type=password]:not(.browser-default)+.material-icons{color:var(--green)}label{font-size:16px}.input-field>label:not(.label-icon).active{transform:translateY(0) scale(0.8)}.material-icons{position:absolute;top:15px;right:5px;color:var(--gray)}small{display:none;position:absolute;bottom:-25px;left:0;color:var(--danger)}small.active{display:block}.ui-kit{width:100%;padding:30px;background-color:var(--white)}.ui-kit .titles{max-width:50%;margin:0 auto}.ui-kit .title-ui{margin-bottom:15px;margin-left:-120px;text-decoration:underline var(--blue)}.ui-kit ul{margin-bottom:45px}.ui-kit form{max-width:50%;margin:0 auto}.ui-kit .buttons{display:flex;flex-wrap:wrap;max-width:50%;margin:0 auto}.ui-kit .buttons .title-ui{width:100%}.ui-kit .buttons li{margin-right:25px}.ui-kit .buttons li:last-child{margin-right:0}.page{position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;min-width:320px;background-color:var(--light);overflow-x:hidden}.page__content{position:relative;flex:1 0 auto}.page__footer{flex-shrink:0}.contaiter{padding:50px 25px}.index-page{padding:30px}.index-page ul:not(.browser-default)>li{margin-left:20px;list-style:persian}.index-page a{color:var(--black);display:block;margin-bottom:15px;padding-left:10px;transition:color .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.index-page a:hover{color:var(--blue)}.login-page{position:relative}.login-page h1{margin-bottom:10px;text-align:center}.login-page form{padding:35px 30px;background-color:var(--white);box-shadow:0 0 20px 3px rgba(var(--black), 0.3)}.login-page .form-group{display:flex;flex-direction:column;align-items:center}.login-page .input-field{position:relative;min-width:400px;margin-bottom:5px;margin-top:15px}.login-page .btn{height:auto;margin-top:20px;padding:15px}.login-page .btn-green{width:50%;padding:10px 20px}.login-page .form-group__login{flex-direction:row;justify-content:space-between;align-items:baseline}.login-page .form-group__has-account{margin-top:35px;flex-wrap:wrap}.login-page .form-group__has-account p{margin:0;margin-bottom:5px;font-size:16px}.login-page .form-group__has-account .btn{width:100%;margin:0;padding:0}a{color:var(--gray);transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}a:hover,a:focus{color:var(--indigo);opacity:0.7;background-color:var(--light)}a:active{opacity:1;background-color:rgba(51,51,51,0.1)}.login-page--register .btn-green{width:100%;margin-bottom:25px}.login-page--register .form-group__has-account{flex-direction:row;justify-content:center;align-items:baseline;flex-wrap:nowrap;margin-top:10px}.login-page--register .form-group__has-account p{margin:0;margin-right:25px;padding:0;white-space:nowrap;font-size:20px}.login-page--register .form-group__has-account .btn{width:100%;padding:10px 25px;line-height:1.2}.login-page--pass-recovery .btn-green{padding:15px 20px;margin-top:25px}.header{position:relative;width:100%;max-height:64px;z-index:1;box-shadow:0 0 4px 0 rgba(0,0,0,0.5);display:flex;align-items:stretch;justify-content:flex-end}.header__logo-wrap{display:flex;align-items:center;margin-right:auto;width:20%;background-color:#e9ebff;box-shadow:4px 0 4px -4px rgba(1,1,1,0.2)}.header__logo{display:flex;flex-direction:column;align-items:center;width:100%}.header__logo-text{margin-bottom:-3px;font-family:\"Tenor Sans\",\"Arial\",sans-serif;font-size:24px;text-decoration:underline}.header__logo-descr{font-size:14px}.header__nav{margin-right:10px}.header .dropdown-trigger{padding:20px 20px;display:flex;align-items:center;justify-content:center}.header .dropdown-trigger svg{color:var(--gray);transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.header .dropdown-trigger:hover svg,.header .dropdown-trigger:focus svg{fill:var(--indigo);opacity:0.7}.header .dropdown-trigger:active{opacity:1;fill:rgba(51,51,51,0.3)}.header .dropdown-content{left:auto;top:51px;right:42px;display:block;opacity:1}.header__user-nav.dropdown-content{display:none}.header .dropdown-content li>a,.header .dropdown-content li>span{padding:17px 29px;font-family:\"PT Sans\",\"Arial\",sans-serif;font-size:18px;line-height:1.2;color:var(--black);transition:color .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.header .dropdown-content li>a{color:var(--gray);transition:opacity .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.header .dropdown-content li>a:hover,.header .dropdown-content li>a:focus{color:var(--indigo);opacity:0.7;background-color:var(--light)}.header .dropdown-content li>a:active{opacity:1;background-color:rgba(51,51,51,0.1)}.header .dropdown-content li>a:active{color:var(--gray)}.header__notification{position:static;max-width:65px}.header__notification .dropdown-trigger{display:inline-flex;margin-left:auto}.header__notification-list.dropdown-content{top:-12px;right:-37px;transform:translateX(-100%)}.header__notification-list.dropdown-content li>a{padding:17px 30px;padding-left:40px}.header__notification-list{max-height:220px;min-width:380px}.header__notification-item{max-width:380px}.header__notification-link{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header__notification-link svg{position:absolute;top:18px;left:10px;width:20px;height:20px;fill:var(--green)}.sidebar{position:absolute;top:0;left:0;width:20%;height:100%;margin-top:63px;transform:translateX(0);box-shadow:4px 0 4px -4px rgba(1,1,1,0.75);transition:transform .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.sidebar__menu,ul.sidebar__menu:not(.browser-default){display:flex;flex-direction:column;padding:25px;width:100%;transition:transform .3s cubic-bezier(0.79, 0.14, 0.15, 0.86)}.sidebar__button{position:absolute;top:10px;right:-41px;width:30px;height:30px;background-color:#ffffff}.sidebar__menu-item{position:relative}.sidebar__menu-icon{position:absolute;top:50%;left:0%;transform:translateY(-50%);width:30px;height:30px;background-color:purple}.sidebar__menu-link{display:block;padding:21px 44px}.sidebar.collapse{transform:translateX(-100%)}.sidebar.collapse+.profile{padding-left:25px}.footer{position:relative;z-index:10}.profile{display:flex;width:100%;padding-left:20%;transition:padding .3s cubic-bezier(0.79, 0.14, 0.15, 0.86);background-image:url(\"/src/assets/img/2001-10-a.jpg\")}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "[data-simplebar] {\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.simplebar-wrapper {\n  overflow: hidden;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\n.simplebar-mask {\n  direction: inherit;\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: auto !important;\n  height: auto !important;\n  z-index: 0;\n}\n\n.simplebar-offset {\n  direction: inherit !important;\n  box-sizing: inherit !important;\n  resize: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n  direction: inherit;\n  box-sizing: border-box !important;\n  position: relative;\n  display: block;\n  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n  width: auto;\n  visibility: visible;\n  max-width: 100%; /* Not required for horizontal scroll to trigger */\n  max-height: 100%; /* Needed for vertical scroll to trigger */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n  content: ' ';\n  display: table;\n}\n\n.simplebar-placeholder {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n  box-sizing: inherit !important;\n  height: 100%;\n  width: 100%;\n  max-width: 1px;\n  position: relative;\n  float: left;\n  max-height: 1px;\n  overflow: hidden;\n  z-index: -1;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n  flex-grow: inherit;\n  flex-shrink: 0;\n  flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n  box-sizing: inherit;\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000%;\n  width: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n\n.simplebar-track {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: black;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n  /* When hovered, remove all transitions from drag handle */\n  opacity: 0.5;\n  transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n  top: 0;\n  width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n  top: 2px;\n  bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n  left: 0;\n  height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n  height: 100%;\n  left: 2px;\n  right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n  right: auto;\n  left: 0;\n  top: 2px;\n  height: 7px;\n  min-height: 0;\n  min-width: 10px;\n  width: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n  direction: rtl;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  height: 500px;\n  width: 500px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n  position: fixed;\n  left: 0;\n  visibility: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n", "",{"version":3,"sources":["simplebar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,OAAO;EACP,MAAM;EACN,SAAS;EACT,QAAQ;EACR,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;EACd,YAAY,EAAE,mGAAmG;EACjH,WAAW;EACX,mBAAmB;EACnB,eAAe,EAAE,kDAAkD;EACnE,gBAAgB,EAAE,0CAA0C;EAC5D,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;;EAEE,QAAQ;EACR,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,0DAA0D;EAC1D,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,MAAM;EACN,WAAW;AACb;;AAEA;EACE,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,OAAO;EACP,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,OAAO;EACP,QAAQ;EACR,WAAW;EACX,aAAa;EACb,eAAe;EACf,WAAW;AACb;;AAEA,gBAAgB;AAChB;EACE,WAAW;EACX,OAAO;AACT;;AAEA;EACE,cAAc;EACd,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,OAAO;EACP,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAC1B","file":"simplebar.css","sourcesContent":["[data-simplebar] {\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.simplebar-wrapper {\n  overflow: hidden;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\n.simplebar-mask {\n  direction: inherit;\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: auto !important;\n  height: auto !important;\n  z-index: 0;\n}\n\n.simplebar-offset {\n  direction: inherit !important;\n  box-sizing: inherit !important;\n  resize: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n  direction: inherit;\n  box-sizing: border-box !important;\n  position: relative;\n  display: block;\n  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n  width: auto;\n  visibility: visible;\n  max-width: 100%; /* Not required for horizontal scroll to trigger */\n  max-height: 100%; /* Needed for vertical scroll to trigger */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n  content: ' ';\n  display: table;\n}\n\n.simplebar-placeholder {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n  box-sizing: inherit !important;\n  height: 100%;\n  width: 100%;\n  max-width: 1px;\n  position: relative;\n  float: left;\n  max-height: 1px;\n  overflow: hidden;\n  z-index: -1;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n  flex-grow: inherit;\n  flex-shrink: 0;\n  flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n  box-sizing: inherit;\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000%;\n  width: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n\n.simplebar-track {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: black;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n  /* When hovered, remove all transitions from drag handle */\n  opacity: 0.5;\n  transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n  top: 0;\n  width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n  top: 2px;\n  bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n  left: 0;\n  height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n  height: 100%;\n  left: 2px;\n  right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n  right: auto;\n  left: 0;\n  top: 2px;\n  height: 7px;\n  min-height: 0;\n  min-width: 10px;\n  width: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n  direction: rtl;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  height: 500px;\n  width: 500px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n  position: fixed;\n  left: 0;\n  visibility: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/modules/sidebar.js
/* harmony default export */ var sidebar = (function () {
  var sidebar = document.querySelector('.sidebar');

  if (!sidebar) {
    return;
  }

  var TOGGLE_BUTTON = sidebar.querySelector('.sidebar__button');
  var COLLAPSE_CLASS = 'collapse';
  TOGGLE_BUTTON.addEventListener('click', function () {
    sidebar.classList.toggle(COLLAPSE_CLASS);
  });
});
// CONCATENATED MODULE: ./src/js/modules/custom-scroll.js
// import SimpleBar from 'simplebar';
/* harmony default export */ var custom_scroll = (function () {
  var scrollLists = document.querySelectorAll('[data-simplebar]');

  if (!scrollLists) {
    return;
  }

  scrollLists.forEach(function (list) {
    new SimpleBar(list, {
      autoHide: false,
      crollbarMinSize: 4
    });
  });
});
// CONCATENATED MODULE: ./src/js/modules/note-link-title.js
/* harmony default export */ var note_link_title = (function () {
  var noteList = document.querySelector('.header__notification-list');

  if (!noteList) {
    return;
  }

  var links = noteList.querySelectorAll('.header__notification-link'); // const tooltipOptions = {
  //   triggerTarget: link.querySelector('span')
  // };

  links.forEach(function (link) {
    var title = link.innerText;
    tippy(link, {
      offset: [-350, 0],
      content: title,
      theme: 'light'
    });
  });
});
// CONCATENATED MODULE: ./src/js/index.js



sidebar();
custom_scroll();
note_link_title();
// EXTERNAL MODULE: ./src/assets/sass/style.scss
var style = __webpack_require__(126);

// CONCATENATED MODULE: ./src/index.js
// import JS
 //
// import SCSS

 // import images
// import './assets/img/BS14057.JPG'
// imports SVG for the sprite
// import './assets/img/sprite/info.svg'
// import './assets/img/sprite/notifications.svg'
// import './assets/img/sprite/person.svg'

/***/ })

/******/ });