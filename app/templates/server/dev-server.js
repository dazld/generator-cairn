require('babel-core/register')();
const server = require('./index').default;
const express = require('express');
const app = express();

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


app.listen(3030, function() {
    console.log('Magic happened');
});
