import { Box, Typography } from "@mui/material";

const SpacePage = ({ params }: { params: { buildingId: string } }) => {
    return(
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ px: 2, my: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5" fontWeight="bold">Spaces({params.buildingId})</Typography>
                </Box>
            </Box>
        </>
    )
}

export default SpacePage;