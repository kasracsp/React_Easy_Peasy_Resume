import React, { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonalDetails,
  clearPersonalDetails,
} from "../../redux/personalDetails/PersonalDetailsAction";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import { Formik } from "formik";
import * as yup from "yup";
import { MuiTelInput } from "mui-tel-input";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("first name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("last name is required"),
  career: yup.string("Enter your career").required("career is required"),
  phoneNumber: yup
    .string("Enter your phone number")
    .required("Name is required"),
  country: yup.string("Enter your country").required("country is required"),
  city: yup.string("Enter your city").required("city is required"),
  emailAddress: yup
    .string("Enter your email address")
    .email("Enter a valid email address")
    .required("Email address is required"),
  website: yup
    .string("Enter your website url")
    .url("website url is required"),
});

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  const [saved, setSaved] = useState(false);
  const photoRef = useRef();
  const formikRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();
  const clickHandler = (event) => {
    event.preventDefault();
    photoRef.current.click();
  };
  const resetForm = (event) => {
    event.preventDefault();
    formikRef.current.resetForm();
    dispatch(clearPersonalDetails());
    setSaved(false);
    clearPhoto();
  };
  const handlePhoto = (event) => {
    const file = event.target.files[0];
    setSaved(false);
    dispatch(clearPersonalDetails());
    if (file) {
      formikRef.current.setFieldValue("photo", file);
      setImage(file);
    } else {
      formikRef.current.setFieldValue("photo", null);
      setImage(null);
    }
  };
  const clearPhoto = () => {
    formikRef.current.setFieldValue("photo", null);
    setImage(null);
    setPreview(false)
    setSaved(false);
    dispatch(clearPersonalDetails());
  };
  const setPhoneNumer = (newValue) => {
    formikRef.current.setFieldValue("phoneNumber", newValue);
    setSaved(false);
    dispatch(clearPersonalDetails());
  };

  useEffect(() => {
    if (formikRef.current.values.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(formikRef.current.values.photo);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(()=>{
    formikRef.current.setFieldValue("firstName", personalDetailsState.firstName);
    formikRef.current.setFieldValue("lastName", personalDetailsState.lastName);
    formikRef.current.setFieldValue("emailAddress", personalDetailsState.emailAddress);
    formikRef.current.setFieldValue("photo", personalDetailsState.photo);
    formikRef.current.setFieldValue("phoneNumber", personalDetailsState.phoneNumber);
    formikRef.current.setFieldValue("website", personalDetailsState.website);
    formikRef.current.setFieldValue("career", personalDetailsState.career);
    formikRef.current.setFieldValue("country", personalDetailsState.country);
    formikRef.current.setFieldValue("city", personalDetailsState.city);
    formikRef.current.setFieldValue("aboutMe", personalDetailsState.aboutMe);
    if (personalDetailsState.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(personalDetailsState.photo);
    } else {
      setPreview(null);
    }
  },[])

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        emailAddress: "",
        photo: null,
        phoneNumber: "",
        website: "",
        career: "",
        country: "",
        city: "",
        aboutMe: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setPersonalDetails(values));
        setSaved(true);
      }}
      innerRef={formikRef}
    >
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          noValidate
        >
          <Stack>
            <Stack
              sx={{
                width: "100%",
                flexDirection: {
                  xs: "column",
                  md: "row",
                  width: "100%",
                  gap: "0.5rem",
                },
              }}
            >
              <Stack>
                {preview ? (
                  <Box
                    sx={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "3px",
                      overflow: "hidden",
                      cursor: "pointer",
                      "& img": {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                    onClick={clearPhoto}
                  >
                    <img src={preview} alt="thumb" />
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      width: "120px",
                      height: "120px",
                      backgroundColor: "#E8E8E8",
                      borderRadius: "3px",
                      border: "1px solid",
                      borderColor: "transparent",
                      "&:hover": {
                        backgroundColor: "#E8E8E8",
                        borderColor: "primary.main",
                      },
                    }}
                    disableRipple
                    onClick={clickHandler}
                  >
                    <CameraAltIcon />
                  </IconButton>
                )}
                <Box sx={{ display: "none" }}>
                  <input
                    ref={photoRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                  />
                </Box>
              </Stack>
              <Stack sx={{ width: "100%" }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      md: "row",
                      gap: "0.5rem",
                      width: "100%",
                    },
                  }}
                >
                  <TextField
                    label="First Name"
                    value={props.values.firstName}
                    name="firstName"
                    onChange={(e) => {
                      props.handleChange(e);
                      setSaved(false);
                      dispatch(clearPersonalDetails());
                    }}
                    variant="filled"
                    required
                    fullWidth
                    error={
                      props.touched.firstName && Boolean(props.errors.firstName)
                    }
                  />
                  <TextField
                    label="Last Name"
                    value={props.values.lastName}
                    name="lastName"
                    onChange={(e) => {
                      props.handleChange(e);
                      setSaved(false);
                      dispatch(clearPersonalDetails());
                    }}
                    variant="filled"
                    required
                    fullWidth
                    error={
                      props.touched.lastName && Boolean(props.errors.lastName)
                    }
                  />
                </Stack>
                <Stack sx={{ paddingTop: "0.5rem" }}>
                  <TextField
                    label="Email Address"
                    value={props.values.emailAddress}
                    name="emailAddress"
                    onChange={(e) => {
                      props.handleChange(e);
                      setSaved(false);
                      dispatch(clearPersonalDetails());
                    }}
                    variant="filled"
                    required
                    fullWidth
                    placeholder="easypeasyresume@epr.com"
                    error={
                      props.touched.emailAddress &&
                      Boolean(props.errors.emailAddress)
                    }
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{ paddingTop: "0.5rem", gap: "0.5rem" }}>
              <TextField
                label="Career"
                value={props.values.career}
                name="career"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearPersonalDetails());
                }}
                variant="filled"
                placeholder="IT Expert"
                required
                fullWidth
                error={props.touched.career && Boolean(props.errors.career)}
              />
              <TextField
                label="Website"
                value={props.values.website}
                name="website"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearPersonalDetails());
                }}
                variant="filled"
                placeholder="https://www.easypeasyresume.com"
                fullWidth
                error={props.touched.website && Boolean(props.errors.website)}
              />
              <MuiTelInput
                label="Phone Number"
                value={props.values.phoneNumber}
                onChange={setPhoneNumer}
                variant="filled"
                required
                error={
                  props.touched.phoneNumber && Boolean(props.errors.phoneNumber)
                }
              />
              <Stack direction="row" spacing={1}>
                <TextField
                  label="Country"
                  value={props.values.country}
                  name="country"
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                    dispatch(clearPersonalDetails());
                  }}
                  variant="filled"
                  placeholder="USA"
                  required
                  fullWidth
                  error={props.touched.country && Boolean(props.errors.country)}
                />
                <TextField
                  label="City"
                  value={props.values.city}
                  name="city"
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                    dispatch(clearPersonalDetails());
                  }}
                  variant="filled"
                  placeholder="Los Angeles"
                  required
                  fullWidth
                  error={props.touched.city && Boolean(props.errors.city)}
                />
              </Stack>
              <TextField
                label="About Me"
                value={props.values.aboutMe}
                name="aboutMe"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearPersonalDetails());
                }}
                variant="filled"
                multiline
                rows={4}
                fullWidth
                error={props.touched.aboutMe && Boolean(props.errors.aboutMe)}
              />
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "flex-end" }}
              >
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={resetForm}
                  type="reset"
                  sx={{ width: "fit-content" }}
                >
                  Reset
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  startIcon={saved ? <CheckIcon /> : <SaveIcon />}
                  disabled={saved ? true : false}
                  sx={{
                    width: "fit-content",
                    "&:disabled": {
                      backgroundColor: "success.main",
                      color: "success.contrastText",
                    },
                  }}
                >
                  {saved ? "Saved" : "Save"}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
