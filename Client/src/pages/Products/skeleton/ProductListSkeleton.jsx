import { Box, Skeleton } from "@mui/material";
import React from "react";

const ProductListSkeleton = () => {
  return (
    <Box mt={5}>
      <Box
        sx={{
          display: "flex",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="rectangular" width={90} height={40} />
        <Skeleton variant="rectangular" width={90} height={40} />
        <Skeleton variant="rectangular" width={90} height={40} />
        <Skeleton variant="rectangular" width={90} height={40} />

        {/* <Skeleton variant="rounded" width={200} height={60} />
        <Skeleton variant="rounded" width={200} height={60} />
        <Skeleton variant="rounded" width={480} height={60} /> */}
      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} /> */}
        <Skeleton variant="text" width={120} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" p={1} ml={3} mr={1}>
        <Skeleton variant="rounded" width={65} height={40} />
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "10px" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" p={1} ml={3} mr={1}>
        <Skeleton variant="rounded" width={65} height={40} />
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" p={1} ml={3} mr={1}>
        <Skeleton variant="rounded" width={65} height={40} />
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "10px" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" p={1} ml={3} mr={1}>
        <Skeleton variant="rounded" width={65} height={40} />
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" p={1} ml={3} mr={1}>
        <Skeleton variant="rounded" width={65} height={40} />
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" width={120} sx={{ fontSize: "10px" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={90} sx={{ fontSize: "1rem" }} />
      </Box>
    </Box>
  );
};

export default ProductListSkeleton;
