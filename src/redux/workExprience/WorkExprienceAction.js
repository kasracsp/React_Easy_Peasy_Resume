const setWorkExprience = (expriences) => {
  return {
    type: "SET_WORK_EXPRIENCE",
    payload: expriences,
  };
};
const clearWorkExprience = () => {
  return {
    type: "CLEAR_WORK_EXPRIENCE",
  };
};
const disableWorkExprience = (condition) => {
  return {
    type: "DISABLE_WORK_EXPRIENCE",
    payload:condition,
  };
};

export { setWorkExprience, clearWorkExprience, disableWorkExprience };
