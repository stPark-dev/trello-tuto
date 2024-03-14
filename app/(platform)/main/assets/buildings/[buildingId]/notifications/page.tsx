import { Box, Typography } from "@mui/material";

const NotificationPage = ({ params }: { params: { buildingId: string } }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ px: 5, my: 5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5" fontWeight="bold">Notifications({params.buildingId})</Typography>
                </Box>
            </Box>
        </>
    )
}

export default NotificationPage;