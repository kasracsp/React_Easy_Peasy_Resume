import React, { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import { Button, Stack, Typography } from "@mui/material";
import AnimateTemplateX from "./AnimateTemplateX";
import AnimateTemplateY from "./AnimateTemplateY";
import { Link } from "react-router-dom";

const ResumeSample = () => {
  const elementTarget = useRef();
  const elementObserver = useObserver(elementTarget, 0.5);
  return (
    <Stack
      ref={elementTarget}
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        width: "100%",
        overflowX:'hidden',
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          marginY: "5rem",
          marginRight: { xs: 0, lg: "5rem" },
          paddingX: "1rem",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "placard",
            opacity: elementObserver ? 1 : 0,
            transform: elementObserver ? "translate(0)" : "translate(-100px)",
            transition: "1000ms",
          }}
        >
          Impress potential employers with your resume
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: elementObserver ? 1 : 0,
            transform: elementObserver ? "translate(0)" : "translate(-100px)",
            transition: "1000ms",
            transitionDelay: "600ms",
          }}
        >
          Build beautiful resumes in a few clicks! Increase your interview
          chances and rise above the competition.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/start"
          size="large"
          sx={{
            width: { xs: "auto", md: "fit-content", fontSize: "1.3rem" },
            paddingX: "3rem",
            opacity: elementObserver ? 1 : 0,
            transform: elementObserver ? "translate(0)" : "translate(-100px)",
            transition: "1000ms",
            transitionDelay: "1000ms",
          }}
        >
          Try Now!
        </Button>
      </Stack>
      <Stack
        sx={{
          marginX: "5rem",
          display: { xs: "none", lg: "flex" },
          opacity: elementObserver ? 1 : 0,
          transition: "2000ms",
        }}
      >
        <AnimateTemplateY />
      </Stack>
      <Stack
        sx={{
          width: "100%",
          marginBottom: "5rem",
          display: { xs: "block", lg: "none" },
          opacity: elementObserver ? 1 : 0,
          transition: "2000ms",
        }}
      >
        <AnimateTemplateX />
      </Stack>
    </Stack>
  );
};

export default ResumeSample;
