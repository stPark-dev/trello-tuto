import { Box, Button, Typography } from "@mui/material"

const RolesPage = ({ params }: { params: { buildingId: string } }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Roles</Typography>
                    <Button
                        component="label"
                        variant="contained"
                        sx={{
                            bgcolor: "#004d40",
                            "&:hover": {
                                bgcolor: "#2B5A52",
                            }
                        }}
                    >
                        Add Roles
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default RolesPage;