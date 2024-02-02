import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%", p: 2, borderTop: 1, borderTopColor: "divider", backgroundColor: "background.paper" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
        }}>
        <Logo />
        <Typography sx={{ 
          display: { xs: "none", sm: "block" },
          fontSize: "0.75rem", 
          mt: { sm: 2 },
        }}>
          © {currentYear}. Gractor, Inc. All rights reserved.
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          "& > * + *": {
            ml: { sm: 2 },
          }
        }}>
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </Box>
      </Box>
    </Box>
  );
};