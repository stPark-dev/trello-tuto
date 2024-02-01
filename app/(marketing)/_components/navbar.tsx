"use client";

import Link from "next/link";
import { Button as MUIButton, Menu, MenuItem, ListItemIcon, ListItemText, IconButton, ListItem, ListItemButton } from "@mui/material";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Box } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';

import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useState } from "react";

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

export const Navbar = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
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
    Solution: false
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string>('');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
    setRotate(prev => ({ ...prev, [type]: true }));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType('');
    setRotate({ Industries: false, Solution: false });
  };

  const renderMenuItems = () => {
    switch (menuType) {
      case 'Industries':
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
          </MenuItem>
        ];
      case 'Solution':
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
          </MenuItem>
        ];
      default:
        return [];
    }
  };

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {mobileMenu}
          </>
        ) : (
          <Box id="menu" className={cn("space-x-6 flex items-center text-neutral-500", textFont.className)}>
            <Logo />
            <MUIButton color="inherit" component="span" onClick={(e) => handleMenuOpen(e, 'Industries')}>
              Industries <KeyboardArrowDownIcon sx={{ transform: rotate.Industries ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }} />
            </MUIButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Industries'}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
            >
              {renderMenuItems()}
            </Menu>
            <MUIButton color="inherit" component="span" onClick={(e) => handleMenuOpen(e, 'Solution')}>
              Solution <KeyboardArrowDownIcon sx={{ transform: rotate.Solution ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }} />
            </MUIButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Solution'}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {renderMenuItems()}
            </Menu>
            <MUIButton color="inherit" component="span">
              <Link href="/pricing">
                Pricing
              </Link>
            </MUIButton>
          </Box>
        )}

        <div className={cn("space-x-4 md:block md:w-auto flex items-center w-full", isMobile ? "justify-end" : "")}>
          <MUIButton size="small" variant="outlined">
            <Link href="/sign-in">
              Login
            </Link>
          </MUIButton>
          <MUIButton size="small" variant="contained">
            <Link href="/sign-up">
              Get Teamvolt for free
            </Link>
          </MUIButton>
        </div>
      </div>
    </div>
  );
};