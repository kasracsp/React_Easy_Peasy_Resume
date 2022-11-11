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
  paddingRight: "2rem",
});


const InterestsInfo = () => {
  const hobbiesState = useSelector((state) => state.hobbiesState);
  return (
    (hobbiesState.hobbies.length>0) &&
    <CategoryStack>
      <CategoryTypography variant="h4">
        Interest & Activities
      </CategoryTypography>
      <List sx={{ listStyleType: "disc", fontSize: "1.5rem" }}>
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
}

export default InterestsInfo