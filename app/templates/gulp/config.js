import { join } from 'path';

// general folder for assets
const ASSETS_DIR = './assets';
const SERVER_DIR = './server';

const ASSETS_SASS = join(ASSETS_DIR, 'sass');
const ASSETS_SASS_MAIN = join(ASSETS_SASS, 'main.scss');

const ASSETS_JS = join(ASSETS_DIR, 'js');
const ASSETS_JS_MAIN = join(ASSETS_JS, 'index.js'); // client side entry point

const ASSETS_IMG = join(ASSETS_DIR, 'img');
const ASSETS_FONTS = join(ASSETS_DIR, 'fonts');

const STATIC_DIR = 'static';
const STATIC_CSS = join(STATIC_DIR, 'css');
const STATIC_IMG = join(STATIC_DIR, 'img');
const STATIC_JS = join(STATIC_DIR, 'js');
const STATIC_FONTS = join(STATIC_DIR, 'fonts');

const BROWSER_CONFIG = ['>1%', 'IE 9'];
const LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35729;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const USE_HTTPS = !!process.env.USE_HTTPS;

const config = {
    BROWSER_CONFIG,
    SERVER_DIR,
    LIVERELOAD_PORT,
    ASSETS_SASS,
    ASSETS_SASS_MAIN,
    ASSETS_JS_MAIN,
    ASSETS_IMG,
    ASSETS_FONTS,
    STATIC_DIR,
    STATIC_CSS,
    STATIC_IMG,
    STATIC_JS,
    STATIC_FONTS,
    IS_PRODUCTION,
    USE_HTTPS,
    USE_SOURCEMAPS: (typeof process.env.USE_SOURCEMAPS !== 'undefined') ? true : !IS_PRODUCTION
};

Object.freeze(config);

export default config;
