import pitchReducer from './pitchReducer';
import speedReducer from './speedReducer';
import textReducer from './textReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pitchRate: pitchReducer,
  speechSpeed: speedReducer,
  textField: textReducer
});

export default rootReducer;