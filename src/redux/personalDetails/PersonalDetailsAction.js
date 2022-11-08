const setPersonalDetails = (info) => {
  return {
    type: "SET_PERSONAL_DETAILS",
    payload: info,
  };
};
const clearPersonalDetails = () => {
  return {
    type: "CLEAR_PERSONAL_DETAILS",
  };
};

export { setPersonalDetails, clearPersonalDetails };
