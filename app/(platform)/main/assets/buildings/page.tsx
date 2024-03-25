"use client";

import { useTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, Dialog, TextField, Typography, Icon, Divider, SelectChangeEvent, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Checkbox, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ITEM_HEIGHT = 45;
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
    { _id: "2eccsdgdc-dscxcsw-edcv", name: "Building A", address: "123 Main St", postalCode: "12345", city: "CityA", users: "10" },
    { _id: "3sazxcxxd-anmvcss-zwet", name: "Building B", address: "456 Second St", postalCode: "67890", city: "CityB", users: "15" },
    { _id: "sasnp43sk-ccnlfsb-mbbn", name: "Building C", address: "54 Third St", postalCode: "67890", city: "CityC", users: "2" },
];

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];

const BuildingPage = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [personName, setPersonName] = useState<string[]>([]);
    const router = useRouter();

    const handleSelectBoxChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        height: 200,
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.up("md")]: {
            width: 320,
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        cursor: "pointer"
    }));

    const BuildingCreateDialog = () => {
        return (
            <>
                <Dialog
                    open={open}
                    onClose={(event, reason) => {
                        if (reason !== "backdropClick") {
                            handleClose();
                        }
                    }}
                    PaperProps={{
                        component: "form",
                        sx: { borderRadius: 1, minWidth: 450 },
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const name = formJson.name;
                            const customer = formJson.customer;
                            console.log(name, customer);
                            handleClose();
                        },
                    }}
                >   <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, borderBottom: 1, borderColor: "#ACACAC" }}>
                            <Box sx={{ border: "solid", borderWidth: "2px", borderRadius: 3, borderColor: "#ACACAC", padding: "8px", minWidth: "40px", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <ApartmentIcon />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", ml: 2, fontWeight: "bold" }}>
                                Add Building
                            </Box>
                            <Divider />
                        </Box>
                        <Box sx={{ p: 2 }}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                size="small"
                                fullWidth
                                variant="outlined"
                                sx={{ my: 2 }}
                            />
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-multiple-checkbox-label">Customer</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleSelectBoxChange}
                                    input={<OutlinedInput label="Customer" />}
                                    renderValue={(selected) => selected.join(", ")}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ p: 2, gap: 1, display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
                            <Button onClick={handleClose} variant="contained" sx={{
                                mr: 1,
                                bgcolor: "#ffffff",
                                color: "#000000",
                                flexGrow: 1,
                                ":hover": {
                                    bgcolor: "#ffffff",
                                },
                            }}>Cancel</Button>
                            <Button type="submit" variant="contained" color="primary"
                                sx={{
                                    mr: 1,
                                    flexGrow: 1,
                                }}>Submit</Button>
                        </Box>
                    </Box>
                </Dialog>
            </>
        );
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
            <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" fontWeight="bold">Buildings</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    sx={{
                        fontWeight: "bold",
                    }}
                    onClick={handleClickOpen}
                >
                    Add building
                </Button>
            </Box>
            <Box sx={{ p: 5, overflow: "auto", width: "100%", height: "100vh",  bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
                <Grid container spacing={2}>
                    {data.map((building, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Item onClick={() => router.push(`/main/assets/buildings/${building._id}/location`)}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", gap: 2 }}>
                                        <Avatar>{building.name[0]}</Avatar>
                                        <Typography variant="h6" fontWeight="bold">{building.name}</Typography>
                                    </Box>
                                    <Box sx={{ typography: "body2" }}>
                                        <Box>{building.address}</Box>
                                        <Box>{building.postalCode}-{building.city}</Box>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box>소속 Users: {building.users}</Box>
                                    <Button
                                        sx={{
                                            float: "right",
                                            m: 0,
                                            py: 2,
                                            px: 3,
                                            bgcolor: "grey.200",
                                            ":hover": {
                                                bgcolor: "grey.300",
                                            },
                                            color: "#ABABAB",
                                            boxShadow: "none",
                                            typography: "body2",
                                            textTransform: "none",
                                        }}
                                    >
                                        Free Trial
                                    </Button>
                                </Box>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <BuildingCreateDialog />
        </Box>
    );
}

export default BuildingPage;