import { Description, Download } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Product = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 30,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "22%",
            top: "calc(4% - 171.5px)",
            zIndex: 10,
            transform: "translateY(-50%)",
          }}
        >
          <Image src="/landing/Teamvolt/soloOkay.png" alt="heroimg" width={392} height={343} />
        </Box>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard",
            maxWidth: "1600px",
            minHeight: "120px",
            borderRadius: 50,
            bgcolor: "#2CBBCF",
            justifyContent: "center",
            alignItems: "center",
            p: 10,
            gap: 10,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <Description sx={{ fontSize: "10rem", color: "#199EB1" }} />
          <Box sx={{ display: "flex", flexDirection: "column", color: "background.paper", gap: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              지금 소개 자료를 다운받아 보세요
            </Typography>
            <Typography variant="body1">팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록 보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
          </Box>
          <Button variant="contained" size="large" endIcon={<Download />} sx={{ borderRadius: 50 }}>
            자산관리 서비스 안내서
          </Button>
          <Button variant="contained" size="large" endIcon={<Download />} sx={{ borderRadius: 50 }}>
            전자계약 서비스 안내서
          </Button>
        </Paper>
      </Box>
    </>
  );
};
