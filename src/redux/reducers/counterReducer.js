import {DECREASE_COUNTER, INCREASE_BY_TWO_COUNTER, INCREASE_COUNTER} from "../actions/actionTypes";

const counterReducer  =  (state = 0, action) => {
    let newState = 0;
    switch (action.type){
        case INCREASE_COUNTER:
            return  (newState = state + action.payload);
            break;
        case DECREASE_COUNTER:
            return (newState = state - action.payload);
            break;
        case INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
            break;
        default:
            return state;
            break;
    }
}

export default counterReducer;