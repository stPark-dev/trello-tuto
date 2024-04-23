import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

type CustomButtonProps = ButtonProps & {
  cvariant?: "default" | "primary" | "secondary" | "danger" | "outline" | "ghost" | "teamvolt";
};

type CustomButtonComponent = React.ComponentType<CustomButtonProps>;

const CustomButtonBase = styled(Button)<CustomButtonProps>(({ theme, cvariant }) => ({
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

export const CustomButton: CustomButtonComponent = CustomButtonBase;
