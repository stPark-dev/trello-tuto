import { CustomButton } from "@/components/Button";
import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface CardProps {
  width: string | number;
  height: string | number;
  title: string;
  desc: string;
  feature: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export const CardComponent = ({ ...props }: CardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        p: 2,
        minWidth: props.width,
        height: props.height,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        borderRadius: "16px",
        border: 1,
        borderColor: "primary.main",
      }}
    >
      <props.icon />
      <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
      <Typography sx={{ textAlign: "center" }}>{props.desc}</Typography>
      <Typography sx={{ p: 1, backgroundColor: "primary.main", color: "#ffffff", borderRadius: 3, textAlign: "center" }}>{props.feature}</Typography>
    </Box>
  );
};
