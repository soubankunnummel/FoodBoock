// Banner.jsx
import React from "react";
import image from "../../assets/baner-img.avif";

export default function Banner() {
  return (
    <div className="w-full  h-screen sticky top-0 z-[-1] flex flex-col">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />
    </div>
  );
}
