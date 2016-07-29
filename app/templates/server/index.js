import express from 'express';
import es6render from 'express-es6-template-engine';
import { resolve } from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { useRouterHistory, RouterContext, match } from 'react-router';
import { createMemoryHistory, useQueries } from 'history';
import { Provider } from 'react-redux';

import configureStore from '../assets/js/store/configureStore';
import createRoutes from '../assets/js/routes';
import assetPath from './lib/asset-path';
import config from '../assets/js/lib/config';

import Promise from 'bluebird';

const clientConfig = {};

clientConfig.apiUrl = config.get('apiUrl');
clientConfig.staticPrefix = config.get('staticPrefix');

export default function makeServer (middleware) {
    const app = express();
    app.engine('html', es6render);
    app.set('views', resolve(__dirname, 'views'));
    app.set('view engine', 'html');

    if (middleware) {
        app.use(middleware);
    }

    app.get('*', function(req, res, next) {
        const history = useRouterHistory(useQueries(createMemoryHistory))();
        const store = configureStore();
        const routes = createRoutes(history);
        const location = history.createLocation(req.url);

        function subscribeUrl () {
            let currentUrl = location.pathname + location.search;
            const unsubscribe = history.listen(newLoc => {
                if (newLoc.action === 'PUSH') {
                    currentUrl = newLoc.pathname + newLoc.search;
                }
            });
            return [() => currentUrl, unsubscribe];
        }

        match({ routes, location }, function(error, redirectLocation, renderProps) {
            if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (error) {
                res.status(500).send(error.message);
            } else if (typeof renderProps === 'undefined') {
                console.log(`404 - ${req.url}`);
                res.status(404).send('Not Found');
            } else {
                const [getCurrentUrl, unsubscribe] = subscribeUrl();
                const reqUrl = location.pathname + location.search;

                const loaders = renderProps.components.reduce((acc, comp) => {
                    if (comp && comp.fetchData) {
                        acc.push(comp.fetchData({
                            query: renderProps.query,
                            params: renderProps.params,
                            history,
                            store
                        }));
                    }
                    return acc;
                }, []);

                Promise.all(loaders).then(function() {
                    const html = ReactDOMServer.renderToString(
                        <Provider store={store}>
                            {<RouterContext {...renderProps} />}
                        </Provider>
                    );
                    if (getCurrentUrl() === reqUrl) {
                        res.render('index', {
                            locals: {
                                html,
                                state: JSON.stringify(store.getState()),
                                title: 'Your App',
                                config: JSON.stringify(clientConfig),
                                assetPath
                            }
                        });
                        console.log(`200 - ${req.url}`);
                    } else {
                        console.log(`302 - ${req.url} => ${getCurrentUrl()}`);
                        res.redirect(302, getCurrentUrl());
                    }
                }).catch(function(err) {
                    // or next(err) and use general error handler in express
                    console.log(`500 - ${req.url} - ${err.message}`);
                    res.status(500).send(err.message);
                }).finally(function() {
                    unsubscribe();
                });
            }
        });
    });

    return app;
}
