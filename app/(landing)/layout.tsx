"use client"
import { Box } from "@mui/material";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { RecoilRoot, RecoilEnv } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <RecoilRoot>
      <Box>
        <Navbar />
        <Box mt={"3.5rem"}>
          {children}
        </Box>
        <Footer />
      </Box>
    </RecoilRoot>
  );
};

export default MarketingLayout;