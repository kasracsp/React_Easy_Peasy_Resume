import React from "react";
import { useSelector } from "react-redux";
import { IconButton, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMedia = () => {
  const socialMediaState = useSelector((state) => state.socialMediaState);
  return (
    <Stack
      direction="row"
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        color: "#FFD26B",
        backgroundColor: "#1b1e2f",
        height: "fit-content",
        transform: "translate(-50%,0)",
        borderRadius: "0 0 1rem 1rem",
        "& a": {
          padding: "0.5rem",
          paddingRight: 0,
        },
        "& a:last-child": {
          paddingRight: "0.5rem",
        },
      }}
      spacing={1}
    >
      {socialMediaState.instagram && (
        <IconButton href={socialMediaState.instagram} sx={{ padding: 0 }}>
          <InstagramIcon sx={{ color: "#FFD26B", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.facebook && (
        <IconButton href={socialMediaState.facebook} sx={{ padding: 0 }}>
          <FacebookIcon sx={{ color: "#FFD26B", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.linkedin && (
        <IconButton href={socialMediaState.linkedin} sx={{ padding: 0 }}>
          <LinkedInIcon sx={{ color: "#FFD26B", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.github && (
        <IconButton href={socialMediaState.github} sx={{ padding: 0 }}>
          <GitHubIcon sx={{ color: "#FFD26B", fontSize: "1.8rem" }} />
        </IconButton>
      )}
    </Stack>
  );
};

export default SocialMedia;
