const initialState = {
  value: ''
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default textReducer;