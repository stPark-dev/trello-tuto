"use client";

import { ExpandLess, ExpandMore, HelpOutline, MoreVert } from "@mui/icons-material";
import { Box, Button, Checkbox, Collapse, Divider, Drawer, FormControl, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Select, Tooltip, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react";

const roleData = {
    "roles": [
        {
            id: "fdfcce17-406d-4af8-9477-f8272c5362d2",
            name: "Manager",
            description: null,
            tenant_id: "cced6994-0adc-414a-a787-64f3d38cd112",
            permissions: [
                {
                    id: "77d54e40-175f-42de-9468-e16154313612",
                    name: "asset.create"
                },
                {
                    id: "cfcbac18-471d-488e-80bb-dac034147598",
                    name: "asset.read"
                },
                {
                    id: "55e9d137-0d5e-4c15-91fb-ec8052b29721",
                    name: "asset.update"
                },
                {
                    id: "ff9cc3ed-e2d2-43cf-b25d-38d514e4690a",
                    name: "billing.read"
                },
                {
                    id: "2bc4eb53-d752-4660-a743-6f3c938d005d",
                    name: "billing.update"
                },
                {
                    id: "709c28e0-1244-4dcd-af5a-1beae0961056",
                    name: "category.create"
                },
                {
                    id: "37953278-bee0-4815-a4c2-025abaf8324a",
                    name: "category.delete"
                },
                {
                    id: "850a00f0-819b-4a4d-a000-8fba1c06a82e",
                    name: "category.read"
                },
                {
                    id: "fd24fc4e-335d-48bc-b78d-567cd3abb345",
                    name: "category.update"
                },
                {
                    id: "23fd9134-ca3a-411d-88f5-0e98c317e68e",
                    name: "document.create"
                },
                {
                    id: "76ad5fbf-884d-4fa0-868b-be8df67b0a07",
                    name: "document.delete"
                },
                {
                    id: "1365f413-0d5d-4b35-b931-3fe2ddd8536a",
                    name: "document.read"
                },
                {
                    id: "a8e7443c-8159-4ceb-a945-57579629b511",
                    name: "document.update"
                },
                {
                    id: "94ab5b12-b825-46a8-9e59-3c262c1f6397",
                    name: "messenger-flow.read"
                },
                {
                    id: "8be57443-42ef-4787-9100-407712b49c08",
                    name: "messenger-flow.update"
                },
                {
                    id: "ac7ebb3d-340f-4786-b57f-eb3a8e4c3685",
                    name: "recurring-task.create"
                },
                {
                    id: "8b717b08-497b-469a-9e7a-5ba58c0a4f9c",
                    name: "recurring-task.delete"
                },
                {
                    id: "ba1b811e-645c-4f0e-b723-cb8fc1357c81",
                    name: "recurring-task.read"
                },
                {
                    id: "df8d9d7c-916c-4a09-bd1e-b620533fb914",
                    name: "recurring-task.update"
                },
                {
                    id: "87b1d964-6bfc-4358-8bff-16d9cc6001bf",
                    name: "role.create"
                },
                {
                    id: "ce49d8a0-29bb-4934-9afe-d91e98e17d54",
                    name: "role.delete"
                },
                {
                    id: "f4165cea-3f15-4886-9a64-b220e0c13a9f",
                    name: "role.read"
                },
                {
                    id: "6f617892-9e87-4b95-9c08-4b6cc4c11938",
                    name: "role.update"
                },
                {
                    id: "dbdc0d32-3e73-4a12-b280-cb60869af532",
                    name: "space.create"
                },
                {
                    id: "18e84195-2869-48f9-bf04-675f353b5e35",
                    name: "space.delete"
                },
                {
                    id: "235ed72b-6929-43d1-ab4e-dada71df6237",
                    name: "space.read"
                },
                {
                    id: "6374ce31-b78d-4985-b8b7-2e5b377be613",
                    name: "space.update"
                },
                {
                    id: "8453352e-1494-43a2-97e7-eb5847da09f7",
                    name: "task.complete-task"
                },
                {
                    id: "fdc7ec91-093a-49fa-8bf8-6c05ef3dd4b1",
                    name: "task.material.create"
                },
                {
                    id: "6fa735b4-30d0-4d85-b6f3-c97c8e584f9d",
                    name: "task.material.delete"
                },
                {
                    id: "484ffb53-e4d2-4717-bd3e-892a152b1fc2",
                    name: "task.public-reply"
                },
                {
                    id: "571d8bf2-fbb4-48e3-930a-ed0b050bdd03",
                    name: "task.time.create"
                },
                {
                    id: "a737e63d-ac7b-4531-b85b-df0bfa42f720",
                    name: "task.time.delete"
                },
                {
                    id: "b769021a-65fc-4e97-9037-51bd716aad6a",
                    name: "tenant.update"
                },
                {
                    id: "03d3bc90-0057-4e8d-99cf-427b67aff91e",
                    name: "user.create"
                },
                {
                    id: "e09f7eba-4901-42ac-9bde-881bebe00861",
                    name: "user.delete"
                },
                {
                    id: "f74c7a41-5595-40e3-a1ce-851a8ca6078b",
                    name: "user.read"
                },
                {
                    id: "ca5964f8-e528-4744-90b0-372345b6f50b",
                    name: "user.update"
                }
            ]
        },
        {
            id: "e124b6d1-a1fe-4abd-b80a-a40fc8398cff",
            name: "Service Provider",
            description: null,
            tenant_id: "cced6994-0adc-414a-a787-64f3d38cd112",
            permissions: [
                {
                    id: "8453352e-1494-43a2-97e7-eb5847da09f7",
                    name: "task.complete-task"
                },
                {
                    id: "e2292780-3f57-4b61-b3c3-797bc4553509",
                    name: "task.limited-access"
                },
                {
                    id: "fdc7ec91-093a-49fa-8bf8-6c05ef3dd4b1",
                    name: "task.material.create"
                },
                {
                    id: "6fa735b4-30d0-4d85-b6f3-c97c8e584f9d",
                    name: "task.material.delete"
                },
                {
                    id: "571d8bf2-fbb4-48e3-930a-ed0b050bdd03",
                    name: "task.time.create"
                },
                {
                    id: "a737e63d-ac7b-4531-b85b-df0bfa42f720",
                    name: "task.time.delete"
                }
            ]
        },
        {
            id: "0ecdbb92-1742-4f1a-b58c-430922a414ab",
            name: "Staff",
            description: null,
            tenant_id: "cced6994-0adc-414a-a787-64f3d38cd112",
            permissions: [
                {
                    id: "77d54e40-175f-42de-9468-e16154313612",
                    name: "asset.create"
                },
                {
                    id: "1bac514a-9445-4dfa-8def-33dfcc1a1630",
                    name: "asset.delete"
                },
                {
                    id: "cfcbac18-471d-488e-80bb-dac034147598",
                    name: "asset.read"
                },
                {
                    id: "55e9d137-0d5e-4c15-91fb-ec8052b29721",
                    name: "asset.update"
                },
                {
                    id: "709c28e0-1244-4dcd-af5a-1beae0961056",
                    name: "category.create"
                },
                {
                    id: "37953278-bee0-4815-a4c2-025abaf8324a",
                    name: "category.delete"
                },
                {
                    id: "850a00f0-819b-4a4d-a000-8fba1c06a82e",
                    name: "category.read"
                },
                {
                    id: "fd24fc4e-335d-48bc-b78d-567cd3abb345",
                    name: "category.update"
                },
                {
                    id: "ac7ebb3d-340f-4786-b57f-eb3a8e4c3685",
                    name: "recurring-task.create"
                },
                {
                    id: "8b717b08-497b-469a-9e7a-5ba58c0a4f9c",
                    name: "recurring-task.delete"
                },
                {
                    id: "ba1b811e-645c-4f0e-b723-cb8fc1357c81",
                    name: "recurring-task.read"
                },
                {
                    id: "df8d9d7c-916c-4a09-bd1e-b620533fb914",
                    name: "recurring-task.update"
                },
                {
                    id: "dbdc0d32-3e73-4a12-b280-cb60869af532",
                    name: "space.create"
                },
                {
                    id: "18e84195-2869-48f9-bf04-675f353b5e35",
                    name: "space.delete"
                },
                {
                    id: "235ed72b-6929-43d1-ab4e-dada71df6237",
                    name: "space.read"
                },
                {
                    id: "6374ce31-b78d-4985-b8b7-2e5b377be613",
                    name: "space.update"
                },
                {
                    id: "8453352e-1494-43a2-97e7-eb5847da09f7",
                    name: "task.complete-task"
                },
                {
                    id: "fdc7ec91-093a-49fa-8bf8-6c05ef3dd4b1",
                    name: "task.material.create"
                },
                {
                    id: "6fa735b4-30d0-4d85-b6f3-c97c8e584f9d",
                    name: "task.material.delete"
                },
                {
                    id: "484ffb53-e4d2-4717-bd3e-892a152b1fc2",
                    name: "task.public-reply"
                },
                {
                    id: "571d8bf2-fbb4-48e3-930a-ed0b050bdd03",
                    name: "task.time.create"
                },
                {
                    id: "a737e63d-ac7b-4531-b85b-df0bfa42f720",
                    name: "task.time.delete"
                }
            ]
        }
    ]
}

const permissionData = {
    permission_groups: [
        {
            id: "d2b7b98c-9479-4da0-87f3-2b250662d622",
            name: "Assets",
            description: "All permissions related to assets and asset groups.",
            permissions: [
                {
                    id: "1bac514a-9445-4dfa-8def-33dfcc1a1630",
                    name: "asset.delete"
                },
                {
                    id: "55e9d137-0d5e-4c15-91fb-ec8052b29721",
                    name: "asset.update"
                },
                {
                    id: "77d54e40-175f-42de-9468-e16154313612",
                    name: "asset.create"
                },
                {
                    id: "cfcbac18-471d-488e-80bb-dac034147598",
                    name: "asset.read"
                }
            ]
        },
        {
            id: "dbb30c75-b3cf-402b-bc94-fff1fa8ce26c",
            name: "Billing",
            description: "All permissions related to billing",
            permissions: [
                {
                    id: "2bc4eb53-d752-4660-a743-6f3c938d005d",
                    name: "billing.update"
                },
                {
                    id: "ff9cc3ed-e2d2-43cf-b25d-38d514e4690a",
                    name: "billing.read"
                }
            ]
        },
        {
            id: "e2529899-5982-4f32-9b73-b7b0890a1689",
            name: "Category",
            description: "All permissions related to categories",
            permissions: [
                {
                    id: "37953278-bee0-4815-a4c2-025abaf8324a",
                    name: "category.delete"
                },
                {
                    id: "709c28e0-1244-4dcd-af5a-1beae0961056",
                    name: "category.create"
                },
                {
                    id: "850a00f0-819b-4a4d-a000-8fba1c06a82e",
                    name: "category.read"
                },
                {
                    id: "fd24fc4e-335d-48bc-b78d-567cd3abb345",
                    name: "category.update"
                }
            ]
        },
        {
            id: "3bcb10fb-7b7e-446c-ab4c-8187ea80a2de",
            name: "Document",
            description: "All permissions related to documents",
            permissions: [
                {
                    id: "1365f413-0d5d-4b35-b931-3fe2ddd8536a",
                    name: "document.read"
                },
                {
                    id: "23fd9134-ca3a-411d-88f5-0e98c317e68e",
                    name: "document.create"
                },
                {
                    id: "76ad5fbf-884d-4fa0-868b-be8df67b0a07",
                    name: "document.delete"
                },
                {
                    id: "a8e7443c-8159-4ceb-a945-57579629b511",
                    name: "document.update"
                }
            ]
        },
        {
            id: "fb73b8d4-d847-44c9-841f-045af66b7e3f",
            name: "Messenger-flow",
            description: "All permissions related to the messenger flow",
            permissions: [
                {
                    id: "8be57443-42ef-4787-9100-407712b49c08",
                    name: "messenger-flow.update"
                },
                {
                    id: "94ab5b12-b825-46a8-9e59-3c262c1f6397",
                    name: "messenger-flow.read"
                }
            ]
        },
        {
            id: "bb938eef-b8b5-4a0b-afe9-8cfb55cd3311",
            name: "Recurring-task",
            description: "All permissions related to recurring tasks. This is only linked to the settings and not to the tasks",
            permissions: [
                {
                    id: "8b717b08-497b-469a-9e7a-5ba58c0a4f9c",
                    name: "recurring-task.delete"
                },
                {
                    id: "ac7ebb3d-340f-4786-b57f-eb3a8e4c3685",
                    name: "recurring-task.create"
                },
                {
                    id: "ba1b811e-645c-4f0e-b723-cb8fc1357c81",
                    name: "recurring-task.read"
                },
                {
                    id: "df8d9d7c-916c-4a09-bd1e-b620533fb914",
                    name: "recurring-task.update"
                }
            ]
        },
        {
            id: "12f61f05-386f-4ec6-a4bd-b8ba0cb695c6",
            name: "Roles",
            description: "All permissions related to roles",
            permissions: [
                {
                    id: "6f617892-9e87-4b95-9c08-4b6cc4c11938",
                    name: "role.update"
                },
                {
                    id: "87b1d964-6bfc-4358-8bff-16d9cc6001bf",
                    name: "role.create"
                },
                {
                    id: "ce49d8a0-29bb-4934-9afe-d91e98e17d54",
                    name: "role.delete"
                },
                {
                    id: "f4165cea-3f15-4886-9a64-b220e0c13a9f",
                    name: "role.read"
                }
            ]
        },
        {
            id: "48dc914c-275e-439f-a8bc-f37377015d5d",
            name: "Space",
            description: "All permissions related to spaces",
            permissions: [
                {
                    id: "18e84195-2869-48f9-bf04-675f353b5e35",
                    name: "space.delete"
                },
                {
                    id: "235ed72b-6929-43d1-ab4e-dada71df6237",
                    name: "space.read"
                },
                {
                    id: "6374ce31-b78d-4985-b8b7-2e5b377be613",
                    name: "space.update"
                },
                {
                    id: "dbdc0d32-3e73-4a12-b280-cb60869af532",
                    name: "space.create"
                }
            ]
        },
        {
            id: "5a1c58d9-865a-4e7d-a2f7-7563fdab26cf",
            name: "Task",
            description: "All permissions related to tasks",
            permissions: [
                {
                    id: "484ffb53-e4d2-4717-bd3e-892a152b1fc2",
                    name: "task.public-reply"
                },
                {
                    id: "571d8bf2-fbb4-48e3-930a-ed0b050bdd03",
                    name: "task.time.create"
                },
                {
                    id: "6fa735b4-30d0-4d85-b6f3-c97c8e584f9d",
                    name: "task.material.delete"
                },
                {
                    id: "8453352e-1494-43a2-97e7-eb5847da09f7",
                    name: "task.complete-task"
                },
                {
                    id: "a737e63d-ac7b-4531-b85b-df0bfa42f720",
                    name: "task.time.delete"
                },
                {
                    id: "e2292780-3f57-4b61-b3c3-797bc4553509",
                    name: "task.limited-access"
                },
                {
                    id: "fdc7ec91-093a-49fa-8bf8-6c05ef3dd4b1",
                    name: "task.material.create"
                }
            ]
        },
        {
            id: "ce252d48-aa80-4dd1-8bd7-fba3e6b6f08c",
            name: "Building",
            description: "All permissions related to the building",
            permissions: [
                {
                    id: "b769021a-65fc-4e97-9037-51bd716aad6a",
                    name: "tenant.update"
                }
            ]
        },
        {
            id: "199338b0-b93f-4abe-8999-84be3d0848e3",
            name: "Users",
            description: "All permissions related to users",
            permissions: [
                {
                    id: "03d3bc90-0057-4e8d-99cf-427b67aff91e",
                    name: "user.create"
                },
                {
                    id: "ca5964f8-e528-4744-90b0-372345b6f50b",
                    name: "user.update"
                },
                {
                    id: "e09f7eba-4901-42ac-9bde-881bebe00861",
                    name: "user.delete"
                },
                {
                    id: "f74c7a41-5595-40e3-a1ce-851a8ca6078b",
                    name: "user.read"
                }
            ]
        }
    ]
}

const RolesPage = ({ params }: { params: { buildingId: string } }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
    const [description, setDescription] = useState("");

    useEffect(() => {
        // roleData에서 모든 권한을 추출하여 초기 선택 상태를 설정합니다.
        const initialSelectedPermissions = roleData.roles.flatMap(role => role.permissions.map(permission => permission.id));
        setSelectedPermissions(initialSelectedPermissions);
    }, []);

    const handlePermissionChange = (permissionId: string) => {
        setSelectedPermissions((prevSelected) => {
            if (prevSelected.includes(permissionId)) {
                // 이미 선택된 경우 제거
                return prevSelected.filter(id => id !== permissionId);
            } else {
                // 선택되지 않은 경우 추가
                return [...prevSelected, permissionId];
            }
        });
    };

    const handleCollapseClick = () => {
        setOpen(!open);
    };
    const handleListItemClick = () => {
        setDrawerOpen(true);
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
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
                    <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>Roles</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleListItemClick}
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        Add Roles
                    </Button>
                </Box>
                <Box sx={{ width: "100%", height: "100vh", bgcolor: theme.palette.mode === "dark" ? "#4D4D4D" : "#F2F4F7" }}>
                    <List
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                        component="nav"
                        disablePadding={true}
                    >
                        <ListItemButton onClick={handleListItemClick} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box onClick={(e) => { e.stopPropagation(); handleCollapseClick(); }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </Box>
                            <ListItemText primary="Manager" sx={{ ml: 5 }} />
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List>
                                {permissionData.permission_groups.map((group) => (
                                    <Box key={group.id} sx={{ ml: 5 }}>
                                        <Typography variant="body1" fontWeight="bold" sx={{ my: 2 }}>
                                            {group.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ my: 2 }}>
                                            {group.description}
                                        </Typography>
                                        <Divider />
                                        {group.permissions.map((permission) => (
                                            <ListItem
                                                key={permission.id}
                                            >
                                                <Checkbox
                                                    edge="start"
                                                    onChange={() => handlePermissionChange(permission.id)}
                                                    checked={selectedPermissions.includes(permission.id)}
                                                />
                                                <ListItemText primary={permission.name} />
                                            </ListItem>
                                        ))}
                                    </Box>
                                ))}
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
                                        placeholder="Name"
                                        endAdornment={<InputAdornment position="end"><Tooltip title="Provide the name for the space."><HelpOutline sx={{ cursor: "default" }} /></Tooltip></InputAdornment>}
                                        aria-describedby="outlined-name-helper-text"
                                        inputProps={{
                                            "aria-label": "name",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>Descriptions</Typography>
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-description"
                                                    size="small"
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    placeholder="Write description here..."
                                                />
                                            </FormControl>
                            </Box>
                        </Box>
                        <Box id="drawer_footer" sx={{ borderTop: 1, borderColor: "grey.300", }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                                <Button variant="contained" color="inherit" onClick={toggleDrawer(false)}>Cancel</Button>
                                <Button variant="contained" color="primary">Save Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default RolesPage;