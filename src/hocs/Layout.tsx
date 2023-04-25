import { ReactElement } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Sub from "../components/Sub";
import DonationCard from "../components/DonationCard";
import CharitySection from "../components/CharitySection";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <CharitySection />
      <div className="flex-center bg-white" style={{ padding: "4rem" }}>
        <DonationCard />
      </div>
      <Sub />
      <Footer />
    </>
  );
};

export default Layout;
