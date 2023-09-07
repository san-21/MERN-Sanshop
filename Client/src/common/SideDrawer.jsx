import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useAuth from "customHooks/useAuth";
import { adminNavLinks, salesNavLinks } from "assets/data";
import { useNavigate } from "react-router-dom";

import React from "react";

const SideDrawer = ({
  setCurentRoute,
  currentRoute,
  open,
  smallDrawer,
  setIsSideDrawerOpen,
}) => {
  const { username, userRole, isSales, isAdmin, isOwner } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <List
      sx={{
        overflow: "hidden",
      }}
    >
      {isAdmin || isOwner
        ? adminNavLinks.map(({ name, route, icon, page }) => {
            // console.log(route);

            return (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`${route}`);
                    setCurentRoute(route);
                    !smallDrawer && setIsSideDrawerOpen(false);
                  }}
                  sx={{
                    backgroundColor:
                      currentRoute === route
                        ? `${theme.palette.primary[100]}`
                        : "",
                    color:
                      currentRoute === route
                        ? `${theme.palette.primary[500]}`
                        : `${theme.palette.text[500]}`,

                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    mr: 2,
                    mb: 1,
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary[100]}`,
                      color: `${theme.palette.primary[500]}`,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        currentRoute === route
                          ? `${theme.palette.primary[500]}`
                          : `${theme.palette.text[500]}`,
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      opacity: (open && smallDrawer) || !smallDrawer ? 3 : 0,
                      fontWeight: currentRoute === route ? "bold" : "",
                    }}
                    primary={name}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })
        : ""}

      {isSales &&
        salesNavLinks.map(({ name, route, icon, page }) => {
          // console.log(route);

          return (
            <ListItem key={name} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(`${route}`);
                  setCurentRoute(route);
                }}
                sx={{
                  backgroundColor:
                    currentRoute === route
                      ? `${theme.palette.primary[100]}`
                      : "",
                  color:
                    currentRoute === route
                      ? `${theme.palette.primary[500]}`
                      : `${theme.palette.text[500]}`,

                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  mr: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary[100]}`,
                    color: `${theme.palette.primary[500]}`,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      currentRoute === route
                        ? `${theme.palette.primary[500]}`
                        : `${theme.palette.text[500]}`,
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: currentRoute === route ? "bold" : "",
                  }}
                  primary={name}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};

export default SideDrawer;
