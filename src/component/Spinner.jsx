import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-t-[#9F62F2] border-[#E2E2E2] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
