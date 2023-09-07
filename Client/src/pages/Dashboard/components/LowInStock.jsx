import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useGetProductsQuery } from "rtkQuery/productApiSlice";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
const LowInStock = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();

  const lowStock = data?.filter((products) => products.amount < 10).length;
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: `${theme.palette.text[500]}`,
      }}
    >
      <IconButton
        sx={{
          mt: 5,
        }}
      >
        <ProductionQuantityLimitsOutlinedIcon
          fontSize="large"
          sx={{
            color: `${theme.palette.yellow[500]}`,
          }}
        />
      </IconButton>
      <Box
        sx={{
          flexGrow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography
          sx={{
            color: `${theme.palette.yellow[500]}`,
          }}
        >
          Low in stock
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h6"
        >
          {lowStock} Items
        </Typography>
      </Box>
    </Box>
  );
};

export default LowInStock;
