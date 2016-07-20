
import { ADD, SUBTRACT } from '../actions/count';

function getDefaultState() {
    return 0;
}


export default function(state = getDefaultState(), action) {
    switch (action.type) {
        case ADD:
            state = state + action.value;
            break;
        case SUBTRACT:
            state = state - action.value;
            break;
        default:
            break;
    }
    return state;
}
