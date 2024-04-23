import { CustomButton } from "@/components/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CardComponent } from "./CardComponent";
import { Security } from "@mui/icons-material";

export const Manual = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          p: 10,
          display: "flex",
          flexDirection: "column",
          flexGrow: 2,
          justifyContent: "center",
          alignItems: "start",
          color: "#000000",
        }}
      >
        <Typography color="primary" fontWeight={700}>
          Problem
        </Typography>
        <Typography variant="h3" component="h1" fontWeight="bold">
          효율적인 협업 시스템으로
        </Typography>
        <Typography variant="h3" component="h1" fontWeight="bold">
          완성하는 스마트 자산 관리 솔루션
        </Typography>
        <Typography variant="body1">팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록</Typography>
        <Typography variant="body1">보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
        <Box sx={{ my: 10, display: "flex", flexDirection: "row" }}>
          <CustomButton cvariant="outline" size="large" sx={{ borderRadius: 5 }}>
            사용방법 다운로드
          </CustomButton>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 0, position: "relative", width: "50vw", height: "100vh" }}>
        <Image src="/landing/Teamvolt/ellipse_masking.png" alt="heroimg" fill />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 5, gap: 2 }}>
              <CardComponent
                width="300px"
                height="400px"
                title="수동 업무 처리의 비효율성"
                desc="기존 오피스 프로그램 및 행정 시스템의 수동업무 처리의 불편함 및 시간 효율성 저하"
                feature="자동화 방식의 자산 관리 플랫폼 필요"
                icon={Security}
              />
              <CardComponent
                width="300px"
                height="400px"
                title="수동 업무 처리의 비효율성"
                desc="기존 오피스 프로그램 및 행정 시스템의 수동업무 처리의 불편함 및 시간 효율성 저하"
                feature="자동화 방식의 자산 관리 플랫폼 필요"
                icon={Security}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 5, gap: 2 }}>
              <CardComponent
                width="300px"
                height="400px"
                title="수동 업무 처리의 비효율성"
                desc="기존 오피스 프로그램 및 행정 시스템의 수동업무 처리의 불편함 및 시간 효율성 저하"
                feature="자동화 방식의 자산 관리 플랫폼 필요"
                icon={Security}
              />
              <CardComponent
                width="300px"
                height="400px"
                title="수동 업무 처리의 비효율성"
                desc="기존 오피스 프로그램 및 행정 시스템의 수동업무 처리의 불편함 및 시간 효율성 저하"
                feature="자동화 방식의 자산 관리 플랫폼 필요"
                icon={Security}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
