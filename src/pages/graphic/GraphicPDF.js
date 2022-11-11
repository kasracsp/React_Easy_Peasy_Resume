import React from "react";
import { Stack, Paper } from "@mui/material";

import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import SkillsInfo from "./SkillsInfo";
import EducationInfo from "./EducationInfo";
import WorkExprienceInfo from "./WorkExprienceInfo";
import ProjectsInfo from "./ProjectsInfo";
import InterestsInfo from "./InterestsInfo";
import SocialMedia from "./SocialMedia";

const GraphicPDF = React.forwardRef((props, ref) => (
  <Paper
    elevation={5}
    sx={{
      transform: {
        xs: "scale(0.3)",
        sm: "scale(0.5)",
        md: "scale(0.6)",
        lg: "scale(0.9)",
        xl: "scale(1)",
      },
      transformOrigin: "top",
    }}
  >
    <Stack
      sx={{ width: "874px", height: "1236px", position: "relative" }}
      ref={ref}
    >
      {/* Top side */}
      <Stack
        spacing="1.5rem"
        sx={{
          backgroundColor: "#42505b",
          width: "100%",
          height: "276px",
          position: "relative",
          borderBottom: "10px solid",
          borderColor: "#f2f2f4",
        }}
      >
        <PersonalInfo />
      </Stack>
      {/* Bottom side */}
      <Stack
        sx={{
          backgroundColor: "#e0e0e2",
          width: "100%",
          height: "960px",
        }}
      >
        {/* bottom-top */}
        <Stack>
          <ContactInfo />
        </Stack>
        {/* bottom-bottom */}
        <Stack direction="row" sx={{ width: "100%" }}>
          {/* bottom-bootm-left */}
          <Stack spacing="1.5rem" sx={{ width: "50%", marginTop: "2rem" }}>
            <AboutMe />
            <SkillsInfo />
            <EducationInfo />
          </Stack>
          {/* bottom-bootm-right */}
          <Stack spacing="1.5rem" sx={{ width: "50%", marginTop: "2rem" }}>
            <WorkExprienceInfo />
            <ProjectsInfo />
            <InterestsInfo />
          </Stack>
        </Stack>
      </Stack>
      <SocialMedia />
    </Stack>
  </Paper>
));

export default GraphicPDF;
