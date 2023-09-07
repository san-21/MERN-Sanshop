import { Box, Card } from "@mui/material";
import React from "react";
import EjectIcon from "@mui/icons-material/Eject";
import CommonCard from "./CommonCard";

const expenseData = {
  title: "Total Expense",
  icon: <EjectIcon />,

  percentage: "+1.7%",
  value: "78,900",
};

const ExpenseCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <CommonCard
        title={expenseData.title}
        icon={expenseData.icon}
        percentage={expenseData.percentage}
        value={expenseData.value}
        type="Expense"
      />
    </Box>
  );
};

export default ExpenseCard;
