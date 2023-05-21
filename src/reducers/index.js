import speedReducer from './speedReducer';
import pitchReducer from './pitchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  speechSpeed: speedReducer,
  pitchRate: pitchReducer
});

export default rootReducer;