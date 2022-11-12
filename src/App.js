import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from './shared/ScrollToTop'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import HomePage from "./pages/HomePage";
import StartResume from "./pages/StartResume";
import ChooseModel from "./pages/ChooseModel";
import GraphicFace from './pages/graphic/GraphicFace'
import PrestigeFace from './pages/prestige/PrestigeFace'
import RecommendedFace from './pages/recommended/RecommendedFace'

const theme = createTheme({
  palette: {
    primary: {
      main: "#023E73",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  typography: {
    button: {
      fontFamily: "Oswald",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <Box>
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/start" element={<StartResume />} />
              <Route path="/choosemodel" element={<ChooseModel />} />
              <Route path="/graphicface" element={<GraphicFace />} />
              <Route path="/prestigeface" element={<PrestigeFace />} />
              <Route path="/recommendedface" element={<RecommendedFace />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
