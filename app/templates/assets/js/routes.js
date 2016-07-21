import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import SomeText from './components/some-text';
import Add from './components/add';
import Subtract from './components/subtract';

const makeRoutes = function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="add/:num" component={Add} />
                <Route path="subtract/:num" component={Subtract} />
                <IndexRoute component={SomeText} />
            </Route>
        </Router>
    );
};


export default makeRoutes;
