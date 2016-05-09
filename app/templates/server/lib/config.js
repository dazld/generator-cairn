import makeConfig from 'mini-config';

const config = makeConfig();
const isProduction = process.env.NODE_ENV === 'production';

config.set('isProduction', isProduction);
config.set('apiUrl', process.env.API_URL || '/api');
config.set('useVersionedResources', process.env.USE_VERSIONED_RESOURCES || isProduction);
config.set('staticPrefix', process.env.STATIC_PREFIX || '/');
config.set('port', process.env.PORT || 3030);
config.set('useHttps', !!process.env.USE_HTTPS);

export default config;
