"use client"
import { Box } from "@mui/material";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

import { RecoilRoot, RecoilEnv } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <RecoilRoot>
      <Box sx={{ height: "100%", backgroundColor: "rgb(241 245 249 / 1)" }}>
        <Navbar />
        <Box sx={{ pt: 20, backgroundColor: "rgb(241 245 249 / 1)" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </RecoilRoot>
  );
};

export default MarketingLayout;