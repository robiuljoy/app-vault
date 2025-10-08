import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  return (
    <>
      <Link to={`/appDetails/${app.id}`}>
        <div className="card shadow-sm rounded-2xl flex flex-col bg-white p-6  justify-between">
          <div>
            <img className="rounded-2xl" src={app.image} alt="" />
          </div>
          <h4 className="mt-5 font-bold">
            {app.title}: {app.description}
          </h4>
          <div className="flex justify-between items-center mt-5">
            <span className="flex justify-between items-center bg-[#F1F5E8] text-[#00D390] px-3 py-2 rounded-2xl">
              <Download />
              {app.downloads}
            </span>
            <span className="flex justify-between items-center bg-[#FFF0E1] text-[#FF8811] px-3 py-2 rounded-2xl">
              <Star />
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleApp;
