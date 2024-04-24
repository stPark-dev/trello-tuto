"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";
import { Feature1 } from "./components/Feature1";
import { Feature2 } from "./components/Feature2";

const LandingMainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Feature1 />
        <Feature2 />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
