import React from "react";
import image from "../../assets/baner-img.avif";

export default function MenuBackground() {
  return (
    <div className="w-full  h-screen sticky top-0 z-[-1] flex flex-col">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className=" hidden md:flex absolute inset-0  items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
      </div>
    </div>
  );
}
