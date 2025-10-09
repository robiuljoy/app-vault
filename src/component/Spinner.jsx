import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <span className="loading loading-ring w-22 h-22 text-[#FF8811]"></span>
      <span className="loading loading-ring w-20 h-20 text-[#9F62F2] ml-[-1.5rem] opacity-80 animate-spin-slow"></span>
    </div>
  );
};

export default Spinner;
