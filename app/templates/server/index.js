import express from 'express';
import es6template from 'express-es6-template-engine';

const app = express();

app.get('*',function(req, res) {
    res.send('hurro');
});


export default app;
