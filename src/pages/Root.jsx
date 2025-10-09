import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="w-10/12 mx-auto">
        <Navbar />
      </div>

      {isLoading && (
        <div className="fixed inset-0  backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300">
          <div className="relative w-16 h-16">
            <span className="loading loading-ring loading-lg text-[#9F62F2]"></span>
            <span className="loading loading-ring loading-lg text-[#9F62F2]"></span>
            <span className="loading loading-ring loading-lg text-[#9F62F2]"></span>
            <span className="loading loading-ring loading-lg text-[#9F62F2]"></span>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
