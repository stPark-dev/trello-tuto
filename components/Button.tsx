import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

// 사용자 정의 variant를 위한 타입 확장
interface CustomButtonProps extends ButtonProps {
  cvariant?: "default" | "primary" | "secondary" | "danger" | "outline" | "ghost" | "teamvolt";
}

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const CustomButton = styled(Button)<CustomButtonProps>(({ theme, cvariant }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "all 0.2s",
  "&:focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 2px #0A0A0A`,
  },
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },
  ...(cvariant === "default" && {
    fontWeight: 600,
    backgroundColor: "#171717",
    color: "#FAFAFA",
    "&:hover": {
      backgroundColor: "rgba(23, 23, 23, 0.8)",
    },
  }),
  ...(cvariant === "primary" && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(cvariant === "secondary" && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
  ...(cvariant === "danger" && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  }),
  ...(cvariant === "outline" && {
    fontWeight: 600,
    border: "1px solid #E5E5E5",
    backgroundColor: "#F7F7F7",
    "&:hover": {
      backgroundColor: "#E6E6E6",
      color: "#171717",
    },
  }),
  ...(cvariant === "ghost" && {
    fontWeight: 600,
    color: "#171717",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      color: "#171717",
    },
  }),
  ...(cvariant === "teamvolt" && {
    fontWeight: 600,
    backgroundColor: "#F0C84A",
    color: "#171717",
    "&:hover": {
      backgroundColor: "#F0DA4A",
      color: "#171717",
    },
  }),
}));
