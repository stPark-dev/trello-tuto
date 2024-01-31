"use client";

import Image from "next/image";
import Link from "next/link";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BusinessIcon from '@mui/icons-material/Business';
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useMediaQuery, useTheme, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const MainNavBar = () => {
    const currentPathName = usePathname();
    const theme = useTheme();
    const isActive = (pathname: string) => currentPathName === pathname;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawer = (
        <div>
            <List>
                {['Tasks', 'Insights', 'Organisation'].map((text, index) => (
                    <Link href={`/main/${text.toLowerCase()}`} passHref key={text}>
                        <ListItem button selected={isActive(`/main/${text.toLowerCase()}`)}>
                            <ListItemIcon>
                                {index === 0 && <TaskAltIcon />}
                                {index === 1 && <QueryStatsIcon />}
                                {index === 2 && <BusinessIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div className="bg-white border border-b-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" passHref>
                            <Image alt="logo" src="/logo_main.png" width={Math.ceil(1664 / 10)} height={Math.ceil(217 / 10)} />
                        </Link>
                    </div>
                    <div className="flex items-center w-full sm:justify-between">
                        <div className="flex border-l border-gray-300 my-5 ml-5 pl-5">
                            <div className="hidden sm:flex sm:space-x-10">
                                <Link
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/main/tasks') ? 'text-brand-900' : 'text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-100'}`}
                                    href="/main/tasks"
                                >
                                    <TaskAltIcon sx={{ marginRight: 1 }} />
                                    Tasks
                                </Link>
                                <Link
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/main/insights') ? 'text-brand-900' : 'text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-100'}`}
                                    href="/main/insights"
                                >
                                    <QueryStatsIcon sx={{ marginRight: 1 }} />
                                    Insights
                                </Link>
                                <Link
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/main/organisation') ? 'text-brand-900' : 'text-gray-500 hover:text-gray-700 opacity-60 hover:opacity-100'}`}
                                    href="/main/organisation"
                                >
                                    <BusinessIcon sx={{ marginRight: 1 }} />
                                    Organisation
                                </Link>
                            </div>
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
                        </div>
                        <div className="flex space-x-4 font-medium">
                            <div className="hidden sm:flex">
                                <Link
                                    href="https://support.fixform.com"
                                    target="_blank"
                                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Help Center
                                </Link>
                            </div>
                            <div className="ml-auto flex items-center justify-center gap-x-2">
                                <OrganizationSwitcher
                                    hidePersonal
                                    afterCreateOrganizationUrl="/organization/:id"
                                    afterLeaveOrganizationUrl="/select-org"
                                    afterSelectOrganizationUrl="/organization/:id"
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
                            </div>
                        </div>
                    </div>
                </div>
                {<Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                >
                    {drawer}
                </Drawer>}
            </div>
        </div>
    );
};

export default MainNavBar;
