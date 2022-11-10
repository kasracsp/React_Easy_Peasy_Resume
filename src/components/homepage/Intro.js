import React, { useRef } from "react";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import useObserver from "../../hooks/useObserver";

const MyListItem = styled(ListItem)({
  alignItems: "flex-start",
  paddingLeft: "0",
  paddingBottom: "0",
});

const MyListItemIcon = styled(ListItemIcon)({
  minWidth: "24px",
  paddingTop: "0.2rem",
  paddingRight: "0.3rem",
});

const advantages = [
  "Totally free",
  "Easy to use",
  "No need to sign up",
  "Don't save any of your informations",
  "Professional templates that catch the eyes",
];

const Intro = () => {
  const elementTarget = useRef();
  const elementObserver = useObserver(elementTarget,0.5);
  return (
    <Stack
      ref={elementTarget}
      direction="row"
      sx={{
        width: "100%",
        overflow:'hidden',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5rem",
        paddingX: "1rem",
        maxWidth: "1200px",
        marginX: "auto",
      }}
    >
      <Stack spacing={3} sx={{width:{xs:'100%',lg:'50%'}}}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "placard",
            fontSize: { xs: "3rem", sm: "4rem", xl: "6rem" },
            opacity: elementObserver ? 1 : 0,
            transform: elementObserver ? "translate(0)" : "translate(-100px)",
            transition: "1000ms",
          }}
        >
          Build a professional resume for free
        </Typography>
        <List disablePadding>
          {advantages.map((item, index) => (
            <MyListItem
              key={index}
              sx={{
                opacity: elementObserver ? 1 : 0,
                transform: elementObserver
                  ? "translate(0)"
                  : "translate(-100px)",
                transition: "1000ms",
                transitionDelay: `calc(${index + 1} * 500ms)`,
              }}
            >
              <MyListItemIcon
                sx={{
                  opacity: elementObserver ? 1 : 0,
                  transition: "500ms",
                  transitionDelay: `calc(${index + 1} * 500ms + 2500ms)`,
                }}
              >
                <DoneIcon color="success" />
              </MyListItemIcon>
              <ListItemText primary={item} />
            </MyListItem>
          ))}
        </List>
        <Button
          variant="contained"
          component={Link}
          to="/start"
          size="large"
          sx={{
            width: { xs: "auto", md: "fit-content", fontSize: "1.3rem" },
            opacity: elementObserver ? 1 : 0,
            transform: elementObserver ? "translate(0)" : "translate(-100px)",
            transition: "1000ms",
            transitionDelay: "5200ms",
          }}
        >
          start my resume
        </Button>
      </Stack>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          opacity: elementObserver ? 1 : 0,
          transform: elementObserver ? "translate(0)" : "translate(100px)",
          transition: "1000ms",
          transitionDelay: "300ms",
        }}
      >
        <img src="https://www.uplooder.net/img/image/93/d5a9e67c5e19740d62b8c9bb532fce71/coffeeBoy.png" alt="coffee boy" />
      </Box>
    </Stack>
  );
};

export default Intro;
