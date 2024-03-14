"use client"

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Collapse, Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const SpacePage = ({ params }: { params: { buildingId: string } }) => {
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleCollapseClick = () => {
        setOpen(!open);
    };

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
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Spaces({params.buildingId})</Typography>
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
                        Add Space
                    </Button>
                </Box>
                <List
                    sx={{ width: "100%", bgcolor: "background.paper" }}
                    component="nav"
                >
                    <ListItemButton onClick={handleListItemClick} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box onClick={(e) => { e.stopPropagation(); handleCollapseClick(); }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                        <ListItemText primary="Office Building" sx={{ ml: 5 }} />
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding >
                            <ListItemButton onClick={handleListItemClick} sx={{ pl: 4 }}>
                                <ListItemText primary="Room1" sx={{ pl: 8 }} />
                            </ListItemButton>
                        </List>
                    </Collapse>
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
                            Space Details
                        </Typography>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default SpacePage;