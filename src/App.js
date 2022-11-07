import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import StartResume from "./pages/StartResume";

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
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartResume />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
