import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Feature7 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold" sx={{ my: 2 }}>
          운영자와 입주민 사이를 가깝게 만들어주는 양방 소통형 민원 관리
        </Typography>
        <Typography variant="body2" color="text.primary">
          Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo
        </Typography>
        <Typography variant="body2" color="text.primary">
          sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", my: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Image src="/landing/Teamvolt/Asset 31@4x.png" alt="heroimg" width={Math.ceil(955 / 2.5)} height={Math.ceil(854 / 2.5)} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", my: 5, gap: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" fontWeight="bold" sx={{ my: 2 }}>
                QR 인식으로 관리하는 자산
              </Typography>
              <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
              <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
              <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" fontWeight="bold" sx={{ my: 2 }}>
                QR코드 인식으로 언제 어디서든 접수 가능
              </Typography>
              <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
              <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
              <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" fontWeight="bold" sx={{ my: 2 }}>
                입주민을 위한 민원 처리 현황 확인 시스템
              </Typography>
              <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
              <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
              <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
            <Image src="/landing/Teamvolt/slide.png" alt="heroimg" width={1920} height={595} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
