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

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "2rem",
  marginBottom: "2rem",
});

const CategoryTypography = styled(Typography)({
  color: "#000",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "20rem",
    height: "5px",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#000",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const ProjectsInfo = () => {
  const projectsState = useSelector((state) => state.projectsState);
  return (
    <CategoryStack>
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
                sx={{ fontSize: "0.8rem", color: "#000" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <ContentTypography noWrap>{project.title}</ContentTypography>
              }
            />
            <Stack direction="row" spacing={0.5}>
              {project.website && (
                <Link color="#000" href={project.website}>
                  <Button
                    startIcon={<LinkIcon />}
                    sx={{
                      color: "#000",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    website
                  </Button>
                </Link>
              )}
              <Link color="#000" href={project.github}>
                <Button
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: "#000",
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
    </CategoryStack>
  );
};

export default ProjectsInfo;
