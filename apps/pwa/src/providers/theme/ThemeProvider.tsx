import { ReactNode } from "react";

import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "./theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};