'use client'

import { Box, ThemeProvider, createTheme } from "@mui/material";
import Drawer from "../_component/Drawer/Drawer";
import { roboto, montserrat, inter } from "@/font/fonts";

const headingFont = createTheme({
    typography: {
        fontFamily: [
            inter,
            roboto,
            montserrat,
         ].join(','),
    },
});

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <ThemeProvider theme={headingFont}>
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