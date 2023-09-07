import { Box, Skeleton } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const EditProductSkeleton = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        width="25%"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Skeleton
          variant="text"
          width={100}
          sx={{
            fontSize: "1.4rem",
            pb: 2,
            bgColor: `${theme.palette.primary[100]}`,
          }}
        />
        <Skeleton variant="text" width={190} sx={{ fontSize: "1rem" }} />
      </Box>

      <Box
        backgroundColor={`${theme.palette.background[50]}`}
        sx={{
          height: "auto",
          width: { xs: "100%", sm: "100", md: "56%" },
          mr: { xs: 1, sm: 3, md: 10 },
          ml: { xs: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: "24px",
          borderRadius: "20px",
          border: `1px solid ${theme.palette.text[100]}`,
          "& .MuiInputBase-root": {
            borderRadius: "10px",
          },
        }}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height={50}
          sx={{
            borderRadius: "15px",
            mb: 2,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height={50}
          sx={{
            borderRadius: "15px",
            mb: 2,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height={150}
          sx={{
            borderRadius: "15px",
            mb: 2,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height={300}
          sx={{
            borderRadius: "15px",
            mb: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default EditProductSkeleton;
