import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useTheme } from "@mui/material/styles";
import { useGetUsersQuery } from "rtkQuery/userApiSlice";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
const ActiveUsers = () => {
  const { data, isLoading, isSuccess } = useGetUsersQuery();
  const activeUsers = data?.filter((user) => user.status === "Active").length;
  const pendingUsers = data?.filter((user) => user.status === "Pending").length;
  const inactiveUsers = data?.filter(
    (user) => user.status === "Inactive"
  ).length;

  const theme = useTheme();
  return (
    <Box
      sx={{
        pr: 2,
        pl: 2,
        pt: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        display="flex"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          sx={{
            mr: 2,
            width: "43px",
            height: "43px",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.yellow[100]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.yellow[100]}`,
            },
          }}
        >
          <VerifiedUserOutlinedIcon
            fontSize="medium"
            sx={{
              color: `${theme.palette.yellow[600]}`,
            }}
          />
        </IconButton>
        <Typography
          sx={{
            display: { sm: "none", md: "flex" },
            fontWeight: "bold",
            color: `${theme.palette.text[300]}`,
          }}
        >
          User Status
        </Typography>
      </Box>

      <Box>
        <IconButton
          sx={{
            mr: 2,
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.yellow[100]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.yellow[100]}`,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: `${theme.palette.text[600]}`,
            }}
          >
            {activeUsers}
          </Typography>
        </IconButton>

        <Typography
          sx={{
            color: `${theme.palette.text[300]}`,
            fontSize: "14px",
          }}
        >
          Active
        </Typography>
      </Box>
      <Box>
        <IconButton
          sx={{
            mr: 2,
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.yellow[100]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.yellow[100]}`,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: `${theme.palette.text[300]}`,
            }}
          >
            {pendingUsers}
          </Typography>
        </IconButton>

        <Typography
          sx={{
            color: `${theme.palette.text[300]}`,
            fontSize: "14px",
          }}
        >
          Pendiing
        </Typography>
      </Box>
      <Box>
        <IconButton
          sx={{
            mr: 2,
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.yellow[100]}`,
            "&:hover": {
              backgroundColor: `${theme.palette.yellow[100]}`,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: `${theme.palette.text[300]}`,
            }}
          >
            {inactiveUsers}
          </Typography>
        </IconButton>

        <Typography
          sx={{
            color: `${theme.palette.text[300]}`,
            fontSize: "14px",
          }}
        >
          Inactive
        </Typography>
      </Box>
    </Box>
  );
};

export default ActiveUsers;
