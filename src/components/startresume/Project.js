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
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Formik } from "formik";
import * as yup from "yup";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setProjects,clearProjects } from "../../redux/projects/ProjectsAction";

const validationSchema = yup.object({
  title: yup.string("Enter Tilte").required("Title is required"),
  github: yup
    .string("Enter your Github link")
    .required("Github link is required")
    .url("Please enter a valid link"),
  website: yup
    .string("Enter your website link")
    .url("Please enter a valid link"),
});

const Project = () => {
  const dispatch = useDispatch();
  const projectsState = useSelector((state) => state.projectsState);
  const formikRef = useRef();
  const [edit, setEdit] = useState();
  const [saved, setSaved] = useState(false);
  const [projectsHolder, setProjectsHolder] = useState([]);
  const [open, setOpen] = useState([]);
  const collapseHandler = (event) => {
    const index = open.indexOf(event.target.id);
    if (index === -1) {
      setOpen([...open, event.target.id]);
    } else {
      setOpen(open.filter((item) => item !== event.target.id));
    }
  };
  const deleteProject = (id) => {
    setProjectsHolder(projectsHolder.filter((project) => project.id !== id));
    formikRef.current.resetForm();
    setEdit(null);
    setSaved(false);
    dispatch(clearProjects());
  };
  const editProject = (project) => {
    setEdit(project.id);
    formikRef.current.setFieldValue("title", project.title);
    formikRef.current.setFieldValue("github", project.github);
    formikRef.current.setFieldValue("website", project.website);
  };
  const cancelEditing = () => {
    setEdit(null);
    formikRef.current.resetForm();
    setSaved(true);
  };
  const deleteAll = () => {
    setProjectsHolder([]);
    dispatch(clearProjects());
    setSaved(false);
  };
  const saveAll = () => {
    if (projectsHolder.length > 0) {
      dispatch(setProjects(projectsHolder));
      setSaved(true);
    }
  };
  useEffect(()=>{
    setProjectsHolder(projectsState.projects)
  },[])

  return (
    <Stack>
      {projectsHolder.length>=5 && <Alert sx={{marginBottom:'1rem'}} severity="warning">You reached the maximum number of projects</Alert>}
      {projectsHolder.length > 0 && (
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
          {projectsHolder.map((project) => (
            <Stack key={project.id}>
              <ListItemButton
                id={project.id}
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
                      {project.title}
                    </Typography>
                  }
                  sx={{ pointerEvents: "none" }}
                />
                <Tooltip title="Edit" arrow placement="top-end">
                  <IconButton onClick={() => editProject(project)}>
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
                <Tooltip title="Delete this project" arrow placement="top-end">
                  <IconButton onClick={() => deleteProject(project.id)}>
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
                {open.includes(project.id) ? (
                  <KeyboardArrowUpIcon sx={{ pointerEvents: "none" }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ pointerEvents: "none" }} />
                )}
              </ListItemButton>
              <Collapse
                in={open.includes(project.id)}
                timeout="auto"
                unmountOnExit
                sx={{ backgroundColor: "primary.main" }}
              >
                <List>
                  <ListItem>
                    <ListItemIcon
                      sx={{ minWidth: "fit-content", marginRight: ".5rem" }}
                    >
                      <GitHubIcon sx={{ color: "primary.contrastText" }} />
                    </ListItemIcon>
                    <ListItemText primary={project.github} />
                  </ListItem>
                  {project.website && (
                    <ListItem>
                      <ListItemIcon
                        sx={{ minWidth: "fit-content", marginRight: ".5rem" }}
                      >
                        <LinkIcon sx={{ color: "primary.contrastText" }} />
                      </ListItemIcon>
                      <ListItemText primary={project.website} />
                    </ListItem>
                  )}
                </List>
              </Collapse>
            </Stack>
          ))}
        </List>
      )}
      {projectsHolder.length > 0 && <Divider sx={{ marginY: "1rem" }} />}

      <Stack>
        <Formik
          initialValues={{
            title: "",
            github: "",
            website: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm({
              values: {
                title: "",
                github: "",
                website: "",
              },
            });
            if (edit) {
              const index = projectsHolder.findIndex(
                (item) => item.id === edit
              );
              if (index > -1) {
                projectsHolder[index] = { ...values, id: edit };
                setEdit(null);
                setSaved(false);
                dispatch(clearProjects());
              }
            } else {
              setProjectsHolder([...projectsHolder, { ...values, id: v4() }]);
              dispatch(clearProjects());
            }
          }}
          innerRef={formikRef}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} noValidate>
              <Stack spacing={1}>
                <TextField
                  label="Title"
                  value={props.values.title}
                  name="title"
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  required
                  fullWidth
                  error={props.touched.title && Boolean(props.errors.title)}
                />
                <TextField
                  label="Github Link"
                  value={props.values.github}
                  name="github"
                  placeholder="https://github.com/..."
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  required
                  fullWidth
                  error={props.touched.github && Boolean(props.errors.github)}
                />
                <TextField
                  label="Website"
                  value={props.values.website}
                  name="website"
                  placeholder="https://www.easypeasyresume.com"
                  onChange={(e) => {
                    props.handleChange(e);
                    setSaved(false);
                  }}
                  variant="filled"
                  fullWidth
                  error={props.touched.website && Boolean(props.errors.website)}
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
                ) :  (
                  <Button
                    color="success"
                    variant="contained"
                    endIcon={<AddIcon />}
                    type="submit"
                    disabled={projectsHolder.length>=5}
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

export default Project;
