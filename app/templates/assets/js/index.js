import config from './lib/config';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import createRoutes from './routes';


const state = window.__STATE__; // eslint-disable-line no-underscore-dangle

const store = configureStore(state);

ReactDOM.render(
    (<Provider store={store}>
        {createRoutes(browserHistory)}
    </Provider>),
    document.getElementById('root')
);
