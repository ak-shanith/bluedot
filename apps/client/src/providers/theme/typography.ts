import { TypographyOptions } from "@mui/material/styles/createTypography";

// const fontFamily = [
//   "-apple-system",
//   "BlinkMacSystemFont",
//   "Roboto",
//   "system-ui",
//   '"Segoe UI"',
//   "Oxygen",
//   "Ubuntu",
//   '"Open Sans"',
//   '"Helvetica Neue"',
//   "sans-serif",
//   '"Apple Color Emoji"',
//   '"Segoe UI Emoji"',
//   '"Segoe UI Symbol"',
// ].join(",");

export const typographyOptions: TypographyOptions = {
  h1: {
    // fontFamily,
    fontSize: "2.25rem",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  h2: {
    fontSize: "1.875rem",
    fontWeight: "normal",
    letterSpacing: 1,
  },
  h3: {
    fontWeight: "normal",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    letterSpacing: "0.05em",
  },
  h4: {
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: "-0.06px",
  },
  h5: {
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "-0.05px",
  },
  h6: {
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "-0.05px",
  },
  overline: {
    fontWeight: 500,
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
};
