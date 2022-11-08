const setSocialMedia = (media) => {
  return {
    type: "SET_SOCIAL_MEDIA",
    payload: media,
  };
};
const clearSocialMedia = () => {
  return {
    type: "CLEAR_SOCIAL_MEDIA",
  };
};
const enableSocialMedia = (condition) => {
  return {
    type: "ENABLE_SOCIAL_MEDIA",
    payload:condition,
  };
};

export { setSocialMedia, clearSocialMedia, enableSocialMedia };
