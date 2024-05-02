"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";
import { Feature1 } from "./components/Feature1";
import { Feature2 } from "./components/Feature2";
import { Feature3 } from "./components/Feature3";
import { Feature4 } from "./components/Feature4";
import { Feature5 } from "./components/Feature5";
import { Feature6 } from "./components/Feature6";
import { Feature7 } from "./components/Feature7";
import { Feature8 } from "./components/Feature8";
import { Product } from "./components/Product";

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
        <Feature5 />
        <Feature6 />
        <Feature7 />
        <Feature8 />
        <Product />
        <Footer />
      </Box>
    </>
  );
};

export default LandingMainPage;
