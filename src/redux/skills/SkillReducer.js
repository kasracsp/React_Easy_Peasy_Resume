const initialState = {
  isSkillsCompleted: false,
  skills: [],
};
const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return {
        ...state,
        isSkillsCompleted: true,
        skills:action.payload
      };
    case "CLEAR_SKILLS":
      return {
        isSkillsCompleted: false,
        skills: [],
      };

    default:
      return state;
  }
};

export default skillsReducer;
