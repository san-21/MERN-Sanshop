import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "redux/authSlice";
import { useLoginMutation } from "rtkQuery/authApiSlice";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setErrMessage("");
  }, [username, password]);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const [errMessage, setErrMessage] = useState("");

  const canLogin = [username, password].every(Boolean);

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (canLogin) {
      try {
        const { accessToken } = await login({ username, password }).unwrap();
        dispatch(setToken({ accessToken }));
        setUsername("");
        setPassword("");
        navigate("/dashboard/home");
      } catch (err) {
        if (!err.status) {
          setErrMessage("No Server Response");
        } else if (err.status === 400) {
          setErrMessage("Credential Not provided");
        } else if (err.status === 401) {
          setErrMessage(err?.data?.message);
        } else {
          setErrMessage(err?.data?.message);
        }
      }
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.white[400]}`,
        position: "absolute",
        top: { xs: "10%", sm: "20%", md: "20%" },
        left: { xs: "0%", sm: "33%", md: "33%" },

        ml: { xs: 2 },
        textAlign: "center",
        width: { xs: "90%", sm: "460px", md: "460px" },

        borderRadius: "7px",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          borderRadius: "7px",
          backgroundColor: `${theme.palette.background[100]}`,
          p: 4,
          "& .MuiInputBase-root": {
            borderRadius: "8px",
            color: `${theme.palette.text[500]}`,
            fontWeight: "bold",
          },
          "& .MuiFormLabel-root Mui-focused": {
            color: `${theme.palette.primary[500]}`,
            fontSize: "14px",
          },
        }}
      >
        {isLoading && <LinearProgress />}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            m: 4,
          }}
        >
          <span
            style={{
              color: `${theme.palette.primary[500]}`,
              fontWeight: "bold",
            }}
          >
            SAN
          </span>{" "}
          Shop
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: `${theme.palette.primary[500]}`,
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Hi, Welcome
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            width: "100%",
            height: "70px",
            backgroundColor: `${theme.palette.primary[100]}`,
            mb: 2,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              color: `${theme.palette.primary[500]}`,
            }}
          >
            Admin:{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              sanshop@san.com
            </span>
          </Typography>
          <Typography
            sx={{
              color: `${theme.palette.primary[500]}`,
            }}
          >
            Pass :{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              123412
            </span>
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: `${theme.palette.text[300]}`,
            mb: 3,
          }}
        >
          Enter your credentials to continue
        </Typography>
        <form onSubmit={handleSignIn}>
          <TextField
            error={username === ""}
            minRows="1.2"
            id="username"
            label="Username"
            value={username}
            onChange={handleUsername}
            sx={{
              mb: 2,
            }}
            required
            fullWidth
          />

          <TextField
            autoComplete="false"
            error={password === ""}
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            minRows="1.2"
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            sx={{
              mb: 3,
            }}
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

          <Typography
            sx={{
              color: `${theme.palette.red[500]}`,
            }}
          >
            {errMessage}
          </Typography>

          <Button
            type="submit"
            onClick={handleSignIn}
            sx={{
              height: "45px",
              color: `${theme.palette.white[500]}`,
              backgroundColor: `${theme.palette.primary[500]}`,
              mt: 2,
              fontSize: "15px",
            }}
            fullWidth
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
