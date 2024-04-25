import { CustomButton } from "@/components/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
          <Image src="/landing/Teamvolt/hero_img.png" alt="heroimg" fill />
          <Box sx={{ position: "absolute", top: "40%", left: "25%", transform: "translate(-50%, -50%)", textAlign: "left", color: "#000000" }}>
            <Typography variant="h3" component="h1" fontWeight="bold">
              혁신적인 협업 시스템으로 업무하는
            </Typography>
            <Typography variant="h3" component="h1" fontWeight="bold">
              스마트 자산 관리 솔루션
            </Typography>
            <Typography variant="body1">팀볼트는 나와 나의 자산을 혁신으로 연결 해 주는, 새로운 빅 데이터 현업 프로세스를 만들어 갑니다.</Typography>
            <Box sx={{ my: 10, ml: 10, display: "flex", flexDirection: "row", gap: 5 }}>
              <CustomButton cvariant="primary" size="large" sx={{ borderRadius: 5 }}>
                서비스 신청하기
              </CustomButton>
              <CustomButton cvariant="outline" size="large" sx={{ borderRadius: 5 }}>
                사용방법 다운로드
              </CustomButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#444444",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            p: 10,
            zIndex: 9999,
          }}
        >
          <Box sx={{ color: "#FFFFFF", display: "flex", flexDirection: "row", gap: 2, alignItems: "center", py: 5 }}>
            <Typography variant="h2" fontWeight="bold">
              50%
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="body1">관리 시간을 50% 이상</Typography>
              <Typography variant="body1">단축할 수 있습니다.</Typography>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, borderColor: "#DDDDDD" }} />
          <Box sx={{ color: "#FFFFFF", display: "flex", flexDirection: "row", gap: 2, alignItems: "center", py: 5 }}>
            <Typography variant="h2" fontWeight="bold">
              256
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">팀볼트를 사용하는</Typography>
              <Typography variant="body1">다양한 기업</Typography>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, borderColor: "#DDDDDD" }} />
          <Box sx={{ color: "#FFFFFF", display: "flex", flexDirection: "row", gap: 2, alignItems: "center", py: 5 }}>
            <Typography variant="h2" fontWeight="bold">
              30%
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">비용을 30% 이상</Typography>
              <Typography variant="body1">절감할 수 있습니다.</Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};
