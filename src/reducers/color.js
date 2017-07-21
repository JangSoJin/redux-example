import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'green'
};

const color = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COLOR:
            return { ...state, color: action.color };
        default:
            return state;
    }
};

export default color;