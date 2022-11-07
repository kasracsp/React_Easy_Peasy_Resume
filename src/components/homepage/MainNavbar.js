import React, { useEffect, useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import {
  Box,
  Fab,
  Fade,
  Button,
  AppBar,
  Toolbar,
  Stack,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const MainNavbar = (props) => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => scrollFunction();
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
  });
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={top ? 0 : 5}
          sx={{
            color: "primary.main",
            backgroundColor: top ? "transparent" : "#FFFFFF",
            backdropFilter: "blur(20px)",
            animation: "myNavbar 200ms forwards 5900ms ease-out",
            opacity: 0,
            "@keyframes myNavbar": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              sx={{
                opacity: "0",
                transform: "translateX(-100px)",
                pointerEvents: "none",
                animation: "myhome 1500ms forwards 6000ms ease-out",
                "@keyframes myhome": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(-100px)",
                    pointerEvents: "none",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                    pointerEvents: "all",
                  },
                },
              }}
            >
              <Button
                component={Link}
                to={"/"}
                variant="text"
                disableRipple
                sx={{
                  fontFamily: "anurati",
                  fontSize: "1.2rem",
                  p: "0",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  display: { xs: "flex", sm: "none" },
                }}
              >
                EPR
              </Button>
              <Button
                component={Link}
                to={"/"}
                variant="text"
                disableRipple
                sx={{
                  fontFamily: "anurati",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  p: "0",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  display: { xs: "none", sm: "block" },
                }}
              >
                EasyPeasyResume
              </Button>
            </Stack>
            <Button
              variant="outlined"
              component={Link}
              to="/start"
              color="primary"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                },
                opacity: "0",
                transform: "translateX(100px)",
                pointerEvents: "none",
                animation: "myCreate 1500ms forwards 7000ms ease-out",
                "@keyframes myCreate": {
                  "0%": {
                    opacity: 0,
                    transform: "translateX(100px)",
                    pointerEvents: "none",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(0)",
                    pointerEvents: "all",
                  },
                },
              }}
            >
              create resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar
        id="back-to-top-anchor"
        sx={{ position: "absolute", top: "0", left: "0" }}
      />
      <Toolbar />
      {props.children}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
export default MainNavbar;
