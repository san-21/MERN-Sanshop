import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useGetProductsQuery } from "rtkQuery/productApiSlice";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
const OutOfStock = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const outOfStock = data?.filter((products) => products.amount < 1).length;
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
            color: `${theme.palette.red[500]}`,
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
            color: `${theme.palette.red[500]}`,
          }}
        >
          Out of stock
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h6"
        >
          {outOfStock} Items
        </Typography>
      </Box>
    </Box>
  );
};

export default OutOfStock;
