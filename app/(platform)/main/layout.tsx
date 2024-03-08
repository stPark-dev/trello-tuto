import { Box } from "@mui/material";

import MainNavBar from "./_components/Navbar";
import MainSideBar from "./_components/Sidebar";
import Drawer from "../_component/Drawer/Drawer";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Drawer>
                <Box sx={{ display: "flex", p: 1, pt: "64px" }}>
                    {children}
                </Box>
            </Drawer>
        </>
    )
}

export default MainLayout;