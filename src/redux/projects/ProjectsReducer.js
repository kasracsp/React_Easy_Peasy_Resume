const initialState = {
  isProjectsCompleted: false,
  projects: [],
};
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        isProjectsCompleted: true,
        projects: action.payload,
      };
    case "CLEAR_PROJECTS":
      return {
        isProjectsCompleted: false,
        projects: [],
      };

    default:
      return state;
  }
};

export default projectsReducer;
