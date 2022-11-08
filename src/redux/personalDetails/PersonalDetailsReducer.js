const initialState={
  isPersonalDetailsCompleted:false,
  firstName:'',
  lastName:'',
  photo:'',
  emailAddress:'',
  phoneNumber:'',
  website:'',
  career:'',
  country:'',
  city:'',
  aboutMe:'',
  // instagram:'',
  // facebook:'',
  // linkedin:'',
  // github:'',
  // hobbies:[],
  // workExprience:[],
}
const personalDetailsReducer=(state=initialState,action)=>{
  switch (action.type) {
    case "SET_PERSONAL_DETAILS":
      return {
        ...state,
        isPersonalDetailsCompleted: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        photo: action.payload.photo,
        emailAddress: action.payload.emailAddress,
        phoneNumber: action.payload.phoneNumber,
        website: action.payload.website,
        career: action.payload.career,
        country: action.payload.country,
        city: action.payload.city,
        aboutMe: action.payload.aboutMe,
      };
    case "CLEAR_PERSONAL_DETAILS":
      return {
        isPersonalDetailsCompleted: false,
        firstName: "",
        lastName: "",
        photo: "",
        emailAddress: "",
        phoneNumber: "",
        website: "",
        career: "",
        country: "",
        city: "",
        aboutMe: "",
      };

    default:
      return state;
  }
}

export default personalDetailsReducer;