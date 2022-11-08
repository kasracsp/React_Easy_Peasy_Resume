import React, { useState, useRef, useEffect } from "react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastEducation,
  clearLastEducation,
} from "../../redux/lastEducation/LastEducationAction";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import { Formik } from "formik";
import * as yup from "yup";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";

const validationSchema = yup.object({
  study: yup.string("Enter your study").required("study is required"),
  school: yup.string("Enter your school").required("school is required"),
  level: yup.string("Enter your level").required("level is required"),
  city: yup.string("Enter your city").required("city is required"),
  startDate: yup.date("Enter your startDate").required("startDate is required"),
  endDate: yup.date("Enter your endDate").required("endDate is required"),
  gpa: yup
    .number("Enter your gpa")
    .min(0.1, "it can't be less than 0")
    .max(20, "it can't be more than 20")
    .required("gpa is required"),
});

const LastEducation = () => {
  const dispatch = useDispatch();
  const lastEducationState = useSelector((state) => state.lastEducationState);
  const [saved, setSaved] = useState(false);
  const formikRef = useRef();
  const resetForm = (event) => {
    event.preventDefault();
    formikRef.current.resetForm();
    dispatch(clearLastEducation());
    setSaved(false);
  };
  const setDates = (value, key) => {
    if (key === "start") {
      formikRef.current.setFieldValue("startDate", value);
    } else {
      formikRef.current.setFieldValue("endDate", value);
    }
    setSaved(false);
    dispatch(clearLastEducation());
  };

  useEffect(() => {
    formikRef.current.setFieldValue("study", lastEducationState.study);
    formikRef.current.setFieldValue("school", lastEducationState.school);
    formikRef.current.setFieldValue("level", lastEducationState.level);
    formikRef.current.setFieldValue("city", lastEducationState.city);
    formikRef.current.setFieldValue("startDate", lastEducationState.startDate);
    formikRef.current.setFieldValue("endDate", lastEducationState.endDate);
    formikRef.current.setFieldValue("gpa", lastEducationState.gpa);
  }, []);

  return (
    <Formik
      initialValues={{
        study: "",
        school: "",
        level: "",
        city: "",
        startDate: null,
        endDate: null,
        gpa: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setLastEducation(values));
        setSaved(true);
      }}
      innerRef={formikRef}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} noValidate>
          <Stack spacing={1}>
            <TextField
              label="Study"
              value={props.values.study}
              name="study"
              onChange={(e) => {
                props.handleChange(e);
                setSaved(false);
                dispatch(clearLastEducation());
              }}
              variant="filled"
              required
              fullWidth
              error={props.touched.study && Boolean(props.errors.study)}
            />
            <Stack direction="row" spacing={1}>
            <TextField
              label="school"
              value={props.values.school}
              name="school"
              onChange={(e) => {
                props.handleChange(e);
                setSaved(false);
                dispatch(clearLastEducation());
              }}
              variant="filled"
              required
              fullWidth
              error={props.touched.school && Boolean(props.errors.school)}
            />
            <TextField
              label="level"
              value={props.values.level}
              name="level"
              onChange={(e) => {
                props.handleChange(e);
                setSaved(false);
                dispatch(clearLastEducation());
              }}
              variant="filled"
              required
              fullWidth
              select
              error={props.touched.level && Boolean(props.errors.level)}
            >
              <MenuItem value='High School degree'>High School degree</MenuItem>
              <MenuItem value='university degree'>university degree</MenuItem>
              <MenuItem value='Masters degree'>Masters degree</MenuItem>
              <MenuItem value='Doctorate degree'>Doctorate degree</MenuItem>
            </TextField>
            </Stack>
            

            <Stack direction="row" spacing={1}>
              <TextField
                label="GPA"
                type="number"
                value={props.values.gpa}
                name="gpa"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearLastEducation());
                }}
                variant="filled"
                placeholder="19.99"
                inputProps={{
                  min: 0,
                  max: 20,
                  step: 0.01,
                }}
                required
                fullWidth
                error={props.touched.gpa && Boolean(props.errors.gpa)}
              />
              <TextField
                label="City"
                value={props.values.city}
                name="city"
                onChange={(e) => {
                  props.handleChange(e);
                  setSaved(false);
                  dispatch(clearLastEducation());
                }}
                variant="filled"
                placeholder="e.g. Los Angeles"
                required
                fullWidth
                error={props.touched.city && Boolean(props.errors.city)}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ paddingTop: "0.5rem", display: { xs: "flex", md: "none" } }}
            >
              <MobileDatePicker
                label="Start"
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    error={
                      props.touched.startDate && Boolean(props.errors.startDate)
                    }
                  />
                )}
                value={props.values.startDate}
                onChange={(newValue) => setDates(newValue, "start")}
              />
              <MobileDatePicker
                label="End"
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    error={
                      props.touched.endDate && Boolean(props.errors.endDate)
                    }
                  />
                )}
                value={props.values.endDate}
                onChange={(newValue) => setDates(newValue, "end")}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{ paddingTop: "0.5rem", display: { xs: "none", md: "flex" } }}
            >
              <DatePicker
                label="Start"
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    error={
                      props.touched.startDate && Boolean(props.errors.startDate)
                    }
                  />
                )}
                value={props.values.startDate}
                onChange={(newValue) => setDates(newValue, "start")}
              />
              <DatePicker
                label="End"
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    error={
                      props.touched.endDate && Boolean(props.errors.endDate)
                    }
                  />
                )}
                value={props.values.endDate}
                onChange={(newValue) => setDates(newValue, "end")}
              />
            </Stack>
            <Stack direction="row" spacing={1}></Stack>
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
        </form>
      )}
    </Formik>
  );
};

export default LastEducation;
