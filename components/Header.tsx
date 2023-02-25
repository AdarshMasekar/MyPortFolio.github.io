import React from "react";
import {navlink} from "../utils/navlinks.js";
import Link from "next/link.js";
type Props = {};

function Header({}: Props) {
  
  return (
    <header className="navbar sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <a href="#hero">
        <h2 className="header-logo text-2xl cursor-pointer uppercase font-bold text-primary tracking-[4px] border-b-underline ">
        Adarsh
        </h2>
      </a>

      <div className="navbar--links">
        <div className="flex flex-row items-center text-gray-300">
            <div className=" nav-links pl-10">
              {
                navlink.map(item=>(
                  <Link href={item.href} key={item.id}>
                  <button  className="heroButton active:text-primary" key={item.id}>{item.link}</button>
                </Link>
                ))
              }

            </div>
        </div>
     

      </div>
      <div className="mobile-Menu  text-primary font-bold text-2xl">
        <span><i className="ri-menu-line" ></i></span>
      </div>
    </header>
  );
}

export default Header;
