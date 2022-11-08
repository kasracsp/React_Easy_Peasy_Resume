const setLastEducation = (education) => {
  return {
    type: "SET_LAST_EDUCATION",
    payload: education,
  };
};
const clearLastEducation = () => {
  return {
    type: "CLEAR_LAST_EDUCATION",
  };
};

export { setLastEducation, clearLastEducation };
