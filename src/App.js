import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
      
    </ThemeProvider>
  );
}

export default App;
