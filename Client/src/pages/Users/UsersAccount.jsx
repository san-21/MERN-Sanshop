import {
  Box,
  Button,
  Card,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ListHeader from "pages/ListHeader";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  ChevronLeftOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useGetUsersQuery, useSignUpUserMutation } from "rtkQuery/userApiSlice";
import { Link, useNavigate } from "react-router-dom";

const UsersAccount = () => {
  const { data, isLoading } = useGetUsersQuery();

  const noAccountUsers = data?.filter((user) => user.haveAccount !== true);
  console.log(noAccountUsers);

  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  const selectedUser = noAccountUsers?.find(
    (user) => user.username === username
  );

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  ////Password 1
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setUserId(selectedUser?._id);
  };
  const [showPassword, setshowPassword] = useState(true);
  const theme = useTheme();
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  // Password 2
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [password2, setPassword2] = useState("");
  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };
  const [showPassword2, setshowPassword2] = useState(true);

  const handleClickShowPassword2 = () => {
    setshowPassword2(!showPassword2);
  };
  const handleMatch = () => {
    if (password !== password2) {
      setIsPasswordMatch(false);
    }
    if (password === password2) {
      setIsPasswordMatch(true);
    }
  };
  const [
    createAccount,
    {
      isLoading: isCreatingAccount,
      isSuccess: isSignUpSuccess,
      isError: isErrorSignUp,
      error: signUpErrorMessage,
    },
  ] = useSignUpUserMutation();

  const navigate = useNavigate();
  useEffect(() => {
    if (isSignUpSuccess) {
      setUsername("");
      setPassword(""), setPassword2(""), navigate("/dashboard/user/users");
    }
  }, [isSignUpSuccess, navigate]);
  const canSignUp = [
    username,
    password,
    password2,
    password === password2,
  ].every(Boolean);
  //SIgn Uppppppp

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (canSignUp) {
      try {
        await createAccount({
          _id: userId,
          username,
          password,
        });
      } catch (error) {
        console.error("unable to Signup : ", error);
      }
    }
  };
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3, md: 4 },
        mb: { xs: 33, sm: 22, md: 22 },
      }}
      borderRadius="10px"
      backgroundColor={`${theme.palette.background[100]}`}
    >
      <Box>
        <Button
          LinkComponent={Link}
          to="/dashboard/user/users"
          sx={{
            // flexGrow: 1,
            textTransform: "capitalize",
            color: `${theme.palette.text[600]}`,
            fontWeight: 900,
            // fontSize: "14px",
          }}
          startIcon={<ChevronLeftOutlined />}
        >
          Back
        </Button>
      </Box>
      {/* top main box */}
      <ListHeader
        title={"User"}
        route={"managment"}
        role={"Account"}
        owner={"User"}
      />
      <form onSubmit={handleSignUp}>
        <Card
          elevation={1}
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            p: 4,
          }}
        >
          <FormControl fullWidth required={true}>
            <InputLabel id="username"> Username</InputLabel>
            <Select
              labelId="username"
              id="demo-simple-select"
              label="username"
              value={username}
              onChange={handleUsername}
              input={<OutlinedInput label="Username" />}
            >
              {noAccountUsers?.map((user) => (
                <MenuItem key={user._id} value={user.username}>
                  {user.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{
              mt: 2,
            }}
            value={password}
            onChange={handlePasswordChange}
            label="Enter Password"
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              mt: 2,
            }}
            value={password2}
            onChange={handlePasswordChange2}
            label="Re-enter password"
            fullWidth
            required
            type={showPassword2 ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword2} edge="end">
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {password !== password2 && (
            <Typography
              sx={{
                color: `${theme.palette.red[500]}`,
              }}
            >
              Password did not match ..
            </Typography>
          )}
          <Button
            onClick={handleSignUp}
            disabled={!canSignUp}
            sx={{
              height: "40px",
              color: `${theme.palette.white[500]}`,
              backgroundColor: `${theme.palette.primary[500]}`,
              mt: 2,
              fontSize: "15px",
            }}
            fullWidth
            variant="contained"
          >
            Sign up
          </Button>
          {isErrorSignUp && (
            <Typography
              sx={{
                color: `${theme.palette.red[500]}`,
              }}
            >
              Failed to create{" "}
            </Typography>
          )}
          {isSignUpSuccess && (
            <Typography
              sx={{
                color: `${theme.palette.green[500]}`,
              }}
            >
              Account Created
            </Typography>
          )}
        </Card>
      </form>
    </Box>
  );
};

export default UsersAccount;
