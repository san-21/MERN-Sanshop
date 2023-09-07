import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import CustomizedLegend from "./common/CustomizedLegend";
import { mostSoldCategory } from "assets/chartdata";
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  const cos = Math.cos(-RADIAN * midAngle);

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fill={fill}
        style={{
          fontSize: "15px",
        }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 6}
        dy={8 + 10}
        textAnchor="middle"
        fill="#121926"
        style={{
          fontSize: "22px",
        }}
      >
        {payload.sold}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};
const COLORS = ["#7e5dc1", "#4daaf4", "#bfaee0", "#fdd835"];

// };
const CustomTooltip = ({ active, payload }) => {
  const theme = useTheme();
  if (active && payload && payload.length) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{
          width: "120px",
          height: "30px",
          borderRadius: "5px",
          backgroundColor: `${theme.palette.white[500]}`,
          pr: 2,
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            backgroundColor: `${theme.palette.primary[500]}`,
            paddingLeft: "2px",
            marginRight: "4px",
          }}
        />

        <Typography
          sx={{ fontSize: "12px", color: `${theme.palette.text[500]}` }}
        >
          {payload[0].name}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: `${theme.palette.text[500]}`,
            fontWeight: "bold",
          }}
        >
          {payload[0].value}
        </Typography>
      </Box>
    );
  }
  return null;
};
const CategoryPieChart = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: `${theme.palette.text[500]}`,
          }}
          variant="h6"
        >
          Sale by category
        </Typography>
      </Box>

      <ResponsiveContainer width="99%" height="85%">
        <PieChart width={500} height={500}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={mostSoldCategory}
            cx="50%"
            cy={130}
            innerRadius={80}
            outerRadius={90}
            fill="#8884d8"
            dataKey="sold"
            onMouseEnter={onPieEnter}
            paddingAngle={3}
            // legendType="circle"
            animationEasing="linear"
          >
            {mostSoldCategory.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={
              <CustomizedLegend
                legendWidth="11px"
                legendHeight="11px"
                legendRadius="100%"
              />
            }
            margin={5}
            iconSize={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CategoryPieChart;
