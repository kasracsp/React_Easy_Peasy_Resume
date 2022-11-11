import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryStack = styled(Stack)({
  marginBottom: "2rem",
});

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

const InterestsInfo = () => {
  const hobbiesState = useSelector((state) => state.hobbiesState);
  return (
    (hobbiesState.hobbies.length>0) &&
    <CategoryStack>
      <CategoryTypography variant="h5">
        Interest & Activities
      </CategoryTypography>
      <List
        sx={{ listStyleType: "disc", color: "#323B4C", fontSize: "1.5rem" }}
      >
        {hobbiesState.hobbies.map((item) => (
          <ListItem
            key={item}
            disableGutters
            sx={{ paddingY: 0, display: "list-item", marginLeft: "1.38rem" }}
          >
            <ListItemText
              primary={<ContentTypography>{item}</ContentTypography>}
            />
          </ListItem>
        ))}
      </List>
    </CategoryStack>
  );
};

export default InterestsInfo;
