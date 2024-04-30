import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface CardProps {
  width: string | number;
  height: string | number;
  title: string;
  desc: string;
  feature: string;
  iconSrc: string;
}

export const CardComponent = ({ ...props }: CardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "3rem 2rem",
        minWidth: props.width,
        height: props.height,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3.6875rem",
        borderRadius: "0.5rem",
        border: 1,
        borderColor: "primary.main",
      }}
    >
      <Image src={props.iconSrc} alt={props.title} width={40} height={40} style={{ width: "auto", height: "auto" }} />
      <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
      <Typography sx={{ textAlign: "center", whiteSpace: "pre-line" }}>{props.desc}</Typography>
      <Typography sx={{ p: 1, backgroundColor: "primary.main", color: "#ffffff", borderRadius: "0.5rem", textAlign: "center" }}>{props.feature}</Typography>
    </Box>
  );
};
