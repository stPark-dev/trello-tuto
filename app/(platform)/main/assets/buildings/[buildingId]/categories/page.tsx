"use client"

import { CleaningServices, Devices, ElectricBolt, ExpandLess, Wifi } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const CategoryObj = [
    {
        id: "ae33546c-f16d-4894-83df-07eca7a2cc39",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Cleaning",
        color: "#2196f3",
        Icon: CleaningServices,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null
    },
    {
        id: "673bbd74-8d2d-4fab-903b-c8912ac26550",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Connectivity",
        color: "#00bcd4",
        Icon: Wifi,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null
    },
    {
        id: "90bccb5a-a089-40e9-97f4-130973bd398e",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Devices",
        color: "#ff9800",
        Icon: Devices,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null
    },
    {
        id: "2fd6771a-a4fc-435b-9e22-df7f29ecd15a",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Electricity & Lighting",
        color: "#ffa000",
        Icon: ElectricBolt,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null
    },
]

const CategoryPage = ({ params }: { params: { buildingId: string } }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleListItemClick = () => {
        setDrawerOpen(true);
    };

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Categories</Typography>
                    <Button
                        component="label"
                        variant="contained"
                        onClick={handleListItemClick}
                        sx={{
                            bgcolor: '#004d40',
                            '&:hover': {
                                bgcolor: "#2B5A52",
                            }
                        }}
                    >
                        Add Category
                    </Button>
                </Box>
                <List
                    sx={{ width: "100%", bgcolor: "background.paper" }}
                    component="nav"
                >
                    {CategoryObj.map(({name, Icon, color}) => {
                        return (
                            <>
                                <ListItemButton onClick={handleListItemClick} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon sx={{ color: {color}}}/>
                                    </Box>
                                    <ListItemText primary={name} sx={{ ml: 5 }} />
                                </ListItemButton>
                                <Divider />
                            </>
                        )
                    })}
                </List>
                <Drawer
                    anchor={"right"}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 500 }}
                        role="space detail"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Typography variant="h6" sx={{ m: 2 }}>
                            Category Details
                        </Typography>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default CategoryPage;