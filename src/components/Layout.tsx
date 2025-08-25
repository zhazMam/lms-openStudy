import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Container } from "@mui/material";
import type { ReactNode } from "react";
interface LayoutProps{
  children?: ReactNode;
}
const Layout = (props:LayoutProps) => {
  return (
    <Container maxWidth={"xl"}>
      <Header />
{props.children}
      <Footer />
    </Container>
  );
};
export default Layout;
