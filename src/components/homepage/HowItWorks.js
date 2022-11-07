import React, { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import { List, Stack, Box, Typography } from "@mui/material";
import Process from "./Process";

const process = [
  {
    id: 1,
    title: "Fill in the Blanks",
    description: "Start by filling in your resume details.",
  },
  {
    id: 2,
    title: "Pick a template",
    description: "Select a resume template that embodies your style.",
  },
  {
    id: 3,
    title: "Download your resume",
    description: "We provide a PDF file that you can download instantly",
  },
];

const HowItWorks = () => {
  const elementTarget = useRef();
  const elementObserver = useObserver(elementTarget, 0.3);
  return (
    <Box
      sx={{
        opacity: elementObserver ? "1" : "0",
        transition: "1000ms",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box sx={{ lineHeight: 0 }}>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 399"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 96.6602870813397,113.11483253588517 193.3205741626794,93.22966507177034 284,105 C 374.6794258373206,116.77033492822966 459.37799043062205,160.19617224880383 546,161 C 632.622009569378,161.80382775119617 721.1674641148326,119.98564593301433 826,122 C 930.8325358851674,124.01435406698567 1051.952153110048,169.86124401913878 1157,179 C 1262.047846889952,188.13875598086122 1351.023923444976,160.5693779904306 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#023e73"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 84.03827751196172,254.51674641148327 168.07655502392345,243.0334928229665 255,233 C 341.92344497607655,222.9665071770335 431.73205741626793,214.38277511961726 527,235 C 622.2679425837321,255.61722488038274 722.9952153110046,305.4354066985646 817,308 C 911.0047846889954,310.5645933014354 998.287081339713,265.8755980861244 1101,251 C 1203.712918660287,236.1244019138756 1321.8564593301435,251.0622009569378 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#023e73"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "background.paper",
        }}
        ref={elementTarget}
      >
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "3rem",
            maxWidth: "1200px",
            marginX: "auto",
            marginY: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "placard",
              paddingY: "2rem",
              opacity: elementObserver ? "1" : "0",
              transition: "1000ms",
              transitionDelay: "500ms",
            }}
          >
            How it works?
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
              justifyContent: "center",
              alignItems: { xs: "center", xl: "flex-start" },
              gap: "2rem",
            }}
          >
            {process.map((item, index) => (
              <Process item={item} itemIndex={index} key={item.id} />
            ))}
          </List>
        </Stack>
      </Box>
      <Box sx={{ lineHeight: 0 }}>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 109.00478468899522,151.16267942583733 218.00956937799043,169.32535885167462 305,182 C 391.99043062200957,194.67464114832538 456.96650717703346,201.86124401913875 548,178 C 639.0334928229665,154.13875598086125 756.1244019138757,99.22966507177034 860,100 C 963.8755980861243,100.77033492822966 1054.5358851674641,157.22009569377988 1149,172 C 1243.4641148325359,186.77990430622012 1341.732057416268,159.88995215311007 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#023e73"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 78.71770334928229,255.8755980861244 157.43540669856458,245.75119617224877 253,246 C 348.5645933014354,246.24880382775123 460.97607655502395,256.8708133971292 563,259 C 665.023923444976,261.1291866028708 756.6602870813397,254.76555023923441 849,264 C 941.3397129186603,273.2344497607656 1034.3827751196172,298.066985645933 1133,301 C 1231.6172248803828,303.933014354067 1335.8086124401914,284.96650717703346 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#023e73"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default HowItWorks;
