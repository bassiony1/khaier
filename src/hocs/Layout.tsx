import { ReactNode } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Sub from "../components/Sub";
import DonationCard from "../components/DonationCard";
import CharitySection from "../components/CharitySection";
import CategoryHeader from "../components/CategoryHeader";
import NormalHeader from "../components/NormalHeader";
import CharityCard from "../components/CharityCard";
import GridList from "../components/GridList";
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {/* <div className="container">

      <Slider>
        <GridList>
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </GridList>
        <GridList>
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </GridList>
      </Slider>
      </div>
      <NormalHeader max_height={270} title="نتائج البحث" />
      <CategoryHeader imgPath="/images/food-header.png" title="طعام" />
      */}
      {/* <div className="container">
        <GridList>
          <CategoryCard imgUrl="images/food-cat.png" title="طعام" />
          <CategoryCard imgUrl="images/food-cat.png" title="طعام" />
          <CategoryCard imgUrl="images/food-cat.png" title="طعام" />
          <CategoryCard imgUrl="images/food-cat.png" title="طعام" />
          <CategoryCard imgUrl="images/food-cat.png" title="طعام" />
        </GridList>
      </div> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
