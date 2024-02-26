import type { BoxProps } from "@mui/material";
import { atom } from "recoil";

export enum DrawerMode {
  "mini" = "mini",
  "full" = "full",
}

interface DrawerStates {
  open: boolean;
  submenu: Record<string, boolean>;
  mode: DrawerMode;
  headerToolbox?: React.ReactNode;
  headerToolboxProps?: BoxProps;
}

export const DrawerAtom = atom<DrawerStates>({
  key: "Drawer",
  default: {
    open: true,
    mode: DrawerMode.mini,
    submenu: {},
    headerToolbox: null,
    headerToolboxProps: {},
  },
});
