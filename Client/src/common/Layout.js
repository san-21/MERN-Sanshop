import { Box, CssBaseline } from "@mui/material";
import React from "react";
import MainWrapper from "./MainWrapper";
import Dashboard from "pages/Dashboard/Dashboard";

const Layout = () => {
  return (
    <Box>
      <CssBaseline />
      <MainWrapper />
    </Box>
  );
};

export default Layout;
