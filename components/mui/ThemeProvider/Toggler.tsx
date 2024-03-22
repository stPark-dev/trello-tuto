"use client";

import { ReactElement } from "react";

import { useRecoilState } from "recoil";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { themeState } from "@/store/theme";
import { ThemeNames } from "@/types/common/datatype";

interface IconProps {
  name: ThemeNames;
}

const DynamicIcon = ({ name }: IconProps): ReactElement => {
  if ("dark" === name) return <DarkModeIcon />;
  return <LightModeIcon />;
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
