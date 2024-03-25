"use client";

import { ReactElement } from "react";

import { useRecoilState } from "recoil";
import { IconButton } from "@mui/material";
import { themeState } from "@/store/theme";
import { ThemeNames } from "@/types/common/datatype";
import { DarkMode, LightMode } from "@mui/icons-material";

interface IconProps {
  name: ThemeNames;
}

const DynamicIcon = ({ name }: IconProps): ReactElement => {
  if (name === "dark") return <DarkMode />;
  return <LightMode />;
};

const Toggler = (): ReactElement => {
  const [name, setMode] = useRecoilState(themeState);

  const toggleMode = () => setMode(prevState => ("light" === prevState ? "dark" : "light"));

  return (
    <IconButton onClick={toggleMode} sx={{ width: 40, height: 40 }}>
      <DynamicIcon name={name} />
    </IconButton>
  );
};

export default Toggler;
