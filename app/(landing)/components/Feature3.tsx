import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Feature3 = () => {
  const listItems = ["현장업무시스템이 편리하다.", "한눈에 자산관리가 가능하다.", "관리자의 소통이 원할하다."];
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", my: 5 }}>
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 5,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
            관리자와 현장관리자의 협업 시스템
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" fontWeight="bold" sx={{ my: 2 }}>
              관리자와 현장관리자의 협업 시스템
            </Typography>
            <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
            <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
            <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
          </Box>
          {listItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "20vw",
                height: "20px",
                bgcolor: "grey.300",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
                my: 1,
              }}
            >
              <Box
                sx={{
                  width: index === 1 ? "17vw" : "12vw",
                  height: "100%",
                  bgcolor: "skyblue",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {item}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ flexGrow: 4 }}>
        <Image src="/landing/Teamvolt/design.png" alt="heroimg" width={450} height={450} />
      </Box>
    </Box>
  );
};
