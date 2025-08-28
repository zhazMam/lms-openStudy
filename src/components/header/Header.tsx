import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useAuthAction, useIsAuth, useToken } from "../../Store/AuthStore";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const token = useToken();
  const { logout } = useAuthAction();
  console.log("token", token);
  const decodedJwtData = token ? jwtDecode(token) : null;
  console.log("decodedJwtData", decodedJwtData);
  return (
    <Box style={{ marginBottom: "100px" }}>
      <AppBar>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Toolbar>
              <li>
                <Link to="/main">
                  <HomeIcon />
                </Link>
              </li>
            </Toolbar>
            {isAuth ? (
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                {/* <Typography>{da}</Typography> */}
                <Button style={{ color: "white" }} onClick={() => logout()}>
                  Log Out /
                </Button>
              </Box>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Button
                  onClick={() => navigate("https://baemir.pythonanywhere.com/api/user/token")}
                  style={{ color: "white" }}
                >
                  Login /
                </Button>
                <Button
                  onClick={() => navigate("https://baemir.pythonanywhere.com/api/user/register")}
                  style={{ color: "white" }}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Header;
