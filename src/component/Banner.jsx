import React from "react";
import heroImg from "../assets/hero.png";
import googleStoreImg from "../assets/googlePlay.png";
import appStoreImg from "../assets/appStore.png";

const Banner = () => {
  return (
    <>
      <div>
        <div className="pt-20">
          <div>
            <h1 className="text-5xl font-bold text-center text-[#001931] leading-snug mb-5">
              We Build <br />{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="text-gray-500 text-center">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
          </div>
          <div className="button-div mt-5 mb-8 flex justify-center items-center gap-3">
            <button className="btn">
              {" "}
              <img className="h-6 w-6" src={googleStoreImg} alt="" /> Google
              Play
            </button>
            <button className="btn">
              {" "}
              <img className="h-6 w-6" src={appStoreImg} alt="" /> App Store
            </button>
          </div>
          <div className="flex justify-center items-center mt-10">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-12 text-white">
          <h2 className="text-4xl font-bold text-center">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-around  items-center mt-10">
            <div className="flex flex-col justify-center items-center">
              <span className="font-light">Total Downloads</span>
              <span className="font-extrabold text-4xl m-4">29.6M</span>
              <span className="font-light">21% more than last month</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-light">Total Reviews</span>
              <span className="font-extrabold text-4xl m-4">906K</span>
              <span className="font-light">46% more than last month</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-light">Active Apps</span>
              <span className="font-extrabold text-4xl m-4">132+</span>
              <span className="font-light">31 more will Launch</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
