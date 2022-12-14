import {DECREASE_COUNTER, INCREASE_BY_TWO_COUNTER, INCREASE_COUNTER} from './actionTypes';

export const increaseCounter  = () => ({
    type:INCREASE_COUNTER,
    payload : 1
});

export const decreaseCounter = () => ({
    type:DECREASE_COUNTER,
    payload:1
});

export const increaseByTwoCounter = () => ({
    type:INCREASE_BY_TWO_COUNTER,
    payload:2
});