"use client"

import { HelpOutline, MoreVert } from "@mui/icons-material";
import {
    Autocomplete, Avatar, Box, Button, Drawer, FormControl, IconButton, InputAdornment, OutlinedInput, Paper, SelectChangeEvent,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography, alpha, styled
} from "@mui/material";
import { useState } from "react";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string | null;
    avatarUrl: string | null;
    avatarInitials: string;
    locale: string;
    role: string[];
    function: string | null;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string | null;
}

const data: User[] = [
    {
        id: "78f99651-e184-4189-ae5e-be1bce1b5149",
        firstName: "ST",
        lastName: "PARK",
        email: "dmc0110@naver.com",
        phone: "01063356618",
        companyName: null,
        avatarUrl: null,
        avatarInitials: "SP",
        locale: "kor",
        role: ["Manager"],
        function: null,
        createdAt: "2024-02-15T07:57:27.000000Z",
        deletedAt: null,
        updatedAt: null,
    },
    {
        id: "92f12a51-abq4-54v2-xzaw-abc5pkb14bvo",
        firstName: "Gildong",
        lastName: "Hong",
        email: "dmc6618@gmail.com",
        phone: "01012345678",
        companyName: null,
        avatarUrl: null,
        avatarInitials: "HG",
        locale: "kor",
        role: ["Manager", "Staff"],
        function: null,
        createdAt: "2024-02-18T17:27:35.000000Z",
        deletedAt: null,
        updatedAt: null,
    }
]

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

const role_types = [
    {
        value: "Manager",
        label: "Manager"
    },
    {
        value: "Staff",
        label: "Staff"
    },
    {
        value: "Service Provider",
        label: "Service Provider"
    }
]

const UserPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [roleType, setRoleType] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState<User | null>(null);
    const [image, setImage] = useState("https://app.fixform.com/images/logo/8e7e5369-9b7e-4662-985d-2c8ebb98b722?p=logo&t=1709859358&signature=6e07d02fded9883e4eec985d39f589326c9de1c68ba25eb5a58f1a7ea50ff632");

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

    const resetItemClick = () => {
        setSelectedItem(null);
        setDrawerOpen(true);
    }

    const handleListItemClick = () => {
        setDrawerOpen(true);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setImage(e.target.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRoleChange = (newValue: string[]) => {
        if (selectedItem) {
            setSelectedItem({
                ...selectedItem,
                role: newValue,
            });
        }
        setRoleType(newValue);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Users</Typography>
                <Button
                    variant="contained"
                    onClick={resetItemClick}
                    sx={{
                        fontWeight: "bold",
                        bgcolor: "#",
                        "&:hover": {
                            bgcolor: "#2B5A52",
                        }
                    }}
                >
                    Add User
                </Button>
            </Box>
            <Box sx={{ width: "100%", height: "100vh", bgcolor: "#F2F4F7" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Function</TableCell>
                                <TableCell align="right">Roles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((user) => (
                                <TableRow
                                    key={user.id}
                                    hover
                                    onClick={() => {
                                        setSelectedItem(user);
                                        handleListItemClick();
                                    }}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.firstName + " " + user.lastName}
                                    </TableCell>
                                    <TableCell align="right">{user.function || ""}</TableCell>
                                    <TableCell align="right">{user.role.join(", ")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
                        {selectedItem &&
                            (
                                <>
                                    <Box>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Photo</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    position: "relative",
                                                    display: "inline-block",
                                                    borderRadius: "50%",
                                                    img: { objectFit: "cover" },
                                                }}
                                                src={image}
                                                alt=""
                                            />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                onChange={handleImageChange}
                                                id="file-input"
                                            />
                                            <label htmlFor="file-input"> {/* label을 사용하여 input과 버튼을 연결합니다. */}
                                                <Button
                                                    variant="outlined"
                                                    component="span"
                                                    sx={{
                                                        p: 1,
                                                        textTransform: "none",
                                                        color: "text.primary",
                                                        bgcolor: "background.paper",
                                                        borderColor: "grey.300",
                                                        ":hover": { bgcolor: "background.paper", color: "text.secondary" },
                                                        fontWeight: "medium",
                                                    }}
                                                >
                                                    Change
                                                </Button>
                                            </label>
                                        </Box>
                                    </Box>
                                    <Box sx={{ my: 2, display: "flex", flexDirection: "row", gap: 2 }}>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>First Name</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-firstname"
                                                    size="small"
                                                    value={selectedItem.firstName}
                                                    aria-describedby="outlined-firstname-helper-text"
                                                    inputProps={{
                                                        "aria-label": "firstname",
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Last Name</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-lastname"
                                                    size="small"
                                                    value={selectedItem.lastName}
                                                    aria-describedby="outlined-lastname-helper-text"
                                                    inputProps={{
                                                        "aria-label": "lastname",
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>E-Mail</Typography>
                                        <FormControl sx={{ width: "100%" }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-email"
                                                size="small"
                                                placeholder="john.doe@teamvolt.com"
                                                value={selectedItem.email}
                                                endAdornment={<InputAdornment position="end"><Tooltip title="Provide an email address."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                                aria-describedby="outlined-name-helper-text"
                                                inputProps={{
                                                    "aria-label": "email",
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Roles</Typography>
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={role_types.map((option) => option.label)}
                                            getOptionLabel={(option) => option}
                                            defaultValue={[]}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    label="Select roles"
                                                />
                                            )}
                                            value={selectedItem ? selectedItem.role : []}
                                            onChange={(event, newValue) => {
                                                handleRoleChange(newValue)
                                            }}
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Function</Typography>
                                        <FormControl sx={{ width: "100%" }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-function"
                                                size="small"
                                                value={selectedItem.function}
                                                endAdornment={<InputAdornment position="end"><Tooltip title="Specify which function the user is going to have in this location"><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                                aria-describedby="outlined-function-helper-text"
                                                inputProps={{
                                                    "aria-label": "function",
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                </>
                            )
                        }
                        {selectedItem === null &&
                            (
                                <>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>E-Mail</Typography>
                                        <FormControl sx={{ width: "100%" }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-email"
                                                size="small"
                                                placeholder="ex) john.doe@teamvolt.com"
                                                endAdornment={<InputAdornment position="end"><Tooltip title="Provide an email address."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                                aria-describedby="outlined-name-helper-text"
                                                inputProps={{
                                                    "aria-label": "email",
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Roles</Typography>
                                        <Autocomplete
                                            multiple
                                            id="tags-outlined"
                                            options={role_types.map((option) => option.label)}
                                            getOptionLabel={(option) => option}
                                            defaultValue={[]}
                                            filterSelectedOptions
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    label="Select roles"
                                                />
                                            )}
                                            value={roleType}
                                            onChange={(event, newValue) => {
                                                setRoleType(newValue);
                                            }}
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{ my: 2 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Function</Typography>
                                        <FormControl sx={{ width: "100%" }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-function"
                                                size="small"
                                                endAdornment={<InputAdornment position="end"><Tooltip title="Specify which function the user is going to have in this location"><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                                aria-describedby="outlined-function-helper-text"
                                                inputProps={{
                                                    "aria-label": "function",
                                                }}
                                            />
                                        </FormControl>
                                    </Box>
                                </>
                            )
                        }
                    </Box>
                    <Box id="drawer_footer" sx={{ borderTop: 1, borderColor: "grey.300", }}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                            <Button variant="contained" onClick={toggleDrawer(false)} sx={{
                                color: "#000000", bgcolor: "#ffffff",
                                "&:hover": {
                                    bgcolor: "#ffffff",
                                    color: "#0A0A0A",
                                }
                            }}>Cancel</Button>
                            <Button variant="contained" sx={{
                                bgcolor: "#",
                                "&:hover": {
                                    bgcolor: "#2B5A52",
                                }
                            }}>Save Changes</Button>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}

export default UserPage;