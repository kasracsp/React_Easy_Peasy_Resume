import React from "react";
import { Stack, Typography, Paper, IconButton } from "@mui/material";

import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import SkillsInfo from "./SkillsInfo";
import WorkExprienceInfo from "./WorkExprienceInfo";
import AboutMe from "./AboutMe";
import ProjectsInfo from "./ProjectsInfo";
import EducationInfo from "./EducationInfo";
import InterestsInfo from "./InterestsInfo";
import SocialMedia from "./SocialMedia";

const RecommendedPDF = React.forwardRef((props, ref) => (
  <Paper elevation={5} sx={{
    transform: { xs: "scale(0.3)", sm: "scale(0.5)",md: "scale(0.6)", lg: "scale(0.9)", xl: "scale(1)" },
    transformOrigin: "top",
  }}>
    <Stack
      direction="row"
      sx={{ width: "874px", height: "1236px", position: "relative" }}
      ref={ref}
    >
      {/* Left side */}
      <Stack
        spacing="1.5rem"
        sx={{
          backgroundColor: "#000",
          width: "354px",
          height: "100%",
          position: "relative",
        }}
      >
        <PersonalInfo />
        <ContactInfo />
        <SkillsInfo />
      </Stack>
      {/* Right side */}
      <Stack
        sx={{
          backgroundColor: "#fff",
          width: "520px",
          paddingTop: "3rem",
        }}
      >
        <AboutMe />
        <InterestsInfo />
        <WorkExprienceInfo />
        <ProjectsInfo />
        <EducationInfo />
      </Stack>
      <SocialMedia />
    </Stack>
  </Paper>
));

export default RecommendedPDF;
