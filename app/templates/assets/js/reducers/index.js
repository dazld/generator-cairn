import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    thing () {
        return {
            foo: 'bar'
        };
    }
});

export default rootReducer;
