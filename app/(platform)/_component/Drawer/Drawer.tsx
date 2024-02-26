"use client";

import { useTheme } from "@mui/material/styles";

import { createElement, useEffect, useMemo, useState } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";

import BrandLogoDark from "@/public/landing/logo_main.png";
import BrandLogoLight from "@/public/landing/logo_main.png";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { DrawerAtom, DrawerMode } from "./state/Drawer";
import { Button, CssBaseline, Divider, IconButton, Link, useMediaQuery } from "@mui/material";
import { CloseSharp, KeyboardDoubleArrowLeftSharp, MenuSharp, TaskAlt, QueryStats, Business } from "@mui/icons-material";
import SignOutButton from "../../(nextauth)/_components/SignOutButton";
import Clock from "../Clock";


interface DrawerProps extends React.PropsWithChildren {
  profile?: React.ReactNode;
}
const Drawer = ({ profile, children }: DrawerProps) => {
  const theme = useTheme();
  const currentPathName = usePathname();
  const params = useParams();
  const router = useRouter();

  const isActive = (pathname: string) => currentPathName === pathname;
  const navLinks = [
    { href: '/main/tasks', label: 'Tasks', Icon: TaskAlt, isActive: isActive('/main/tasks') },
    { href: '/main/insights', label: 'Insights', Icon: QueryStats, isActive: isActive('/main/insights') },
    { href: '/main/assets', label: 'Assets', Icon: Business, isActive: isActive('/main/assets') },
  ];

  const headerHeight = 84;
  const drawerWidth = 210;

  const Logos = {
    dark: BrandLogoDark.src,
    light: BrandLogoLight.src,
  };

  const [anchorRefState, setAnchorRefState] = useState<HTMLElement | null>(null);
  const md = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });
  const [drawerState, setDrawerState] = useRecoilState(DrawerAtom);

  const drawerIsOpen = useMemo(() => drawerState.open, [drawerState.open]);
  const drawerMode = useMemo(() => drawerState.mode, [drawerState.mode]);

  const handleDrawerToggle = () => setDrawerState((prev) => ({ ...prev, open: !prev.open }));

  // State to manage the right-side drawer visibility
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  // Function to toggle the right-side drawer
  const toggleRightDrawer = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const handleOnClose = (e: unknown, reason: "escapeKeyDown" | "backdropClick") =>
    "backdropClick" === reason && handleDrawerToggle();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorRefState(null);
    setOpen(false);
  };
  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // borderBottom: `1px solid`,
          padding: theme.spacing(0, 1),
        }}
      >
        <Box
          className="drawer-header-logo"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 5
          }}
        >
          <Link href="/" sx={{ display: "inline-flex" }}>
            <Image
              src={Logos[theme.palette.mode]}
              width={Math.ceil(240 / 2)}
              height={Math.ceil(38 / 2)}
              alt="Brand Logo"
            />
          </Link>
        </Box>

        {!md && (
          <IconButton sx={{ flexShrink: 0, }} onClick={handleDrawerToggle}>
            <CloseSharp />
          </IconButton>
        )}
      </Box>

      <Box component="nav">
        {/* {typedNavigation.primary.map((item, i) => {
          const { icon, iconProps, name, abstract, dev, href, children, subheader } = item;
          const isOpen = drawerState.submenu[href];
          const isActive = href === pathname;
          const hasChild = !!children?.length;
  
          return (
            <List
              key={`sysmenu_${i}`}
              sx={{
                p: 0,
                bgcolor: isOpen ? "rgba(255,255,255,0.04)" : null,
                borderBottom: (theme) => `1px solid`,
              }}
            >
              {subheader ? (
                <ListSubheader
                  sx={{
                    lineHeight: 1.5,
                    py: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: drawerModeIsMini ? "center" : undefined,
                    fontSize: drawerModeIsMini ? 16 : undefined,
                  }}
                  title={name}
                >
                  {drawerModeIsMini
                    ? icon && createElement(icon, { ...iconProps, fontSize: "inherit" })
                    : name}
                </ListSubheader>
              ) : (
                <>
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={(e) => handleClickNavigationItem(e, href, item)}
                    onMouseOver={(e) => handleMouseOverTopNavigation(e, item)}
                    title={name}
                    sx={{
                      px: drawerModeIsMini ? 2 : 3,
                      py: 1.5,
                      height: headerHeight - 1,
                      backgroundColor: !isActive ? null : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: !isActive ? "text.primary" : "primary.main",
                        my: "auto",
                        minWidth: "34px",
                      }}
                    >
                      {icon && createElement(icon, iconProps)}
                    </ListItemIcon>

                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "auto",
                      }}
                      sx={{ my: 0 }}
                    />

                    {abstract && isDev ? (
                      <Tooltip
                        placement="right"
                        title="임시적으로 표시된 메뉴입니다. 운영환경에서는 표시되지 않습니다."
                      >
                        <HelpOutlineSharp
                          sx={{ my: "auto", color: "warning.main", mr: hasChild ? 0.5 : -1 }}
                        />
                      </Tooltip>
                    ) : (
                      dev && (
                        <Tooltip
                          placement="right"
                          title="개발중인 페이지입니다. 오류가 발생할 수 있습니다."
                        >
                          <ConstructionSharp
                            sx={{ my: "auto", color: "warning.main", mr: hasChild ? 0.5 : -1 }}
                          />
                        </Tooltip>
                      )
                    )}

                    {hasChild && (
                      <KeyboardArrowDownSharp
                        className="arrow"
                        sx={{
                          my: "auto",
                          mr: -1,
                          transform: isOpen ? "rotate(-180deg)" : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    )}
                  </ListItemButton>

                  {isOpen &&
                    hasChild &&
                    children.map(
                      (
                        {
                          icon: childIcon,
                          iconProps: childIconProps,
                          name: childName,
                          href: childHref,
                          dev: childDev,
                          abstract: childAbstract,
                        },
                        j
                      ) => {
                        const isActive = childHref === pathname;

                        if (childAbstract && !isDev) return;

                        return (
                          <ListItemButton
                            key={`sysmenu_${i}_${j}`}
                            title={childName}
                            sx={{
                              pl: 4,
                              py: 1,
                              minHeight: 32,
                              color: "text.primary",
                              backgroundColor: !isActive ? null : "rgba(255, 255, 255, 0.04)",
                            }}
                            onClick={(e) => handleClickNavigationItem(e, childHref)}
                          >
                            <ListItemIcon
                              sx={{
                                color: !isActive ? "text.primary" : "primary.main",
                                minWidth: "34px",
                              }}
                            >
                              {childIcon && createElement(childIcon, childIconProps)}
                            </ListItemIcon>
                            <ListItemText
                              primary={childName}
                              primaryTypographyProps={{ fontSize: 13, fontWeight: "medium" }}
                            />
                            {childAbstract && isDev ? (
                              <Tooltip
                                placement="right"
                                title="임시적으로 표시된 메뉴입니다. 운영환경에서는 표시되지 않습니다."
                              >
                                <HelpOutlineSharp sx={{ my: "auto", color: "warning.main" }} />
                              </Tooltip>
                            ) : (
                              childDev && (
                                <Tooltip
                                  placement="right"
                                  title="개발중인 페이지입니다. 오류가 발생할 수 있습니다."
                                >
                                  <ConstructionSharp
                                    className="arrow"
                                    sx={{ my: "auto", color: "warning.main" }}
                                  />
                                </Tooltip>
                              )
                            )}
                          </ListItemButton>
                        );
                      }
                    )}
                </>
              )}
            </List>
          );
        })} */}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRefState}
        role={undefined}
        placement="right-start"
        transition
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
            <Paper
              sx={{
                minWidth: 150,
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
  const getToolbox = (Tools: React.ReactNode, headerToolboxProps?: BoxProps) => {
    const { sx, ...props } = headerToolboxProps ?? {};
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: 2,
          mx: 2,
          bgcolor: "background.default",
          border: `1px solid`,
          borderRadius: "4px",
          ...sx,
        }}
        {...props}
      >
        {Tools}
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          [theme.breakpoints.up("md")]: drawerIsOpen && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
          },
          ["> .MuiToolbar-root"]: {
            bgcolor: "white",
            minHeight: headerHeight,
            borderBottom: `1px solid`,
          },
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters sx={{ px: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            size="medium"
            sx={{ mr: 1, color: "rgba(0,0,0,0.5)" }}
          >
            {drawerIsOpen ? <KeyboardDoubleArrowLeftSharp /> : <MenuSharp />}
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "none",
              [theme.breakpoints.up("sm")]: {
                display: "block",
              },
            }}
          >
            {navLinks.map(({ href, label, Icon, isActive }) => (
              <Box
                key={href}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: "1rem",
                  pt: 1,
                  fontSize: '1rem',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#004d40' : '#212121',
                  opacity: 0.8,
                  '&:hover': {
                    color: '#00897b',
                    opacity: 1,
                    textDecorationThickness: '2px', // Example thickness, adjust as needed
                    textUnderlineOffset: '10px', // Example offset, adjust as needed
                  },
                  textDecoration: isActive ? 'underline' : 'none',
                  textDecorationColor: '#004d40',
                  textDecorationThickness: '2px', // Maintain consistent thickness with hover
                  textUnderlineOffset: '10px', // Adjust the space between text and underline
                }}
                component={Link}
                href={href}
              >
                <Icon sx={{ marginRight: 1 }} />
                {label}
              </Box>
            ))}
          </Typography>

          <Box flexGrow={1} />
          <Button variant="contained" onClick={toggleRightDrawer}>Open Right Drawer</Button>
          {drawerState.headerToolbox &&
            getToolbox(drawerState.headerToolbox, drawerState.headerToolboxProps)}

          {profile && profile}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx: 5 }}>
            <Clock />
            {"|"}
          </Box>
          {<SignOutButton />}
        </Toolbar>
      </AppBar>
      {/* Right-side drawer */}
      <MuiDrawer
        anchor="right"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        <Box>Right-side drawer content</Box>
      </MuiDrawer>
      <MuiDrawer
        transitionDuration={md ? 200 : theme.transitions.duration.leavingScreen}
        sx={{
          width: drawerWidth,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100%",
            bgcolor: "white",
            boxShadow: "1px 0px 1px -2px rgba(0,0,0,0.2), 2px 0px 2px 0px rgba(0,0,0,0.14)",
            overflow: "auto",
          },
        }}
        onClose={handleOnClose}
        variant={md ? "persistent" : "temporary"}
        open={drawerIsOpen}
        anchor="left"
      >
        {drawerContent}
      </MuiDrawer>
      <Box
        component="main"
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          // marginTop: `${headerHeight / 2}px`,
          display: "flex",
          flexDirection: "column",
          flexGrow: 6,
          [theme.breakpoints.up("md")]: {
            marginLeft: `-${drawerWidth}px`,
            ...(drawerIsOpen && { marginLeft: `${drawerWidth}` }),
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
export default Drawer;