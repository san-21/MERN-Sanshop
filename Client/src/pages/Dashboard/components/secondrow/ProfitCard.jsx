import { Box, Card } from "@mui/material";
import React from "react";
import EjectIcon from "@mui/icons-material/Eject";
import CommonCard from "./CommonCard";

const profitData = {
  title: "Total Profit",
  icon: <EjectIcon />,

  percentage: "+0.7%",
  value: "220,000",
};

const ProfitCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <CommonCard
        title={profitData.title}
        icon={profitData.icon}
        percentage={profitData.percentage}
        value={profitData.value}
        type="Profit"
      />
    </Box>
  );
};

export default ProfitCard;
