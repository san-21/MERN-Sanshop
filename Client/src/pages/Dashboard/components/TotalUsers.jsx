import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React from "react";
import { useGetUsersQuery } from "rtkQuery/userApiSlice";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useTheme } from "@mui/material/styles";
import { Filter } from "@mui/icons-material";
const TotalUsers = () => {
  const { data, isLoading, isSuccess } = useGetUsersQuery();
  const totalUsers = data?.length;

  const theme = useTheme();
  return (
    <Box
      sx={{
        pl: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <IconButton
        sx={{
          mr: 2,
          width: "43px",
          height: "43px",
          borderRadius: "10px",
          backgroundColor: `${theme.palette.blue[700]}`,
          "&:hover": {
            backgroundColor: `${theme.palette.blue[700]}`,
          },
        }}
      >
        <PeopleAltOutlinedIcon
          fontSize="medium"
          sx={{
            color: `${theme.palette.white[500]}`,
          }}
        />
      </IconButton>

      <Box>
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
            sx={{
              fontWeight: "bold",
            }}
            variant="h6"
          >
            {totalUsers}
          </Typography>
        )}
        <Typography
          sx={{
            color: `${theme.palette.blue[200]}`,
            fontSize: "14px",
          }}
        >
          Total Users
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalUsers;
