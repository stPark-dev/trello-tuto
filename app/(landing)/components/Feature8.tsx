import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { FormControl, OutlinedInput } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src="/landing/Teamvolt/run.png" alt="heroimg" width={596 / 1.5} height={515 / 1.5} />
          </Box>
          <Box sx={{ p: 5, border: "3px solid", borderRadius: 2, borderColor: "primary.main", minWidth: "30vw" }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 }}>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <PersonOutline />
                <OutlinedInput id="outlined1" placeholder="placeholder" value="1" />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <Bolt />
                <OutlinedInput id="outlined2" placeholder="placeholder" value="2" />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <ViewInAr />
                <OutlinedInput id="outlined3" placeholder="placeholder" value="3" />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <FolderOpen />
                <OutlinedInput id="outlined4" placeholder="placeholder" value="4" />
              </FormControl>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <Typography variant="body1">Description</Typography>
                <Description />
                <OutlinedInput id="outlined5" placeholder="placeholder" value="5" />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
