import React from "react";
import Banner from "../component/Banner";
import TrendingApps from "./TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
