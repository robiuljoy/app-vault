import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Application from "./Application";

const AllApplication = () => {
  const data = useLoaderData();
  const dataLength = data.length;
  return (
    <div className="bg-gray-100">
      <div className="md:p-20 p-8">
        <h1 className="text-4xl text-center font-bold text-[#001931]">
          Our All Application
        </h1>
        <p className="text-center text-gray-400 mt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between md:max-w-10/12 w-full mx-auto mt-20">
          <span className="font-bold">{dataLength} Apps Found</span>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <Suspense fallback={<span>Loading...............</span>}>
          <div className="md:max-w-10/12 max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {data.map((app) => (
              <Application key={app.id} app={app}></Application>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default AllApplication;
