import Image from "next/image";
import { Box, Link } from "@mui/material";
// import localFont from "next/font/local";

// const headingFont = localFont({
//   src: "../public/fonts/font.woff2",
// });

export const Logo = () => {
  return (
    <>
      <Link href="/" underline="none">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            opacity: 0.75,
            '&:hover': {
              opacity: 1,
            },
            transition: 'opacity 0.3s',
            cursor: 'pointer',
          }}
        >
            <Image alt="logo" src="/logo_main.png" width={Math.ceil(1664 / 10)} height={Math.ceil(217 / 10)} />
        </Box>
      </Link>
    </>
  );
};