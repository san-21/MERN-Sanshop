import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import { navLinks } from "./assets/data";

const StyledSearch = styled(Box)(({ theme }) => ({
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",

  width: "25vw",
  height: "45px",
  border: ` 1px solid ${theme.palette.primary[200]} `,
  borderRadius: "7px",
  color: `${theme.palette.text[200]}`,
  "&:hover": {
    border: `1px solid ${theme.palette.text[500]} `,
  },
}));

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

const StyledSidebarButton = styled(Button)(({ theme }) => ({
  width: "180px",
  height: "43px",
  paddingLeft: "2rem",
  paddingRight: "7rem",
  marginLeft: "1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
  fontSize: "0.875rem",
  textTransform: "capitalize",
  color: `${theme.palette.text[500]}`,

  "&:hover": {
    borderRadius: "0.75rem",
    backgroundColor: `${theme.palette.primary[100]}}`,
  },
}));
const StyledSidebarIcon = styled(IconButton)(({ theme }) => ({
  width: "53px",
  height: "53px",
  paddingBottom: "1.5rem",
  paddingTop: "1.5rem",

  marginLeft: "1rem",
  marginRight: "1rem",

  fontSize: "1rem",
  textTransform: "capitalize",
  // color: `${theme.palette.text[500]}`,

  "&:hover": {
    borderRadius: "0.75rem",
    backgroundColor: `${theme.palette.primary[100]}}`,
  },
}));
const Main = () => {
  const [clicked, setClicked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  // const [active, setActive] = useState(false);
  const handleSidebar = () => {
    setDrawerOpen(!drawerOpen);
  };
  // handleSidebarButton = () => {
  //   setActive(!active);
  // };
  return (
    <Box id="main content">
      <Box>
        <AppBar
          elevation={0}
          id="nav"
          style={{
            backgroundColor: "white",
            color: `${theme.palette.primary[500]}`,
          }}
        >
          <Toolbar>
            {/* <img src={logo} width="50px" height="50px" /> */}
            <Typography
              variant="h5"
              sx={{
                color: `${theme.palette.text[500]}`,
              }}
            >
              San Shop
            </Typography>
            <StyledIconButton
              onClick={handleSidebar}
              sx={{
                ml: "70px",
              }}
            >
              <MenuIcon />
            </StyledIconButton>
            <Box flexGrow={1}>
              <StyledSearch
                sx={{
                  border: `${clicked} && 2px solid ${theme.palette.blue[500]}`,
                }}
              >
                <IconButton disabled>
                  <SearchOutlinedIcon />
                </IconButton>
                <InputBase
                  fullWidth
                  placeholder="Search"
                  onClick={() => setClicked(!clicked)}
                />
              </StyledSearch>
            </Box>
            <StyledIconButton>
              <NotificationsNoneIcon />
            </StyledIconButton>
            <StyledIconButtonBlue>
              <TranslateOutlinedIcon />
            </StyledIconButtonBlue>
            <StyledIconButton>
              <StoreOutlinedIcon />
            </StyledIconButton>
            <IconButton>
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
                clickable
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
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Toolbar end *$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$/}
      {/* content  */}
      <Box id="main content" display="flex">
        {/* sidebar */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-start"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            color: "black",
            bgcolor: `${theme.palette.white[500]}`,
          }}
          id="sidebar"
          width={drawerOpen ? "220px" : "80px"}
          height="100vh"
        >
          <Toolbar />
          {/* {drawerOpen && (
            <Button
              sx={{
                p: "1.5rem",
                fontSize: "0.75rem",

                color: `${theme.palette.text[500]}`,
                "&:hover": {
                  bgcolor: `${theme.palette.white[500]}`,
                },
              }}
            >
              Dashboard
            </Button>
          )} */}

          {!drawerOpen && (
            <StyledSidebarIcon>
              <StorefrontOutlinedIcon />
            </StyledSidebarIcon>
          )}
          {drawerOpen &&
            navLinks.map((item) => (
              <div key={item.title}>
                <Typography
                  sx={{
                    m: "1.5rem",
                  }}
                >
                  {item.title}
                </Typography>
                {item.menu.map((link) => (
                  <StyledSidebarButton startIcon={link.icon}>
                    <div
                      style={{
                        width: "160px",
                      }}
                    >
                      {link.name}
                    </div>
                  </StyledSidebarButton>
                ))}
                <Divider />
              </div>
            ))}
        </Box>
        {/* content */}
        <Box id="content" flexGrow={1} bgcolor="#EEF2F6" height="1400px"></Box>
        <Box bgColor="white" height="400px" width="30px"></Box>
      </Box>
    </Box>
  );
};

export default Main;
