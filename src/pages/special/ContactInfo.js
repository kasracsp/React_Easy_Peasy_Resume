import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Link,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import AboutMe from "./AboutMe";
import SocialMedia from "./SocialMedia";

const CategoryStack = styled(Stack)({
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: "3rem",
  paddingRight: "2rem",
  backgroundColor: "#f0f1f6",
  width: "50%",
  position: "relative",
});

const ContentTypography = styled(Typography)({
  color: "#1b1e2f",
  fontFamily: "inter",
  fontWeight: "500",
  fontSize: "1.3rem",
});

const ContactInfo = () => {
  const [web, setWeb] = useState("");
  const personalDetailsState = useSelector(
    (state) => state.personalDetailsState
  );
  
  useEffect(() => {
    if (personalDetailsState.website) {
      const index = personalDetailsState.website.indexOf("://");
      const trimStr = personalDetailsState.website.slice(index + 3);
      setWeb(trimStr);
    }
  }, []);
  return (
    <CategoryStack spacing={3}>
      <SocialMedia />
      <List sx={{ width: "100%" }}>
        <ListItem sx={{ padding: 0, width: "100%" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <EmailIcon sx={{ color: "#1b1e2f" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                underline="none"
                href={`mailto:${personalDetailsState.emailAddress}`}
                sx={{
                  width: "100%",
                  color: "#1b1e2f",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  wordBreak: "break-all",
                }}
              >
                {personalDetailsState.emailAddress}
              </Link>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <PhoneIphoneIcon sx={{ color: "#1b1e2f" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography sx={{ fontSize: "1.3rem" }}>
                {personalDetailsState.phoneNumber}
              </ContentTypography>
            }
          />
        </ListItem>
        {personalDetailsState.website && (
        <ListItem sx={{ padding: 0, width: "100%" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <LanguageIcon sx={{ color: "#1b1e2f" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                underline="none"
                href={personalDetailsState.website}
                sx={{
                  width: "100%",
                  color: "#1b1e2f",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  wordBreak: "break-all",
                }}
              >
                {web}
              </Link>
            }
          />
        </ListItem>)}
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <FmdGoodIcon sx={{ color: "#1b1e2f" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography
                sx={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              >
                {personalDetailsState.city}, {personalDetailsState.country}
              </ContentTypography>
            }
          />
        </ListItem>
      </List>
      <AboutMe />
    </CategoryStack>
  );
};

export default ContactInfo;
