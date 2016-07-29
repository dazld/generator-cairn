import { resolve } from 'url';
import config from '../../assets/js/lib/config';

const latestManifest = config.get('useVersionedResources') ? require('../../static/rev-manifest.json') : {};


export default function assetPath(basePath) {
    const staticPrefix = config.get('staticPrefix'); // @TODO add this to config

    let fullPath;

    if (config.get('useVersionedResources') && latestManifest.hasOwnProperty(basePath)) {
        fullPath = resolve(staticPrefix, latestManifest[basePath]);
    } else {
        fullPath = resolve(staticPrefix, basePath);
    }

    return fullPath;
}
