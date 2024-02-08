"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button as MuiButton, Grid } from "@mui/material";
import { motion, Variants } from "framer-motion";
import Contact from "./_components/contact";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const textVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const imgVariants1: Variants = {
  offscreen: {
    x: -1400
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1
    }
  }
};

const imgVariants2: Variants = {
  offscreen: {
    x: 1400
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1
    }
  }
};

const contactVariants: Variants = {
  offscreen: {
    x: 1400
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1
    }
  }
};

const MarketingPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Box className={headingFont.className} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "center", borderWidth: 1, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', p: 2, backgroundColor: 'rgb(254 243 199)', color: 'rgb(180 83 9)', borderRadius: '9999px', textTransform: "uppercase" }}>
          <Medal style={{ height: "1.5rem", width: "1.5rem", marginRight: "0.5rem" }} />
          No.1 Asset management
        </Box>
        <Box sx={{
          fontSize: { xs: "1.875rem", sm: "3.75rem" },
          lineHeight: { xs: "2.25rem", sm: 1 },
          mb: { sm: 3 },
          color: "rgb(38, 38, 38)",
          textAlign: "center",
        }}>
          TeamVolt assists in
        </Box>
        <Box
          sx={{
            fontSize: { xs: "1.875rem", md: "3.75rem" },
            background: "linear-gradient(40deg, #414141 10%, #FFD272 90%)",
            color: "white",
            textAlign: "center",
            p: 1,
            px: 4,
            pb: 1,
            borderRadius: "0.375rem",
            width: "fit-content",
          }}>
          building asset management.
        </Box>
      </Box>
      <Box className={textFont.className}
        sx={{
          fontSize: { xs: "0.875rem", md: "1.25rem" },
          color: "text.secondary",
          mt: 2,
          maxWidth: { xs: "20rem", md: "42rem" },
          textAlign: "center",
          mx: "auto",
        }}>
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with TeamVolt.
      </Box>
      <Button size="lg" asChild style={{ marginTop: "1.5rem" }}>
        <Link href="/sign-up">
          Get TeamVolt for free
        </Link>
      </Button>

      <Box className={headingFont.className}
        sx={{
          mx: "auto",
          mt: { xs: 10, sm: 20 },
          mb: 20,
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 10, sm: 20 },
        }}>
        {/* Intro */}


        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={textVariants}>
          <Box sx={{ mt: 10 }}>
            <Box sx={{ mb: 3, px: { sm: 3, lg: 4 } }}>
              <Box sx={{ mx: "2rem", maxWidth: "42rem", textAlign: "center" }}>
                <Box sx={{ mt: 1, fontSize: { xs: "2.25rem", sm: "3rem" }, lineHeight: { xs: "2.25rem", sm: 1 }, fontWeight: 700, color: "rgb(17 24 39)" }}>
                  Start your Cooperation with your co-workers
                </Box>
                <Box className={textFont.className} sx={{ mt: 2, fontSize: "1.125rem", lineHeight: "1.75rem", color: "rgb(75 85 99)" }}>
                  Follow these steps to cooperate with your co-workers
                </Box>
              </Box>
            </Box>
            {/* steps */}

            <Box component="ol" sx={{
              my: 1, pt: 1,
              '& > * + *': {
                my: 2,
              },
              ml: { xs: 6, md: 0 },
              '@media (min-width:640px)': {
                display: "flex",
                px: 4,
                '& > * + *': {
                  mx: 3,
                  my: 0,
                },
              },
            }}>
              <Box component="li" sx={{ flex: { md: "1 1 0%" }, }}>
                <Box
                  sx={{
                    display: "flex", flexDirection: "column",
                    "& > * + *": {
                      mt: 1
                    },
                    borderLeftWidth: "4px",
                    borderColor: "rgb(212 212 216)",
                    py: 1,
                    pl: 2,
                    "@media (min-width:640px)": {
                      borderLeftWidth: "0px",
                      borderTopWidth: "2px",
                      pb: 0,
                      pl: 0,
                      pt: 2
                    }
                  }}>
                  <Box sx={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 500, color: "rgb(219 190 107)" }}>
                    Step 1
                  </Box>
                  <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                    Sign up for a Free Account
                  </span>
                </Box>
              </Box>
              <Box component="li" sx={{ flex: { md: "1 1 0%" } }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& > * + *": {
                      mt: 1
                    },
                    borderLeftWidth: "4px",
                    borderColor: "rgb(212 212 216)",
                    py: 1,
                    pl: 2,
                    "@media (min-width:640px)": {
                      borderLeftWidth: 0,
                      borderTopWidth: "2px",
                      pb: 0,
                      pl: 0,
                      pt: 2,
                    }
                  }}>
                  <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 500, color: "rgb(219 190 107)" }}>
                    Step 2
                  </span>
                  <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                    Make a <span style={{ color: "rgb(219 190 107)" }}>Assets</span> &{" "}
                    <span style={{ color: "rgb(219 190 107)" }}>Users</span>
                  </span>
                </Box>
              </Box>
              <Box component="li" sx={{ flex: { md: "1 1 0%" } }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& > * + *": {
                    mt: 1
                  },
                  borderLeftWidth: "4px",
                  borderColor: "rgb(212 212 216)",
                  py: 1,
                  pl: 2,
                  "@media (min-width:640px)": {
                    borderLeftWidth: 0,
                    borderTopWidth: "2px",
                    pb: 0,
                    pl: 0,
                    pt: 2,
                  }
                }}>
                  <span style={{ fontSize: "0.875rem", lineHeight: "1.25rem", fontWeight: 500, color: "rgb(219 190 107)" }}>
                    Step 3
                  </span>
                  <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                    Start Your coorperation
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={imgVariants1}>
        <Box id="leftImg" sx={{ boxSizing: "content-box", border: "solid #5B6DCD 10px ", m: 10, width: "80vw", display: "flex", justifyContent: "center", alignItems: "center", height: 640 }}>
          이미지 왼쪽에서 빡
        </Box>
      </motion.div>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} variants={imgVariants2}>
        <Box id="rightImg" sx={{ boxSizing: "content-box", border: "solid #5B6DCD 10px ", m: 10, width: "80vw", display: "flex", justifyContent: "center", alignItems: "center", height: 640 }}>
          이미지 오른쪽에서 빡
        </Box>
      </motion.div>
      <Box id="sixCard" className={headingFont.className} sx={{ width: "80vw", height: "100vh", zIndex: 1 }}>
        <Box
          id="blur"
          aria-hidden="true"
          sx={{ pointerEvents: "none", position: "absolute", zIndex: -1, filter: "blur(50px)", }}
        >
          <Box
            sx={{ position: "relative", left: "calc(50% - 5rem)", aspectRatio: 1155 / 678, width: "36.125rem", transform: "translateX(-50%) rotate(30deg)", opacity: 0.3, background: "linear-gradient(to top right, #0a95ff, #95f2fa)",
            "@media (min-width:600px)": {
              left: "calc(50% - 20rem)",
              width: "72.1875rem",
              transform: "translateY(8px)",
            }, 
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          />
        </Box>
        <Box sx={{
          fontSize: { xs: "1.875rem", sm: "3.75rem" },
          lineHeight: { xs: "2.25rem", sm: 1 },
          mb: { sm: 3 },
          color: "rgb(38, 38, 38)",
          textAlign: "center",
          zIndex: 2
        }}>
          The Reason
        </Box>
        <Box sx={{
          fontSize: { xs: "1.875rem", sm: "3.75rem" },
          lineHeight: { xs: "2.25rem", sm: 1 },
          mb: { sm: 3 },
          color: "rgb(38, 38, 38)",
          textAlign: "center",
          zIndex: 2
        }}>
          Why you are using <span style={{ color: "#F2D575" }}>TeamVolt</span>
        </Box>
        <Grid container spacing={2} sx={{ zIndex: 2 }}>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/insight.webp"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Insight
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Effortlessly convert reports to Excel/PDF and manage dashboards for streamlined data analysis.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/asset.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Asset Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Streamline asset management with systematic tracking and oversight of registered assets via our service.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/work.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Work Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enhance productivity by registering and sharing tasks among users through our efficient work management service.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/iot.webp"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  IOT Association
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Seamlessly integrate data from IoT sensors for smart operations with our IoT Association feature.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/qrcode.webp"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Scanning Assets
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quickly access asset information by scanning QR codes with your smartphone using our Scanning Assets feature.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card elevation={10} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/landing/form.avif"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Customizing Tasks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create and customize inspection forms freely with our Customizing Tasks feature, tailoring them to specific worker needs.
                </Typography>
              </CardContent>
              <CardActions>
                <MuiButton size="small">Learn More</MuiButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <motion.div initial={{ opacity: 0, scale: 0.7, y: 100 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.8, bounce: 0.3, type: "spring" }} viewport={{ once: true, amount: 0.7 }} >
        <Box sx={{ boxSizing: "content-box", border: "solid #5B6DCD 10px ", m: 10, width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", height: 320 }}>
          <Contact />
        </Box>
      </motion.div>
      <Image
        alt="Mask"
        src="/v1-mask-dark.png"
        width={1440}
        height={173}
        style={{
          opacity: 0.8,
          zIndex: 0,
          width: "100vw",
          height: "auto",
          bottom: "0px",
        }}
      />
    </Box>
  );
};


export default MarketingPage;