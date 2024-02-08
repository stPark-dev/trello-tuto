import { Box } from "@mui/material";

import MainNavBar from "./_components/Navbar";
import MainSideBar from "./_components/Sidebar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Box  sx={{ display: "flex", pt: "64px" }}>
                <MainNavBar />
                <Box sx={{ display: "flex", p: 1, width:"100vw", height: "100vh" }}>
                    <MainSideBar />
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default MainLayout;