import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
const Menu = () => {
  return (
    <Paper>
      <Button startIcon={<CloudUploadOutlinedIcon />}>Published</Button>
      <Button startIcon={<InsertDriveFileOutlinedIcon />}>Draft</Button>
    </Paper>
  );
};

export default Menu;
