import { CustomButton } from "@/components/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CardComponent, CardProps } from "./ui/CardComponent";

const CardElement: CardProps[] = [
  {
    width: "320px",
    height: "352px",
    title: "수동 업무 처리의 비효율성",
    desc: "기존 오피스 프로그램 및 행정 시스템의\n수동업무 처리의 불편함 및 시간 효율성 저하",
    feature: "자동화 방식의 자산 관리 플랫폼 필요",
    iconSrc: "/landing/Teamvolt/Frame1.svg",
  },
  {
    width: "320px",
    height: "352px",
    title: "정보 반영 및 의사 결정 지연",
    desc: "자산 변화 실시간 반영 및 분석이\n 어려워 효과적인 결정이 힘듦",
    feature: "정보반영 및 실시간 협업 시스템 구축",
    iconSrc: "/landing/Teamvolt/Frame2.svg",
  },
  {
    width: "320px",
    height: "352px",
    title: "보안 문제 및  비용증가",
    desc: "종이 기반 자산관리에서 발생할 수 있는\n 보안문제와 높은 운영비용",
    feature: "관리자 수정이 가능한 디지털 시스템",
    iconSrc: "/landing/Teamvolt/Frame3.svg",
  },
  {
    width: "320px",
    height: "352px",
    title: "ESG 친환경",
    desc: "친환경적인 시스템",
    feature: "종이가 필요 없는 점검 시스템",
    iconSrc: "/landing/Teamvolt/Frame4.svg",
  },
];

export const Feature1 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
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
        <Typography variant="h4" component="h1" fontWeight="bold">
          효율적인 협업 시스템으로
        </Typography>
        <Typography variant="h4" component="h1" fontWeight="bold">
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
      <Box sx={{ flexShrink: 0, position: "relative", width: "50vw", height: "120vh" }}>
        <Image src="/landing/Teamvolt/ellipse_masking.png" alt="heroimg" fill style={{ transform: "translateY(-5%)" }} />
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
              {CardElement.map((item, index) => {
                if (index === 0 || index === 1) {
                  return (
                    <CardComponent
                      key={index}
                      width={item.width}
                      height={item.height}
                      title={item.title}
                      desc={item.desc}
                      feature={item.feature}
                      iconSrc={item.iconSrc}
                    />
                  );
                }
                return null;
              })}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 5, gap: 2 }}>
              {CardElement.map((item, index) => {
                if (index === 2 || index === 3) {
                  return (
                    <CardComponent
                      key={index}
                      width={item.width}
                      height={item.height}
                      title={item.title}
                      desc={item.desc}
                      feature={item.feature}
                      iconSrc={item.iconSrc}
                    />
                  );
                }
                return null;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
