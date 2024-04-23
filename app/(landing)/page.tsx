"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";

const LandingMainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Hero />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
