import { Box, Button,  Divider, Paper, Typography } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';

const BillingPage = ({ params }: { params: { buildingId: string } }) => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Billing and Plan</Typography>
                </Box>
                <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#F2F4F7" }}>
                    <Paper elevation={2} sx={{ display: "flex", flexDirection: "column", m: 3, bgcolor: "background.paper", borderRadius: 3, width: { md: "30vw" } }}>
                        <Box sx={{ p: 3, display: "flex", flex: "row", justifyContent: "space-between" }}>
                            <Typography fontWeight="bold" sx={{ marginBottom: "1rem" }}>Free Trial</Typography>
                            <Typography variant="h5" fontWeight="bold">{"0$"}</Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 3, display: "flex", justifyContent: "flex-end" }}>
                            <Button sx={{ color: "black" }} > Change Plan<CallMadeIcon /></Button>
                        </Box>
                    </Paper>
                </Box>
            </Box >
        </>
    )
}

export default BillingPage;