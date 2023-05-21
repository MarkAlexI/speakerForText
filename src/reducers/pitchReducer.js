const initialState = {
  value: '1'
};

const pitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PITCH':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default pitchReducer;