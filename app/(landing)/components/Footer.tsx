"use client";

import { Box, Typography } from "@mui/material";
import { CustomButton } from "@/components/Button";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        height: "6rem",
        p: 3,
        backgroundColor: "#2CBBCF",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Image alt="head" src="/landing/Teamvolt/logo_head.png" width="50" height="50" />
          <Typography variant="h3" fontFamily="kleague" color="#ffffff">
            팀볼투
          </Typography>
          <Typography variant="h5" fontFamily="kleague" color="#ffffff">
            TEAMVOLT
          </Typography>
        </Box>
        <Typography
          fontFamily="kleague"
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
