import { Box } from "@mui/material";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
      <Box className="h-full bg-slate-100" sx={{ height: "100%", backgroundColor: "rgb(241 245 249 / 1)" }}>
        <Navbar />
        <Box sx={{ pt: 20, pb: 20, backgroundColor: "rgb(241 245 249 / 1)" }}>
          {children}
        </Box>
        <Footer />
      </Box>
  );
};

export default MarketingLayout;