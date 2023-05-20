import speedReducer from './speedReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  speechSpeed: speedReducer,
});

export default rootReducer;