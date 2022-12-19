import React from "react";

export const Header = () => {
  return (
    <div className="">
      <div className="realtive flex h-[15rem] items-center justify-between">
        <div className="w-4 h-2/3 bg-primary rounded-r-xl"></div>
        <div className="h-48 w-48 shadow-lg rounded-full border-8 border-primary ">
          <img src="/profile-pic.png" alt="" />
        </div>
        <div className="w-4"></div>
      </div>
      <div className="h-3 w-full bg-primary"></div>
    </div>
  );
};
