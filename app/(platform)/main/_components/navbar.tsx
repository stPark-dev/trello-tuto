"use client";

import Image from "next/image";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BusinessIcon from '@mui/icons-material/Business';
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useMediaQuery, useTheme, Box, Drawer, IconButton, List, ListItemIcon, ListItemText, ListItemButton, Link } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const MainNavBar = () => {
    const currentPathName = usePathname();
    const theme = useTheme();
    const isActive = (pathname: string) => currentPathName === pathname;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navLinks = [
        { href: '/main/tasks', label: 'Tasks', Icon: TaskAltIcon, isActive: isActive('/main/tasks') },
        { href: '/main/insights', label: 'Insights', Icon: QueryStatsIcon, isActive: isActive('/main/insights') },
        { href: '/main/organisation', label: 'Organisation', Icon: BusinessIcon, isActive: isActive('/main/organisation') },
    ];
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawer = (
        <Box>
            <List>
                {['Tasks', 'Insights', 'Organisation'].map((text, index) => (
                    <Box component={Link} href={`/main/${text.toLowerCase()}`} key={text} sx={{ textDecoration: "none", color: 'text.secondary', }}>
                        <ListItemButton
                            selected={isActive(`/main/${text.toLowerCase()}`)}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemIcon>
                                {index === 0 && <TaskAltIcon />}
                                {index === 1 && <QueryStatsIcon />}
                                {index === 2 && <BusinessIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1100, backgroundColor: "rgb(255 255 255 / 1)", borderWidth: 1, borderBottomColor: "rgb(229 231 235 / 1)", boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)' }}>
            <Box
                sx={{
                    px: 4,
                    '@media (min-width:640px)': {
                        px: 6,
                    },
                    '@media (min-width:1024px)': {
                        px: 8,
                    },
                }}>
                <Box sx={{ display: "flex", height: "4em", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box component={Link} href="/">
                            <Image alt="logo" src="/landing/logo_main.png" width={Math.ceil(1664 / 10)} height={Math.ceil(217 / 10)} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex", alignItems: "center", width: "100%",
                            '@media (min-width:640px)': {
                                justifyContent: "space-between",
                            },
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                borderLeft: 1,
                                borderColor: 'grey.300',
                                my: 4,
                                ml: 4,
                                pl: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                    '& > * + *': {
                                        marginLeft: 5,
                                    },
                                }}
                            >
                                {navLinks.map(({ href, label, Icon, isActive }) => (
                                    <Box
                                        key={href}
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            px: "1rem",
                                            pt: 1,
                                            fontSize: '0.875rem',
                                            fontWeight: 'medium',
                                            color: isActive ? 'grey.900' : 'grey.500',
                                            opacity: 0.6,
                                            '&:hover': {
                                                color: 'grey.700',
                                                opacity: 1,
                                            },
                                            textDecoration: 'none',
                                        }}
                                        component={Link}
                                        href={href}
                                    >
                                        <Icon sx={{ marginRight: 1 }} />
                                        {label}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            '& > * + *': {
                                marginLeft: 2,
                            },
                            fontWeight: 'medium',
                        }}>
                            {/* <div className="hidden sm:flex">
                                <Link
                                    href="https://support.fixform.com"
                                    target="_blank"
                                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Help Center
                                </Link>
                            </div> */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '@media (max-width:600px)': {
                                        gap: 2, 
                                    },
                                }}
                            >
                                {isMobile && (
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerToggle}
                                        edge="start"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                )}
                                <OrganizationSwitcher
                                    hidePersonal
                                    afterCreateOrganizationUrl="/main"
                                    afterLeaveOrganizationUrl="/select-org"
                                    afterSelectOrganizationUrl="/main"
                                    appearance={{
                                        elements: {
                                            rootBox: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }
                                        }
                                    }}
                                />
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            avatarBox: {
                                                height: 30,
                                                width: 30
                                            }
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {<Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                >
                    {drawer}
                </Drawer>}
            </Box>
        </Box>
    );
};

export default MainNavBar;
