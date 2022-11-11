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
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "inter",
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#fff",
          marginTop: "3rem",
        }}
      >
        {personalDetailsState.firstName} {personalDetailsState.lastName}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Oswald",
          textTransform: "uppercase",
          fontWeight: "400",
          color: "#fefefe",
        }}
      >
        {personalDetailsState.career}
      </Typography>
      {preview && (
        <Avatar
          src={preview}
          sx={{
            width: "180px",
            height: "180px",
            border: "5px solid #f2f2f4",
            position: "absolute",
            bottom: "-5.7rem",
            left: "50%",
            transform: "translate(-50%,0)",
          }}
        />
      )}
    </Stack>
  );
};

export default PersonalInfo;
