import React from "react";

export default function ComenBtn({ value = "text" }) {
  return (
    <button className="w-[225px] h-[64px] bg-primary  text-white hover:bg-[#55472f] font-Forum">
      {value}
    </button>
  );
}
