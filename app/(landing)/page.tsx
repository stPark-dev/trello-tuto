"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";
import { HeroDesc } from "./components/HeroDesc";

const LandingMainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh", overflow: "auto" }}>
        <Navbar />
        <Hero />
        <HeroDesc />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
