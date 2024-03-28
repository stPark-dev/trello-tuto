"use client"

import { Box, Button, Checkbox, Dialog, Divider, FormControl, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Select, Step, StepContent, StepLabel, Stepper, TextField, Typography, useTheme } from "@mui/material";
import { FolderOutlined, Delete, MoreVert, EditNote, ExpandMore, Interests, FolderCopy, Close, ArrowForward, ArrowBack, ChevronRight } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { AssetType, GroupType } from "@/types/fixDatatype";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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

const groupData: GroupType[] = [
    {
        id: "62b5c3f2-671a-4821-9360-1189d55d7931",
        name: "Cooking",
        created_at: "2024-03-28T01:01:50.000000Z",
        updated_at: "2024-03-28T01:01:50.000000Z",
        children: [],
        parent_group: null,
        documents: []
    },
    {
        id: "4f7401e9-4ea2-44cb-b679-666433a0ff24",
        name: "Machine",
        created_at: "2024-03-28T01:01:29.000000Z",
        updated_at: "2024-03-28T01:01:29.000000Z",
        children: [
            {
                id: "71d41f21-50c8-437d-81be-78d1100e22a8",
                name: "M-A",
                created_at: "2024-03-28T01:02:02.000000Z",
                updated_at: "2024-03-28T01:02:02.000000Z",
                children: [],
                parent_group: "4f7401e9-4ea2-44cb-b679-666433a0ff24",
                documents: []
            }
        ],
        parent_group: null,
        documents: []
    }
]

