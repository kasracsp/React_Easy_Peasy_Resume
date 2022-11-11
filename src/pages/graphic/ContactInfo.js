import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider,
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

const ContentTypography = styled(Typography)({
  color: "#2c3f4e",
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
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "5px solid #f2f2f4",
      }}
    >
      <List
        sx={{
          width: "50%",
          paddingLeft: "60px",
          paddingRight: "90px",
        }}
      >
        <ListItem sx={{ padding: 0, paddingY: "0.5rem" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <EmailIcon sx={{ color: "#2c3f4e" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                underline="none"
                href={`mailto:${personalDetailsState.emailAddress}`}
                sx={{
                  width: "100%",
                  color: "#2c3f4e",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "1rem",
                  wordBreak: "break-all",
                }}
              >
                {personalDetailsState.emailAddress}
              </Link>
            }
          />
        </ListItem>

        {personalDetailsState.website && <Divider color="#2c3f4e" />}
        {personalDetailsState.website && (
          <ListItem sx={{ padding: 0, paddingY: "0.5rem" }}>
            <ListItemIcon
              sx={{ minWidth: "fit-content", paddingRight: "1rem" }}
            >
              <LanguageIcon sx={{ color: "#2c3f4e" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  underline="none"
                  href={personalDetailsState.website}
                  sx={{
                    width: "100%",
                    color: "#2c3f4e",
                    fontFamily: "inter",
                    fontWeight: "500",
                    fontSize: "1rem",
                    wordBreak: "break-all",
                  }}
                >
                  {web}
                </Link>
              }
            />
          </ListItem>
        )}
      </List>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderWidth: "3px", borderColor: "#f2f2f4" }}
      />
      <List
        sx={{
          width: "50%",
          paddingLeft: "90px",
          paddingRight: "60px",
        }}
      >
        <ListItem sx={{ padding: 0, paddingY: "0.5rem" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <PhoneIphoneIcon sx={{ color: "#2c3f4e" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography sx={{ fontSize: "1rem" }}>
                {personalDetailsState.phoneNumber}
              </ContentTypography>
            }
          />
        </ListItem>
        <Divider color="#2c3f4e" />
        <ListItem sx={{ padding: 0, paddingY: "0.5rem" }}>
          <ListItemIcon sx={{ minWidth: "fit-content", paddingRight: "1rem" }}>
            <FmdGoodIcon sx={{ color: "#2c3f4e" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <ContentTypography
                sx={{ fontSize: "1rem", textTransform: "capitalize" }}
              >
                {personalDetailsState.city}, {personalDetailsState.country}
              </ContentTypography>
            }
          />
        </ListItem>
      </List>
    </Stack>
  );
};

export default ContactInfo;
