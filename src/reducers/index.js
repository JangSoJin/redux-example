import color from './color';
import number from './number';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    colorData : color,
    numberData : number
});

export default reducers;
