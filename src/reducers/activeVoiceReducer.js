const initialState = {
  value: ''
};

const activeVoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_VOICE':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default activeVoiceReducer;