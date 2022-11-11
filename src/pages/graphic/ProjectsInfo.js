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
  paddingRight: "2rem",
});

const CategoryTypography = styled(Typography)({
  color: "#2c3f4e",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "3px",
    backgroundColor: "#2c3f4e",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

const ContentTypography = styled(Typography)({
  color: "#2c3f4e",
  fontFamily: "inter",
  fontWeight: "500",
  textTransform: "uppercase",
});

const ProjectsInfo = () => {
  const projectsState = useSelector((state) => state.projectsState);
  return (
    <CategoryStack>
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
                sx={{ fontSize: "0.8rem", color: "#2c3f4e" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <ContentTypography noWrap>{project.title}</ContentTypography>
              }
            />
            <Stack direction="row" spacing={0.5}>
              {project.website && (
                <Link color="#2c3f4e" href={project.website}>
                  <Button
                    startIcon={<LinkIcon />}
                    sx={{
                      color: "#2c3f4e",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    website
                  </Button>
                </Link>
              )}
              <Link color="#2c3f4e" href={project.github}>
                <Button
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: "#2c3f4e",
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
