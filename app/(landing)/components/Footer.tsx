"use client";

import { CustomButton } from "@/components/Button";
import { Instagram, OpenInNew } from "@mui/icons-material";

import { Box, Divider, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const textFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "800", "900"],
});

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "12rem",
        p: 3,
        backgroundColor: "#2CBBCF",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "xl",
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Image alt="head" src="/landing/Teamvolt/logo_head.png" width={70} height={70} />
          <Typography variant="h3" fontFamily="kleague" color="#ffffff">
            팀볼투
          </Typography>
          <Typography variant="h5" fontFamily="kleague" color="#ffffff">
            TEAMVOLT
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontFamily: "Noto Sans KR", color: "#C2F1F8" }}>
          <Typography sx={{ fontSize: "1rem", fontWeight: 300, lineHeight: "1.6rem" }}>팀볼트 주식회사 그렉터</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 300, lineHeight: "1.6rem" }}>대표이사. 김영신</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 300, lineHeight: "1.6rem" }}>
            서울 송파구 올림픽로 82 현대빌딩 3층 | 사업자등록 123-12-123456 [사업자등록확인]
          </Typography>
          <Divider sx={{ borderColor: "#ffffff", borderStyle: "dashed", my: 2 }} />
          <Typography sx={{ fontSize: "1rem", fontWeight: 350, lineHeight: "1.6rem" }}>
            이용약관 | 개인정보처리방침 | Copyright © gractor. All Rights Reserved
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "right", color: "#ffffff" }}>
          <Typography className={textFont.className} sx={{ fontSize: "1.25rem", lineHeight: "1.5rem" }}>
            유선문의 (오전09:00~오후06:00)
          </Typography>
          <Typography className={textFont.className} sx={{ fontSize: "1.625rem", fontWeight: 700, lineHeight: "1.95rem" }}>
            010-1234-5678
          </Typography>
          <Typography className={textFont.className} sx={{ fontSize: "1.625rem", fontWeight: 700, lineHeight: "1.95rem" }}>
            카카오톡 team7942
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "Noto Sans KR",
              p: 2,
              justifyContent: "center",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <CustomButton cvariant="outline" sx={{ borderRadius: 5 }}>
              <Instagram sx={{ mr: 1 }} /> 인스타그램
            </CustomButton>
            <CustomButton cvariant="outline" sx={{ borderRadius: 5 }}>
              <OpenInNew sx={{ mr: 1 }} />
              그렉터
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
