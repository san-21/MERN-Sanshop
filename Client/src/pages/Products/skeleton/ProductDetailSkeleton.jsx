import { Box, Divider, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { product } from "assets/data";

const ProductDetailSkeleton = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: `${theme.palette.white[400]}`,
        pl: { xs: 2, sm: 4 },
      }}
    >
      {/* imageSliderbox */}

      <Grid
        item
        sm={6}
        md={6}
        xs={10}
        id="imageslider"
        sx={{
          pl: { xs: 2, sm: 5 },
          mb: 7,
        }}
      >
        <Skeleton
          variant="rounded"
          width="600px"
          height="600px"
          sx={{
            borderRadius: "15px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 3,
          }}
        >
          <Skeleton
            variant="rounded"
            width="70px"
            height="60px"
            sx={{
              borderRadius: "15px",
            }}
          />
          <Skeleton
            variant="rounded"
            width="70px"
            height="60px"
            sx={{
              borderRadius: "15px",
            }}
          />
          <Skeleton
            variant="rounded"
            width="70px"
            height="60px"
            sx={{
              borderRadius: "15px",
            }}
          />
          <Skeleton
            variant="rounded"
            width="70px"
            height="60px"
            sx={{
              borderRadius: "15px",
            }}
          />
          <Skeleton
            variant="rounded"
            width="70px"
            height="60px"
            sx={{
              borderRadius: "15px",
            }}
          />
        </Box>
      </Grid>

      {/* formBox */}
      <Grid item sm={6} md={6} xs={10} id="form">
        <Box
          sx={{
            p: 3,
            m: 3,
          }}
        >
          <Skeleton
            variant="text"
            width="100px"
            sx={{ fontSize: "1rem", mt: 3 }}
          />
          <Skeleton
            variant="text"
            width="100px"
            sx={{ fontSize: "1rem", mt: 3, mb: 2 }}
          />
          <Skeleton
            variant="text"
            width="200px"
            sx={{ fontSize: "1rem", mt: 3, mb: 2 }}
          />
          <Skeleton
            variant="text"
            width="400px"
            sx={{ fontSize: "1rem", mt: 3, mb: 2 }}
          />

          <Divider />
          <Skeleton
            variant="rectangular"
            width="400px"
            height="100px"
            sx={{ mt: 3, mb: 2 }}
          />

          <Grid
            item
            direction="row"
            container
            gap={2}
            sx={{
              mt: { xs: 4, sm: 3 },
              mb: { xs: 4, sm: 3 },
            }}
          >
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              sx={{
                mb: 2,
                mr: 3,
              }}
            >
              <Skeleton
                variant="text"
                width="120px"
                sx={{ fontSize: "1rem", mt: 3 }}
              />
            </Grid>
            <Grid item xs={9} sm={9} md={9} container gap={2} direction="row">
              <Skeleton
                variant="circular"
                width="20px"
                height="20px"
                sx={{ fontSize: "1rem", mt: 3, mr: 3 }}
              />
              <Skeleton
                variant="circular"
                width="20px"
                height="20px"
                sx={{ fontSize: "1rem", mt: 3, mr: 3 }}
              />
              <Skeleton
                variant="circular"
                width="20px"
                height="20px"
                sx={{ fontSize: "1rem", mt: 3, mr: 3 }}
              />
              <Skeleton
                variant="circular"
                width="20px"
                height="20px"
                sx={{ fontSize: "1rem", mt: 3, mr: 3 }}
              />
              <Skeleton
                variant="circular"
                width="20px"
                height="20px"
                sx={{ fontSize: "1rem", mt: 3, mr: 3 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            direction="row"
            container
            xs={12}
            gap={4}
            sx={{
              mt: { xs: 4, sm: 3 },
              mb: { xs: 4, sm: 3 },
            }}
          >
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              sx={{
                mb: 2,
              }}
            >
              <Skeleton
                variant="text"
                width="120px"
                sx={{ fontSize: "1rem", mr: 3 }}
              />
            </Grid>

            <Grid item xs={10} sm={9} md={9} gap={4} container direction="row">
              <Skeleton
                variant="rounded"
                width="30px"
                height="20px"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width="30px"
                height="20px"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width="30px"
                height="20px"
                sx={{ fontSize: "1rem" }}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" pr={4}>
            <Skeleton
              variant="text"
              width="120px"
              sx={{ fontSize: "1rem", mt: 3 }}
            />

            <Skeleton
              variant="text"
              width="30px"
              sx={{ fontSize: "1rem", mt: 3, flexGrow: 0.5 }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailSkeleton;
