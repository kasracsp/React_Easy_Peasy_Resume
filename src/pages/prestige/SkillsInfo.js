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
  letterSpacing: "2px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::after": {
    content: '""',
    width: "306px",
    height: "1px",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
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
