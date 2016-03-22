import express from 'express';
import { resolve } from 'path';
import assetPath from '../assets/js/lib/asset-path';
import es6render from 'express-es6-template-engine';
import liveReload from 'connect-livereload';

const app = express();
app.engine('html', es6render);
app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'html');

if (process.env.NODE_ENV !== 'production') {
    app.use(liveReload());
}

app.get('*', function(req, res) {
    res.render('index', {
        locals: {
            title: 'hurro',
            assetPath
        }
    });
});


export default app;
