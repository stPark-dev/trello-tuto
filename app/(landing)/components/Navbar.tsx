"use client";

import Link from "next/link";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Link as MuiLink, Typography } from "@mui/material";

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
    Introduce: false,
    CustomerCase: false,
    Manual: false,
    CustomerCenter: false,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string>("");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
    setRotate(prev => ({
      ...{
        Introduce: false,
        CustomerCase: false,
        Manual: false,
      },
      [type]: true,
    }));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType("");
    setRotate({ Introduce: false, CustomerCase: false, Manual: false });
  };

  const renderMenuItems = () => {
    switch (menuType) {
      case "Introduce":
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
      case "CustomerCase":
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
      case "Manual":
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
      case "CustomerCenter":
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
    <>
      <Box sx={{ backgroundColor: "#2CBBCF", height: "48px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography fontWeight="bold">팀볼트 도입이 고민이라면? 제안서만 먼저 받아보세요</Typography>
        <Button variant="text" sx={{ mx: 3, fontWeight: "500", color: "#000000", textDecoration: "underline", ":hover": { textDecoration: "underline" } }}>
          더 알아보기
        </Button>
      </Box>
      <Box
        sx={{
          height: "56px",
          px: 10,
          borderBottomWidth: "1px",
          backgroundColor: "rgb(255 255 255)",
          display: "flex",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            width: "100%",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
              <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "Introduce")} sx={{ marginLeft: 2 }}>
                서비스 소개{" "}
                <KeyboardArrowDownIcon
                  sx={{
                    transform: rotate.Introduce ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuType === "Introduce"}
                onClose={handleMenuClose}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
              >
                {renderMenuItems()}
              </Menu>
              <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "CustomerCase")}>
                고객 사례{" "}
                <KeyboardArrowDownIcon
                  sx={{
                    transform: rotate.CustomerCase ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuType === "CustomerCase"}
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
              <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "Manual")}>
                사용 매뉴얼{" "}
                <KeyboardArrowDownIcon
                  sx={{
                    transform: rotate.Manual ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuType === "Manual"}
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
              <Button color="inherit" component="span">
                <Link href="/marketing/pricing" style={{ textDecoration: "none", color: "#737373" }}>
                  멤버쉽
                </Link>
              </Button>
              <Button color="inherit" component="span" onClick={e => handleMenuOpen(e, "CustomerCenter")}>
                고객 센터{" "}
                <KeyboardArrowDownIcon
                  sx={{
                    transform: rotate.CustomerCenter ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuType === "CustomerCenter"}
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
            <CustomButton size="medium" cvariant="outline">
              <Link href="/sign-in2" style={{ textDecoration: "none", color: "#000000" }}>
                로그인
              </Link>
            </CustomButton>
            <CustomButton size="medium" cvariant="primary" sx={{ mx: 2 }}>
              <Link href="/sign-in2" style={{ textDecoration: "none", color: "#FAFAFA" }}>
                체험 시작하기
              </Link>
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
