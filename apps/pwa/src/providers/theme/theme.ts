import { colors, createTheme } from "@mui/material";
import { typographyOptions as typography } from "./typography";

export const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: "#f4f4f5",
    },
    primary: {
      main: "#4127e8",
      light: "colors.blue[50]",
    },
    secondary: {
      main: "#1aadff",
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[500],
    },
  },
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #4127e8",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#4127e8",
            width: "0.9rem",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #4127e8",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#4127e8",
          },
        },
      },
    },
  },
});

export default theme;