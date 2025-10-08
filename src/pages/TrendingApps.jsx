import React, { Suspense } from "react";
import SingleApp from "./SingleApp";

const TrendingApps = ({ data }) => {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-center font-bold text-[#001931]">
        Trending apps
      </h1>
      <p className="text-center text-gray-400 mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <Suspense fallback={<span>Loading...............</span>}>
        <div className="md:max-w-10/12 w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
          {data.map((app) => (
            <SingleApp key={app.id} app={app}></SingleApp>
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center items-center mt-10">
        <button className=" btn mr-5 md:py-6 md:px-8 text-white p-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg">
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
