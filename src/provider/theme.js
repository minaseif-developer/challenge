import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
// import { ThemeProvider } from 'react-jss';

const Theme = createTheme({
  direction: "rtl",
  typography: {
    useNextVariants: true,
    fontFamily: "IRANYekan",
    fontDisplay: "swap",
    fontSize: 14,
    headline: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    display2: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    display3: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    display4: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    display1: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    button: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    body2: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    caption: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    title: {
      fontFamily: "IRANYekanFaNum",
      fontDisplay: "swap",
    },
    subheading: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
    body1: {
      fontFamily: "IRANYekan",
      fontDisplay: "swap",
    },
  },
  shadows: "none|".repeat(24).split("|"),
  shape: { radius5: 5, radius8: 8, radius10: 10, radius12: 12, radius15: 15 },
  boxShadow: "0 1px 17px -10px #343c45",
  palette: {
    tonalOffset: 0.2,
    background: { paper: "#fff", default: "#F5F6F8", light: "#f6f9fc" },
    contrastThreshold: 3,
    grey: {
      50: "#F9F9FC",
      100: "#F2F2F5",
      200: "#EAEAED",
      300: "#DADADD",
      400: "#B7B7B9",
      500: "#97979A",
      600: "#6F6F71",
      700: "#5B5B5D",
      800: "#3C3C3F",
      900: "#1C1C1E",
      A900: "#000",
      A700: "#e7ecf2",
      A100: "#758aa2",
      A400: "#d9e0e8",
      A200: "#f6f9fc",
      light: "#eef0f2",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      title: "#33465d",
      description: "#758aa2",
      contrastText: "#fff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    secondary: {
      main: "#05BEDA",
      light: "#E0F7FB",
      dark: "#03AEC7",
      contrastText: "#fff",
    },
    common: { black: "#000", white: "#fff" },
    error: {
      light: "#FFEAEE",
      main: "#EC1533",
      dark: "#CD0025",
      contrastText: "#fff",
    },
    success: {
      main: "#26de81",
    },
    type: "light",
    action: {
      hoverOpacity: 0.08,
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "rgba(0, 0, 0, 0.14)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.26)",
      active: "rgba(0, 0, 0, 0.54)",
    },
    primary: {
      main: "#2F4AA1",
      light: "#EDF0FA",
      dark: "#1D3789",
      contrastText: "#fff",
    },
  },
});

function theme({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}

export default theme;
