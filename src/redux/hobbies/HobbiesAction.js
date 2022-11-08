const setHobbies = (hobbies) => {
  return {
    type: "SET_HOBBIES",
    payload: hobbies,
  };
};
const clearHobbies = () => {
  return {
    type: "CLEAR_HOBBIES",
  };
};
const enableHobbies = (condition) => {
  return {
    type: "ENABLE_HOBBIES",
    payload:condition,
  };
};

export { setHobbies, clearHobbies, enableHobbies };
