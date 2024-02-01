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
          flexDirection: "row", // Ensure the items are in a row
          justifyContent: "space-between", // Apply space-between only for mobile by default
          alignItems: "center",
          maxWidth: "lg", // Use theme breakpoints for consistency
          mx: "auto", // Automatically margin to center within the parent
          width: "100%",
        }}>
        <Logo />
        <Typography sx={{ 
          display: { xs: "none", sm: "block" }, // Hide on mobile, show on tablet and above
          fontSize: "0.75rem", 
          mt: { sm: 2 }, // Apply margin top starting from the sm breakpoint
        }}>
          © {currentYear}. Gractor, Inc. All rights reserved.
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" }, // Stack items vertically on mobile, horizontally on desktop
          alignItems: "center",
          justifyContent: "center", // Center the items for mobile
          "& > * + *": {
            ml: { sm: 2 }, // Apply margin left starting from the sm breakpoint
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