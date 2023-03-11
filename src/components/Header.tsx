import React from "react";

export const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex items-center gap-2 px-4 py-3 shadow-md r">
      <div className="w-6">
        <img src="assets/logo128.png" alt="" />
      </div>
      <p className="text-xl">B.S Date Converter</p>
    </div>
  );
};
