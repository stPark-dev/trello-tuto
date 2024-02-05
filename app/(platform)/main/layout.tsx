import { Box } from "@mui/material";
import MainNavBar from "./_components/navbar";
import MainSideBar from "./_components/sidebar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Box sx={{ display: "flex", pt: "64px" }}>
                <MainNavBar />
                <Box sx={{ display: "flex" }}>
                    <MainSideBar />
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default MainLayout;