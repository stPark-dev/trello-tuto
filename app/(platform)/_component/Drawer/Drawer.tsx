"use client";

import { alpha, styled, useTheme } from "@mui/material/styles";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { SvgIconTypeMap, Tab, Tabs } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";
import { useSession } from "next-auth/react";

import BrandLogoDark from "@/public/landing/logo_main_dark.png";
import BrandLogoLight from "@/public/landing/logo_main_light.png";

import { useRecoilState } from "recoil";
import { DrawerAtom } from "./state/Drawer";
import Link from "next/link";
import { CssBaseline, IconButton, InputBase, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Tooltip, useMediaQuery } from "@mui/material";
import { CloseSharp, KeyboardDoubleArrowLeftSharp, MenuSharp, TaskAlt, QueryStats, Business, Notifications, Search as SearchIcon, MoreVert, Task, AssignmentReturn, LocationOn, DocumentScanner, Apartment, EventRepeat, Info, Interests, LocalOffer, Person, Shield, CreditCard, AccountBox, ManageAccounts, CircleNotifications } from "@mui/icons-material";
import SignOutButton from "../../(nextauth)/_components/SignOutButton";
import { signOut } from "next-auth/react";
import Clock from "../Clock";
import { useRouter, usePathname } from "next/navigation";
import Toggler from "@/components/mui/ThemeProvider/Toggler";

