"use client";

import Image from "next/image";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CheckCircle2Icon } from "lucide-react";

const PricingPage = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 700,
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: 16,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 20,
      },
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: 'center',
      // Apply responsive fontSize for body cells
      [theme.breakpoints.down('lg')]: {
        fontSize: 12,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 16,
      },
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const createData = (
    name: string,
    basic: string,
    essential: string,
    premium: string,
  ) => {
    return { name, basic, essential, premium };
  }

  const rows = [
    createData('Manage up to 30 spaces ', 'O', 'O', 'O',),
    createData('Access to all basic features ', 'O', 'O', 'O',),
    createData('Team collaboration', 'X', 'O', 'O',),
    createData('Schedule recurring tasks', 'X', 'O', 'O',),
    createData('Work with external service providers', 'X', 'O', 'O',),
    createData('Workflow automation', 'X', 'X', 'O',),
    createData('24/7 priority support', 'X', 'X', 'O',),
    createData('API Access', 'X', 'X', 'O',),
  ];

  return (
    <>
        <Box className="mx-auto flex max-w-5xl flex-col gap-20 sm:mt-20 sm:gap-40 ">
          {/* Powered By */}
          <Box>
            <Box className="mb-6 px-6 lg:px-8">
              <Box className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Pricing
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We believe Teamvolt should be accessible to all companies.
                </p>
              </Box>
            </Box>

            <Box className="flex flex-grow items-center">
              <Box className="flex flex-col gap-6 md:flex-row">
                <Card className="flex items-center gap-2 p-10 md:flex-1">
                  <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                      <Typography variant="h4" fontWeight={700}>Basic</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="mb-3 text-center flex items-end">
                        <Typography variant="h3" color="#2563EB">$20</Typography>
                        <Typography className="ml-2">per month</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Image
                        src="/level1.webp"
                        alt="basicImg"
                        width={256}
                        height={256}
                        quality={100}
                        className="rounded-xl"
                        style={{ width: '256px', height: '256px' }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ minHeight: 200 }}>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="Manage up to 30 spaces" />
                        </ListItem>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="Access to all basic features" />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className="mt-5" variant="outlined">Try it!</Button>
                    </Grid>
                  </Grid>
                </Card>
                <Card className="flex items-center justify-center gap-2 p-10 md:flex-1">
                  <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                      <Typography variant="h4" fontWeight={700}>Essential</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="mb-3 text-center flex items-end">
                        <Typography variant="h3" color="#2563EB">$40</Typography>
                        <Typography className="ml-2">per month</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Image
                        src="/level50.jpg"
                        alt="essentialImg"
                        width={256}
                        height={256}
                        quality={100}
                        className="rounded-xl"
                        style={{ width: '256px', height: '256px' }}
                      />

                    </Grid>
                    <Grid item xs={12} sx={{ minHeight: 200 }}>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="Schedule recurring tasks" />
                        </ListItem>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="Work with Service providers" />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className="mt-5" variant="outlined">Try it!</Button>
                    </Grid>
                  </Grid>
                </Card>
                <Card className="flex items-center justify-center gap-2 p-10 md:flex-1">
                  <Grid container justifyContent="center" alignItems="center" direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                      <Typography variant="h4" fontWeight={700}>Premium</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="mb-3 text-center flex items-end">
                        <Typography variant="h3" color="#2563EB">$60</Typography>
                        <Typography className="ml-2">per month</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Image
                        src="/level100.jpg"
                        alt="premiumImg"
                        width={256}
                        height={256}
                        quality={100}
                        className="rounded-xl"
                        style={{ width: '256px', height: '256px' }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ minHeight: 200 }}>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="Workflow automation" />
                        </ListItem>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-2" primary="24/7 priority support" />
                        </ListItem>
                        <ListItem>
                          <CheckCircle2Icon color="#2563EB" />
                          <ListItemText className="ml-3" primary="API Access" />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className="mt-5" variant="outlined">Try it!</Button>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Box>
            <Box id="compare" className="flex items-center justify-center mt-10" sx={{
              flexDirection: 'column',
              transition: 'color 0.3s ease',
              ":hover": {
                color: '#2563EB',
              },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Compare Plans and Features</h2>
              <KeyboardDoubleArrowDownIcon className="mt-5" sx={{ fontSize: '4em' }} />
            </Box>
            <Box className="mt-10 mb-20" sx={{ height: 400, width: '100%' }}>
              <TableContainer component={Paper} sx={{ fontFamily: 'Arial' }}>
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
                    {rows.map((row) => (
                      <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
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
}
export default PricingPage;
