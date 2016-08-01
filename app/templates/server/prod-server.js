require('babel-core/register')();
const makeServer = require('./index').default;
const config = require('../assets/js/lib/config').default;
const express = require('express');
const app = express();

const PORT = config.get('port');

const server = makeServer();

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

app.listen(PORT, function() {
    console.log(`Server up on port ${PORT}`);
});
