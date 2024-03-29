"use client"

import { Box, Switch, Typography, useTheme } from "@mui/material";

const NotificationPage = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
            <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "column", }}>
                <Typography variant="h5" fontWeight="bold">Notification Settings</Typography>
                <Typography variant="body2">We may still send you important notifications about your account outside of your notification settings.</Typography>
            </Box>
            <Box sx={{ p: 5, overflow: "auto", width: "100%", height: "100vh", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
                <Box sx={{
                    display: "flex", flexDirection: "column", gap: 2, p: 3, maxWidth: "4xl"
                }}>
                    <Box sx={{
                        display: "grid", gridTemplateColumns: { sm: "repeat(3, 1fr)" }, gap: 4
                    }}>
                        <Box>
                            <Typography variant="body1" fontWeight="bold">
                                Weekly E-Mail
                            </Typography>
                            <Typography variant="body2" sx={{ color: "grey.500", fontWeight: "medium" }}>
                                Every week you&apos;ll receive an email containing a summary of your tasks across buildings.
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", flexDirection: "column", gap: 2, alignItems: "end"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="body2" sx={{ mr: 2, fontWeight: "medium", }}>
                                    E-Mail
                                </Typography>
                                <Switch defaultChecked={false} color="primary" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NotificationPage;