"use client"

import { CleaningServices, Devices, ElectricBolt, HelpOutline, MoreVert, Wifi, SvgIconComponent } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, FormControl, IconButton, InputAdornment, List, ListItemButton, ListItemText, OutlinedInput, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Translations = {
    kor: string;
    jpn: string;
    eng: string;
};


type Category = {
    id: string;
    tenant_id: string;
    name: string;
    color: string;
    Icon: SvgIconComponent;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    translations: Translations;
};

const CategoryObj: Category[] = [
    {
        id: "ae33546c-f16d-4894-83df-07eca7a2cc39",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Cleaning",
        color: "#2196f3",
        Icon: CleaningServices,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null,
        translations: {
            kor: "청소",
            jpn: "クリーニング",
            eng: "Cleaning"
        }
    },
    {
        id: "673bbd74-8d2d-4fab-903b-c8912ac26550",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Connectivity",
        color: "#00bcd4",
        Icon: Wifi,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null,
        translations: {
            kor: "연결성",
            jpn: "コネクティビティ",
            eng: "Connectivity"
        }
    },
    {
        id: "90bccb5a-a089-40e9-97f4-130973bd398e",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Devices",
        color: "#ff9800",
        Icon: Devices,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null,
        translations: {
            kor: "장치",
            jpn: "デバイス",
            eng: "Devices"
        }
    },
    {
        id: "2fd6771a-a4fc-435b-9e22-df7f29ecd15a",
        tenant_id: "8e7e5369-9b7e-4662-985d-2c8ebb98b722",
        name: "Electricity & Lighting",
        color: "#ffa000",
        Icon: ElectricBolt,
        created_at: "2024-03-07T04:42:00.000000Z",
        updated_at: "2024-03-07T04:42:00.000000Z",
        deleted_at: null,
        translations: {
            kor: "전기 & 조명",
            jpn: "電気＆照明",
            eng: "Electricity & Lighting"
        }
    },
]