const data: AssetType[] = [
    {
        id: "a13f1618-25bd-4272-b97b-68eb5413c620",
        name: "Microwave",
        space: {
            id: "5ab7a114-f0e1-48b1-9979-82e2d27158a4",
            parent_id: null,
            name: "Office Building",
            identifier: null,
            type: {
                value: "building",
                label: "Building"
            },
            qr_codes: null,
            created_at: "2024-03-28T00:59:44.000000Z",
            updated_at: "2024-03-28T00:59:44.000000Z",
            children: null,
        },
        created_at: "2024-03-28T01:09:51.000000Z",
        updated_at: "2024-03-28T01:09:51.000000Z",
        identifier: "mw001",
        qr_codes: [],
        documents: [],
        group: {
            id: "62b5c3f2-671a-4821-9360-1189d55d7931",
            name: "Cooking",
            created_at: "2024-03-28T01:01:50.000000Z",
            updated_at: "2024-03-28T01:01:50.000000Z",
            children: [],
            parent_group: null,
            documents: []
        },
        brand: "LG",
        supplier: "Vendor A",
        serial_number: "132125211324523",
        purchased_at: "2024-03-01T15:00:00+00:00",
        comment: "\ub0b4\uac00 \uc0b0 \uc804\uc790\ub808\uc778\uc9c0"
    },
    {
        id: "c4d48b7f-87d0-469e-a200-9fb9e312aa60",
        name: "Computer",
        space: {
            id: "95cf4e77-011a-4f39-ac75-b55c789da668",
            parent_id: "5ab7a114-f0e1-48b1-9979-82e2d27158a4",
            name: "Meeting Room 1",
            identifier: null,
            type: {
                value: "room",
                label: "Room"
            },
            qr_codes: null,
            created_at: "2024-03-28T00:59:44.000000Z",
            updated_at: "2024-03-28T00:59:44.000000Z",
            children: null,
        },
        created_at: "2024-03-28T01:10:40.000000Z",
        updated_at: "2024-03-28T01:10:40.000000Z",
        identifier: "G-221",
        qr_codes: [],
        documents: [],
        group: {
            id: "71d41f21-50c8-437d-81be-78d1100e22a8",
            name: "M-A",
            created_at: "2024-03-28T01:02:02.000000Z",
            updated_at: "2024-03-28T01:02:02.000000Z",
            children: [],
            parent_group: "4f7401e9-4ea2-44cb-b679-666433a0ff24",
            documents: []
        },
        brand: "Samsung",
        supplier: "Vendor A",
        serial_number: "1232151351521213",
        purchased_at: "2024-03-08T15:00:00+00:00",
        comment: "\uc0bc\uc131 \ucef4\ud4e8\ud130"
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
    const [addAnchorEl, setAddAnchorEl] = useState<null | HTMLElement>(null);
    const groupMenuOpen = Boolean(groupAnchorEl);
    const addMenuOpen = Boolean(addAnchorEl);

    const [singleAssetDiagOpen, setSingleAssetDiagOpen] = useState(false);
    const [assetGroupDiagOpen, setAssetGroupDiagOpen] = useState(false);

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
        const [activeStep, setActiveStep] = useState(0);
        const [assetName, setAssetName] = useState("");
        const [uniqIdentifier, setUniqIdentifier] = useState("");
        const [brand, setBrand] = useState("");
        const [supplier, setSupplier] = useState("");
        const [serialNum, setSerialNum] = useState("");
        const [date, setDate] = useState<Dayjs | null>(null);
        const [comment, setComment] = useState("");


        // 트리 SelectBox =========================
        const [filterText, setFilterText] = useState("");
        const [checked, setChecked] = useState<string[]>([]);

        const handleToggle = (event: React.ChangeEvent<HTMLInputElement>, nodeId: string) => {
            const currentIndex = checked.indexOf(nodeId);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(nodeId);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        };

        const renderTree = (nodes: GroupType[]): any => nodes.map((node) => {
            if (node.name.toLowerCase().includes(filterText.toLowerCase())) {
                return (
                    <TreeItem
                        key={node.id}
                        nodeId={node.id}
                        label={
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Checkbox
                                    checked={checked.includes(node.id)}
                                    onChange={(event) => handleToggle(event, node.id)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                {node.name}
                            </Box>
                        }
                    >
                        {Array.isArray(node.children) ? renderTree(node.children) : null}
                    </TreeItem>
                );
            }
            return null;
        });

        // =========================

        const handleNextStep = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBackStep = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleAssetNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setAssetName(event.target.value);
        };
        const handleUniqIdentifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUniqIdentifier(event.target.value);
        };
        const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setBrand(event.target.value);
        };
        const handleSupplierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSupplier(event.target.value);
        };
        const handleSerialNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSerialNum(event.target.value);
        };
        const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setComment(event.target.value);
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
                                {activeStep === 0 && (
                                    <>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Asset name*</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide the name for the asset to be created.</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-name"
                                                    size="small"
                                                    aria-describedby="outlined-name-helper-text"
                                                    value={assetName}
                                                    onChange={handleAssetNameChange}
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
                                                <TextField
                                                    sx={{ mb: 2 }}
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Search"
                                                    size="small"
                                                    value={filterText}
                                                    onChange={(e) => setFilterText(e.target.value)}
                                                />
                                                <TreeView
                                                    defaultCollapseIcon={<ExpandMore />}
                                                    defaultExpandIcon={<ChevronRight />}
                                                    multiSelect
                                                >
                                                    {renderTree(groupData)}
                                                </TreeView>
                                            </FormControl>
                                        </Box>
                                    </>
                                )}
                                {activeStep === 1 && (
                                    <>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Location</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Select a location for this asset.</Typography>
                                            <FormControl fullWidth size="small">
                                                <TextField
                                                    sx={{ mb: 2 }}
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Search"
                                                    size="small"
                                                    value={filterText}
                                                    onChange={(e) => setFilterText(e.target.value)}
                                                />
                                                <TreeView
                                                    defaultCollapseIcon={<ExpandMore />}
                                                    defaultExpandIcon={<ChevronRight />}
                                                    multiSelect
                                                >
                                                    {renderTree(groupData)}
                                                </TreeView>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Asset type</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Select an asset group for this asset.</Typography>
                                            <FormControl fullWidth size="small">
                                                <TextField
                                                    sx={{ mb: 2 }}
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Search"
                                                    size="small"
                                                    value={filterText}
                                                    onChange={(e) => setFilterText(e.target.value)}
                                                />
                                                <TreeView
                                                    defaultCollapseIcon={<ExpandMore />}
                                                    defaultExpandIcon={<ChevronRight />}
                                                    multiSelect
                                                >
                                                    {renderTree(groupData)}
                                                </TreeView>
                                            </FormControl>
                                        </Box>
                                    </>
                                )}
                                {activeStep === 2 && (
                                    <>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Brand</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide an optional brand for this asset.</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-brand"
                                                    size="small"
                                                    aria-describedby="outlined-brand-helper-text"
                                                    value={brand}
                                                    onChange={handleBrandChange}
                                                    inputProps={{
                                                        "aria-label": "brand",
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Supplier</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide an optional supplier for this asset.</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-supplier"
                                                    size="small"
                                                    aria-describedby="outlined-supplier-helper-text"
                                                    value={supplier}
                                                    onChange={handleSupplierChange}
                                                    inputProps={{
                                                        "aria-label": "supplier",
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Serial number</Typography>
                                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, color: "#A6A6A6" }}>Provide an optional serial number for this asset.</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-serial"
                                                    size="small"
                                                    aria-describedby="outlined-serial-helper-text"
                                                    value={serialNum}
                                                    onChange={handleSerialNumChange}
                                                    inputProps={{
                                                        "aria-label": "serial",
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Purchase Date</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker value={date} onChange={(newValue) => setDate(newValue)} slotProps={{ textField: { size: "small" } }} />
                                                </LocalizationProvider>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ my: 2 }}>
                                            <Typography variant="body1" fontWeight="bold">Comment</Typography>
                                            <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-comment"
                                                    size="small"
                                                    value={comment}
                                                    onChange={handleCommentChange}
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    placeholder="Write comment here..."
                                                />
                                            </FormControl>
                                        </Box>
                                    </>
                                )}
                                <Box sx={{ display: "flex", justifyContent: activeStep === 0 ? "flex-end" : "space-between", mt: 2 }}>
                                    {activeStep !== 0 && (
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="secondary"
                                            disabled={!assetName}
                                            onClick={handleBackStep}
                                            startIcon={<ArrowBack />}
                                        >
                                            Go back
                                        </Button>
                                    )}
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="primary"
                                        disabled={!assetName}
                                        onClick={handleNextStep}
                                        endIcon={<ArrowForward />}
                                    >
                                        Next step
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