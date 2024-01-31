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
            <MainNavBar />
            <Box sx={{ display: "flex" }}>
                <MainSideBar />
                {children}
            </Box>
        </>
    )
}

export default MainLayout;