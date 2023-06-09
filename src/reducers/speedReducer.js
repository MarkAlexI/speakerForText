const initialState = {
  value: '1'
};

const speedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SPEED':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default speedReducer;