import express from 'express';
import { resolve } from 'path';
import assetPath from './lib/asset-path';
import es6render from 'express-es6-template-engine';


export default function makeServer (middleware) {
    const app = express();
    app.engine('html', es6render);
    app.set('views', resolve(__dirname, 'views'));
    app.set('view engine', 'html');

    if (middleware) {
        app.use(middleware);
    }

    app.get('*', function(req, res) {
        res.render('index', {
            locals: {
                title: 'hurro',
                assetPath
            }
        });
    });

    return app;
}
