import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import SouthWestIcon from "@mui/icons-material/SouthWest";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { totalSold } from "../../../assets/chartdata";

const CustomTooltip = ({ active, payload, label }) => {
  const theme = useTheme();
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: "100px",
          height: "30px",
          backgroundColor: "#191818",
          opacity: 0.7,
          borderRadius: "5px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            color: `${theme.palette.white[500]}`,
            pt: 0.5,

            fontSize: "12px",
          }}
        >
          <Typography>Sold</Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            {payload[0].value}
          </Typography>
        </Box>
      </Box>
    );
  }
  return null;
};
const TotalSold = () => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* infobox start */}
      <Box
        width="50%"
        height="100%"
        id="infobox"
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            pb: { xs: 2, sm: 1, md: 2 },
          }}
        >
          <IconButton
            sx={{
              width: "43px",
              height: "43px",
              borderRadius: "10px",
              backgroundColor: `${theme.palette.blue[700]}`,
              "&:hover": {
                backgroundColor: `${theme.palette.blue[700]}`,
              },
            }}
          >
            <ShoppingBagOutlinedIcon
              fontSize="medium"
              sx={{
                color: `${theme.palette.white[500]}`,
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mr: 1,
              //   fontWeight: "bold",
            }}
          >
            430
          </Typography>
          <IconButton
            sx={{
              mb: 1,
              width: "18px",
              height: "18px",
              borderRadius: "10o%",
              backgroundColor: `${theme.palette.blue[200]}`,
              "&:hover": {
                backgroundColor: `${theme.palette.blue[200]}`,
              },
            }}
          >
            <SouthWestIcon
              fontSize="small"
              sx={{
                color: `${theme.palette.blue[400]}`,
              }}
            />
          </IconButton>
        </Box>

        <Typography
          sx={{
            color: `${theme.palette.blue[200]}`,
            fontSize: "16px",
          }}
        >
          Sold Products
        </Typography>
      </Box>

      {/* chart */}
      <Box mt={3} width="50%" height="100%">
        <ResponsiveContainer width="99%" height="80%">
          <LineChart
            data={totalSold}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            width={400}
            height={100}
          >
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="bump"
              strokeWidth="2"
              dataKey="Sold"
              stroke={`${theme.palette.white[500]}`}
              activeDot={{ r: 6 }}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default TotalSold;
