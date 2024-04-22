"use client";

import { useMemo } from "react";

import { MuiThemeAtom, getDesignTokens } from "@/types/Theme";
import { useRecoilState } from "recoil";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [themeState] = useRecoilState(MuiThemeAtom);

  const theme = useMemo(() => createTheme(getDesignTokens(themeState)), [themeState]);

  console.info(theme);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
