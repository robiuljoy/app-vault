import { Download, Star } from "lucide-react";
import React from "react";

const SingleApp = ({ app }) => {
  return (
    <>
      <div className="card  rounded-2xl flex flex-col bg-white p-4  justify-between">
        <div>
          <img className="rounded-2xl" src={app.image} alt="" />
        </div>
        <h4 className="mt-5 font-bold">
          {app.title}: {app.description}
        </h4>
        <div className="flex justify-between items-center mt-5">
          <span className="flex justify-between items-center">
            <Download />
            {app.downloads}
          </span>
          <span className="flex justify-between items-center">
            <Star />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleApp;
