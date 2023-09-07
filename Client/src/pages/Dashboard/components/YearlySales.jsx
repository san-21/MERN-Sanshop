import React, { useState } from "react";
import { YearlySalesData } from "../../../assets/chartdata";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import CustomizedLegend from "./common/CustomizedLegend";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CustomTooltip from "./common/CustomTooltip";

const YearlySales = () => {
  const [year, setYear] = useState(2023);
  const handleChange = (e) => {
    setYear(e.target.value);
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "15%",
          alignItems: "center",
          color: `${theme.palette.text[600]}`,
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h6"
        >
          Yearly Sales report
        </Typography>
        {/* year selction */}

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select labelId="select_year" value={year} onChange={handleChange}>
              <MenuItem selected value={2021}>
                2021
              </MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* LineChart Box/////////////////////////////// */}
      <Box
        sx={{
          width: "100%",
          height: "80%",
        }}
      >
        <ResponsiveContainer width="99%" height="99%">
          <LineChart
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            width={400}
            height={300}
            data={YearlySalesData}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickSize={16}
            />
            <YAxis axisLine={false} tickLine={false} tickSize={10} />
            <Tooltip content={<CustomTooltip />} animationEasing="ease-out" />
            <Legend
              align="right"
              verticalAlign="top"
              content={
                <CustomizedLegend
                  legendWidth="12px"
                  legendHeight="12px"
                  legendRadius="3px"
                />
              }
            />
            <Line
              strokeWidth="2.5"
              type="bump"
              animationEasing="ease-in"
              connectNulls={true}
              dot={false}
              legendType="circle"
              dataKey="Profit"
              stroke={`${theme.palette.blue[500]}`}
              activeDot={{ r: 8 }}
            />
            <Line
              strokeWidth="2.5"
              type="bump"
              dot={false}
              legendType="circle"
              dataKey="Income"
              stroke={`${theme.palette.primary[500]}`}
              activeDot={{ r: 8 }}
            />
            <Line
              strokeWidth="2"
              type="bump"
              dot={false}
              legendType="circle"
              dataKey="Expense"
              stroke={`${theme.palette.red[300]}`}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default YearlySales;
