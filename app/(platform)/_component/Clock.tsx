"use client"
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const Clock = () => {
  const theme = useTheme();
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timerId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (!isClient) {
    return null;
  }

  const formattedTime = currentTime.format("YYYY.MM.DD (ddd) HH:mm:ss");

  return (
    <Box>
      <Typography sx={{ color: theme.palette.mode === "light" ? "#5C5C5C" : "#F0F0F0", fontSize: { xs: 12, md: 16 } }} >
        {formattedTime}
      </Typography>
    </Box >
  );
};

export default Clock;