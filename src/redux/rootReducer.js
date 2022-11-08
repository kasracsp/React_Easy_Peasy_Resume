import { combineReducers } from "redux";
import personalDetailsReducer from "./personalDetails/PersonalDetailsReducer";
import skillsReducer from './skills/SkillReducer'
import projectsReducer from './projects/ProjectsReducer'
import socialMediaReducer from './socialMedia/SocialMediaReducer'
import lastEducationReducer from "./lastEducation/LastEducationReducer";
import hobbiesReducer from './hobbies/HobbiesReducer'
import workExprienceReducer from './workExprience/WorkExprienceReducer'
const rootReducer = combineReducers({
  personalDetailsState: personalDetailsReducer,
  skillsState: skillsReducer,
  projectsState: projectsReducer,
  lastEducationState: lastEducationReducer,
  socialMediaState: socialMediaReducer,
  hobbiesState: hobbiesReducer,
  workExprienceState: workExprienceReducer,
});

export default rootReducer