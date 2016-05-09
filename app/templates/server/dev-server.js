require('babel-core/register')();
const makeServer = require('./index').default;
const express = require('express');
const liveReload = require('connect-livereload');
const app = express();
const pem = require('pem');
const http = require('http');
const https = require('https');

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
pem.createCertificate({
    days: 365,
    selfSigned: true,
    function(err, keys) {
        https.createServer({
            key: keys.serviceKey,
            cert: keys.certificate
        }, app).listen(4431, function() {
            console.log('https dev server up on 4431');
        });

        app.listen(3030, function() {
            console.log('Magic happened');
            console.log('http dev server up on 3030');
        });
    }
})
