"use client";

import React from "react";

import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// import level1 from "@/../../packages/viewtrack/src/react/asset/landing/level1.webp";
// import level50 from "@/../../packages/viewtrack/src/react/asset/landing/level50.jpg";
// import level100 from "@/../../packages/viewtrack/src/react/asset/landing/level100.jpg";

const PricingPage = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 700,
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20,
      },
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: "center",
      // Apply responsive fontSize for body cells
      [theme.breakpoints.down("lg")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const createData = (name: string, basic: string, essential: string, premium: string) => {
    return { name, basic, essential, premium };
  };

  const rows = [
    createData("Manage up to 30 spaces ", "O", "O", "O"),
    createData("Access to all basic features ", "O", "O", "O"),
    createData("Team collaboration", "X", "O", "O"),
    createData("Schedule recurring works", "X", "O", "O"),
    createData("Work with external service providers", "X", "O", "O"),
    createData("Workflow automation", "X", "X", "O"),
    createData("24/7 priority support", "X", "X", "O"),
    createData("API Access", "X", "X", "O"),
  ];

  return (
    <>
      <Box
        sx={{
          mx: "auto",
          display: "flex",
          maxWidth: "64rem",
          flexDirection: "column",
          gap: { xs: 10, sm: 20 },
          mt: { xs: 10 },
        }}
      >
        {/* Powered By */}
        <Box sx={{ mb: 20 }}>
          <Box sx={{ mb: 6, px: 6, lg: { px: 8 } }}>
            <Box sx={{ mx: "auto", maxWidth: "42rem", textAlign: { xs: "center" } }}>
              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  fontSize: { xs: "2.25rem", sm: "3rem" },
                  fontWeight: "bold",
                  color: "#262626",
                }}
              >
                Pricing
              </Typography>
              <Typography sx={{ mt: 4, fontSize: "1.125rem", color: "#262626" }}>We believe Teamvolt should be accessible to all companies.</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "1.5rem" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  p: "2.5rem",
                  flex: { md: "1 1 0%" },
                }}
              >
                <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={700}>
                      Basic
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", mb: 3, textAlign: "center", alignItems: "flex-end" }}>
                      <Typography variant="h3" color="primary">
                        $20
                      </Typography>
                      <Typography sx={{ ml: 2 }}>per month</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Image
                      src="/landing/level1.webp"
                      alt="basicImg"
                      width={256}
                      height={256}
                      quality={100}
                      style={{ width: "256px", height: "256px", borderRadius: "0.75rem" }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ minHeight: 200 }}>
                    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="Manage up to 30 spaces" />
                      </ListItem>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="Access to all basic features" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Button sx={{ mt: 2 }} variant="outlined">
                      Try it!
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  p: "2.5rem",
                  flex: { md: "1 1 0%" },
                }}
              >
                <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={700}>
                      Essential
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", mb: 3, textAlign: "center", alignItems: "flex-end" }}>
                      <Typography variant="h3" color="primary">
                        $40
                      </Typography>
                      <Typography sx={{ ml: 2 }}>per month</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Image
                      src="/landing/level50.jpg"
                      alt="essentialImg"
                      width={256}
                      height={256}
                      quality={100}
                      style={{ width: "256px", height: "256px", borderRadius: "0.75rem" }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ minHeight: 200 }}>
                    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="Schedule recurring works" />
                      </ListItem>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="Work with Service providers" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Button sx={{ mt: 2 }} variant="outlined">
                      Try it!
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  p: "2.5rem",
                  flex: { md: "1 1 0%" },
                }}
              >
                <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={700}>
                      Premium
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", mb: 3, textAlign: "center", alignItems: "flex-end" }}>
                      <Typography variant="h3" color="primary">
                        $60
                      </Typography>
                      <Typography sx={{ ml: 2 }}>per month</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Image
                      src="/landing/level100.jpg"
                      alt="premiumImg"
                      width={256}
                      height={256}
                      quality={100}
                      style={{ width: "256px", height: "256px", borderRadius: "0.75rem" }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ minHeight: 200 }}>
                    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="Workflow automation" />
                      </ListItem>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="24/7 priority support" />
                      </ListItem>
                      <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <ListItemText sx={{ ml: 2 }} primary="API Access" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12}>
                    <Button sx={{ mt: 2 }} variant="outlined">
                      Try it!
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
          <Box
            id="compare"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 5,
              transition: "color 0.3s ease",
              ":hover": {
                color: "#2563EB",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "36px", sm: "48px" },
                fontWeight: "bold",
              }}
            >
              Compare Plans and Features
            </Typography>
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: "4em" }} />
          </Box>
          <Box sx={{ height: 400, width: "100%", mt: 10, mb: 20 }}>
            <TableContainer component={Paper} sx={{ fontFamily: "Arial" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Compare Plans and Features</StyledTableCell>
                    <StyledTableCell>Basic</StyledTableCell>
                    <StyledTableCell>Essential</StyledTableCell>
                    <StyledTableCell>Premium</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <StyledTableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.basic}</StyledTableCell>
                      <StyledTableCell>{row.essential}</StyledTableCell>
                      <StyledTableCell>{row.premium}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PricingPage;
