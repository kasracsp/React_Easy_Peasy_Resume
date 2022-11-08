const setSkills = (skills) => {
  return {
    type: "SET_SKILLS",
    payload: skills,
  };
};
const clearSkills = () => {
  return {
    type: "CLEAR_SKILLS",
  };
};

export { setSkills, clearSkills };
