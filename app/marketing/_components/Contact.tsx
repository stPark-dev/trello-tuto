import { AccountCircle, Email } from "@mui/icons-material";
import { Box, Card, FormControl, Grid, Input, InputAdornment, InputLabel, Button, TextField, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { CustomButton } from "@/components/Button";
const contactFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          margin: "auto",
        }}
      >
        <Grid container spacing={1} sx={{ maxWidth: "80vw", flexDirection: { xs: "column-reverse", md: "row" } }}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
              order: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h3" className={contactFont.className}>
              Contact us
            </Typography>
            <Box mt={3}>
              <Typography variant="h6" className={contactFont.className}>
                To use the Teamvolt service,
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" className={contactFont.className}>
                please fill out the form on the right and press the submit button.
              </Typography>
            </Box>
            <Image
              alt="Mask"
              src="/landing/masking.png"
              layout="fill"
              style={{
                opacity: 0.3,
                rotate: "180deg",
                bottom: "0px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card elevation={10} sx={{ width: "100%", p: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>First Name</InputLabel>
                    <Input
                      id="first"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>Second Name</InputLabel>
                    <Input
                      id="second"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Email</InputLabel>
                <Input
                  id="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
              <TextField label="What can I help you with?" multiline variant="outlined" rows={5} sx={{ width: "100%", mt: 3 }} />
              <Box sx={{ mt: 5 }}>
                <CustomButton size="large" cvariant="default">
                  Submit
                </CustomButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
