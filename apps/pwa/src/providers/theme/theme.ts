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
});

export default theme;