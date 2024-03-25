"use client"

import { Box, Button, Checkbox, Dialog, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, Step, StepContent, StepLabel, Stepper, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import { FolderOutlined, Delete, MoreVert, EditNote, ExpandMore, Interests, FolderCopy, Apartment, Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModel } from "@mui/x-data-grid";

export type GroupType = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string | null;
    children: string[];
    parentGroup: string | null;
}

export type AssetType = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string | null;
    identifier: string;
    qrCodes: string[] | null;
    documents: string[] | null;
    group: GroupType;
    brand: string;
    supplier: string;
    serialNumber: string;
    purchasedAt: string;
    comment: string | null;
}

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

const groupData = [
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

const data: AssetType[] = [
    {
        id: "40cd6126-aa4d-49cf-8267-343cbab53072",
        name: "Desk 01",
        createdAt: "2024-03-07T04:42:01.000000Z",
        updatedAt: "2024-03-07T04:42:01.000000Z",
        identifier: "CBD_001",
        qrCodes: [],
        documents: [],
        group: {
            id: "1da7787e-9fe3-4b11-8bda-2d8a41d46c12",
            name: "1",
            createdAt: "2024-03-21T02:06:40.000000Z",
            updatedAt: "2024-03-21T02:06:40.000000Z",
            children: [],
            parentGroup: "8a76f7ec-2508-43d9-a63f-d8ec4dfaab2d",
        },
        brand: "Sharp",
        supplier: "Vendor 01",
        serialNumber: "22dxccsdwaxDB",
        purchasedAt: "2024-03-08T15:00:00+00:00",
        comment: "Office Desk"
    },
    {
        id: "281aacd5-ecca-4141-b3c5-708f201b2c3d",
        name: "Chair 01",
        createdAt: "2024-03-08T01:04:54.000000Z",
        updatedAt: "2024-03-08T01:04:54.000000Z",
        identifier: "cc-01s",
        qrCodes: [],
        documents: [],
        group: {
            id: "510148a5-acb7-44a8-9c96-0d6aea4343c9",
            name: "2",
            createdAt: "2024-03-21T02:06:49.000000Z",
            updatedAt: "2024-03-21T02:06:49.000000Z",
            children: [],
            parentGroup: null,
        },
        brand: "LG",
        supplier: "Vendor 02",
        serialNumber: "020102301366",
        purchasedAt: "2024-03-05T15:00:00+00:00",
        comment: "Comfortable Chair"
    },
]

const steps = [
    {
        label: "General info",
        description: "Provide general information about the aseet.",
    },
    {
        label: "Location & Type",
        description:
            "Define the asset locatgion and type.",
    },
    {
        label: "Warranty & Info",
        description: "Add extra information about the vendor, purchase date,...",
    },
];

const AssetPage = ({ params }: { params: { buildingId: string } }) => {
    const theme = useTheme();
    const [assets, setAssets] = useState<AssetType[]>(data);
    const [assetGroups, setAssetGroups] = useState<GroupType[]>([]);
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [groupAnchorEl, setGroupAnchorEl] = useState<null | HTMLElement>(null);
    const groupMenuOpen = Boolean(groupAnchorEl);
    const [addAnchorEl, setAddAnchorEl] = useState<null | HTMLElement>(null);
    const addMenuOpen = Boolean(addAnchorEl);

    const [singleAssetDiagOpen, setSingleAssetDiagOpen] = useState(false);
    const [assetGroupDiagOpen, setAssetGroupDiagOpen] = useState(false);

    const [spaceType, setSpaceType] = useState<string[]>([]); //Group으로 변경해야 함

    const [activeStep, setActiveStep] = useState(0);
    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSelectBoxChange = (event: SelectChangeEvent<typeof spaceType>) => {
        const {
            target: { value },
        } = event;
        setSpaceType(
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const handleSingleAssetDiagOpen = () => {
        setSingleAssetDiagOpen(true)
    };
    const handleSingleAssetDiagClose = () => {
        setSingleAssetDiagOpen(false)
    };

    const handleAssetGroupDiagOpen = () => {
        setAssetGroupDiagOpen(true)
    };
    const handleAssetGroupDiagClose = () => {
        setAssetGroupDiagOpen(false)
    };


    const handleGroupMenuClick = (event: React.MouseEvent<HTMLButtonElement>, groupId: string) => {
        event.stopPropagation();
        setSelectedGroupId(groupId);
        setGroupAnchorEl(event.currentTarget);
    };

    const handleGroupMenuClose = () => {
        setGroupAnchorEl(null);
    }

    const handleAddMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAddAnchorEl(event.currentTarget);
    };

    const handleAddMenuClose = () => {
        setAddAnchorEl(null);
    }

    useEffect(() => {
        const groups: GroupType[] = assets.map(asset => asset.group).filter((value, index, self) => self.findIndex(group => group.id === value.id) === index);
        setAssetGroups(groups);
    }, [assets]);

    const handleDeleteAsset = (id: string) => {
        setAssets(current => current.filter(asset => asset.id !== id));
    };

    const columns: GridColDef<(typeof data)[number]>[] = [
        {
            field: "name",
            headerName: "Asset Name",
            headerClassName: "asset-grid-header",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "identifier",
            headerName: "Identifier",
            headerClassName: "asset-grid-header",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "brand",
            headerName: "Brand",
            headerClassName: "asset-grid-header",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "supplier",
            headerName: "Supplier",
            headerClassName: "asset-grid-header",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "comment",
            headerName: "Comment",
            headerClassName: "asset-grid-header",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "actions",
            type: "actions",
            headerClassName: "asset-grid-header",
            width: 100,
            getActions: (row: GridRowModel) => {
                return [
                    <GridActionsCellItem
                        key={`edit_${row.id}`}
                        icon={<Delete />}
                        label="Delete"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => handleDeleteAsset(row.id)}
                        showInMenu
                    />,
                ];
            },
        },
    ];

    const SingleAssetDialog = () => {
        const [assetName, setAssetName] = useState("");
        const [uniqIdentifier, setUniqIdentifier] = useState("")

        const handleAssetNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setAssetName(event.target.value);
        };
        const handleUniqIdentifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUniqIdentifier(event.target.value);
        };

        return (
            <>
                <Dialog
                    open={singleAssetDiagOpen}
                    onClose={handleSingleAssetDiagClose}
                    fullWidth
                    maxWidth="md"
                    PaperProps={{
                        component: "form",
                        sx: { borderRadius: 1 },
                    }}
                >   <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, borderBottom: 1, borderColor: "#ACACAC", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                                Create Asset
                            </Box>
                            <IconButton size="small" onClick={handleSingleAssetDiagClose}><Close /></IconButton>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 3, display: "flex", flexDirection: "row" }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Box sx={{ maxWidth: 250 }}>
                                    <Stepper activeStep={activeStep} orientation="vertical">
                                        {steps.map((step) => (
                                            <Step key={step.label} expanded>
                                                <StepLabel>
                                                    <Typography sx={{ fontWeight: "bold" }}>{step.label}</Typography>
                                                </StepLabel>
                                                <StepContent>
                                                    <Typography>{step.description}</Typography>
                                                </StepContent>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>
                            </Box>
                            <Box sx={{ flexGrow: 4 }}>
                                { }
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="body1" fontWeight="bold">Asset name*</Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide the name for the asset to be created.</Typography>
                                    <FormControl sx={{ width: "100%" }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-name"
                                            size="small"
                                            aria-describedby="outlined-name-helper-text"
                                            value={assetName} // 입력 상태 바인딩
                                            onChange={handleAssetNameChange} // 변경 핸들러 바인딩
                                            placeholder="e.g. Printer"
                                            inputProps={{
                                                "aria-label": "name",
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="body1" fontWeight="bold">Unique Identifier</Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide an optional identifier for this asset.</Typography>
                                    <FormControl sx={{ width: "100%" }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-identifier"
                                            size="small"
                                            aria-describedby="outlined-identifier-helper-text"
                                            value={uniqIdentifier}
                                            onChange={handleUniqIdentifierChange}
                                            inputProps={{
                                                "aria-label": "identifier",
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="body1" fontWeight="bold">Asset group</Typography>
                                    <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Select an asset group for this asset.</Typography>
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
                                            {groupData.map(({ value, label }) => (
                                                <MenuItem key={label} value={value}>
                                                    <Checkbox checked={spaceType.indexOf(value) > -1} />
                                                    <ListItemText primary={value} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                    <Button type="submit" variant="contained" color="primary" disabled={!assetName} onClick={handleNextStep}>
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Dialog>
            </>
        );
    }

    const AssetGroupDialog = () => {
        return (
            <>
                <Dialog
                    open={assetGroupDiagOpen}
                    onClose={handleAssetGroupDiagClose}
                    PaperProps={{
                        component: "form",
                        sx: { borderRadius: 1, minWidth: 450 },
                    }}
                >   <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, borderBottom: 1, borderColor: "#ACACAC", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                                Create asset group
                            </Box>
                            <IconButton size="small" onClick={handleAssetGroupDiagClose}><Close /></IconButton>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold">Group name</Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide the name for the group.</Typography>
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-identifier"
                                        size="small"
                                        placeholder="Group name"
                                        aria-describedby="outlined-identifier-helper-text"
                                        inputProps={{
                                            "aria-label": "identifier",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold">Asset group</Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Select an asset group for this asset.</Typography>
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
                                        {groupData.map(({ value, label }) => (
                                            <MenuItem key={label} value={value}>
                                                <Checkbox checked={spaceType.indexOf(value) > -1} />
                                                <ListItemText primary={value} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box sx={{ p: 2, gap: 1, display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
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
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Assets</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddMenuClick}
                        sx={{
                            fontWeight: "bold",
                            fontSize: "0.875rem",
                        }}
                    >
                        Add<ExpandMore />
                    </Button>
                    <Menu
                        anchorEl={addAnchorEl}
                        open={addMenuOpen}
                        onClose={handleAddMenuClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleSingleAssetDiagOpen}><Interests sx={{ mr: 1 }} />Single Asset</MenuItem>
                        <MenuItem onClick={handleAssetGroupDiagOpen}><FolderCopy sx={{ mr: 1 }} />Asset Group</MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "row" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7", p: 3, gap: 2 }}>
                        <Box sx={{ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", bgcolor: theme.palette.mode === "dark" ? "#1F1F1F" : "#FFFFFF", borderRadius: "0.25rem", gap: 1 }}>
                            <List dense>
                                <ListItem>
                                    <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }} onClick={() => setSelectedGroupId(null)} >
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <FolderOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="All" />
                                        </Box>
                                        <Box sx={{ width: 25, height: 25, textAlign: "center", bgColor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7", borderRadius: "50%" }}>
                                            {data.length}
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Typography fontWeight="bold" sx={{ my: 1 }}>Asset Groups: </Typography>
                            <Box sx={{ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", bgcolor: theme.palette.mode === "dark" ? "#1F1F1F" : "#FFFFFF", borderRadius: "0.25rem" }}>
                                <List dense>
                                    {assetGroups.map(group => (
                                        <ListItem key={group.id}>
                                            <ListItemButton
                                                sx={{ display: "flex", justifyContent: "space-between" }}
                                                onClick={() => setSelectedGroupId(group.id)}
                                            >
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                                        <FolderOutlined />
                                                    </ListItemIcon>
                                                    <ListItemText primary={group.name} />
                                                </Box>
                                            </ListItemButton>
                                            <IconButton
                                                edge="end"
                                                size="small"
                                                onClick={(event) => handleGroupMenuClick(event, group.id)}>
                                                <MoreVert />
                                            </IconButton>
                                            <Menu
                                                anchorEl={selectedGroupId === group.id ? groupAnchorEl : null}
                                                open={groupMenuOpen && selectedGroupId === group.id}
                                                onClose={handleGroupMenuClose}
                                                MenuListProps={{
                                                    "aria-labelledby": "basic-button",
                                                }}
                                            >
                                                <MenuItem onClick={handleGroupMenuClose}><EditNote sx={{ mr: 1 }} />Details</MenuItem>
                                                <MenuItem onClick={handleGroupMenuClose}><Delete sx={{ mr: 1 }} />Delete</MenuItem>
                                            </Menu>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        flex: 6,
                        "& .asset-grid-header": {
                            bgColor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7",
                        },
                    }}>
                        <DataGrid
                            rows={selectedGroupId ? assets.filter(asset => asset.group.id === selectedGroupId) : assets}
                            columns={columns}
                            hideFooter
                            disableColumnMenu
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick
                            sx={{ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", }}
                        />
                    </Box>
                </Box>
            </Box>
            <SingleAssetDialog />
            <AssetGroupDialog />
        </>
    )
}

export default AssetPage;