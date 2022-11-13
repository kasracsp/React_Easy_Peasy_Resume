import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Link,
  ListItemIcon,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CategoryTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
});

const ContentTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const ProjectsInfo = () => {
  const projectsState = useSelector((state) => state.projectsState);
  return (
    <Stack sx={{ marginTop: "2rem" }}>
      <CategoryTypography variant="h4">projects</CategoryTypography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          listStyle: "circle",
        }}
      >
        {projectsState.projects.map((project) => (
          <ListItem key={project.id} disableGutters sx={{ paddingY: 0 }}>
            <ListItemIcon sx={{ minWidth: "24px", paddingRight: "0.6rem" }}>
              <FiberManualRecordIcon
                sx={{ fontSize: "0.8rem", color: "#1B1E2F" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <ContentTypography noWrap>{project.title}</ContentTypography>
              }
            />
            <Stack direction="row" spacing={0.5}>
              {project.website && (
                <Link color="#1B1E2F" href={project.website}>
                  <IconButton
                    sx={{
                      color: "#1B1E2F",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <LinkIcon />
                  </IconButton>
                </Link>
              )}
              <Link color="#1B1E2F" href={project.github}>
                <IconButton
                  sx={{
                    color: "#1B1E2F",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ProjectsInfo;
