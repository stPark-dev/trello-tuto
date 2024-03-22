"use client"

import { Box } from "@mui/material";
import Drawer from "../_component/Drawer/Drawer";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Drawer>
                <Box sx={{ display: "flex", pt: "64px" }}>
                    {children}
                </Box>
            </Drawer>
        </>
    )
}

export default MainLayout;