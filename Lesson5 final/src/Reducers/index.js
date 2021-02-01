
import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    store:chatReducer,
    profile:profileReducer,
});
