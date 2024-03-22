"use client";

import { PropsWithChildren, ReactElement, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { themeState } from "@/store/theme";

const ThemeProvider = ({ children }: PropsWithChildren): ReactElement => {
  const mode = useRecoilValue(themeState);
  console.info('모오오오오오드 ', mode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? {
            primary: {
              light: "#7fc5c6",
              main: "#4DAEAE",
              dark: "#05605C",
              contrastText: "#FFFFFF",
            },
            secondary: {
              light: "#718096",
              main: "#718096",
              dark: "#325D9B",
              contrastText: "#FFFFFF",
            },
            error: {
              light: "#CF8489",
              main: "#D96C70",
              dark: "#AE4D4D",
              contrastText: "#FFFFFF",
            },
            warning: {
              light: "#FFC27A",
              main: "#F4AD59",
              dark: "#DB8709",
              contrastText: "#FFFFFF",
            },
            info: {
              light: "#FAFAFA",
              main: "#F9F9F9",
              dark: "#E0E0E0",
              contrastText: "#424242",
            },
            success: {
              light: "#6DBC93",
              main: "#4DAE7E",
              dark: "#186F46",
              contrastText: "#FFFFFF",
            },
            divider: "#71809610",
            background: {
              default: "#FFFFFF",
              paper: "#FFFFFF",
            },
            text: {
              primary: "#1C2026",
              secondary: "#718096",
              disabled: "#718096",
            },
            input: {
              border: "#71809610",
            },
            control: {
              background: "#ffffff",
              border: "#71809610",
            },
          }
            :
            {
              primary: {
                "50": "#e0eff9",
                "100": "#b3d7f0",
                "200": "#80bde6",
                "300": "#4da2db",
                "400": "#268ed4",
                "500": "#007acc",
                "600": "#0072c7",
                "700": "#0067c0",
                "800": "#005db9",
                "900": "#004aad",
                A100: "#d7e5ff",
                A200: "#a4c4ff",
                A400: "#71a4ff",
                A700: "#5893ff",
                contrastText: "rgb(204, 204, 204)",
              },
              info: {
                light: "#455A64",
                main: "#37474F",
                dark: "#263238",
                contrastText: "#CFD8DC",
              },
              divider: "rgb(64, 64, 64)",
              background: {
                default: "rgb(31, 31, 31)",
                paper: "rgb(31, 31, 31)",
              },
              text: {
                primary: "rgb(204, 204, 204)",
                secondary: "rgba(204, 204, 204, .5)",
              },
              input: {
                border: "rgba(255, 255, 255, 0.23)",
              },
              control: {
                background: "rgb(24, 24, 24)",
                border: "rgb(43, 43, 43)",
              },
            })
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 450,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
        typography: {
          fontFamily: [
            "Roboto", "Arial", '"Noto Sans KR"', "sans-serif"
          ].join(","),
        },
      }),
    [mode]
  );
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
