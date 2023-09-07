import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useAuth from "customHooks/useAuth";

import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSignOutMutation } from "rtkQuery/authApiSlice";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

const ProfileTooltip = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [signOut, { isLoading, isSuccess, isError, error }] =
    useSignOutMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const handlelogOut = () => {
    signOut();
  };
  const { username } = useAuth();
  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar
            sizes="small"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          />
          <Typography
            sx={{
              ml: 1,
            }}
          >
            {" "}
            {username}
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <MenuList disablePadding>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsOutlinedIcon />
          </ListItemIcon>
          <ListItemText> View Profile</ListItemText>
        </MenuItem>

        <MenuItem sx={{}}>
          <ListItemIcon>
            <BorderColorOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Edit Profile</ListItemText>
        </MenuItem>

        <MenuItem sx={{}}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Setting</ListItemText>
        </MenuItem>
        <Divider
          sx={{
            mb: { xs: 0, sm: 1 },
          }}
        />
      </MenuList>
    </Box>
  );
};

export default ProfileTooltip;
