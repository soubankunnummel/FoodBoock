import React from "react";
import imge2 from "../../assets/image-2.jpg";
import { Link } from "react-router-dom";
import ComenBtn from "../ComenBtn";
export default function Content() {
  return (
    <div className="w-full flex justify-evenly items-center p-20 bg-secondary relative z-10">
      <div className="w-1/2 flex justify-between items-center flex-col p-20 gap-y-6">
        <div className="w-[412px] md:w-fit flex justify-center items-center flex-col gap-y-3">
          <h3 className="font-Forum text-[48px] md:text-[30px]">
            Made With Love. <br /> Simply Delicious
          </h3>
          <p className="font-Raleway">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <Link to={"/menu"}>
            <ComenBtn value="View Menu" />
          </Link>
        </div>
      </div>
      <div className="w-1/2 md:hidden">
        <img src={imge2} alt="" />
      </div>
    </div>
  );
}
