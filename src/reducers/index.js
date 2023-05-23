import pitchReducer from './pitchReducer';
import speedReducer from './speedReducer';
import textReducer from './textReducer';
import activeVoiceReducer from './activeVoiceReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pitchRate: pitchReducer,
  speechSpeed: speedReducer,
  textField: textReducer,
  activeVoice: activeVoiceReducer
});

export default rootReducer;