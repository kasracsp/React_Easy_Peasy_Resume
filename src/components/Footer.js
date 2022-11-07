import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ lineHeight: "0" }}>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 67.3397129186603,145.1244019138756 134.6794258373206,157.24880382775117 240,156 C 345.3205741626794,154.75119617224883 488.62200956937795,140.1291866028708 594,134 C 699.377990430622,127.8708133971292 766.8325358851675,130.23444976076553 853,129 C 939.1674641148325,127.76555023923446 1044.0478468899523,122.933014354067 1145,123 C 1245.9521531100477,123.066985645933 1342.9760765550238,128.0334928229665 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#023e73" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,266 0,266 C 105.05263157894737,250.77511961722487 210.10526315789474,235.55023923444975 312,230 C 413.89473684210526,224.44976076555025 512.6315789473683,228.57416267942583 605,235 C 697.3684210526317,241.42583732057417 783.3684210526317,250.1531100478469 870,262 C 956.6315789473683,273.8468899521531 1043.8947368421052,288.8133971291866 1139,290 C 1234.1052631578948,291.1866028708134 1337.0526315789475,278.5933014354067 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#023e73" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
      </Box>
      <Stack
        sx={{
          width: "100%",
          paddingBottom: "1rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.main",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: "Days One", color: "background.paper" }}
        >
          &copy;2022 EasyPeasyResume
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
