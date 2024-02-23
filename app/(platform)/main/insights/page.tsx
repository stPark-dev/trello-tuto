"use client"
import { Box, Button, Grid, Paper, styled } from "@mui/material"
import { useState } from "react";
import BarChart from "../_components/charts/BarChart";
import Component from "../_components/map";
import LineChart from "../_components/charts/LineChart";
import PieChart from "../_components/charts/PieChart";
import BubbleChart from "../_components/charts/BubbleChart";
import DonutChart from "../_components/charts/Donutchart";

interface BarChartData {
    label: string;
    value: number;
}

const Item = styled(Paper)(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainInsight = () => {
    const [data, setData] = useState<BarChartData[]>([
        { label: 'A', value: 30 },
        { label: 'B', value: 80 },
        { label: 'C', value: 45 },
        { label: 'D', value: 60 },
        { label: 'E', value: 30 },
        { label: 'F', value: 70 },
        { label: 'G', value: 55 },
    ]);

    const updateData = () => {
        setData(data.map(d => ({
            label: d.label,
            value: Math.round(Math.random() * 100),
        })));
    };

    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", p: 3 }}>
            <Button onClick={updateData} color="error" sx={{ my: 3 }}>Update Data</Button>
            <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    {/* Ensure each child grid is also a container for vertical centering */}
                    <Grid item xs={12} sx={{ backgroundColor: "#75B5F7" }}>
                        <BarChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                    <Grid item xs={12} sx={{ backgroundColor: "#9FEDE9" }}>
                        <LineChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                    <Grid item xs={12} sx={{ backgroundColor: "#E0F4B3"}}>
                        <PieChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} container spacing={2} justifyContent="center" alignItems="center">
                    {/* Items */}
                    <Grid item sm={3}>
                        <Item>item</Item>
                    </Grid>
                    <Grid item sm={3}>
                        <Item>item</Item>
                    </Grid>
                    <Grid item sm={3}>
                        <Item>item</Item>
                    </Grid>
                    <Grid item sm={3}>
                        <Item>item</Item>
                    </Grid>
                    <Grid item sm={12}>
                        <Component style={{ height: "65vh" }} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sx={{ backgroundColor: "#9FA2FC"}}>
                        <BubbleChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                    <Grid item xs={12} sx={{ backgroundColor: "#D8E4FE"}}>
                        <DonutChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                    <Grid item xs={12} sx={{ backgroundColor: "#E2E2E2"}}>
                        <BarChart data={data} width={400} height={200} onNewData={updateData} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainInsight;