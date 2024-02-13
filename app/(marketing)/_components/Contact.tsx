import { AccountCircle, Email } from "@mui/icons-material";
import { Box, Card, FormControl, Grid, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { Button } from "@/components/ui/Button";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const textFont = Montserrat({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400"
    ]
});

const Contact = () => {
    return (
        <>
            <Box
                sx={{
                    p: 2,
                    margin: 'auto',
                }}
            >
                <Grid container spacing={1} sx={{ maxWidth: "80vw" }}>
                    <Grid item xs={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", position: "relative" }}>
                        <Typography variant="h3" className={textFont.className}>Contact us</Typography>
                        <Box mt={3}>
                            <Typography variant="h6" className={textFont.className}>To use the Teamvolt service,</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" className={textFont.className}>please fill out the form on the right and press the submit button.</Typography>
                        </Box>
                        <Image
                            alt="Mask"
                            src="/landing/masking.png"
                            layout="fill"
                            style={{
                                opacity: 0.3,
                                zIndex: 0,
                                rotate: "180deg",
                                bottom: "0px",
                            }}
                        />
                    </Grid>
                    <Grid item xs={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <Card sx={{ width: "100%", p: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <InputLabel>First Name</InputLabel>
                                        <Input id="first"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <InputLabel>Second Name</InputLabel>
                                        <Input id="second"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>} />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <InputLabel>
                                    Email
                                </InputLabel>
                                <Input id="email"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>} ></Input>
                            </FormControl>
                            <TextField label="What can I help you with?" multiline variant="outlined" rows={5} sx={{ width: "100%", mt: 3 }} />
                            <Box sx={{ mt: 5 }}>
                                <Button size="lg">Submit</Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default Contact;