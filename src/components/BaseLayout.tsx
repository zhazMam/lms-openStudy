import { Outlet, useLocation } from "react-router-dom";

import { Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SidebarCourses from "./SidebarCourses";

const BaseLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/main";

  return (
    <Container maxWidth={"xl"}>
      <Header />
      <Outlet />
      <Footer />

      {!isHomePage && <SidebarCourses />}
    </Container>
  );
};

export default BaseLayout;
