import React from "react";
import Layout from "../hocs/Layout";
import GridList from "../components/GridList";
import DonationCard from "../components/DonationCard";
import Sub from "../components/Sub";
import NormalHeader from "../components/NormalHeader";

type Props = {};

const SearchResultPage = (props: Props) => {
  return (
    <Layout>
      <NormalHeader title="نتائج البحث" max_height={270} />
      <div className="container">
        <GridList>
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </GridList>
      </div>
      <Sub />
    </Layout>
  );
};

export default SearchResultPage;
