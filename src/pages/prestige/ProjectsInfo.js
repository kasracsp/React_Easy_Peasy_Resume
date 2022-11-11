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
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CategoryTypography = styled(Typography)({
  color: "#323B4C",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "1px",
    backgroundColor: "#323B4C",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#323B4C",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const ProjectsInfo = () => {
  const projectsState = useSelector((state) => state.projectsState);
  return (
    <Stack>
      <CategoryTypography variant="h5">projects</CategoryTypography>
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
                sx={{ fontSize: "0.8rem", color: "#323B4C" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <ContentTypography noWrap>{project.title}</ContentTypography>
              }
            />
            <Stack direction="row" spacing={0.5}>
              {project.website && (
                <Link color="#323B4C" href={project.website}>
                  <Button
                    startIcon={<LinkIcon />}
                    sx={{
                      color: "#323B4C",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    website
                  </Button>
                </Link>
              )}
              <Link color="#323B4C" href={project.github}>
                <Button
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: "#323B4C",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Github
                </Button>
              </Link>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ProjectsInfo;
