"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box } from "@mui/material";

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
        <Box>
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
            '@media (min-width:640px)': {
              display: "flex",
              px: 4,
              '& > * + *': {
                mx: 3,
                my: 0,
              },
            },
          }}>
            <Box component="li" sx={{ flex: { md: "1 1 0%" } }}>
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
                <span style={{fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600}}>
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
                <span style={{fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600}}>
                  Make a <span style={{color: "rgb(219 190 107)"}}>Assets</span> &{" "}
                  <span style={{color: "rgb(219 190 107)"}}>Users</span>
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
                <span style={{fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600}}>
                  Start Your coorperation
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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