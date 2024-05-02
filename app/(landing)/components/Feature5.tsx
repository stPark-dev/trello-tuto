import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

export const Feature5 = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" fontWeight="bold" sx={{ my: 2 }}>
            실시간 데이터 소통으로 완성하는 협업 시스템
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", my: 5, gap: 4, p: 5 }}>
        <Box sx={{ position: "relative", width: 600, height: 600 }}>
          <Image
            src="/landing/Teamvolt/ellipse_661.png"
            alt="circle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <Image
              src="/landing/Teamvolt/ok.png"
              alt="heroimg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 1 }}>
          <Box sx={{ p: 2, border: "1px solid", borderRadius: 2, borderColor: "primary.main" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 2 }}>
              <div>
                <Image src="/landing/Teamvolt/Asset 21@4x.png" alt="svg1" width={290 / 5} height={164 / 5} style={{ width: "auto", height: "auto" }} />
              </div>
              <div style={{ color: "#8C8C8C", flexGrow: 5 }}>
                <Typography>Lorem ipsum dolor sit amet consectetur. Sem sagittis</Typography>
                <Typography>vitae laoreet blandit eget leosit egestas orci.</Typography>
                <Typography sx={{ textAlign: "right" }}>PM 2:00</Typography>
              </div>
            </Box>
          </Box>
          <Box sx={{ p: 2, ml: 10, border: "1px solid", borderRadius: 2, borderColor: "primary.main" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 2 }}>
              <div>
                <Image src="/landing/Teamvolt/Asset 14@4x.png" alt="png1" width={350 / 7} height={398 / 7} style={{ width: "auto", height: "auto" }} />
              </div>
              <div style={{ color: "#8C8C8C", flexGrow: 5 }}>
                <Typography>Lorem ipsum dolor sit amet consectetur. Sem sagittis</Typography>
                <Typography>vitae laoreet blandit eget leosit egestas orci.</Typography>
                <Typography sx={{ textAlign: "right" }}>PM 2:00</Typography>
              </div>
            </Box>
          </Box>
          <Box sx={{ p: 2, border: "1px solid", borderRadius: 2, borderColor: "primary.main" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 2 }}>
              <div>
                <Image src="/landing/Teamvolt/Asset 8@4x.png" alt="png2" width={243 / 5} height={330 / 5} style={{ width: "auto", height: "auto" }} />
              </div>
              <div style={{ color: "#8C8C8C", flexGrow: 5 }}>
                <Typography>Lorem ipsum dolor sit amet consectetur. Sem sagittis</Typography>
                <Typography>vitae laoreet blandit eget leosit egestas orci.</Typography>
                <Typography sx={{ textAlign: "right" }}>PM 2:00</Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
