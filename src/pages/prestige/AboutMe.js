import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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
});

const AboutMe = () => {
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  return (
    personalDetailsState.aboutMe && (
      <CategoryStack>
        <CategoryTypography variant="h5">About Me</CategoryTypography>
        <ContentTypography
          variant="body1"
          sx={{
            marginTop: "1rem",
            "&::first-letter": {
              textTransform: "uppercase",
            },
          }}
        >
          {personalDetailsState.aboutMe}
        </ContentTypography>
      </CategoryStack>
    )
  );
};

export default AboutMe;
