import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  const theme = useTheme();
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: "60px",
          height: "30px",
          backgroundColor: `${theme.palette.white[500]}`,
          p: 1,
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: `${theme.palette.text[500]}`,
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {payload[0].value}
        </Typography>
      </Box>
    );
  }
  return null;
};

const SmallBarChart = ({ data, type }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "30%",
        height: "100px",
      }}
      id="chartBox"
    >
      <ResponsiveContainer width="80%" height="100%">
        <BarChart data={data} width={150} height={100}>
          <Tooltip content={CustomTooltip} />
          {type === "Income" && (
            <Bar dataKey="Income" fill={`${theme.palette.primary[500]}`} />
          )}
          {type === "Profit" && (
            <Bar dataKey="Profit" fill={`${theme.palette.blue[500]}`} />
          )}
          {type === "Expense" && (
            <Bar dataKey="Expense" fill={`${theme.palette.yellow[500]}`} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SmallBarChart;
