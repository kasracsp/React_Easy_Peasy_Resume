import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setSocialMedia,
  clearSocialMedia,
  enableSocialMedia,
} from "../../redux/socialMedia/SocialMediaAction";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  github: yup.string("Enter your github").url("Please enter a valid link"),
  linkedin: yup.string("Enter your linkedin").url("Please enter a valid link"),
  instagram: yup
    .string("Enter your instagram")
    .url("Please enter a valid link"),
  facebook: yup.string("Enter your facebook").url("Please enter a valid link"),
});

const SocialMedia = () => {
  const dispatch = useDispatch();
  const socialMediaState = useSelector((state) => state.socialMediaState);
  const [saved, setSaved] = useState(false);
  const formikRef = useRef();
  const resetForm = (event) => {
    event.preventDefault();
    formikRef.current.resetForm();
    dispatch(clearSocialMedia());
    setSaved(false);
  };
  const [noSocialMedia, setNoSocialMedia] = useState(false);
  const handleCheckbox = (event) => {
    setNoSocialMedia(event.target.checked);
    dispatch(enableSocialMedia(event.target.checked));
    setSaved(false);
  };
  useEffect(() => {
    formikRef.current.setFieldValue("github", socialMediaState.github);
    formikRef.current.setFieldValue("linkedin", socialMediaState.linkedin);
    formikRef.current.setFieldValue("instagram", socialMediaState.instagram);
    formikRef.current.setFieldValue("facebook", socialMediaState.facebook);
    if (
      socialMediaState.isSocialMediaCompleted == false
    ) {
      setNoSocialMedia(false);
    } else if (
      socialMediaState.github === "" &&
      socialMediaState.linkedin === "" &&
      socialMediaState.instagram === "" &&
      socialMediaState.facebook === ""
    ) {
      setNoSocialMedia(true);
    } else {
      setNoSocialMedia(false);
    }
  }, []);

  return (
    <Formik
      initialValues={{
        github: "",
        linkedin: "",
        instagram: "",
        facebook: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setSocialMedia(values));
        setSaved(true);
      }}
      innerRef={formikRef}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} noValidate>
          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            label="I don't have any social media"
            control={
              <Checkbox checked={noSocialMedia} onChange={handleCheckbox} />
            }
          />
          {!noSocialMedia && (
            <Stack spacing={1}>
              <TextField
                label="Github"
                value={props.values.github}
                name="github"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearSocialMedia());
                }}
                placeholder="https://github.com/..."
                variant="filled"
                fullWidth
                error={props.touched.github && Boolean(props.errors.github)}
              />
              <TextField
                label="LinkedIn"
                value={props.values.linkedin}
                name="linkedin"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearSocialMedia());
                }}
                placeholder="https://www.linkedin.com/..."
                variant="filled"
                fullWidth
                error={props.touched.linkedin && Boolean(props.errors.linkedin)}
              />
              <TextField
                label="Instagram"
                value={props.values.instagram}
                name="instagram"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearSocialMedia());
                }}
                placeholder="https://www.instagram.com/..."
                variant="filled"
                fullWidth
                error={
                  props.touched.instagram && Boolean(props.errors.instagram)
                }
              />
              <TextField
                label="Facebook"
                value={props.values.facebook}
                name="facebook"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearSocialMedia());
                }}
                placeholder="https://www.facebook.com/..."
                variant="filled"
                fullWidth
                error={props.touched.facebook && Boolean(props.errors.facebook)}
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
          )}
        </form>
      )}
    </Formik>
  );
};

export default SocialMedia;
