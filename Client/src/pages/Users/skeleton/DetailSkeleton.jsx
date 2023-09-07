import { Box, Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const DetailSkeleton = () => {
  const theme = useTheme();
  return (
    <Box display="flex">
      <Box
        sx={{
          backgroundColor: `${theme.palette.background[50]}`,
          minHeight: "500px",
          width: "30%",
          border: `1px solid ${theme.palette.primary[100]}`,
          borderRadius: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: `${theme.palette.background[50]}`,
          border: `1px solid ${theme.palette.primary[500]}`,
          width: "60%",
          minHeight: "500px",
          border: `1px solid ${theme.palette.primary[100]}`,
          borderRadius: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          fontSize="50px"
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailSkeleton;
