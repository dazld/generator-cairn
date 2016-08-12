require('babel-core/register')();
const makeServer = require('./index').default;
const express = require('express');
const liveReload = require('connect-livereload');
const app = express();
const http = require('http');
const https = require('https');
const snakeoil = require('@dazld/snakeoil-certs');
const config = require('../assets/js/lib/config').default;
const server = makeServer(liveReload());

app.use(express.static('static'));
app.use(function (req, res, next) {
    const isImage = (req.headers.accept.indexOf('image') !== -1);
    if (isImage) {
        res.setHeader('Expires', new Date(Date.now() + 86400000));
        res.setHeader('Last-Modified', new Date(Date.now() - 86400000));
        res.setHeader('Cache-Control', 'public');
    }
    next();
});

app.use(server);

const createServer = process.env.USE_HTTPS ? https.createServer.bind(https, {
    key: snakeoil.serviceKey,
    cert: snakeoil.certificate
}) : http.createServer.bind(http);

console.log('Magic happened');
setTimeout(function() {
    createServer(app).listen(3030, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(`dev server up on ${config.get('useHttps') ? 'https' : 'http'}://localhost:3030`);
        }
    });
}, 500);
