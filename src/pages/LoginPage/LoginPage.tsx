import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAuthAction } from "../../Store/AuthStore";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emptyUsernameError, setEmptyUsernameError] = useState("");
  const [emptyPasswordError, setEmptyPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuthAction();

  const handleClick = async () => {
    setEmptyUsernameError("");
    setEmptyPasswordError("");

    let hasError = false;
    if (usernameValue === "") {
      setEmptyUsernameError("Email is required");
      hasError = true;
    }
    if (passwordValue === "") {
      setEmptyPasswordError("Password is required");
      hasError = true;
    }
    if (!hasError) {
      try {
        const success = await login({
          username: usernameValue,
          password: passwordValue,
        });
        if (success) {
          navigate("https://baemir.pythonanywhere.com/api/courses/");
        } else {
          setLoginError("Invalid email or password. Please try again.");
        }
      } catch (e) {
        const errorMessage = e.toString();
        setLoginError(`${errorMessage}`);
        console.error("Login API call failed:", e);
      }
    }
  };
  return (
    <Box sx={{ paddingTop: "150px" }}>
      <Container>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontWeight: 700,
            paddingBottom: "50px",
          }}
        >
          LOGIN
        </Typography>

        <form>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            sx={{ width: "500px", margin: "0 auto" }}
          >
            <TextField
              label="*User name"
              type="text"
              variant="outlined"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              error={Boolean(emptyUsernameError)}
              helperText={emptyUsernameError}
            />
            <TextField
              label="*Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              error={Boolean(emptyPasswordError)}
              helperText={emptyPasswordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {loginError && (
              <Typography
                variant="body2"
                color="error"
                sx={{ textAlign: "center", mt: -1, mb: 1 }}
              >
                {loginError}
              </Typography>
            )}
            <Button variant="contained" onClick={() => handleClick()}>
              Login
            </Button>
            <Typography
              style={{ textAlign: "center", textDecoration: "underline" }}
            >
              <Link to="#">Forgot password or username</Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
export default LoginPage;
