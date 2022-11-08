const initialState = {
  isSocialMediaCompleted: false,
  github: "",
  linkedin: "",
  instagram: "",
  facebook: "",
};
const socialMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SOCIAL_MEDIA":
      return {
        ...state,
        isSocialMediaCompleted: true,
        github: action.payload.github,
        linkedin: action.payload.linkedin,
        instagram: action.payload.instagram,
        facebook: action.payload.facebook,
      };
    case "CLEAR_SOCIAL_MEDIA":
      return {
        isSocialMediaCompleted: false,
        github: "",
        linkedin: "",
        instagram: "",
        facebook: "",
      };
    case "ENABLE_SOCIAL_MEDIA":
      return {
        isSocialMediaCompleted: action.payload,
        github: "",
        linkedin: "",
        instagram: "",
        facebook: "",
      };

    default:
      return state;
  }
};

export default socialMediaReducer;