interface DrawerProps extends React.PropsWithChildren {
  profile?: React.ReactNode;
}
interface DrawerMenuItem {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  route: string;
}
const Drawer = ({ profile, children }: DrawerProps) => {
  const theme = useTheme();
  const router = useRouter();
  const currentPathName = usePathname();
  const { data: sessionData } = useSession();
  const settings = [
    {
      mod: "Settings",
      fnc: () => router.push("/main/settings/personal/profile")
    },
    {
      mod: "Logout",
      fnc: () => signOut({ callbackUrl: "/" })
    }
  ];

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [tabValue, setTabValue] = useState(0);
  const md = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerState, setDrawerState] = useRecoilState(DrawerAtom);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid transparent",
    borderColor: "#00897B",
    borderWidth: "2px",
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    color: "rgba(0,0,0,0.5)",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "100%",
    color: "primary",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      borderRadius: "50px",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "32ch",
        },
      },
    },
  }));


  const isActive = (pathname: string) => currentPathName.startsWith(pathname);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navLinks = [
    { href: "/main/works/all", label: "Works", Icon: TaskAlt, isActive: isActive("/main/works") },
    { href: "/main/insights", label: "Insights", Icon: QueryStats, isActive: isActive("/main/insights") },
    { href: "/main/assets/buildings", label: "Assets", Icon: Business, isActive: isActive("/main/assets") },
  ];

  const headerHeight = 84;
  const drawerWidth = 360;
  
  const Logos = {
    dark: BrandLogoDark.src,
    light: BrandLogoLight.src,
  };

  // logo 이미지 교체
  const [logoImage, setLogoImage] = useState(Logos[theme.palette.mode]);

  const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogoImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [anchorRefState, setAnchorRefState] = useState<HTMLElement | null>(null);

  const drawerIsOpen = useMemo(() => drawerState.open, [drawerState.open]);
  const drawerMode = useMemo(() => drawerState.mode, [drawerState.mode]);

  const handleDrawerToggle = () => {
    console.info("########## Theme: ", theme)
    setDrawerState((prev) => ({ ...prev, open: !prev.open }))
  };

  // Right Drawer
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const toggleRightDrawer = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const handleOnClose = (e: unknown, reason: "escapeKeyDown" | "backdropClick") =>
    "backdropClick" === reason && handleDrawerToggle();

  useEffect(() => {
    if (!md) return;

    setDrawerState((prev) => ({ ...prev, submenu: {} }));
  }, [md, setDrawerState]);

  useEffect(() => {
    setLogoImage(Logos[theme.palette.mode]);
  }, [theme.palette.mode]);

  useEffect(() => {
    const tabIndex = navLinks.findIndex(link => currentPathName.startsWith(link.href));
    setTabValue(tabIndex !== -1 ? tabIndex : 100);
  }, [currentPathName, navLinks]);

  const drawerMenuItems: { [key: string]: DrawerMenuItem[] } = {
    "/main/works": [
      { text: "All Works", icon: Task, route: "/main/works/all" },
      { text: "Assigned to me", icon: AssignmentReturn, route: "/main/works/views" }
    ],
    "/main/insights": [
      { text: "Location", icon: LocationOn, route: "/main/insights/location" }
    ],
    "/main/assets": [
      { text: "Buildings", icon: Apartment, route: "/main/assets/buildings" },
      { text: "Documents", icon: DocumentScanner, route: "/main/assets/documents" },
      { text: "Recurring Works", icon: EventRepeat, route: "/main/assets/recurring-works" }
    ],
    "/main/assets/buildings/[buildingId]": [
      { text: "Information", icon: Info, route: "/main/assets/buildings/[buildingId]/location" },
      { text: "Notifiactions", icon: Notifications, route: "/main/assets/buildings/[buildingId]/notifications" },
      { text: "Spaces", icon: LocationOn, route: "/main/assets/buildings/[buildingId]/spaces" },
      { text: "Assets", icon: Interests, route: "/main/assets/buildings/[buildingId]/assets" },
      { text: "Categories", icon: LocalOffer, route: "/main/assets/buildings/[buildingId]/categories" },
      { text: "Users", icon: Person, route: "/main/assets/buildings/[buildingId]/users" },
      { text: "Roles", icon: Shield, route: "/main/assets/buildings/[buildingId]/roles" },
      { text: "Billing and Plan", icon: CreditCard, route: "/main/assets/buildings/[buildingId]/billing" },
    ],
    "/main/settings/personal": [
      { text: "Profile", icon: AccountBox, route: "/main/settings/personal/profile" },
      { text: "Account Settings", icon: ManageAccounts, route: "/main/settings/personal/account" },
      { text: "Notification Settings", icon: CircleNotifications, route: "/main/settings/personal/notifications" }
    ]
  };
  const getCurrentMenuItems = (currentPath: string): DrawerMenuItem[] => {
    const pathSegments = currentPath.split("/");
    const buildingIdIndex = pathSegments.findIndex(segment => segment === "buildings") + 1;
    const buildingId = pathSegments.length > buildingIdIndex ? pathSegments[buildingIdIndex] : null;

    if (buildingId) {
      // "buildingId"가 있는 경우, 동적 경로를 체크합니다.
      const dynamicKey = "/main/assets/buildings/[buildingId]";
      const regex = new RegExp(dynamicKey.replace("[buildingId]", "[^/]+"));
      if (regex.test(currentPath)) {
        // 현재 경로가 동적 경로와 일치하는 경우, 해당하는 메뉴 항목을 반환합니다.
        return drawerMenuItems[dynamicKey].map(item => ({
          ...item,
          route: item.route.replace("[buildingId]", buildingId)
        }));
      }
    }

    for (const key in drawerMenuItems) {
      if (currentPath.startsWith(key)) {
        return drawerMenuItems[key];
      }
    }
    return [];
  };


  const currentMenuItems = useMemo(() => getCurrentMenuItems(currentPathName), [currentPathName]);

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(0, 1),
        }}
      >
        <Box
          className="drawer-header-logo"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            p: 3,
            cursor: "pointer",
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleLogoChange}
            style={{ display: "none" }}
            accept="image/*"
          />
          <Image
            src={logoImage}
            width={Math.ceil(360 / 2)}
            height={Math.ceil(56 / 2)}
            alt="Brand Logo"
          />
        </Box>

        {!md && (
          <IconButton sx={{ flexShrink: 0, }} onClick={handleDrawerToggle}>
            <CloseSharp />
          </IconButton>
        )}
      </Box>

      <Box component="nav">
        {isMobile && (
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Works" onClick={() => router.push("/main/works/all")} />
              <Tab label="Insights" onClick={() => router.push("/main/insights")} />
              <Tab label="Assets" onClick={() => router.push("/main/assets/buildings")} />
            </Tabs>
          </Box>
        )}
        <Box sx={{ width: 250 }} role="presentation">
          <List sx={{ ml: 3, mt: 1 }}>
            <Typography fontWeight="bold" variant="h4" sx={{ p: 2 }}>{/* Here */}</Typography>
            {currentMenuItems.map((menuItem: DrawerMenuItem, index: number) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => {
                  if (isMobile) handleDrawerToggle();
                  router.push(menuItem.route)
                }}>
                  <ListItemIcon>
                    <menuItem.icon />
                  </ListItemIcon>
                  <ListItemText primary={menuItem.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
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
        color="info"
        sx={{
          [theme.breakpoints.up("md")]: drawerIsOpen && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
          },
          ["> .MuiToolbar-root"]: {
            minHeight: headerHeight,
            borderBottom: `1px solid`,
          },
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters sx={{ px: 4 }}>
          <Toggler />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            size="medium"
            sx={{ mr: 1 }}
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
                  display: "inline-flex",
                  alignItems: "center",
                  px: "1rem",
                  pt: 1,
                  fontSize: "1rem",
                  fontWeight: isActive ? "bold" : "normal",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "10px",
                  },
                  textDecoration: isActive ? "underline" : "none",
                  textDecorationColor: theme.palette.mode === "light" ? "#004d40" : "#00BF9F",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "10px",
                }}
              >
                <Link href={href} passHref>
                  <span style={{
                    textDecoration: "none",
                    color: theme.palette.mode === "light" ? "#004d40" : "#00BF9F",
                    display: "inline-flex",
                    alignItems: "center"
                  }}>
                    <Icon sx={{ marginRight: 1 }} />
                    {label}
                  </span>
                </Link>
              </Box>
            ))}
          </Typography>

          <Box flexGrow={1} />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
            {md && <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="검색어를 입력하세요"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            }

            {drawerState.headerToolbox &&
              getToolbox(drawerState.headerToolbox, drawerState.headerToolboxProps)}

            {profile && profile}

            <Clock />

            {sessionData?.user?.image ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Tooltip title="사용자 설정" arrow>
                    <Image
                      src={sessionData.user.image}
                      width={40}
                      height={40}
                      alt={`Profile Pic for ${sessionData.user.name}`}
                      priority={true}
                      onClick={handleOpenUserMenu}
                      style={{ borderRadius: "50%" }}
                    />
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting.mod} onClick={() => { setting.fnc(); handleCloseUserMenu(); }}>
                        <Typography textAlign="center">{setting.mod}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* <Box sx={{ ml: 2 }}>
                  <SignOutButton />
                </Box> */}
              </Box>
            ) : (
              <></>
              // <Box sx={{ ml: 2 }}>
              //   <SignOutButton />
              // </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Right-side drawer */}
      <MuiDrawer
        anchor="right"
        variant="persistent"
        open={rightDrawerOpen}
        onClose={toggleRightDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth * 1.5,
            marginTop: `${headerHeight}px`
          },
        }}
      >
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">Notification</Typography>

        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">Activities</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">빠른 연락처</Typography>
        </Box>
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