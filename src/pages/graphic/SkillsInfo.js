import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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
});

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "5rem",
});

const SkillsInfo = () => {
  const skillsState = useSelector((state) => state.skillsState);
  return (
    <CategoryStack>
      <CategoryTypography variant="h4">skills</CategoryTypography>
      <List
        sx={{ color: "#2c3f4e", listStyleType: "disc", fontSize: "1.5rem" }}
      >
        {skillsState.skills.map((skill, index) => (
          <ListItem
            key={index}
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
