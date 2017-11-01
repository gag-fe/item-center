import {combineReducers} from 'redux';
import layout from './layout';
import org from './org';
import item from './item';
const rootReducer = combineReducers({
    layout,
    org,
    item
});

export default rootReducer;
