import React from "react";

export default function Content4() {
  return (
    <div className="w-full h-screen bg-white mt-24  ">
      <div className="w-full h-[379px] flex flex-col items-center p-16 justify-between">
        <h4 className="text-[48px] font-Forum">Reserve a Table</h4>
        <p className="font-Raleway text-[16px] ">
          To help us find the best table for you, select the preferred party
          size, date, and time of your reservation.
        </p>
        <div className="border mt-10 flex justify-evenly w-full">
          <div className="flex flex-col justify-start">
            <label htmlFor="">Date</label>
            <select
              type="text"
              name=""
              id=""
              className="w-[343.66px] h-[40px]  border-[1px] border-black outline-none "
            >
              <option value="">sdfsd</option>
              <option value="">sdfsd</option>
              <option value="">sdf sd</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
