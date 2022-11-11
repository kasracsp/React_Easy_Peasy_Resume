import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";

const PersonalInfo = () => {
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  return (
    <Stack
      sx={{
        width: "100%",
        marginTop: "5rem",
        marginBottom: "3rem",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "placard",
          textTransform: "uppercase",
          fontWeight: "400",
          color: "#323B4C",
        }}
      >
        {personalDetailsState.firstName} {personalDetailsState.lastName}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Oswald",
          textTransform: "uppercase",
          fontWeight: "400",
          color: "#323B4C",
        }}
      >
        {personalDetailsState.career}
      </Typography>
      {personalDetailsState.aboutMe && (
      <Typography
        variant="body1"
        sx={{
          fontFamily: "inter",
          fontWeight: "400",
          color: "#323B4C",
        }}
      >
        {personalDetailsState.aboutMe}
      </Typography>)}
    </Stack>
  );
};

export default PersonalInfo;
