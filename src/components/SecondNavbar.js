import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Fab,
  Fade,
  Button,
  AppBar,
  Toolbar,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import { useDispatch } from "react-redux";
import { clearPersonalDetails } from "../redux/personalDetails/PersonalDetailsAction";
import { clearSkills } from "../redux/skills/SkillsAction";
import { clearProjects } from "../redux/projects/ProjectsAction";
import { clearLastEducation } from "../redux/lastEducation/LastEducationAction";
import { clearSocialMedia } from "../redux/socialMedia/SocialMediaAction";
import { clearWorkExprience } from "../redux/workExprience/WorkExprienceAction";
import { clearHobbies } from "../redux/hobbies/HobbiesAction";

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

const SecondNavbar = (props) => {
  const dispatch = useDispatch();
  const [top, setTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
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
  const [openDialog, setOpenDialog] = useState(false);
  const confirmExit = () => {
    dispatch(clearPersonalDetails());
    dispatch(clearSkills());
    dispatch(clearProjects());
    dispatch(clearLastEducation());
    dispatch(clearSocialMedia());
    dispatch(clearWorkExprience());
    dispatch(clearHobbies());
    navigate(-1);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={top ? 0 : 5}
          sx={{
            color: "primary.contrastText",
            backgroundColor: "primary.main",
            backdropFilter: "blur(20px)",
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
            <Stack direction="row">
              {location.pathname === "/start" ? (
                <Button
                  onClick={() => setOpenDialog(true)}
                  variant="text"
                  disableRipple
                  startIcon={<ArrowBackIosIcon />}
                  sx={{
                    fontFamily: "placard",
                    fontSize: "1.2rem",
                    color: "primary.contrastText",
                    "&:hover": {
                      textShadow: "0 0 1px white",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Back
                </Button>
              ) : (
                <Button
                  onClick={() => navigate(-1)}
                  variant="text"
                  disableRipple
                  startIcon={<ArrowBackIosIcon />}
                  sx={{
                    fontFamily: "placard",
                    fontSize: "1.2rem",
                    color: "primary.contrastText",
                    "&:hover": {
                      textShadow: "0 0 1px white",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Back
                </Button>
              )}
            </Stack>
            {location.pathname === "/start" && (
              <Button
                variant="contained"
                component={Link}
                to="/choosemodel"
                disabled={!props.isEnable}
                sx={{
                  backgroundColor: "primary.contrastText",
                  color: "primary.main",
                  "&.Mui-disabled": {
                    backgroundColor: "#E0E0E0",
                    color: "#A6A6A6",
                  },
                  "&:hover": {
                    backgroundColor: "primary.contrastText",
                    color: "primary.dark",
                    boxShadow: "0 0 3px 1px #A6A6A6",
                  },
                }}
              >
                choose template
              </Button>
            )}
            {location.pathname !== "/start" &&
              location.pathname !== "/choosemodel" && (
                <Button
                  variant="contained"
                  startIcon={<PrintIcon />}
                  onClick={props.printedButton}
                  sx={{
                    backgroundColor: "primary.contrastText",
                    color: "primary.main",
                    "&.Mui-disabled": {
                      backgroundColor: "#E0E0E0",
                      color: "#A6A6A6",
                    },
                    "&:hover": {
                      backgroundColor: "primary.contrastText",
                      color: "primary.dark",
                      boxShadow: "0 0 3px 1px #A6A6A6",
                    },
                  }}
                >
                  Print
                </Button>
              )}
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
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            By exit from this page, you will lose all data
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpenDialog(false)}>
            cancel
          </Button>
          <Button variant="contained" onClick={confirmExit}>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default SecondNavbar;
