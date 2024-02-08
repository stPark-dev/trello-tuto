import { Box } from "@mui/material";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
      <Box sx={{ height: "100%", backgroundColor: "rgb(241 245 249 / 1)" }}>
        <Navbar />
        <Box sx={{ pt: 20, backgroundColor: "rgb(241 245 249 / 1)" }}>
          {children}
        </Box>
        <Footer />
      </Box>
  );
};

export default MarketingLayout;