const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects,
  };
};
const clearProjects = () => {
  return {
    type: "CLEAR_PROJECTS",
  };
};

export { setProjects, clearProjects };
