const initialState = {
  isLastEducationCompleted: false,
  study: "",
  level: "",
  school: "",
  city: "",
  startDate: null,
  endDate: null,
  gpa: 0,
};
const lastEducationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LAST_EDUCATION":
      return {
        ...state,
        isLastEducationCompleted: true,
        study: action.payload.study,
        level: action.payload.level,
        school: action.payload.school,
        city: action.payload.city,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        gpa: action.payload.gpa,
      };
    case "CLEAR_LAST_EDUCATION":
      return {
        isLastEducationCompleted: false,
        study: "",
        level: "",
        school: "",
        city: "",
        startDate: null,
        endDate: null,
        gpa: 0,
      };

    default:
      return state;
  }
};

export default lastEducationReducer;
