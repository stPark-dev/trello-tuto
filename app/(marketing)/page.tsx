"use client"

import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, Variants } from "framer-motion";
import Contact from "./_components/Contact";
import ReasonGridContent from "./_components/ReasonGrid";

import { CustomButton } from "@/components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/styles/swiper.css';

interface SliderImage {
  content: string;
  key: string;
}

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const textVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const MarketingPage = () => {

  const [images, setImages] = useState<SliderImage[]>([
    {
      key: uuidv4(),
      content: 'https://source.unsplash.com/1600x900/?nature',
    },
    {
      key: uuidv4(),
      content: 'https://source.unsplash.com/1600x900/?city',
    },
    {
      key: uuidv4(),
      content: 'https://source.unsplash.com/1600x900/?food',
    },
  ]);

  return (
    <>
      {/* Carousel */}
      <Box
        sx={{
          alignItems: "center",
          my: 5,
        }}>
        <Box
          sx={{
            color: "rgb(38, 38, 38)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>효율적인 협업 시스템으로 완성하는</Typography>
        </Box>
        <Box
          sx={{
            mb: { sm: 2 },
            color: "rgb(38, 38, 38)",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>스마트 자산 관리 솔루션</Typography>
        </Box>
        <Box
          sx={{
            mb: { sm: 3 },
            color: "rgb(38, 38, 38)",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "text.secondary" }}>팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록 보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
        </Box>
        <Box sx={{ justifyContent: "center", position: "relative" }}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 5,
              stretch: 10,
              depth: 100,
              modifier: 12,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              type: "bullets"
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {images.map((image) => (
              <SwiperSlide key={image.key}>
                <Image src={image.content} width={800} height={450} alt={image.key} />
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton className="swiper-button-prev-custom" sx={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            transform: 'translateY(-50%)',
            backgroundColor: "#F1D773",
            color: "#FFFFFF",
            borderRadius: '100%',
            '&:hover': {
              backgroundColor: "#e6c065",
            },
            zIndex: 100
          }}><ChevronLeftIcon /></IconButton>
          <IconButton className="swiper-button-next-custom" sx={{
            position: 'absolute',
            top: '50%',
            right: '30%',
            transform: 'translateY(-50%)',
            backgroundColor: "#F1D773",
            color: "#FFFFFF",
            borderRadius: '100%',
            '&:hover': {
              backgroundColor: "#e6c065",
            },
            zIndex: 100
          }}><ChevronRightIcon /></IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
        }}
      >
        <Box
          className={headingFont.className}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              p: 2,
              backgroundColor: "rgb(254 243 199)",
              color: "rgb(180 83 9)",
              borderRadius: "9999px",
              textTransform: "uppercase",
            }}
          >
            <WorkspacePremiumIcon
              style={{ height: "1.5rem", width: "1.5rem", marginRight: "0.5rem" }}
            />
            No.1 Asset management
          </Box>
          <Box
            sx={{
              fontSize: { xs: "1.875rem", sm: "3.75rem" },
              lineHeight: { xs: "2.25rem", sm: 1 },
              mb: { sm: 3 },
              color: "rgb(38, 38, 38)",
              textAlign: "center",
            }}
          >
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
            }}
          >
            building asset management.
          </Box>
        </Box>
        <Box
          className={textFont.className}
          sx={{
            fontSize: { xs: "0.875rem", md: "1.25rem" },
            color: "text.secondary",
            mt: 2,
            maxWidth: { xs: "20rem", md: "42rem" },
            textAlign: "center",
            mx: "auto",
          }}
        >
          Collaborate, manage projects, and reach new productivity peaks. From high rises to the home
          office, the way your team works is unique - accomplish it all with TeamVolt.
        </Box>
        <CustomButton size="large" cvariant="default" sx={{ my: 5 }}>
          <Link href="/sign-up">
            Get Teamvolt for free
          </Link>
        </CustomButton>

        <Box
          className={headingFont.className}
          sx={{
            mx: "auto",
            mt: { xs: 10, sm: 20 },
            mb: 20,
            maxWidth: "80rem",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 10, sm: 20 },
          }}
        >
          {/* Intro */}

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            <Box sx={{ mt: 5 }}>
              <Box sx={{ mb: 3, px: { sm: 3, lg: 4 } }}>
                <Box sx={{ mx: "2rem", maxWidth: "42rem", textAlign: "center" }}>
                  <Box
                    sx={{
                      mt: 1,
                      fontSize: { xs: "2.25rem", sm: "3rem" },
                      lineHeight: { xs: "2.25rem", sm: 1 },
                      fontWeight: 700,
                      color: "rgb(17 24 39)",
                    }}
                  >
                    Start your Cooperation with your co-workers
                  </Box>
                  <Box
                    className={textFont.className}
                    sx={{
                      mt: 2,
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      color: "rgb(75 85 99)",
                    }}
                  >
                    Follow these steps to cooperate with your co-workers
                  </Box>
                </Box>
              </Box>
              {/* steps */}

              <Box
                component="ol"
                sx={{
                  my: 1,
                  pt: 1,
                  "& > * + *": {
                    my: 2,
                  },
                  ml: { xs: 6, md: 0 },
                  "@media (min-width:640px)": {
                    display: "flex",
                    px: 4,
                    "& > * + *": {
                      mx: 3,
                      my: 0,
                    },
                  },
                }}
              >
                <Box component="li" sx={{ flex: { md: "1 1 0%" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      "& > * + *": {
                        mt: 1,
                      },
                      borderLeftWidth: "4px",
                      borderLeftStyle: "solid",
                      borderColor: "rgb(212 212 216)",
                      py: 1,
                      pl: 2,
                      "@media (min-width:640px)": {
                        borderLeftWidth: "0px",
                        borderTopWidth: "2px",
                        borderTopStyle: "solid",
                        pb: 0,
                        pl: 0,
                        pt: 2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        fontWeight: 500,
                        color: "#DBBE6B",
                      }}
                    >
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
                        mt: 1,
                      },
                      borderLeftWidth: "4px",
                      borderLeftStyle: "solid",
                      borderColor: "rgb(212 212 216)",
                      py: 1,
                      pl: 2,
                      "@media (min-width:640px)": {
                        borderLeftWidth: "0px",
                        borderTopWidth: "2px",
                        borderTopStyle: "solid",
                        pb: 0,
                        pl: 0,
                        pt: 2,
                      },
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        fontWeight: 500,
                        color: "rgb(219 190 107)",
                      }}
                    >
                      Step 2
                    </span>
                    <span style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                      Make a <span style={{ color: "rgb(219 190 107)" }}>Assets</span> &{" "}
                      <span style={{ color: "rgb(219 190 107)" }}>Users</span>
                    </span>
                  </Box>
                </Box>
                <Box component="li" sx={{ flex: { md: "1 1 0%" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      "& > * + *": {
                        mt: 1,
                      },
                      borderLeftWidth: "4px",
                      borderLeftStyle: "solid",
                      borderColor: "rgb(212 212 216)",
                      py: 1,
                      pl: 2,
                      "@media (min-width:640px)": {
                        borderLeftWidth: "0px",
                        borderTopWidth: "2px",
                        borderTopStyle: "solid",
                        pb: 0,
                        pl: 0,
                        pt: 2,
                      },
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        fontWeight: 500,
                        color: "rgb(219 190 107)",
                      }}
                    >
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

        <Box sx={{ my: 8 }}>
          <ReasonGridContent />
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, bounce: 0.3, type: "spring" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Contact />
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
    </>
  );
};

export default MarketingPage;
