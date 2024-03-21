"use client"

import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { FolderOutlined, Delete, MoreVert, EditNote, ExpandMore, Interests, FolderCopy } from "@mui/icons-material";
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

const AssetPage = ({ params }: { params: { buildingId: string } }) => {
    const [assets, setAssets] = useState<AssetType[]>(data);
    const [assetGroups, setAssetGroups] = useState<GroupType[]>([]);
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [groupAnchorEl, setGroupAnchorEl] = useState<null | HTMLElement>(null);
    const groupMenuOpen = Boolean(groupAnchorEl);
    const [addAnchorEl, setAddAnchorEl] = useState<null | HTMLElement>(null);
    const addMenuOpen = Boolean(addAnchorEl);

    const handleGroupMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                        label="삭제"
                        className="textPrimary"
                        color="inherit"
                        onClick={() => handleDeleteAsset(row.id)}
                        showInMenu
                    />,
                ];
            },
        },
    ];


    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ px: 5, mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderColor: "grey.300" }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Assets</Typography>
                    <Button
                        variant="contained"
                        onClick={handleAddMenuClick}
                        sx={{
                            fontWeight: "bold",
                            fontSize: "0.875rem",
                            bgcolor: "#004d40",
                            "&:hover": {
                                bgcolor: "#2B5A52",
                            }
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
                        <MenuItem onClick={handleAddMenuClose}><Interests sx={{ mr: 1 }} />Single Asset</MenuItem>
                        <MenuItem onClick={handleAddMenuClose}><FolderCopy sx={{ mr: 1 }} />Asset Group</MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "row" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", bgcolor: "#F2F4F7", p: 3, gap: 2 }}>
                        <Box sx={{ bgcolor: "#ffffff", borderRadius: "0.25rem", gap: 1 }}>
                            <List dense>
                                <ListItem>
                                    <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }} onClick={() => setSelectedGroupId(null)} >
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <FolderOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="All" />
                                        </Box>
                                        <Box sx={{ width: 25, height: 25, textAlign: "center", bgcolor: "#F2F4F7", borderRadius: "50%" }}>
                                            {data.length}
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Typography fontWeight="bold" sx={{ my: 1 }}>Asset Groups: </Typography>
                            <Box sx={{ bgcolor: "#ffffff", borderRadius: "0.25rem" }}>
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
                                                <IconButton edge="end" size="small" onClick={handleGroupMenuClick}>
                                                    <MoreVert />
                                                </IconButton>
                                                <Menu
                                                    anchorEl={groupAnchorEl}
                                                    open={groupMenuOpen}
                                                    onClose={handleGroupMenuClose}
                                                    MenuListProps={{
                                                        "aria-labelledby": "basic-button",
                                                    }}
                                                >
                                                    <MenuItem onClick={handleGroupMenuClose}><EditNote sx={{ mr: 1 }} />Details</MenuItem>
                                                    <MenuItem onClick={handleGroupMenuClose}><Delete sx={{ mr: 1 }} />Delete</MenuItem>
                                                </Menu>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        flex: 6,
                        "& .asset-grid-header": {
                            bgcolor: "#F2F4F7",
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
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AssetPage;