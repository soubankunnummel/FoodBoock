import React from "react";
import ComenBtn from "../ComenBtn";

export default function Content3() {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center p-40">
      <div className=" w-[627px] h-[486px] md:h-full md:gap-y-3  bg-white flex justify-evenly items-center flex-col p-14 text-center ">
        <h4 className="text-[48px] font-Forum  ">
          A Fresh and <br />
          Seasonal Cuisine
        </h4>
        <p className="font-Raleway text-[16px] ">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <ComenBtn value="About FoodBook" />
      </div>
    </div>
  );
} 
