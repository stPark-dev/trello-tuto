"use client"

import { Box } from "@mui/material";
import Drawer from "../_component/Drawer/Drawer";
import ThemeProvider from "@/components/mui/ThemeProvider";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <ThemeProvider>
                <Drawer>
                    <Box sx={{ display: "flex", pt: "64px" }}>
                        {children}
                    </Box>
                </Drawer>
            </ThemeProvider>
        </>
    )
}

export default MainLayout;