import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import SmallBarChart from "./SmallBarChart";

const chartData = [
  {
    month: "Jan",
    Income: 700300,
    Expense: 200000,
    Profit: 500000,
  },
  {
    month: "Feb",
    Income: 600000,
    Expense: 100000,
    Profit: 500000,
  },
  {
    month: "Mar",
    Income: 500000,
    Expense: 250000,
    Profit: 250000,
  },
  {
    month: "Apr",
    Income: 400000,
    Expense: 100000,
    Profit: 300000,
  },
  {
    month: "May",
    Income: 900000,
    Expense: 90000,
    Profit: 810000,
  },
  {
    month: "Jun",
    Income: 800000,
    Expense: 300000,
    Profit: 500000,
  },
  {
    month: "Jul",
    Income: 3000000,
    Expense: 1500000,
    Profit: 150000,
  },
  {
    month: "Aug",
    Income: 1000000,
    Expense: 500000,
    Profit: 500000,
  },
  {
    month: "Sep",
    Income: 2000000,
    Expense: 1000000,
    Profit: 1060000,
  },
  {
    month: "Oct",
    Income: 860000,
    Expense: 170000,
    Profit: 670000,
  },
  {
    month: "Nov",
    Income: 590000,
    Expense: 330000,
    Profit: 470000,
  },
  {
    month: "Dec",
    Income: 760000,
    Expense: 440000,
    Profit: 530000,
  },
];
const CommonCard = ({ title, icon, percentage, value, type }) => {
  const theme = useTheme();
  return (
    <Box
      id="main"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* left info box */}
      <Box
        id="leftbox"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            mb: 1.5,
            color: `${theme.palette.text[400]}`,
            fontSize: "16px",
          }}
        >
          {title}
        </Typography>
        <Button
          disableRipple
          sx={{
            mb: 1.5,
            color: `${theme.palette.text[600]}`,
            fontWeight: "bold",
          }}
          size="large"
          variant="text"
          startIcon={icon}
        >
          {percentage}
        </Button>
        <Typography
          variant="h4"
          sx={{
            color: `${theme.palette.text[600]}`,

            fontWeight: "bold",
          }}
        >
          {value}
        </Typography>
      </Box>

      {/* chartbox */}

      <SmallBarChart data={chartData} type={type} />
    </Box>
  );
};

export default CommonCard;
