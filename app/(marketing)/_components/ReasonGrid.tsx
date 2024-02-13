import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import localFont from "next/font/local";


const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
  })

const ReasonGridContent = () => {
    
    return (
        <Box id="sixCard" className={headingFont.className} sx={{ width: "80vw", height: "100vh", zIndex: 1 }}>
            <Box
                id="blur"
                aria-hidden="true"
                sx={{ pointerEvents: "none", position: "absolute", zIndex: -1, filter: "blur(30px)", }}
            >
                <Box
                    sx={{
                        position: "relative", left: "calc(50% - 5rem)", aspectRatio: 1155 / 678, width: "36.125rem", transform: "translateX(-50%) rotate(30deg)", opacity: 0.2, background: "linear-gradient(to top right, #FFE450, #FFFEAD)",
                        "@media (min-width:600px)": {
                            left: "calc(50% - 20rem)",
                            width: "72.1875rem",
                            transform: "translateY(8px)",
                        },
                        clipPath: "polygon(25% 0%, 75% 0%, 59% 28%, 81% 28%, 25% 100%, 25% 59%);"
                    }}
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
                            <Button size="small">Learn More</Button>
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
                            <Button size="small">Learn More</Button>
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
                            <Button size="small">Learn More</Button>
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
                            <Button size="small">Learn More</Button>
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
                            <Button size="small">Learn More</Button>
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
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ReasonGridContent;