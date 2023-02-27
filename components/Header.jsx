import React from "react";
import {useRef} from "react"
import {navlink} from "../utils/navlinks.js";
import Link from "next/link.js";


function Header() {

  const menuRef = useRef();
  
  const menuToggle = () => menuRef.current.classList.toggle("active--menu")

    

  return (
    <header className="navbar sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <a href="#hero">
        <h2 className="header-logo text-2xl cursor-pointer uppercase font-bold text-primary tracking-[4px] border-b-underline ">
        Adarsh
        </h2>
      </a>

      <div className="nav--menu"  ref={menuRef}>
        <div className="nav--list--wrapper flex flex-row items-center text-gray-300">
            <div className="nav--list pl-10">
              {
                navlink.map(item=>(
                  <Link href={item.href} key={item.id}>
                  <button  className="nav--item heroButton active:text-primary" key={item.id} onClick={menuToggle}>{item.link}</button>
                </Link>
                ))
              }

            </div>
        </div>
     

      </div>

     
      <div className="mobile-Menu  text-primary font-bold text-2xl">
        <span><i className="ri-menu-line" onClick={menuToggle} ></i></span>
      </div>
    </header>
  );
}

export default Header;
