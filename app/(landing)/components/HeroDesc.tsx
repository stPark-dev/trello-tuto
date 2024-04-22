import { Box, Divider, Typography } from "@mui/material";

export const HeroDesc = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", backgroundColor: "#444444", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ color: "#ffffff", display: "flex", flexDirection: "row" }}>
        <Typography variant="h1">50%</Typography>
        <Box sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="body1">관리의 시간을 50% 이상</Typography>
          <Typography variant="body1">단축할 수 있습니다.</Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ color: "#ffffff", display: "flex", flexDirection: "row" }}>
        <Typography variant="h1">256개</Typography>
        <Typography variant="body1">팀볼트를 사용하는 다양한 기업</Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ color: "#ffffff", display: "flex", flexDirection: "row" }}>
        <Typography variant="h1">30%</Typography>
        <Typography variant="body1">비용을 30% 절감할 수 있습니다.</Typography>
      </Box>
    </Box>
  );
};
