import makeConfig from 'mini-config';

const config = makeConfig();
const isProduction = process.env.NODE_ENV === 'production';

config.set('isProduction', isProduction);
config.set('useVersionedResources', process.env.USE_VERSIONED_RESOURCES || isProduction);
config.set('staticPrefix', process.env.STATIC_PREFIX || '/');

export default config;
