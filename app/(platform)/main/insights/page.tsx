"use client"
import { Box, Button, Grid, Paper, styled } from "@mui/material"
import { useState } from "react";
import BarChart from "../_components/charts/BarCharts";
import Component from "../_components/map";

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
        <Box sx={{ display: "flex", width: "100vw", height: "100vh", flexDirection: "column", }}>
            <Button onClick={updateData} color="error">Update Data</Button>
            <Box sx={{ p: 3, width: "100vw", height: "100vh" }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Grid container spacing={5} direction={"row"} alignItems="stretch" justifyContent={"center"}>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                            <Grid item xs={12}>
                                <BarChart data={data} width={400} height={200} onNewData={updateData} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MainInsight;