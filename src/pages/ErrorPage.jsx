import React from "react";
import errorImg from "../assets/pageError.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-6 p-10">
        <div>
          <img src={errorImg} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center mb-5">
            Oops, page not found!
          </h2>
          <p className="text-gray-400">
            The page you are looking for is not available.
          </p>
        </div>
        <Link to="/">
          <button className="btn mr-4 md:py-6 md:px-10 text-white p-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg">
            Go Back
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
