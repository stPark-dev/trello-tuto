import { Box, Typography } from "@mui/material";

const AssetPage = ({ params }: { params: { buildingId: string } }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, my: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Assets({params.buildingId})</Typography>
                </Box>
            </Box>
        </>
    )
}

export default AssetPage;