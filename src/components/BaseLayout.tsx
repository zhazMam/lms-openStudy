import { Outlet, useLocation } from "react-router-dom";

import { Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SidebarCourses from "./SidebarCourses";

const BaseLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "https://baemir.pythonanywhere.com/api/courses/";
  const isLoginPage = location.pathname === "https://baemir.pythonanywhere.com/api/user/token";
  const isSignUpPage = location.pathname === "https://baemir.pythonanywhere.com/api/user/register";

  return (
    <Container maxWidth={"lg"}>
      <Header />
      <Outlet />
      <Footer />

      {!isHomePage||!isLoginPage||isSignUpPage && <SidebarCourses />}
    </Container>
  );
};

export default BaseLayout;
