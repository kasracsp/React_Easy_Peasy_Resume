const initialState = {
  isHobbiesCompleted: true,
  hobbies: [],
};
const hobbiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOBBIES":
      return {
        ...state,
        isHobbiesCompleted: true,
        hobbies: action.payload,
      };
    case "CLEAR_HOBBIES":
      return {
        isHobbiesCompleted: false,
        hobbies: [],
      };
    case "ENABLE_HOBBIES":
      return {
        isHobbiesCompleted: action.payload,
        hobbies: [],
      };

    default:
      return state;
  }
};

export default hobbiesReducer;
