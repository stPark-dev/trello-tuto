"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ArticleIcon from '@mui/icons-material/Article';
import RepeatIcon from '@mui/icons-material/Repeat';

const MainSideBar = () => {
    const currPathName = usePathname();
    const [sideText, setSideText] = useState("");

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        px: 2,
        py: 2,
        typography: 'body2',
        fontWeight: 500,
        borderRadius: 1,
        color: 'text.secondary',
        '&:hover': {
            bgcolor: 'grey.50',
            color: 'text.primary',
        },
        textDecoration: 'none',
    };


    useEffect(() => {
        switch (currPathName) {
            case '/main/tasks':
                setSideText("Tasks");
                break;
            case '/main/insights':
                setSideText("Insights");
                break;
            case '/main/organisation':
                setSideText("Organisation");
                break;
            default:
                setSideText("");
        }
    }, [currPathName]);

    const renderSidebarComponent = () => {
        switch (currPathName) {
            case '/main/tasks':
                return (
                    <>
                        <Box sx={linkStyle} component={Link} href="/">
                            <RepeatIcon sx={{ marginRight: 1 }} />
                            Recurring Tasks
                        </Box>
                    </>
                );
            case '/main/insights':
                return (
                    <>
                        <Box sx={linkStyle} component={Link} href="/">
                            <ArticleIcon sx={{ marginRight: 1 }} />
                            Documents
                        </Box>
                    </>
                );
            case '/main/organisation':
                return (
                    <>
                        <Box sx={linkStyle} component={Link} href="/">
                            <BusinessIcon sx={{ marginRight: 1 }} />
                            Buildings
                        </Box>
                        <Box sx={linkStyle} component={Link} href="/">
                            <ArticleIcon sx={{ marginRight: 1 }} />
                            Documents
                        </Box>
                        <Box sx={linkStyle} component={Link} href="/">
                            <RepeatIcon sx={{ marginRight: 1 }} />
                            Recurring Tasks
                        </Box>
                    </>
                );
            default:
                return null;
        }
    }
    return (
        <>
            <Paper id="sbPaper" elevation={6} sx={{
                width: "100%", maxWidth: "16rem", zIndex: 10, display: {
                    xs: 'none',
                    sm: 'flex',
                },
            }}>
                <Box sx={{
                    flexDirection: 'column',
                    overflowY: 'auto',
                    pt: 2,
                    pb: 2,
                    height: '100%', // 'h-full'
                }}>
                    <Box sx={{
                        pt: 2,
                        pl: 4,
                        typography: 'h6',
                        fontWeight: 'medium',
                        color: 'text.primary',
                    }}>
                        <Typography variant="h5" sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', }}>{sideText}</Typography>
                    </Box>
                    <Box sx={{ marginTop: "1.25rem", display: "flex", flexGrow: 1, flexDirection: "column" }}>
                        <Box
                            aria-label="Sidebar"
                            sx={{
                                flex: "1 1 0%",
                                '& > * + *': {
                                    mt: 8,
                                },
                                backgroundColor: "rgb(255, 255, 255 / 1)",
                                px: 1,
                                '@media (min-width:0px)': {
                                    px: 2,
                                },
                                '@media (min-width:600px)': {
                                    px: 3,
                                },
                                '@media (min-width:900px)': {
                                    px: 4,
                                },
                            }}
                        >
                            <Box sx={{
                                '& > * + *': {
                                    mt: 1,
                                },
                            }}>
                                {renderSidebarComponent()}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </>
    );
};
export default MainSideBar;