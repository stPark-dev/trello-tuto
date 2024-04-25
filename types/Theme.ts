import type { PaletteMode, PaletteOptions, Components, Theme, Mixins } from "@mui/material";
import { alpha } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

import { TypographyOptions } from "@mui/material/styles/createTypography";
import { atom, type RecoilState } from "recoil";

import darkScrollbar from "@mui/material/darkScrollbar";

export enum Themes {
  "light" = "light",
  "dark" = "dark",
}

export const headerHeight = 42;
export const footerHeight = 24;
export const drawerWidth = 210;
export const drawerMiniWidth = 50;
export const rowHeight = 30;

const typography: TypographyOptions = {
  fontSize: 15,
  fontFamily: ["Pretendard", "Roboto", "Arial", '"Noto Sans KR"', "sans-serif", "kleague"].join(", "),
};

const defaultMixins: Mixins = {
  toolbar: {
    minHeight: headerHeight,
  },
};

const mixins: Record<Themes, Mixins> = {
  light: {
    ...defaultMixins,
  },
  dark: {
    ...defaultMixins,
  },
};

const palette: Record<Themes, PaletteOptions> = {
  light: {
    common: {
      black: "#222222",
      white: "#F8F8F8",
    },
    primary: {
      light: "#D6EBEC",
      main: "#49BBBE",
      dark: "#05605C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#69A9D680",
      main: "#83ABFF",
      dark: "#7091D3",
      contrastText: "#FFFFFF",
    },
    error: {
      light: "#F49C9F",
      main: "#CF8489",
      dark: "#AE4D4D",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFC27A",
      main: "#F4AD59",
      dark: "#EA8C00",
      contrastText: "#FFFFFF",
    },
    info: {
      light: "#BAE1FA",
      main: "#71CCEB",
      dark: "#446D9C",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#6DBC93",
      main: "#4DAE7E",
      dark: "#186F46",
      contrastText: "#FFFFFF",
    },
    divider: "#718096",
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1C2026",
      secondary: "#718096",
      disabled: "#71809670",
    },
  },
  dark: {
    common: {
      black: "#222222",
      white: "#F8F8F8",
    },
    // palette values for dark mode
    primary: {
      light: "#EBF9FA",
      main: "#7FC5C6",
      dark: "#5A9B9B",
      contrastText: "222222",
    },
    secondary: {
      light: "#DCEAFF80",
      main: "#BCD4F7",
      dark: "#89AAEE",
      contrastText: "#222222",
    },
    error: {
      light: "#FFC5C9",
      main: "#CF8489",
      dark: "#DD6969",
      contrastText: "#222222",
    },
    warning: {
      light: "#F8C273",
      main: "#F3A42D",
      dark: "#FF8623",
      contrastText: "#222222",
    },
    info: {
      light: "#C1E7FF",
      main: "#A2D2F0",
      dark: "#72A7E3",
      contrastText: "#222222",
    },
    success: {
      light: "#B9ECD1",
      main: "#8AD7B1",
      dark: "#77B798",
      contrastText: "#222222",
    },
    divider: "#FFFFFF10",
    background: {
      default: "#222222",
      paper: "#222222",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A4B2C770",
      disabled: "#A4B2C750",
    },
  },
};

const backgroundSpriteImage = (theme: Theme) =>
  `repeating-linear-gradient(45deg, ${alpha(theme.palette.divider, 0.1)}, ${alpha(
    theme.palette.divider,
    0.1
  )} 10px, ${alpha(theme.palette.background.default, 0.1)} 10px, ${alpha(theme.palette.background.default, 0.1)} 20px)`;

const defaultComponents: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides({ palette }) {
      return {
        html: {
          ...darkScrollbar(
            "light" === palette.mode
              ? {
                  track: palette.grey[200],
                  thumb: palette.grey[400],
                  active: palette.grey[400],
                }
              : undefined
          ),
        },
      };
    },
  },
  MuiChip: {
    defaultProps: { size: "small" },
  },
  MuiInputBase: {
    styleOverrides: {
      readOnly: ({ theme }) => ({
        backgroundImage: backgroundSpriteImage(theme),
        cursor: "no-drop",
      }),
      input: ({ theme }) => ({
        borderColor: theme.palette.divider,
        "&[readonly]": {
          backgroundImage: backgroundSpriteImage(theme),
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: { size: "small" },
    styleOverrides: {
      sizeLarge: {
        fontSize: 20,
        minWidth: "200px",
        lineHeight: 2.5,
        padding: "4px 20px",
      },
      sizeMedium: {
        minWidth: "52px",
        lineHeight: 2,
        padding: "3px 15px",
      },
      sizeSmall: {
        minWidth: "42px",
        lineHeight: 1.5,
        padding: "2px 10px",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      dividers: ({ theme }) => ({
        borderColor: theme.palette.divider,
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up("sm")]: { minWidth: 500 },
        [theme.breakpoints.up("md")]: { minWidth: 800, maxWidth: 1200 },
      }),
      container: { alignItems: "flex-start" },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) => ({
        maxHeight: 300,
        [theme.breakpoints.up("md")]: { maxHeight: 400 },
      }),
    },
  },
  MuiFormControl: {
    defaultProps: { size: "small" },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: { fontSize: 12 },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      selectLabel: {
        marginTop: 0,
        marginBottom: 0,
      },
      displayedRows: {
        marginTop: 0,
        marginBottom: 0,
      },
      toolbar: { minHeight: rowHeight },
      actions: {
        ".MuiButtonBase-root": {
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 4,
          paddingRight: 4,
        },
      },
    },
  },
  MuiDataGrid: {
    defaultProps: {
      columnHeaderHeight: rowHeight,
      rowHeight: rowHeight,
      rowCount: 0,
      pageSizeOptions: [5, 10, 25, 50, 100],
    },
    styleOverrides: {
      columnHeaders: ({ theme }) => ({ backgroundColor: theme.palette.divider }),
      overlayWrapperInner: ({ theme }) => ({ backgroundImage: backgroundSpriteImage(theme) }),
      virtualScroller: { flexGrow: 1 },
      cell: ({ theme }) => ({
        borderColor: theme.palette.divider,
        ":focus": { borderBottom: 0, outline: `1px solid ${theme.palette.primary.main}` },
      }),
      root: ({ theme }) => ({
        minHeight: 200,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }),
      virtualScrollerContent: ({ theme }) => ({
        "~.MuiDataGrid-filler > div": {
          borderTop: `1px solid ${theme.palette.divider}`,
        },
      }),
      footerContainer: ({ theme }) => ({
        minHeight: rowHeight,
        borderTop: theme.palette.divider,
      }),
    },
  },
};

const components: Record<Themes, Components<Omit<Theme, "components">>> = {
  light: {
    ...defaultComponents,
  },
  dark: {
    ...defaultComponents,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  mixins: { mode, ...mixins[mode] },
  palette: { mode, ...palette[mode] },
  components: { mode, ...components[mode] },
  typography,
});

export const MuiThemeAtom: RecoilState<Themes> = atom<Themes>({
  key: "mui:theme",
  default: Themes.light,
  effects: [],
});
