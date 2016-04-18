import makeConfig from 'mini-config';

const config = makeConfig();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

config.set('isProduction', IS_PRODUCTION);
config.set('apiUrl', window.cairnConfig.apiUrl);
config.set('staticPrefix', window.cairnConfig.staticPrefix);

export default config;
