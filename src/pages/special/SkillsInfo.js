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

const CategoryTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "Oswald",
  fontWeight: "600",
  letterSpacing: "1px",
  marginTop:'2rem',
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
});
const ContentTypography = styled(Typography)({
  color: "#1B1E2F",
  fontFamily: "inter",
  fontWeight: "500",
});

const CategoryStack = styled(Stack)({
  paddingBottom: "2rem",
  borderBottom:'3px solid #fff',
});

const SkillsInfo = () => {
  const skillsState=useSelector(state=>state.skillsState)
  return (
    <CategoryStack>
      <CategoryTypography variant="h4">skills</CategoryTypography>
      <List
        sx={{ color: "#1B1E2F", listStyleType: "disc", fontSize: "1.5rem" }}
      >
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
