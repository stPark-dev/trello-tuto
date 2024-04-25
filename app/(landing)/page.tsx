"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";
import { Feature1 } from "./components/Feature1";
import { Feature2 } from "./components/Feature2";
import { Feature3 } from "./components/Feature3";
import { Feature4 } from "./components/Feature4";

const LandingMainPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
