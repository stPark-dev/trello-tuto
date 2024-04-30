import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomButton } from "@/components/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Feature6 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", my: 20 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 5,
          justifyContent: "center",
          alignItems: "center",
          color: "#000000",
        }}
      >
        <Box>
          <Typography color="primary" fontWeight={700}>
            Problem
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" fontWeight="bold">
              효율적인 협업 시스템으로
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              완성하는 스마트 자산 관리 솔루션
            </Typography>
          </Box>
          <Typography variant="body1">팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록</Typography>
          <Typography variant="body1">보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
          <Box sx={{ my: 5, display: "flex", flexDirection: "row" }}>
            <CustomButton cvariant="outline" size="large" sx={{ borderRadius: 5 }}>
              사용방법 다운로드
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Swiper spaceBetween={50} slidesPerView={1.8} centeredSlides={true} loop={true} style={{ width: "40%", flexGrow: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3, transform: "translateX(200px)" }}>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                border: "1px solid",
                borderRadius: 2,
                borderColor: "primary.main",
                width: 400,
                height: 500,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 7,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image src="/landing/Teamvolt/Asset 28@4x.png" alt="1" width={300} height={300} style={{ objectFit: "contain", width: "100%" }} />
              </div>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  자산 관리 솔루션
                </Typography>
                <Box sx={{ width: "20%", borderBottom: "3px solid #aaa", lineHeight: "0.1em", my: 2 }}></Box>
                <Typography variant="body2">시설 및 건물정보, 공간정보 관리</Typography>
                <Typography variant="body2">&nbsp;</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                border: "1px solid",
                borderRadius: 2,
                borderColor: "primary.main",
                width: 400,
                height: 500,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 7,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image src="/landing/Teamvolt/Asset 31@4x.png" alt="2" width={300} height={300} style={{ objectFit: "contain", width: "100%" }} />
              </div>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  점검시스템 구축
                </Typography>
                <Box sx={{ width: "20%", borderBottom: "3px solid #aaa", lineHeight: "0.1em", my: 2 }}></Box>
                <Typography variant="body2">민원접수 및 처리, 유지보수, 주차관리등</Typography>
                <Typography variant="body2">관리 솔루션을 제공합니다. </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                border: "1px solid",
                borderRadius: 2,
                borderColor: "primary.main",
                width: 400,
                height: 500,
              }}
            >
              <div
                id="imageDiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 7,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image src="/landing/Teamvolt/rabbit.png" alt="3" width={300} height={300} style={{ objectFit: "contain", width: "100%" }} />
              </div>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  실시간 관리
                </Typography>
                <Box sx={{ width: "20%", borderBottom: "3px solid #aaa", lineHeight: "0.1em", my: 2 }}></Box>
                <Typography variant="body2">CCTV관리, 출입관리, 실시간 민원알림</Typography>
                <Typography variant="body2">서비스 제공</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Box>
      </Swiper>
    </Box>
  );
};
