import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="w-full md:h-screen  h-[453px] flex flex-col justify-between items-center
     bg-black text-white md:pt-10 md:px-0 pt-[101px] px-[562px] md:mt-0 mt-40 "
    >
      <div className="w-[780px] md:w-fit h-[150px] border-b md:border-none md:flex-col md:gap-y-4 flex justify-between  items-center">
        <div className="w-[326px] h-[110px] md:w-fit ">
          <h4 className="text-[32px] font-Forum ">Address</h4>
          <p className="font-Forum text-[15px] ">
            500 Terry Francine Street <br /> San Francisco, CA 94158
          </p>
        </div>
        <div className="w-[326px] h-[110px]  md:w-fit">
          <h4 className="text-[32px] font-Forum ">Address</h4>
          <p className="font-Forum text-[15px] ">
            500 Terry Francine Street <br /> San Francisco, CA 94158
          </p>
        </div>
        <div className="w-[326px] h-[110px]  md:w-fit">
          <h4 className="text-[32px] font-Forum ">Address</h4>
          <p className="font-Forum text-[15px] ">
            500 Terry Francine Street <br /> San Francisco, CA 94158
          </p>
        </div>
      </div>
      <div className="   md:mb-14">
        <div className="hidden md:flex w-[280px] h-[1px] border-b "></div>
        <div className="text-[14px] w-[780px] mt-1 md:w-[300px] mb-10  flex justify-between">
          <p> © 2024 FoodBoock. Powered and secured by Souban</p>
          <div className="flex gap-x-2">
            <FaTwitter className="hover:text-primary text-xl" />
            <FaInstagram className="hover:text-primary text-xl" />
            <FaLinkedinIn className="hover:text-primary text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
