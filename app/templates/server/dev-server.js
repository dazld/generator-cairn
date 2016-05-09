require('babel-core/register')();
const makeServer = require('./index').default;
const express = require('express');
const liveReload = require('connect-livereload');
const app = express();
const https = require('https');
const snakeoil = require('@dazld/snakeoil-certs');

const server = makeServer(liveReload({
    src: 'https://localhost:35729/livereload.js?snipver=1'
}));

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

https.createServer({
    key: snakeoil.serviceKey,
    cert: snakeoil.certificate
}, app).listen(3030, 'localhost', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Magic happened');
        console.log('https dev server up on https://localhost:3030');
    }
});
