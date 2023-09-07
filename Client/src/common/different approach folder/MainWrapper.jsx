import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Button,
  Avatar,
  Typography,
  Container,
  selectClasses,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import useMediaQuery from "@mui/material/useMediaQuery";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../assets/san-software-logo.png";

// redux//////////////////////////////////////

import { useDispatch, useSelector } from "react-redux";

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

let xsdrawerWidth = 240;
let drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "space-between" : "space-around",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MainWrapper = () => {
  // Drawer Global State using Redux Toolkit
  const dispatch = useDispatch();
  const isXsDrawerOpen = useSelector((state) => state.common.isXsDrawerOpen);
  const selectedButton = useSelector((state) => state.common.selectedButton);
  const open = useSelector((state) => state.common.open);
  const isLinkOpen = useSelector((state) => state.common.isLinkOpen);

  const nonMobile = useMediaQuery("(min-width:514px)");

  // const [isXsDrawerOpen, setIsXsDrawerOpen] = useState(false);
  // const [open, setOpen] = useState(true);

  const theme = useTheme();
  // done redux
  // const handleXsDrawer = () => {
  //   dispatch(handleXsDrawer);

  // setIsXsDrawerOpen(!isXsDrawerOpen);
  // };
  // done
  // const handleSmallDrawerClose = () => {
  //   dispatch(handleSmallDrawerClose());
  // drawerWidth = 85;
  // setOpen(false);
  // };
  // done
  // const handleSmallDrawerOpen = () => {
  //   dispatch(handleSmallDrawerOpen());
  // drawerWidth = 240;
  // setOpen(true);
  // };

  ///////////////Button State Local/////////////////////
  // const [selectedButton, setSelectedButton] = useState(0);
  // const [isLinkOpen, setIsLinkOpen] = useState(false);

  const handleButtonClicked = (event, index) => {
    // reduxToolkit way  =====>>>>>>>>>>>>>>>>>

    dispatch(handleButtonClicked(index));
    return;

    // local state way =================>
    // setSelectedButton(index);
    // setIsLinkOpen(!isLinkOpen);
  };
  const drawerContent = <Box></Box>;
  ////////////////////////////////////////////////
  return (
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
            onClick={() => dispatch(handleXsDrawer())}
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            {nonMobile ? (
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
                  width: "240px",
                  ml: 2,
                  mr: { xs: 2, sm: "" },
                }}
              />
            )}
          </Box>
          {nonMobile && (
            <Box display="flex">
              <StyledIconButton>
                <NotificationsNoneIcon />
              </StyledIconButton>
              <StyledIconButtonBlue>
                <TranslateOutlinedIcon />
              </StyledIconButtonBlue>
              <StyledIconButton>
                <StoreOutlinedIcon />
              </StyledIconButton>
            </Box>
          )}
          {nonMobile && (
            <Button
              startIcon={
                <Avatar
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                />
              }
              endIcon={<SettingsOutlinedIcon />}
              variant="outlined"
              clickable="true"
              sx={{
                height: "40px",
                borderRadius: "40px",
                border: `1px solid ${theme.palette.blue[200]} `,
                backgroundColor: ` ${theme.palette.blue[100]}`,

                "&:hover": {
                  backgroundColor: ` ${theme.palette.blue[500]}`,
                  color: ` ${theme.palette.white[300]}`,
                },
              }}
            />
          )}
        </Toolbar>
      </AppBar>
      {/* Drawer Box */}
      <Box>
        {/* for xtra small device */}
        <Drawer
          variant="temporary"
          open={isXsDrawerOpen}
          onClose={() => dispatch(handleXsDrawer())}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: xsdrawerWidth,
            },
          }}
        >
          <img src={logo} width="85px" height="auto" marginleft="0px" />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedButton === 1}
                onClick={(event) => handleButtonClicked(event, 1)}
                sx={{
                  borderRadius: selectedButton ? "10px" : "",
                  ml: 1,
                  mr: 1,
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <StoreOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: selectedButton === 1 ? "15px" : "",
                  }}
                >
                  Product
                </ListItemText>

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    flexGrow: 1,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {isLinkOpen ? (
                    <ExpandMoreOutlinedIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            {isLinkOpen && (
              <List>
                <ListItem
                  component={Link}
                  to="/managment/products"
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                >
                  <ListItemButton
                    sx={{
                      ml: 1,
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      "&:hover": {
                        boxShadow: "none",
                        border: "0px solid gray",
                        borderRadius: "10px",
                        backgroundColor: `${theme.palette.background[200]}`,
                        mr: 1,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="List"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  component={Link}
                  to="/managment/productscreate"
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    // selected={selectedButton}
                    sx={{
                      ml: 1,
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      "&:hover": {
                        boxShadow: "none",
                        border: "0px solid gray",
                        borderRadius: "10px",
                        backgroundColor: `${theme.palette.background[200]}`,
                        mr: 1,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AddCircleOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Add New"
                      sx={{
                        opacity: open ? 1 : 0,
                        color: `${theme.palette.primary[500]}`,
                        fontWeight: 800,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </List>
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
            <img src={logo} width="80px" height="auto" marginleft="0px" />

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
              onClick={
                open
                  ? () => dispatch(handleSmallDrawerClose())
                  : () => dispatch(handleSmallDrawerOpen())
              }
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>

          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedButton === 1}
                onClick={(event) => handleButtonClicked(event, 1)}
                sx={{
                  borderRadius: selectedButton ? "10px" : "",
                  ml: 1,
                  mr: 1,
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <StoreOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: selectedButton === 1 ? "15px" : "",
                  }}
                >
                  Product
                </ListItemText>

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    flexGrow: 1,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {isLinkOpen ? (
                    <ExpandMoreOutlinedIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            {isLinkOpen && (
              <List>
                <ListItem
                  component={Link}
                  to="/managment/products"
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                >
                  <ListItemButton
                    sx={{
                      ml: 1,
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      "&:hover": {
                        boxShadow: "none",
                        border: "0px solid gray",
                        borderRadius: "10px",
                        backgroundColor: `${theme.palette.background[200]}`,
                        mr: 1,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="List"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  component={Link}
                  to="/managment/productscreate"
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    // selected={selectedButton}
                    sx={{
                      ml: 1,
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      "&:hover": {
                        boxShadow: "none",
                        border: "0px solid gray",
                        borderRadius: "10px",
                        backgroundColor: `${theme.palette.background[200]}`,
                        mr: 1,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <AddCircleOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Add New"
                      sx={{
                        opacity: open ? 1 : 0,
                        color: `${theme.palette.primary[500]}`,
                        fontWeight: 800,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </List>
        </Drawer>
      </Box>
      {!nonMobile && (
        <Box
          sx={{
            p: 1,
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
  );
};

export default MainWrapper;
