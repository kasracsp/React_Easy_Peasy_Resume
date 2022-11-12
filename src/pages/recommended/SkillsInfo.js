import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "2rem",
});

const SubjectTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "Oswald",
  fontWeight: "600",
  // letterSpacing: "3px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
});

const ContentTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "inter",
  fontWeight: "500",
});

const SkillsInfo = () => {
  const skillsState=useSelector(state=>state.skillsState)
  return (
    <CategoryStack>
      <SubjectTypography variant="h5">skills</SubjectTypography>
      <List sx={{ color: "#fff", listStyleType: "disc", fontSize: "1.5rem" }}>
        {skillsState.skills.map((skill) => (
          <ListItem
            key={skill}
            sx={{ padding: 0, marginLeft: "1.38rem", display: "list-item" }}
          >
            <ListItemText
              sx={{ margin: 0 }}
              primary={
                <ContentTypography variant="h6">{skill}</ContentTypography>
              }
            />
          </ListItem>
        ))}
      </List>
    </CategoryStack>
  );
};

export default SkillsInfo;
