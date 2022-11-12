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

const CategoryStack = styled(Stack)({
  paddingLeft: "3rem",
  paddingRight: "2rem",
});

const SubjectTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "Oswald",
  fontWeight: "600",
  // letterSpacing: "3px",
  paddingBottom: "0.5rem",
  textTransform: "uppercase",
  position: "relative",
});

const ContentTypography = styled(Typography)({
  color: "#fff",
  fontFamily: "inter",
  fontWeight: "500",
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
    <CategoryStack>
      <SubjectTypography variant="h5">contact</SubjectTypography>
      <List sx={{ width: "100%" }}>
        <ListItem sx={{ padding: 0, width: "100%" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <EmailIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                underline="none"
                href={`mailto:${personalDetailsState.emailAddress}`}
                sx={{
                  width: "100%",
                  color: "#fff",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "1.1rem",
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
            <PhoneIphoneIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography sx={{ fontSize: "1.1rem" }}>
                {personalDetailsState.phoneNumber}
              </ContentTypography>
            }
          />
        </ListItem>
        {personalDetailsState.website && (
          <ListItem sx={{ padding: 0, width: "100%" }}>
            <ListItemIcon
              sx={{ minWidth: "fit-content", paddingRight: "1rem" }}
            >
              <LanguageIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  underline="none"
                  href={personalDetailsState.website}
                  sx={{
                    width: "100%",
                    color: "#fff",
                    fontFamily: "inter",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    wordBreak: "break-all",
                  }}
                >
                  {web}
                </Link>
              }
            />
          </ListItem>
        )}
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <FmdGoodIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography
                sx={{ fontSize: "1.1rem", textTransform: "capitalize" }}
              >
                {personalDetailsState.city}, {personalDetailsState.country}
              </ContentTypography>
            }
          />
        </ListItem>
      </List>
    </CategoryStack>
  );
};

export default ContactInfo;
