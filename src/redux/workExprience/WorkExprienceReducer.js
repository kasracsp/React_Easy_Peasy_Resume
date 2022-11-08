const initialState = {
  isWorkExprienceCompleted: false,
  workExpriences: [],
};
const workExprienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORK_EXPRIENCE":
      return {
        ...state,
        isWorkExprienceCompleted: true,
        workExpriences: action.payload,
      };
    case "CLEAR_WORK_EXPRIENCE":
      return {
        isWorkExprienceCompleted: false,
        workExpriences: [],
      };
    case "DISABLE_WORK_EXPRIENCE":
      return {
        isWorkExprienceCompleted: action.payload,
        workExpriences: [],
      };

    default:
      return state;
  }
};

export default workExprienceReducer;
