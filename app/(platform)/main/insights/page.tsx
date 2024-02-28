"use client"
import { Box, Button, Grid, Paper, styled } from "@mui/material"
import { useState } from "react";
import Component from "../_components/map";
import EChartsBase from "@/components/echarts/BaseChart";

const Item = styled(Paper)(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainInsight = () => {

    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", p: 3 }}>
            <Grid container spacing={2} alignItems="flex-start" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} >
                        <EChartsBase theme="light" backgroundColor="#FFFFFF" dataset={[120, 200, 150, 80, 70, 110]} xAxis={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']} />
                    </Grid>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: "#9FEDE9" }}>Item</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: "#E0F4B3" }}>Item</Item>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} container spacing={2} justifyContent="center" alignItems="center">
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
                        <Item>
                            <Component style={{ height: "70vh" }} />
                        </Item>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: "#9FA2FC" }}>Item</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: "#D8E4FE" }}>Item</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item sx={{ backgroundColor: "#E2E2E2" }}>Item</Item>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainInsight;