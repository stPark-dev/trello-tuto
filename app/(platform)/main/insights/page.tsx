"use client"
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material"
import { useRef, useState } from "react";
import Component from "../_components/map";
import EChartsBase from "@/components/echarts/BaseChart";
import ChartJsBase from "@/components/chartjs/BaseChart";
import InsightCard from "../_components/Card";
import InsightFilter from "../_components/filter/InsightFilter";
import TableChartIcon from '@mui/icons-material/TableChart';

const Item = styled(Paper)(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const MainInsight = () => {
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url?: string }>>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
            <Box sx={{ px: 5, my: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" fontWeight="bold">Insights</Typography>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<TableChartIcon />}
                    sx={{
                        bgcolor: '#004d40',
                        '&:hover': {
                            bgcolor: "#2B5A52",
                        }
                    }}
                >
                    Export
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
            <Box sx={{ flexGrow: 1, overflow: "hidden", p: 3 }}>
                {/* <Box sx={{width: "100%"}}>
                <InsightFilter />
            </Box> */}
                <Grid container spacing={2} alignItems="flex-start" style={{ minHeight: "100vh" }}>
                    <Grid item xs={12} sm={3}>
                        <InsightCard title="Views" data={7250} color="#F0F4F8" ratio={11.84} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <InsightCard title="Visits" data={423} color="#EFF4FF" ratio={-31.42} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <InsightCard title="New Users" data={156} color="#F0F4F8" ratio={-1.33} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <InsightCard title="Active Users" data={2318} color="#EFF4FF" ratio={0.04} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MainInsight;