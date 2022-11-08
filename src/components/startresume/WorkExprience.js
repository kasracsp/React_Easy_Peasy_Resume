import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Formik } from "formik";
import * as yup from "yup";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkExprience,
  clearWorkExprience,
} from "../../redux/workExprience/WorkExprienceAction";

const validationSchema = yup.object({
  company: yup.string("Enter Tilte").required("company is required"),
  role: yup.string("Enter role").required("role is required"),
  startDate: yup.date("Enter your startDate").required("startDate is required"),
  endDate: yup.date("Enter your endDate").required("endDate is required"),
});

const WorkExprience = () => {
  const dispatch = useDispatch();
  const workExprienceState = useSelector((state) => state.workExprienceState);
  const formikRef = useRef();
  const [edit, setEdit] = useState();
  const [saved, setSaved] = useState(false);
  const [workExprienceHolder, setWorkExprienceHolder] = useState([]);
  const [open, setOpen] = useState([]);
  const collapseHandler = (event) => {
    const index = open.indexOf(event.target.id);
    if (index === -1) {
      setOpen([...open, event.target.id]);
    } else {
      setOpen(open.filter((item) => item !== event.target.id));
    }
  };
  const deleteWorkExprience = (id) => {
    setWorkExprienceHolder(
      workExprienceHolder.filter((exprience) => exprience.id !== id)
    );
    formikRef.current.resetForm();
    setEdit(null);
    setSaved(false);
    dispatch(clearWorkExprience());
  };
  const editWorkExprience = (exprience) => {
    setEdit(exprience.id);
    formikRef.current.setFieldValue("company", exprience.company);
    formikRef.current.setFieldValue("role", exprience.role);
    formikRef.current.setFieldValue("startDate", exprience.startDate);
    formikRef.current.setFieldValue("endDate", exprience.endDate);
    formikRef.current.setFieldValue("description", exprience.description);
  };
  const cancelEditing = () => {
    setEdit(null);
    formikRef.current.resetForm();
    setSaved(true);
  };
  const deleteAll = () => {
    setWorkExprienceHolder([]);
    dispatch(clearWorkExprience());
    setSaved(false);
  };
  const saveAll = () => {
    if (workExprienceHolder.length > 0) {
      dispatch(setWorkExprience(workExprienceHolder));
      setSaved(true);
    }
  };
  const setDates = (value, key) => {
    if (key === "start") {
      formikRef.current.setFieldValue("startDate", value);
    } else {
      formikRef.current.setFieldValue("endDate", value);
    }
    setSaved(false);
    dispatch(clearWorkExprience());
  };
  useEffect(()=>{
    setWorkExprienceHolder(workExprienceState.workExpriences)
  },[])

  return (
    <Stack>
      {workExprienceHolder.length >= 3 && (
        <Alert sx={{ marginBottom: "1rem" }} severity="warning">
          You reached the maximum number of work exprience
        </Alert>
      )}
      {workExprienceHolder.length > 0 && (
        <List
          sx={{
            paddingY: "0",
            width: { xs: "100%", md: "80%", maxWidth: "500px" },
            margin: "0 auto",
            color: "primary.contrastText",
            borderRadius: ".2rem",
            overflow: "hidden",
          }}
        >
          {workExprienceHolder.map((exprience) => (
            <Stack key={exprience.id}>
              <ListItemButton
                id={exprience.id}
                onClick={collapseHandler}
                sx={{
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {exprience.company}
                    </Typography>
                  }
                  sx={{ pointerEvents: "none" }}
                />
                <Tooltip title="Edit" arrow placement="top-end">
                  <IconButton onClick={() => editWorkExprience(exprience)}>
                    <EditIcon
                      sx={{
                        color: "primary.contrastText",
                        "&:hover": {
                          color: "success.light",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Delete this exprience"
                  arrow
                  placement="top-end"
                >
                  <IconButton onClick={() => deleteWorkExprience(exprience.id)}>
                    <DeleteIcon
                      sx={{
                        color: "primary.contrastText",
                        "&:hover": {
                          color: "error.main",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                {open.includes(exprience.id) ? (
                  <KeyboardArrowUpIcon sx={{ pointerEvents: "none" }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ pointerEvents: "none" }} />
                )}
              </ListItemButton>
              <Collapse
                in={open.includes(exprience.id)}
                timeout="auto"
                unmountOnExit
                sx={{ backgroundColor: "primary.main" }}
              >
                <List>
                  <ListItem>
                    <ListItemText primary={`Role: ${exprience.role}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Start: ${exprience.startDate.toLocaleDateString(
                        "en-UK",
                        { year: "numeric", month: "long" }
                      )}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`End: ${exprience.endDate.toLocaleDateString(
                        "en-UK",
                        { year: "numeric", month: "long" }
                      )}`}
                    />
                  </ListItem>
                  {exprience.description && (
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{ width: "100%", wordBreak: "break-word" }}
                          >
                            Description: {exprience.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )}
                </List>
              </Collapse>
            </Stack>
          ))}
        </List>
      )}
      {workExprienceHolder.length > 0 && <Divider sx={{ marginY: "1rem" }} />}
      <Stack>
        <Formik
          initialValues={{
            company: "",
            role: "",
            startDate: null,
            endDate: null,
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm({
              values: {
                company: "",
                role: "",
                startDate: null,
                endDate: null,
                description: "",
              },
            });
            if (edit) {
              const index = workExprienceHolder.findIndex(
                (item) => item.id === edit
              );
              if (index > -1) {
                workExprienceHolder[index] = { ...values, id: edit };
                setEdit(null);
                setSaved(false)
                dispatch(clearWorkExprience());
              }
            } else {
              setWorkExprienceHolder([
                ...workExprienceHolder,
                { ...values, id: v4() },
              ]);
              dispatch(clearWorkExprience());
            }
          }}
          innerRef={formikRef}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} noValidate>
              <Stack spacing={1}>
                <TextField
                  label="Company"
                  value={props.values.company}
                  name="company"
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  required
                  fullWidth
                  error={props.touched.company && Boolean(props.errors.company)}
                />
                <TextField
                  label="Role"
                  value={props.values.role}
                  name="role"
                  placeholder="https://role.com/..."
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  required
                  fullWidth
                  error={props.touched.role && Boolean(props.errors.role)}
                />
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    paddingTop: "0.5rem",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <MobileDatePicker
                    label="Start"
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        {...params}
                        error={
                          props.touched.startDate &&
                          Boolean(props.errors.startDate)
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
                  sx={{
                    paddingTop: "0.5rem",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <DatePicker
                    label="Start"
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        {...params}
                        error={
                          props.touched.startDate &&
                          Boolean(props.errors.startDate)
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
                <TextField
                  label="Description"
                  value={props.values.description}
                  name="description"
                  multiline
                  rows={4}
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  fullWidth
                  error={
                    props.touched.description &&
                    Boolean(props.errors.description)
                  }
                />
                {edit ? (
                  <Stack direction="row" spacing={1}>
                    <Button
                      color="success"
                      variant="outlined"
                      onClick={cancelEditing}
                      sx={{ width: "fit-content" }}
                    >
                      cancel
                    </Button>
                    <Button
                      color="success"
                      variant="contained"
                      type="submit"
                      sx={{ width: "fit-content" }}
                    >
                      Edit
                    </Button>
                  </Stack>
                ) : (
                  <Button
                    color="success"
                    variant="contained"
                    endIcon={<AddIcon />}
                    disabled={workExprienceHolder.length >= 3}
                    type="submit"
                    sx={{ width: "fit-content" }}
                  >
                    Add
                  </Button>
                )}
              </Stack>
            </form>
          )}
        </Formik>
      </Stack>
      <Divider sx={{ marginY: "1rem" }} />
      <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
        <Button
          color="error"
          variant="outlined"
          onClick={deleteAll}
          sx={{ width: "fit-content" }}
        >
          Delete all
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={saveAll}
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
  );
};

export default WorkExprience;
