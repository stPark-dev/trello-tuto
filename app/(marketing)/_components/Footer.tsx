"use client";

import { Logo } from "@/components/Logo";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "@/components/Button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        p: 2,
        borderTop: 1,
        borderTopColor: "divider",
        backgroundColor: "background.paper",
        zIndex: 8000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
        }}
      >
        <Logo />
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            fontSize: "0.75rem",
            mt: { sm: 2 },
          }}
        >
          © {currentYear}. Gractor, Inc. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            "& > * + *": {
              ml: { sm: 2 },
            },
          }}
        >
          <CustomButton size="small" cvariant="ghost" sx={{ mx: 2 }}>
            Privacy Policy
          </CustomButton>
          <CustomButton size="small" cvariant="ghost" sx={{ mx: 2 }}>
            Terms of Service
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
