import React from "react";
import { Stack } from "@mui/material";
import Intro from "../components/homepage/Intro";
import HowItWorks from "../components/homepage/HowItWorks";
import ResumeSample from "../components/homepage/ResumeSample"
import Footer from "../components/Footer";
import MainNavbar from "../components/homepage/MainNavbar";

const HomePage = () => {
  return (
    <MainNavbar>
      <Stack>
        <Intro />
        <HowItWorks />
        <ResumeSample />
        <Footer />
      </Stack>
    </MainNavbar>
  );
};

export default HomePage;
