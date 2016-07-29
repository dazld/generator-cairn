import makeConfig from 'mini-config';

const config = makeConfig();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

config.set('isProduction', IS_PRODUCTION);
config.set('apiUrl', window.__CONFIG__.apiUrl);
config.set('staticPrefix', window.__CONFIG__.staticPrefix);

export default config;
