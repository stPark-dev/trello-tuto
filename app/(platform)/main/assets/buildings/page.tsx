"use client";

import { useTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, Dialog, TextField, Typography, Icon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState } from "react";

const BuildingPage = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        height: 120,
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
            height: 200,
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
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
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
                >   <Box>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <Box sx={{ borderWidth: "1px", borderRadius: "4px", borderColor: "#ffffff", padding: "0.625rem" }}><ApartmentIcon /></Box>
                            Add Buildings
                        </Box>
                        <Box>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="customer"
                                name="customer"
                                label="Customer"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </Box>
                        <Box sx={{ alignItems: "center" }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </Box>
                    </Box>
                </Dialog>
            </>
        );
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
            <Box sx={{ px: 4, my: 4, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" fontWeight="bold">Buildings</Typography>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        bgcolor: "#004d40",
                        "&:hover": {
                            bgcolor: "#2B5A52",
                        }
                    }}
                    onClick={handleClickOpen}
                >
                    Add building
                </Button>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.grey[100], p: 5, overflow: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <Box sx={{ display: "flex", width: "100%", alignItems: "center", gap: 2 }}>
                                    <Avatar>H</Avatar>
                                    <Typography variant="h6" fontWeight="bold">Building Name</Typography>
                                </Box>
                                <Box sx={{ typography: "body2" }}>
                                    <Box>Address</Box>
                                    <Box>PostalCode-City</Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                                <Box>소속 Users</Box>
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
                </Grid>
            </Box>
            <BuildingCreateDialog />
        </Box>
    );
}

export default BuildingPage;