import { useSignOutMutation } from "rtkQuery/authApiSlice";
import useAuth from "customHooks/useAuth";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

import useMediaQuery from "@mui/material/useMediaQuery";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../assets/san-software-logo.png";
/////////////////Tooltip Related code/////////////////////
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import ProfileTooltip from "./ProfileTooltip";
import SideDrawer from "./SideDrawer";
import { CloseRounded } from "@mui/icons-material";
import Footer from "./Footer";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.white[500],
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[7],

    fontSize: 11,
    width: "200px",
    height: { xs: "200px", sm: "260px" },
  },
}));

////////////////Tolltip end//////////////////////////////

////////////////////////////////////////////////
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: "15px",
  marginRight: "15px",
  fontWeight: "normal",
  fontSize: "14px",
  width: "30px",
  height: "30px",
  border: `1px solid ${theme.palette.primary[200]} `,
  backgroundColor: ` ${theme.palette.primary[100]}`,
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.primary[700]}`,
    color: ` ${theme.palette.white[300]}`,
    fontWeight: "normal",
  },
}));

const StyledIconButtonBlue = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.blue[200]} `,
  backgroundColor: ` ${theme.palette.blue[100]}`,
  borderRadius: "5px",
  width: "30px",
  height: "30px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.blue[500]}`,
    color: ` ${theme.palette.white[300]}`,
  },
}));
//////////////////////////////////////////////

let SidedrawerWidth = 240;
let drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "space-between" : "space-around",

  ...theme.mixins.toolbar,
}));

const MainWrapper = () => {
  const [signOut, { isLoading, isSuccess, isError, error }] =
    useSignOutMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const handlelogOut = () => {
    signOut();
  };
  const { userRole } = useAuth();
  /////////////////////Signout//////////////////

  const { pathname } = useLocation();

  /////////////////////SignOut End///////////////

  const nonMobile = useMediaQuery("(min-width:514px)");

  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const theme = useTheme();
  // done redux
  const handleSideDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };
  // done
  const handleSmallDrawerClose = () => {
    drawerWidth = 85;
    setOpen(false);
  };
  // done
  const handleSmallDrawerOpen = () => {
    drawerWidth = 240;
    setOpen(true);
  };

  ///////////////Button State/////////////////////

  const [currentRoute, setCurentRoute] = useState("");

  ////////////////////////////////////////////////

  useEffect(() => {
    setCurentRoute(pathname);
  }, [pathname]);
  console.log(pathname.substring(1));
  console.log(pathname);
  return (
    <Box>
      <Box>
        <AppBar
          position="fixed"
          elevation={0}
          id="nav"
          style={{
            paddingTop: "5px",
            backgroundColor: "white",
            color: `${theme.palette.primary[500]}`,
            width: { sm: `cal(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            {nonMobile && (
              <img src={logo} width="65px" height="auto" marginleft="0px" />
            )}

            <IconButton
              onClick={handleSideDrawer}
              sx={{
                display: { xs: "block", sm: "none", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box flexGrow={1}>
              {/* {nonMobile ? (
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton disabled>
                          <SearchOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: { xs: "340px", sm: "600px" },
                    mr: { xs: 2, sm: "" },
                    ml: open ? 26 : 7,
                  }}
                />
              ) : (
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{}}>
                        <IconButton disabled>
                          <SearchOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: "180px",
                    ml: 2,
                    mr: { xs: 1, sm: "" },
                  }}
                />
              )} */}
            </Box>
            {nonMobile && (
              <Box display="flex">
                <StyledIconButton onClick={handlelogOut}>
                  <PowerSettingsNewOutlinedIcon />
                </StyledIconButton>
                {/* <StyledIconButtonBlue>
                  <TranslateOutlinedIcon />
                </StyledIconButtonBlue>
                <StyledIconButton>
                  <StoreOutlinedIcon />
                </StyledIconButton> */}
              </Box>
            )}

            <LightTooltip
              title={<ProfileTooltip />}
              placement="bottom-end"
              arrow
            >
              <Button
                startIcon={
                  <Avatar
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                }
                // endIcon={<SettingsOutlinedIcon />}
                variant="outlined"
                clickable="true"
                sx={{
                  height: "40px",
                  borderRadius: "40px",
                  border: `1px solid ${theme.palette.blue[200]} `,
                  backgroundColor: ` ${theme.palette.blue[100]}`,
                  color: `${theme.palette.text[500]}`,
                  "&:hover": {
                    backgroundColor: ` ${theme.palette.blue[500]}`,
                    color: ` ${theme.palette.white[300]}`,
                  },
                }}
              >
                {userRole}
              </Button>
            </LightTooltip>
          </Toolbar>
        </AppBar>
        {/* Drawer Box */}
        <Box>
          {/* for xtra small device */}
          <Drawer
            variant="temporary"
            open={isSideDrawerOpen}
            onClose={handleSideDrawer}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: SidedrawerWidth,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={logo} width="85px" height="auto" marginleft="0px" />
              <IconButton
                onClick={handleSideDrawer}
                disableRipple
                sx={{
                  mr: 2,
                }}
              >
                <CloseRounded fontSize="small" />
              </IconButton>
            </Box>
            {/* xtra small drawer Button here */}
            <SideDrawer
              currentRoute={currentRoute}
              setCurentRoute={setCurentRoute}
              smallDrawer={false}
              setIsSideDrawerOpen={setIsSideDrawerOpen}
            />
          </Drawer>

          {/* /////////////////////Small size device drawer/////////////////// */}
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              position: "relative",
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: open ? 240 : 85,
              },
            }}
          >
            <DrawerHeader>
              <img src={logo} width="80px" height="auto" />

              <IconButton
                sx={{
                  backgroundColor: "white",
                  width: "25px",
                  height: "25px",
                  borderRadius: "100%",
                  border: "1px solid gray",
                  position: "fixed",
                  top: "17px",
                  left: open ? 228 : 73,
                }}
                onClick={open ? handleSmallDrawerClose : handleSmallDrawerOpen}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            {/* small device drawer */}
            <SideDrawer
              currentRoute={currentRoute}
              setCurentRoute={setCurentRoute}
              open={open}
              smallDrawer={true}
            />
          </Drawer>
        </Box>
        {!nonMobile && (
          <Box
            sx={{
              pt: 1,
              borderRadius: "10px",
              backgroundColor: `${theme.palette.background[500]}`,
              mt: 8,
              width: "95%",

              ml: 1,
            }}
          >
            <Outlet />
          </Box>
        )}
        {nonMobile && (
          <Box
            sx={{
              p: 4,
              borderRadius: "10px",
              backgroundColor: `${theme.palette.background[500]}`,
              mt: 8,
              width: open ? "86%" : "94%",

              ml: open ? drawerWidth - 210 : drawerWidth - 75,
              mr: { xs: 20 },
            }}
          >
            <Outlet />
          </Box>
        )}
      </Box>

      {/* fooooooooooooterrrrrrrrrrrrrrrrr */}
      <Footer />
    </Box>
  );
};

export default MainWrapper;
