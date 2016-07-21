import Promise from 'bluebird';

export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const CHANGE = 'CHANGE';

function makeAction(action) {
    return function add(n) {
        return function(dispatch) {
            return new Promise(function(res) {
                setTimeout(function() {
                    res(dispatch({
                        type: action,
                        value: n
                    }));
                }, 1000);
            });
        };
    };
}


export const add = makeAction(ADD);
export const subtract = makeAction(SUBTRACT);
