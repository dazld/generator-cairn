require('babel-core/register')();
const app = require('./index').default;

app.listen(3030, function() {
    console.log('Magic happened');
});
