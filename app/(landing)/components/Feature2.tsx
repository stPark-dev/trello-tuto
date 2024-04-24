import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Feature2 = () => {
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
        <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
          관리자와 현장관리자의 협업 시스템
        </Typography>
        <Typography variant="body2" color="primary">
          Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo
        </Typography>
        <Typography variant="body2" color="primary">
          sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", my: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              zIndex={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                gap: 2,
                flexShrink: 0,
                border: "2px solid #0089A8",
                borderRadius: 2,
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.30)",
                bgcolor: "rgba(204, 242, 246, 0.50)",
                transform: "translateX(3%)",
              }}
            >
              <Box width="100%">
                <Skeleton />
                <Skeleton width="80%" />
                <Skeleton width="70%" />
                <Skeleton width="60%" />
                <Skeleton width="50%" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
                <Box
                  width={50}
                  height={50}
                  sx={{ borderRadius: "50%", bgcolor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}
                >
                  <Image src="/landing/Teamvolt/Frame4.svg" alt="svg" width={30} height={30} style={{ margin: 2 }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight="bold">
                    관리자와 현장관리자의 협업 시스템
                  </Typography>
                  <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
                  <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
                  <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
                </Box>
              </Box>
            </Box>
            <Box zIndex={5}>
              <Image src="/landing/Teamvolt/run.png" alt="heroimg" width={450} height={450} />
            </Box>
            <Box
              zIndex={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                gap: 2,
                flexShrink: 0,
                border: "2px solid #0089A8",
                borderRadius: 2,
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.30)",
                bgcolor: "rgba(204, 242, 246, 0.50)",
              }}
            >
              <Box width="50%" height="50%">
                <Skeleton variant="circular" width="100%" height="100%" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
                <Box
                  width={50}
                  height={50}
                  sx={{ borderRadius: "50%", bgcolor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}
                >
                  <Image src="/landing/Teamvolt/Frame1.svg" alt="svg" width={30} height={30} style={{ margin: 2 }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight="bold">
                    관리자와 현장관리자의 협업 시스템
                  </Typography>
                  <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
                  <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
                  <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            id="changeThis"
            zIndex={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start", // 왼쪽 정렬을 위해 alignItems를 start로 변경
              p: 2,
              gap: 2,
              flexShrink: 0,
              flexGrow: 0, // Box가 확장되지 않도록 설정
              width: "40%", // Box의 폭을 30%로 조정
              border: "2px solid #0089A8",
              borderRadius: 2,
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.30)",
              bgcolor: "rgba(204, 242, 246)",
              transform: "translate(20%, -30%)",
            }}
          >
            <Box width="100%" height="100%">
              <Skeleton variant="circular" width="100%" height="100%" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
              <Box
                width={50}
                height={50}
                sx={{ borderRadius: "50%", bgcolor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}
              >
                <Image src="/landing/Teamvolt/Frame1.svg" alt="svg" width={30} height={30} style={{ margin: 2 }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" fontWeight="bold">
                  관리자와 현장관리자의 협업 시스템
                </Typography>
                <Typography variant="body2">· Lorem ipsum dolor sit amet consectetur. Sem </Typography>
                <Typography variant="body2">· sagittis vitae laoreet blandit eget leosit egestas orc </Typography>
                <Typography variant="body2">· Sollicitudin elit non amet in condimentum quis </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
