import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Box sx={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <Image src="/landing/Teamvolt/Asset 6@4x.png" alt="heroimg" width={1920} height={800} />
        <Box sx={{ display: "flex", flexDirection: "row", backgroundColor: "#444444", justifyContent: "center", alignItems: "center", gap: 8, p: 10 }}>
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
      </Box>
    </>
  );
};
