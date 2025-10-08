import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <div>
      <div className="shadow-sm">
        <div className="md:max-w-10/12 w-full mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
