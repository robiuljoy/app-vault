import React from "react";
import { Link } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import appErrorImg from "../assets/appError.png";

const AppError = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-6 p-10">
        <div>
          <img src={appErrorImg} alt="App not found" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center mb-5">
            OOPS!! APP NOT FOUND
          </h2>
          <p className="text-gray-400">
            The app you are requesting is not found in our system. Please try
            another search.
          </p>
        </div>
        <Link to="/apps">
          <button className="btn mr-4 md:py-6 md:px-10 text-white p-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg">
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default AppError;
