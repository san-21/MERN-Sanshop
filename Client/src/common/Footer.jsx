import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100px",
        backgroundColor: ` ${theme.palette.background[100]}`,
        alignItems: "end",
        justifyContent: "center",
        pb: 3,
        color: ` ${theme.palette.text[400]}`,
      }}
    >
      <Typography sx={{}}>
        {" "}
        © 2023{" "}
        <span
          style={{
            color: ` ${theme.palette.primary[500]}`,
            fontWeight: "bold",
          }}
        >
          {" "}
          SAN
        </span>{" "}
        Shop Managment Software Corp.
      </Typography>
    </Box>
  );
};

export default Footer;
