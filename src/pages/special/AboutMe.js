import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CategoryTypography = styled(Typography)({
  color: "#1b1e2f",
  fontFamily: "Oswald",
  fontWeight: "600",
  width: "100%",
  letterSpacing: "1px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "2px",
    backgroundColor: "#1b1e2f",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
const ContentTypography = styled(Typography)({
  color: "#1b1e2f",
  fontFamily: "inter",
  fontWeight: "500",
});

const AboutMe = () => {
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  return (
    personalDetailsState.aboutMe && (
      <Stack width="100%">
        <CategoryTypography variant="h5">About Me</CategoryTypography>
        <ContentTypography
          variant="body1"
          sx={{
            marginTop: "1rem",
            "&::first-letter": {
              textTransform: "uppercase",
            },
            color: "#1b1e2f",
          }}
        >
          {personalDetailsState.aboutMe}
        </ContentTypography>
      </Stack>
    )
  );
};

export default AboutMe;
