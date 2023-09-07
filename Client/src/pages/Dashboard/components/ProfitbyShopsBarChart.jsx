import React, { useState } from "react";
import { shopProfitData } from "../../../assets/chartdata";
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
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
import CustomTooltip from "./common/CustomTooltip";

const ProfitByShopsBarChart = () => {
  const [dateEvent, setDateEvent] = useState("Today");
  const handleChange = (e) => {
    setDateEvent(e.target.value);
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
        <Box>
          <Typography
            sx={{
              color: `${theme.palette.text[300]}`,
              pb: 1,
            }}
          >
            Total Profit
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            $230,300
          </Typography>
        </Box>
        {/* year selction */}

        <Box>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <Select
              labelId="select_event"
              value={dateEvent}
              onChange={handleChange}
            >
              <MenuItem selected value="Today">
                Today
              </MenuItem>
              <MenuItem value="This_Month">This Month</MenuItem>
              <MenuItem value="This_year">2023</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* BarChart Box/////////////////////////////// */}
      <Box
        sx={{
          mt: 2,

          width: "100%",
          height: "80%",
        }}
      >
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={shopProfitData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#f5f5f5"
              // fill={`${theme.palette.primary[200]}`}
            />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              cursor={{
                stroke: `${theme.palette.background[300]}`,
                strokeWidth: 1,
                fill: `${theme.palette.background[300]}`,
              }}
              content={<CustomTooltip />}
            />
            <Legend
              content={
                <CustomizedLegend
                  legendWidth="16px"
                  legendHeight="16px"
                  legendRadius="2px"
                />
              }
            />
            <Bar
              dataKey="shopA"
              fill={`${theme.palette.primary[500]}`}
              legendType="square"
              barSize={30}
              minPointSize={10}
              stackId="a"
            />

            <Bar
              dataKey="shopB"
              fill={`${theme.palette.primary[100]}`}
              legendType="square"
              barSize={30}
              minPointSize={10}
              stackId="a"
            />
            <Bar
              dataKey="shopC"
              fill={`${theme.palette.blue[300]}`}
              legendType="square"
              barSize={30}
              minPointSize={10}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ProfitByShopsBarChart;
