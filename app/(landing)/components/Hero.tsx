import { Box } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Box sx={{ flex: 1, position: "relative", width: "100%" }}>
        <Box sx={{ fontFamily: "kleague" }}>메롱이</Box>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image src="/landing/Teamvolt/Asset 6@4x.png" alt="heroimg" layout="fill" objectFit="cover" />
        </Box>
      </Box>
    </>
  );
};
