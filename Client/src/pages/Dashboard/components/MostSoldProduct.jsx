import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useGetProductsQuery } from "rtkQuery/productApiSlice";
const MostSoldProduct = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const brand = data?.map((prod) => prod.brand);

  console.log(brand);

  const theme = useTheme();
  return (
    <Box p={2}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: `${theme.palette.text[500]}`,
          mb: 2,
        }}
        variant="h6"
      >
        Mostly Sold Products
      </Typography>

      {data?.map((prod, index) => (
        <div>
          {index < 7 && (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box minWidth="50px" width="50px" height="50px" sx={{ mr: 1 }}>
                <img
                  style={{
                    objectFit: "cover",
                    border: `1px solid ${theme.palette.primary[200]}`,
                    borderRadius: "20%",
                  }}
                  width="96%"
                  height="96%"
                  src={prod.images[1]}
                  alt=""
                />
              </Box>
              {/* title */}
              <Box flexGrow={1}>
                <Typography
                  sx={{
                    overflow: "hidden",
                    color: `${theme.palette.text[600]}`,
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {prod.brand},{prod.name}
                </Typography>
                <Typography
                  sx={{
                    color: `${theme.palette.text[300]}`,
                  }}
                >
                  $ {prod.regularPrice}
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  color: `${theme.palette.text[400]}`,
                }}
              >
                {prod.colors.map((color, index) => (
                  <Box>
                    {index < 4 && (
                      <div
                        key={index}
                        style={{
                          border: `1px solid ${theme.palette.primary[100]} `,
                          width: "12px",
                          height: "12px",
                          overflowClipMargin: "2px",
                          borderRadius: "100%",
                          backgroundColor: color,
                        }}
                      ></div>
                    )}
                  </Box>
                ))}
                +
              </Box>
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
};

export default MostSoldProduct;
