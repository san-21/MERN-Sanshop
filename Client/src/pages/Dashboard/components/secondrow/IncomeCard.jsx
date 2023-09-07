import { Box, Card } from "@mui/material";
import React from "react";
import EjectIcon from "@mui/icons-material/Eject";
import CommonCard from "./CommonCard";

const incomeData = {
  title: "Total Income",
  icon: <EjectIcon />,

  percentage: "+3.8%",
  value: "350,0450",
};

const IncomeCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <CommonCard
        title={incomeData.title}
        icon={incomeData.icon}
        percentage={incomeData.percentage}
        value={incomeData.value}
        type="Income"
      />
    </Box>
  );
};

export default IncomeCard;
