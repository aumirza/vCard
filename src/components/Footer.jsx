import React from "react";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <div className="flex flex-grow flex-col justify-between items-center">
      <div className=""></div>
      <div className=""></div>
      <div className="flex w-full flex-col items-center">
        <span className="text-white"> ©️ 2023 Ahmadullah Mirza</span>
        <Social />
      </div>
      <div className="h-3 w-4/5 rounded-t-3xl bg-primary"></div>
    </div>
  );
};
