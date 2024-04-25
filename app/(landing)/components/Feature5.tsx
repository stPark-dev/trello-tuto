import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

export const Feature5 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", my: 10, gap: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold" sx={{ my: 2 }}>
          자산 관리 솔루션
        </Typography>
        <Typography variant="body1">팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록</Typography>
        <Typography variant="body1">보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
      </Box>
    </Box>
  );
};
