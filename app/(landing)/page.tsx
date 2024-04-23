"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";
import { Manual } from "./components/Manual";

const LandingMainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Manual />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
