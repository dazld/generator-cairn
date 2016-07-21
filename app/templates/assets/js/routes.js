import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import SomeText from './components/some-text';

const makeRoutes = function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={SomeText} />
            </Route>
        </Router>
    );
};


export default makeRoutes;
