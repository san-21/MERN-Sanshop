import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import IconButton from "@mui/material/IconButton";

import { useGetUserQuery } from "rtkQuery/userApiSlice";
import { handleDetailDialogClose } from "redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Dialog,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import DetailSkeleton from "./skeleton/DetailSkeleton";
const UserDetail = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.userId);
  const open = useSelector((state) => state.user.isDetailDialogOpen);
  const theme = useTheme();
  const handleClose = () => {
    dispatch(handleDetailDialogClose());
  };

  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetUserQuery(id);
  const [user, setUser] = useState(data);
  // const { user: data } = useGetUsersQuery(undefined, {
  //   selectFromResult: ({ data }) => ({
  //     user: data?.find((user) => user._id === id),
  //   }),
  // });
  console.log(data);
  console.log(user);
  return (
    <Box>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px",
            minHeight: "auto",
            minWidth: "900px",
            p: "30px",
            backgroundColor: `${theme.palette.background[200]}`,
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isLoading && <DetailSkeleton />}
        {isSuccess &&
          data.map((user) => (
            <Box
              key={user.email}
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {/* leftbox */}

              <Box
                sx={{
                  backgroundColor: `${theme.palette.background[50]}`,
                  minHeight: "500px",
                  width: "30%",
                  border: `1px solid ${theme.palette.primary[100]}`,
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1629257312739-9327a2e8da85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    sx={{
                      width: 90,
                      height: 90,
                      mt: 3,
                      border: `1px solid ${theme.palette.primary[100]}`,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      m2: 2,
                      fontWeight: "bold",
                    }}
                  >
                    {user.username}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                      fontWeight: "light",
                    }}
                  >
                    {user.role}
                  </Typography>
                </Box>
                <Divider variant="middle" />

                <Box
                  sx={{
                    p: 2,
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Box display="flex" mb={2}>
                      <LocalPhoneOutlinedIcon
                        sx={{
                          color: `${theme.palette.secondary[400]}`,
                          mr: 2,
                        }}
                      />
                      <Typography>{user.phone}</Typography>
                    </Box>
                    <Box display="flex" mb={2}>
                      <EmailOutlinedIcon
                        sx={{
                          color: `${theme.palette.secondary[400]}`,
                          mr: 2,
                        }}
                      />
                      <Typography>{user.email}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider variant="middle" />
              </Box>
              {/* right box */}
              <Box
                sx={{
                  backgroundColor: `${theme.palette.background[50]}`,
                  border: `1px solid ${theme.palette.primary[500]}`,
                  width: "60%",
                  border: `1px solid ${theme.palette.primary[100]}`,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    p: 2,
                  }}
                >
                  Personal Detail
                </Typography>
                <Divider />
                <Box
                  sx={{
                    mb: 6,
                    mt: 4,
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box mt={2}>
                    <Typography
                      sx={{
                        fontWeight: "200",
                      }}
                    >
                      Full Name
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {user.fullName}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography
                      sx={{
                        fontWeight: 100,
                      }}
                    >
                      Status
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {user.status}
                    </Typography>
                  </Box>
                </Box>
                <Divider variant="middle" />
                <Box
                  sx={{
                    mt: 4,
                    mb: 5,
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box mt={2}>
                    <Typography
                      sx={{
                        fontWeight: 100,
                      }}
                    >
                      Age
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {user.age}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography
                      sx={{
                        fontWeight: 100,
                      }}
                    >
                      Role
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {user.role}
                    </Typography>
                  </Box>
                </Box>
                <Divider variant="middle" />
              </Box>
            </Box>
          ))}
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              mr: 2,
              mt: 1,
              width: "170px",
              borderRadius: "7px",
              border: "1px solid gray",
              textTransform: "capitalize",

              backgroundColor: `${theme.palette.primary[500]}`,
              color: `${theme.palette.white[500]}`,
              "&:hover": {
                border: `1px solid ${theme.palette.green[700]}`,
                backgroundColor: `${theme.palette.primary[700]}`,
                color: `${theme.palette.white[500]}`,
              },
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserDetail;
