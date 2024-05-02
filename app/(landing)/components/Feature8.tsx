import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { Bolt, Description, FolderOpen, PersonOutline, ViewInAr } from "@mui/icons-material";

export const Feature8 = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" fontWeight="bold" sx={{ my: 2 }}>
            효율적인 협업 시스템으로 완성하는 스마트 자산 관리 솔루션
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5, position: "relative", width: "100%", height: "auto" }}>
        <Image
          id="backMask"
          src="/landing/Teamvolt/Vector 14.png"
          alt="heroimg"
          width={1920}
          height={804}
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Box id="element" sx={{ display: "flex", flexDirection: "row", gap: 10, zIndex: 100 }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image src="/landing/Teamvolt/run.png" alt="heroimg" width={596 / 1.5} height={515 / 1.5} />
            <Image src="/landing/Teamvolt/shadow.png" alt="shadowimg" width={559 / 1.5} height={39 / 1.5} />
          </Box>
          <Box sx={{ p: 5, border: "3px solid", borderRadius: 2, borderColor: "primary.main", minWidth: "30vw", bgcolor: "background.paper" }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 }}>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <OutlinedInput
                  id="outlined1"
                  placeholder="placeholder"
                  value="1"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  }
                  inputProps={{
                    style: { color: "#94A3B8" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <OutlinedInput
                  id="outlined2"
                  placeholder="placeholder"
                  value="2"
                  startAdornment={
                    <InputAdornment position="start">
                      <Bolt />
                    </InputAdornment>
                  }
                  inputProps={{
                    style: { color: "#94A3B8" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <OutlinedInput
                  id="outlined3"
                  placeholder="placeholder"
                  value="3"
                  startAdornment={
                    <InputAdornment position="start">
                      <ViewInAr />
                    </InputAdornment>
                  }
                  inputProps={{
                    style: { color: "#94A3B8" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <OutlinedInput
                  id="outlined4"
                  placeholder="placeholder"
                  value="4"
                  startAdornment={
                    <InputAdornment position="start">
                      <FolderOpen />
                    </InputAdornment>
                  }
                  inputProps={{
                    style: { color: "#94A3B8" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <OutlinedInput
                  id="outlined5"
                  placeholder="placeholder"
                  value="5"
                  startAdornment={
                    <InputAdornment position="start">
                      <Description />
                    </InputAdornment>
                  }
                  inputProps={{
                    style: { color: "#94A3B8" },
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
