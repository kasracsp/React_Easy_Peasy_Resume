import React, { useEffect, useState } from "react";
import { Box, Avatar, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

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
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#1B1E2F",
      }}
    >
      {preview && (
      <Avatar
        src={preview}
        sx={{
          width: "200px",
          height: "200px",
          border: "10px solid transparent",
          boxShadow: "0 0 0 2px #fff",
          marginBottom: "2rem",
        }}
      />)}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "placard",
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#ffd26b",
          textAlign: "center",
        }}
      >
        {personalDetailsState.firstName} {personalDetailsState.lastName}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "400",
          color: "#fefefe",
        }}
      >
        {personalDetailsState.career}
      </Typography>
    </Stack>
  );
};

export default PersonalInfo;
