"use client";

import { useTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";


const BuildingPage = () => {
    const theme = useTheme();
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url?: string }>>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

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



    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const filesArray = Array.from(files).map(file => {
                if (file.type.startsWith("image/")) {
                    return { name: file.name, url: URL.createObjectURL(file) };
                }
                return { name: file.name };
            });
            setUploadedFiles(filesArray);
        }
    };


    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
            <Box sx={{ my: 4, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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
                >
                    Add building
                    <VisuallyHiddenInput
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        accept="image/*, .pdf"
                    />
                </Button>
                {uploadedFiles.map((file, index) => (
                    <Box key={index} mb={5}>
                        {file.url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={file.url} alt={file.name} style={{ width: "auto", height: "auto" }} />
                        ) : (
                            <span>{file.name}</span>
                        )}
                    </Box>
                ))}
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
        </Box>
    );
}

export default BuildingPage;