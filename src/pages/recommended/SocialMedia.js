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
        right: 0,
        backgroundColor: "#000",
        color: "#fff",
        width: "200px",
        height: "fit-content",
      }}
    >
      {socialMediaState.instagram && (
        <IconButton href={socialMediaState.instagram} sx={{ paddingRight: 0 }}>
          <InstagramIcon sx={{ color: "#fff", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.facebook && (
        <IconButton href={socialMediaState.facebook} sx={{ paddingRight: 0 }}>
          <FacebookIcon sx={{ color: "#fff", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.linkedin && (
        <IconButton href={socialMediaState.linkedin} sx={{ paddingRight: 0 }}>
          <LinkedInIcon sx={{ color: "#fff", fontSize: "2rem" }} />
        </IconButton>
      )}
      {socialMediaState.github && (
        <IconButton href={socialMediaState.github} sx={{ paddingRight: 0 }}>
          <GitHubIcon sx={{ color: "#fff", fontSize: "1.8rem" }} />
        </IconButton>
      )}
    </Stack>
  );
};

export default SocialMedia;
