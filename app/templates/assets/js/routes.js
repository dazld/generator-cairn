import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

class Dummy extends React.Component {
    static fetchData({ store, params, query }) {
        return Promise.resolve({ params, query });
    }
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (
            <div className="app">
                <div className="header"></div>
                <div className="column">
                    <h1>It's working!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                {this.props.children}
                <div className="header"></div>
                <div className="column">
                    <h1>Other section!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        );
    }
}

const makeRoutes = function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={Dummy}>
                <Route path="stuff" component={Dummy} />
                <Route path="stuff/:id" component={Dummy} />
                <IndexRoute component={Dummy} />
            </Route>
        </Router>
    );
};


export default makeRoutes;
