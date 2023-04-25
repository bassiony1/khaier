import { ReactElement } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Sub from "../components/Sub";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Sub />
      <Footer />
    </>
  );
};

export default Layout;
