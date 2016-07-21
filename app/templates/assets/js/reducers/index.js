import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    count: counter
});

export default rootReducer;
