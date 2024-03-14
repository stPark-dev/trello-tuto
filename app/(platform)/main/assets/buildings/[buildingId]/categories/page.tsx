import { Box, Typography } from "@mui/material";

const CategoryPage = ({ params }: { params: { buildingId: string } }) => {
    return(
        <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ px: 5, my: 5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h5" fontWeight="bold">Categories({params.buildingId})</Typography>
                </Box>
            </Box>
        </>
    )
}

export default CategoryPage;