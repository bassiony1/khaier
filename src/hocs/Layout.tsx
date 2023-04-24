import { ReactElement } from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      

      {children}
    </>
  );
};

export default Layout;
