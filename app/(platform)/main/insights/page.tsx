"use client"
import { Box, Button, Grid, Paper, styled } from "@mui/material"
import { useState } from "react";
import Component from "../_components/map";
import EChartsBase from "@/components/echarts/BaseChart";
import ChartJsBase from "@/components/chartjs/BaseChart";
import InsightCard from "../_components/Card";
import InsightFilter from "../_components/filter/InsightFilter";

const Item = styled(Paper)(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const MainInsight = () => {

    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", p: 3 }}>
            <Box sx={{width: "100%"}}>
                <InsightFilter />
            </Box>
            <Grid container spacing={2} alignItems="flex-start" style={{ minHeight: "100vh" }}>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ChartJsBase />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ChartJsBase />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item sm={3}>
                        <InsightCard title="Views" data={7250} color="#F0F4F8" ratio={11.84} />
                    </Grid>
                    <Grid item sm={3}>
                        <InsightCard title="Visits" data={423} color="#EFF4FF" ratio={-31.42} />
                    </Grid>
                    <Grid item sm={3}>
                        <InsightCard title="New Users" data={156} color="#F0F4F8" ratio={-1.33} />
                    </Grid>
                    <Grid item sm={3}>
                        <InsightCard title="Active Users" data={2318} color="#EFF4FF" ratio={0.04} />
                    </Grid>
                    <Grid item sm={12}>
                        <Component style={{ height: "70vh" }} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ChartJsBase />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ChartJsBase />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainInsight;