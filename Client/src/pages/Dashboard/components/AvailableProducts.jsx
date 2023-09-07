import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import { useGetProductsQuery } from "rtkQuery/productApiSlice";
const AvailableProducts = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const availableProducts = data?.filter(
    (products) => products.amount >= 1
  ).length;
  console.log(`total products ${availableProducts}`);
  // const totalProducts = availableProducts.length;
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Box pb={2}>
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.primary[700]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.primary[600]}`,
            },
          }}
        >
          <ReadMoreOutlinedIcon
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
        {isLoading && (
          <CircularProgress
            size={27}
            sx={{
              color: `${theme.palette.white[500]}`,
            }}
          />
        )}
        {isSuccess && (
          <Typography
            variant="h4"
            sx={{
              mr: 1,
              //   fontWeight: "bold",
            }}
          >
            {availableProducts}
          </Typography>
        )}

        <IconButton
          sx={{
            mb: 1,
            width: "18px",
            height: "18px",
            borderRadius: "10o%",
            backgroundColor: `${theme.palette.primary[200]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.primary[200]}`,
            },
          }}
        >
          <NorthEastIcon
            fontSize="small"
            sx={{
              color: `${theme.palette.primary[400]}`,
            }}
          />
        </IconButton>
      </Box>

      <Typography
        sx={{
          color: `${theme.palette.primary[200]}`,
          fontSize: "16px",
        }}
      >
        Available Products
      </Typography>
    </Box>
  );
};

export default AvailableProducts;