const CategoryPage = ({ params }: { params: { buildingId: string } }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Category | null>(null);
    const [categoryName, setCategoryName] = useState("");
    const [categoryTranslations, setCategoryTranslations] = useState<Translations>({
        kor: "",
        jpn: "",
        eng: ""
    });


    const handleListItemClick = (item: Category) => {
        setSelectedItem(item);
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

    const updateCategoryTranslations = (language: keyof Translations, value: string) => {
        setCategoryTranslations(prevTranslations => ({
            ...prevTranslations,
            [language]: value
        }));
    };

    useEffect(() => {
        if (selectedItem) {
            setCategoryName(selectedItem.name);
            setCategoryTranslations(selectedItem.translations);
        }
    }, [selectedItem]);
    
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Categories</Typography>
                    <Button
                        component="label"
                        variant="contained"
                        onClick={() => setDrawerOpen(true)}
                        sx={{
                            bgcolor: "#004d40",
                            "&:hover": {
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
                    disablePadding={true}
                >
                    {CategoryObj.map((category) => {
                        return (
                            <Box key={category.id}>
                                <ListItemButton onClick={() => handleListItemClick(category)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <category.Icon sx={{ color: category.color }} />
                                    </Box>
                                    <ListItemText primary={category.name} sx={{ ml: 5 }} />
                                </ListItemButton>
                                <Divider />
                            </Box>
                        );
                    }
                    )}
                </List>
                <Drawer
                    anchor={"right"}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 450, height: "100vh", display: "flex", flexDirection: "column" }}
                        role="space_detail"
                    >
                        {selectedItem && (<><Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                            <Typography variant="h6" sx={{ m: 2 }}>
                                Details
                            </Typography>
                            <IconButton size="small" sx={{ m: 2, border: "solid", borderWidth: 1, borderColor: "grey.300", borderRadius: "25%" }}><MoreVert /></IconButton>
                        </Box><Box sx={{ flexGrow: 1, p: 3 }}>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Icon</Typography>
                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                                        <Box sx={{ width: "3.5rem", height: "3.5rem", display: "flex", justifyContent: "center", alignItems: "center", sborder: "solid", bgcolor: "grey.100", borderWidth: 1, borderColor: "grey.300", borderRadius: "25%" }}>
                                            <selectedItem.Icon fontSize="large" sx={{ color: `${selectedItem.color}` }} />
                                        </Box>
                                        <Button variant="contained" sx={{
                                            borderRadius: "0.5rem",
                                            bgcolor: "#ffffff",
                                            color: "#000000",
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                opacity: 0.8,
                                            },
                                        }}>EDIT ICON</Button>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Category name</Typography>
                                    <FormControl sx={{ width: "100%" }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-name"
                                            size="small"
                                            value={categoryName}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                            endAdornment={<InputAdornment position="end"><Tooltip title="Provide a category name."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                            aria-describedby="outlined-name-helper-text"
                                            inputProps={{
                                                "aria-label": "name",
                                            }} />
                                    </FormControl>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Translations</Typography>
                                    <Box sx={{ p: 2, bgcolor: "grey.200", borderRadius: "1%" }}>
                                        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2, alignItems: "center" }}>
                                            <Typography variant="body1" fontWeight="medium">Korean</Typography>
                                            <TextField
                                                fullWidth
                                                id="korean"
                                                name="korean"
                                                variant="outlined"
                                                value={categoryTranslations.kor}
                                                onChange={(e) => updateCategoryTranslations("kor", e.target.value)}
                                                sx={{
                                                    bgcolor: "grey.100",
                                                    "& .MuiOutlinedInput-root": {
                                                        height: "40px",
                                                        alignItems: "center",
                                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "grey.500",
                                                        },
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent",
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input": {
                                                        padding: "10px 14px",
                                                        fontWeight: "bold",
                                                        color: "black",
                                                    },
                                                }} />
                                            <Typography variant="body1" fontWeight="medium">Japanese</Typography>
                                            <TextField
                                                fullWidth
                                                id="japanese"
                                                name="japanese"
                                                variant="outlined"
                                                value={categoryTranslations.jpn}
                                                onChange={(e) => updateCategoryTranslations("jpn", e.target.value)}
                                                sx={{
                                                    bgcolor: "grey.100",
                                                    "& .MuiOutlinedInput-root": {
                                                        height: "40px",
                                                        alignItems: "center",
                                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "grey.500",
                                                        },
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent",
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input": {
                                                        padding: "10px 14px",
                                                        fontWeight: "bold",
                                                        color: "black",
                                                    },
                                                }} />
                                            <Typography variant="body1" fontWeight="medium">English</Typography>
                                            <TextField
                                                fullWidth
                                                id="english"
                                                name="english"
                                                variant="outlined"
                                                value={categoryTranslations.eng}
                                                onChange={(e) => updateCategoryTranslations("eng", e.target.value)}
                                                sx={{
                                                    bgcolor: "grey.100",
                                                    "& .MuiOutlinedInput-root": {
                                                        height: "40px",
                                                        alignItems: "center",
                                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "grey.500",
                                                        },
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            borderColor: "transparent",
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input": {
                                                        padding: "10px 14px",
                                                        fontWeight: "bold",
                                                        color: "black",
                                                    },
                                                }} />
                                        </Box>
                                    </Box>
                                </Box>

                            </Box><Box id="drawer_footer" sx={{ borderTop: 1, borderColor: "grey.300", }}>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                                    <Button variant="contained" onClick={toggleDrawer(false)} sx={{
                                        bgcolor: "#ffffff", color: "#0A0A0A",
                                        "&:hover": {
                                            bgcolor: "#ffffff",
                                            color: "#0A0A0A",
                                            opacity: 0.7
                                        }, borderRadius: "5%"
                                    }}>Cancel</Button>
                                    <Button variant="contained" sx={{
                                        bgcolor: "#004d40",
                                        "&:hover": {
                                            bgcolor: "#2B5A52",
                                        }
                                    }}>Save Changes</Button>
                                </Box>
                            </Box></>)}

                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default CategoryPage;