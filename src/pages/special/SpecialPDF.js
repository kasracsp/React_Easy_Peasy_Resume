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


// 2c3f4e
const SpecialPDF = React.forwardRef((props, ref) => (
  <Paper elevation={5} sx={{
    transform: { xs: "scale(0.3)", sm: "scale(0.5)",md: "scale(0.6)", lg: "scale(0.9)", xl: "scale(1)" },
    transformOrigin: "top",
  }}>
    <Stack
      sx={{ width: "874px", height: "1236px", position: "relative" }}
      ref={ref}
    >
      {/* Top side */}
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "436px",
        }}
      >
        <PersonalInfo />
        <ContactInfo />
      </Stack>
      {/* Bottom side */}
      <Stack
        sx={{
          backgroundColor: "#e0e0e2",
          width: "100%",
          height: "800px",
        }}
      >
        {/* bottom */}
        <Stack direction="row" sx={{ width: "100%",height:'100%' }}>
          {/* bottom-left */}
          <Stack
            sx={{ width: "50%", height: "100%", backgroundColor: "#FFD26B",paddingX:'3rem' }}
          >
            <SkillsInfo />
            <ProjectsInfo />
          </Stack>
          {/* bottom-right */}
          <Stack sx={{ width: "50%", height: "100%", backgroundColor: "#ffffff",paddingX:'2rem' }}>
            <WorkExprienceInfo />
            <InterestsInfo />
            <EducationInfo />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Paper>
));

export default SpecialPDF;
