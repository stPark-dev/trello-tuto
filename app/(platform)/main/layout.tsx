"use client";

import { Box } from "@mui/material";
import Drawer from "../_component/Drawer/Drawer";
import { RecoilRoot, RecoilEnv } from "recoil";
import ThemeProvider from "@/components/mui/ThemeProvider";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Drawer>
            <Box sx={{ display: "flex", pt: "64px" }}>{children}</Box>
          </Drawer>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default MainLayout;
