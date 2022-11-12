import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Stack, Typography } from "@mui/material";

const PersonalInfo = () => {
  const [preview, setPreview] = useState(null);
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  useEffect(() => {
    if (personalDetailsState.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(personalDetailsState.photo);
    } else {
      setPreview(null);
    }
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        marginTop: "3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "placard",
          textTransform: "uppercase",
          fontWeight: "400",
          color: "#fff",
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
          // fontSize: "1.5rem",
          color: "#fefefe",
        }}
      >
        {personalDetailsState.career}
      </Typography>
      {preview && (
      <Box
        sx={{
          marginY: "2rem",
          width: "100%",
          aspectRatio: "1",
          "& img": {
            width: "100%",
            aspectRatio: "1",
          },
        }}
      >
        <img
          src={preview}
          alt="avatar"
        />
      </Box>)}
    </Stack>
  );
};

export default PersonalInfo;
