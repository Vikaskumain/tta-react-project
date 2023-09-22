import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col h-full max-w-[1320px] mx-auto">
      <header className="flex justify-between items-center h-16 py-10">
        <h1 className="font-poppins font-semibold text-[24px]">Lorem ipsum</h1>
        <nav className="">
        <ul className="flex justify-between gap-3 ">
        <li className="list-style-type: none; cursor-pointer">Home</li>
          <li className="list-style-type: none; cursor-pointer">About</li>
          <li className="list-style-type: none; cursor-pointer">Contact</li>
        </ul>
        </nav>
        <button className=" items-center gap-5 px-4 flex rounded-lg  py-2 bg-green-400">
          <NavLink to={"https://www.google.com/"} className="text-[16px] font-bold">Menu</NavLink>
        </button>
      </header>
    </div>
  );
}

export default Header;
