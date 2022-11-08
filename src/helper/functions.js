const checkAllSectionIsSaved = (
  personalDetails,
  skills,
  projects,
  education,
  socialMedia,
  workExprience,
  hobbies
) => {
  const isSaved =
    personalDetails.isPersonalDetailsCompleted === true &&
    skills.isSkillsCompleted === true &&
    projects.isProjectsCompleted === true &&
    education.isLastEducationCompleted === true &&
    socialMedia.isSocialMediaCompleted === true &&
    workExprience.isWorkExprienceCompleted === true &&
    hobbies.isHobbiesCompleted === true;
  return isSaved;
};

export { checkAllSectionIsSaved };
