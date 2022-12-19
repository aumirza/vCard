import React from "react";
import { Contacts } from "./Contacts";
import QrCode from "../images/qr-code.png";

export const Main = () => {
  return (
    <div className="bg-white h-full  flex flex-col items-center">
      <div className="h-3 w-3/5 mx-auto rounded-b-xl bg-primary"></div>
      <div className="pt-3 flex flex-col items-center">
        <h1 className="text-4xl font-bold ">Ahmadullah Mirza</h1>
        <p className="text-primary text-2xl">Web Developer</p>
      </div>
      <div className="flex">
        <Contacts />
        <div className="flex justify-center items-center p-5">
          <img className="h-28 w-28" src={QrCode} alt="" />
        </div>
      </div>
      <div className="h-3 w-2/5 rounded-t-3xl bg-primary"></div>
    </div>
  );
};
