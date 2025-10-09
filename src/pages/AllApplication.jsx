import React, { useState, useEffect, Suspense } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Application from "./Application";
import Spinner from "../component/Spinner";

const AllApplication = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filtered = data.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  useEffect(() => {
    if (searchQuery.trim() === "") return;
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);

      if (filteredData.length === 0) {
        navigate("/appError", { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [filteredData, searchQuery, navigate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:p-20 p-8">
        <h1 className="text-4xl text-center font-bold text-[#001931]">
          Our All Application
        </h1>
        <p className="text-center text-gray-400 mt-5">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>

        <div className="flex justify-between md:max-w-10/12 w-full mx-auto mt-20">
          <span className="font-bold">{filteredData.length} Apps Found</span>

          <label className="input flex items-center gap-2">
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
            <input
              type="search"
              required
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none bg-transparent w-full"
            />
          </label>
        </div>

        {loading ? (
          <div className="flex justify-center items-center mt-16">
            <Spinner />
          </div>
        ) : (
          <Suspense fallback={<span>Loading...............</span>}>
            <div className="md:max-w-10/12 max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
              {filteredData.map((app) => (
                <Application key={app.id} app={app}></Application>
              ))}
            </div>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default AllApplication;
