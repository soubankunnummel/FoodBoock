import { IoReorderThreeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const userName = localStorage.getItem("user name");

  return (
    <nav className="w-full h-[177px] flex justify-between items-center p-10 bg-[#FAF8F1] ">
      <div className="flex-1 font-Forum text-[27px] "><Link to={'/'}><h2>FoodBook</h2></Link></div>
      <div className=" flex-1 md:hidden">
        <ul className="flex justify-between font-Raleway">
          <li>Reservation</li>
          <Link to={"/menu"}>
            {" "}
            <li>Menu</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="px-6 flex justify-between items-center md:hidden gap-x-2">
        <FaUserCircle className="text-3xl text-[#7C6C50]" />
        {userName ? (
          <h3 className="text-primary">{userName}</h3>
        ) : (
          <Link to={"/login"}>
            <h3 className="text-primary">Login</h3>
          </Link>
        )}
      </div>
      <div>
        <IoReorderThreeOutline className="text-4xl hidden md:flex" />
      </div>
    </nav>
  );
}
