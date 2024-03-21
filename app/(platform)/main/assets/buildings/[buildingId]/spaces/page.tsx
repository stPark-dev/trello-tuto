"use client"

import QrCodeScanner from "@/components/QrCodeScanner";
import { ExpandLess, ExpandMore, HelpOutline, MoreVert } from "@mui/icons-material";
import { Box, Button, Checkbox, Collapse, Drawer, FormControl, Grid, IconButton, InputAdornment, List, ListItemButton, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const data = [
    {
        value: "Building",
        label: "Building"
    },
    {
        value: "Floor",
        label: "Floor"
    },
    {
        value: "Location",
        label: "Location"
    },
    {
        value: "Room",
        label: "Room"
    },
    {
        value: "Department",
        label: "Department"
    }
]

const SpacePage = ({ params }: { params: { buildingId: string } }) => {
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [spaceType, setSpaceType] = useState<string[]>([]);

    const handleSelectBoxChange = (event: SelectChangeEvent<typeof spaceType>) => {
        const {
            target: { value },
        } = event;
        setSpaceType(
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const handleCollapseClick = () => {
        setOpen(!open);
    };

    const handleListItemClick = () => {
        setDrawerOpen(true);
    };

    const handleScanSuccess = (decodedText: string) => {
        console.log(`QR Code decoded: ${decodedText}`);
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
        if (!open) {
            setShowQR(false);
        }
    };

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Spaces</Typography>
                    <Button
                        variant="contained"
                        onClick={handleListItemClick}
                        sx={{
                            fontWeight: "bold",
                            bgcolor: "#004d40",
                            "&:hover": {
                                bgcolor: "#2B5A52",
                            }
                        }}
                    >
                        Add Space
                    </Button>
                </Box>
                <Box sx={{ width: "100%", height: "100vh",  bgcolor: "#F2F4F7"}}>
                    <List
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                        component="nav"
                        disablePadding={true}
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
                </Box>
                <Drawer
                    anchor={"right"}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: { sm: "100vw", md: 500 }, height: "100vh", display: "flex", flexDirection: "column" }}
                        role="space_detail"
                    >
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                            <Typography variant="h6" sx={{ m: 2 }}>
                                Details
                            </Typography>
                            <IconButton size="small" sx={{ m: 2, border: "solid", borderWidth: 1, borderColor: "grey.300", borderRadius: "25%" }}><MoreVert /></IconButton>
                        </Box>
                        <Box sx={{ p: 3, flexGrow: 1 }}>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Name</Typography>
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-name"
                                        size="small"
                                        placeholder="Room A"
                                        endAdornment={<InputAdornment position="end"><Tooltip title="Provide the name for the space."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                        aria-describedby="outlined-name-helper-text"
                                        inputProps={{
                                            "aria-label": "name",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Identifier</Typography>
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-identifier"
                                        size="small"
                                        endAdornment={<InputAdornment position="end"><Tooltip title="Provide an optional identifier."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                        aria-describedby="outlined-identifier-helper-text"
                                        inputProps={{
                                            "aria-label": "identifier",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Type</Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        labelId="type-multiple-checkbox-label"
                                        id="type-multiple-checkbox"
                                        multiple
                                        value={spaceType}
                                        onChange={handleSelectBoxChange}
                                        renderValue={(selected) => selected.join("s, ")}
                                        MenuProps={MenuProps}
                                    >
                                        {data.map(({ value, label }) => (
                                            <MenuItem key={label} value={value}>
                                                <Checkbox checked={spaceType.indexOf(value) > -1} />
                                                <ListItemText primary={value} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Parent space</Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        labelId="space-multiple-checkbox-label"
                                        id="space-multiple-checkbox"
                                        multiple
                                        value={spaceType}
                                        onChange={handleSelectBoxChange}
                                        renderValue={(selected) => selected.join("s, ")}
                                        MenuProps={MenuProps}
                                    >
                                        {data.map(({ value, label }) => (
                                            <MenuItem key={label} value={value}>
                                                <Checkbox checked={spaceType.indexOf(value) > -1} />
                                                <ListItemText primary={value} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                {!showQR && (
                                    <><Typography variant="body1" fontWeight="bold" sx={{ mb: 1, alignSelf: "flex-start" }}>QR Codes</Typography><Box sx={{ width: 200, display: "flex", justifyContent: "center" }}>
                                        <Image src="/qr_vector.jpg" width={200} height={200} alt="qr_vector" />
                                    </Box><Typography variant="h6" fontWeight="bold" sx={{ mt: 2, alignSelf: "center" }}>QR Codes</Typography><Typography sx={{ alignSelf: "center" }}>Currently, no QR codes re assinged to this asset.</Typography><Button
                                        variant="contained"
                                        onClick={() => setShowQR(true)}
                                        sx={{
                                            mt: 4,
                                            bgcolor: "#004d40",
                                            fontWeight: "bold",
                                            "&:hover": {
                                                bgcolor: "#2B5A52",
                                            }
                                        }}
                                    >
                                            Add QR code
                                        </Button></>)}

                                {showQR && (<Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                    <Grid item xs={12}>
                                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <QrCodeScanner />
                                        </Box>
                                    </Grid>
                                </Grid>
                                )}
                            </Box>
                        </Box>
                        <Box id="drawer_footer" sx={{ borderTop: 1, borderColor: "grey.300", }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                                <Button variant="contained" color="inherit" onClick={toggleDrawer(false)}>Cancel</Button>
                                <Button variant="contained" sx={{
                                    bgcolor: "#004d40",
                                    "&:hover": {
                                        bgcolor: "#2B5A52",
                                    }
                                }}>Save Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default SpacePage;