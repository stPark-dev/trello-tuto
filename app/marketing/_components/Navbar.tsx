"use client";

import Link from "next/link";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Link as MuiLink } from "@mui/material";

import { Poppins } from "next/font/google";

import { Logo } from "@/components/Logo";
import { Box } from "@mui/material";
import { CustomButton } from "@/components/Button";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";

import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";
import { LogInIcon } from "lucide-react";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setDrawerOpen(open);
  };
  const mobileMenu = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        {/* 여기에 모바일 메뉴 항목을 넣습니다 */}
      </Box>
    </Drawer>
  );

  const [rotate, setRotate] = useState<{ [key: string]: boolean }>({
    Industries: false,
    Solution: false,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string>("");

  const handleClick = () => {
    alert("클릭이 되어부렀어요");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
    setRotate(prev => ({ ...prev, [type]: true }));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType("");
    setRotate({ Industries: false, Solution: false });
  };

  const renderMenuItems = () => {
    switch (menuType) {
      case "Industries":
        return [
          <MenuItem key="maintenance">
            <ListItemIcon>
              <BuildIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Maintenance</ListItemText>
          </MenuItem>,
          <MenuItem key="operation">
            <ListItemIcon>
              <BusinessCenterIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Operation</ListItemText>
          </MenuItem>,
          <MenuItem key="cleaning">
            <ListItemIcon>
              <CleanHandsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cleaning</ListItemText>
          </MenuItem>,
        ];
      case "Solution":
        return [
          <MenuItem key="document">
            <ListItemIcon>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Document</ListItemText>
          </MenuItem>,
          <MenuItem key="asset">
            <ListItemIcon>
              <StorageIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Asset</ListItemText>
          </MenuItem>,
        ];
      default:
        return [];
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "3.5rem",
        px: 2,
        borderBottomWidth: "1px",
        backgroundColor: "rgb(255 255 255)",
        display: "flex",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          "@media (min-width:1024px)": {
            maxWidth: "1536px",
          },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {mobileMenu}
          </>
        ) : (
          <Box
            id="menu"
            className={textFont.className}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "rgb(115 115 115)",
              "& > * + *": {
                mx: 1,
              },
            }}
          >
            <Logo />
            <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "Industries")} sx={{ marginLeft: 2 }}>
              Industries{" "}
              <KeyboardArrowDownIcon
                sx={{
                  transform: rotate.Industries ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === "Industries"}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
            >
              {renderMenuItems()}
            </Menu>
            <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "Solution")}>
              Solution{" "}
              <KeyboardArrowDownIcon
                sx={{
                  transform: rotate.Solution ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === "Solution"}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {renderMenuItems()}
            </Menu>
            <CustomButton color="inherit" component="span">
              <Link href="/pricing" style={{ textDecoration: "none", color: "#737373" }}>
                Pricing
              </Link>
            </CustomButton>
          </Box>
        )}

        <Box
          sx={{
            "& > * + *": {
              mx: 2,
            },
            display: { xs: "flex", md: "block" },
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "flex-end" },
          }}
        >
          {/* <CustomButton size="small" cvariant="outline" sx={{ mx: 2 }}>
            <Link href="/sign-in" style={{ textDecoration: "none", color: "#000000" }}>
              Login
            </Link>
          </CustomButton> */}
          <CustomButton size="small" cvariant="teamvolt">
            <Link href="/sign-in2" style={{ textDecoration: "none", color: "#FAFAFA" }}>
              Get Teamvolt for free
            </Link>
          </CustomButton>
          {/* <IconButton>
            <MuiLink href="/sign-in2" underline="none" color="#A2A2A2"><LogInIcon /></MuiLink>
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};
