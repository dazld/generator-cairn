import { join } from 'path';
import config from './config';

const latestManifest = config.get('useVersionedResources') ? require('../../static/rev-manifest.json') : {};


export default function assetPath(basePath) {
    const staticPrefix = config.get('staticPrefix'); // @TODO add this to config

    let fullPath;

    if (config.get('useVersionedResources') && latestManifest.hasOwnProperty(basePath)) {
        fullPath = join(staticPrefix, latestManifest[basePath]);
    } else {
        fullPath = join(staticPrefix, basePath);
    }

    return fullPath;
}
