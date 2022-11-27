import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import {colors} from "./colors"

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div
        
        className="flex flex-row items-center "
      >
        <SocialIcon
       className=' opacity-75 hover:opacity-100 hover:animate-bounce hover:shadow-green-300  rounded-full'
          url="https://www.github.com/AdarshMasekar"
          fgColor={colors.secondary}
          bgColor="transparent"
        />
        <SocialIcon
       className=' opacity-75 hover:opacity-100 hover:animate-bounce  hover:shadow-green-300  rounded-full'
          url="https://www.linkedin.com/in/adarsh-masekar-826a2423a/"
          fgColor={colors.secondary}
          bgColor="transparent"
        />
        <SocialIcon
          className=' opacity-75 hover:opacity-100 hover:animate-bounce  hover:shadow-green-300  rounded-full'
          url='https://leetcode.com/adarshmasekar/'
           fgColor= {colors.secondary}
           bgColor='transparent'
           />
       
        <SocialIcon
        className=' opacity-75 hover:opacity-100 hover:animate-bounce hover:shadow-green-300  rounded-full'
           url='https://www.facebook.com/adarsh.masekar.55'
           fgColor= {colors.secondary}
           bgColor='transparent'
           />
      </div>
      <Link href="#contact">
        <div
    
          className="flex flex-row items-center text-gray-300"
        >
          <SocialIcon          
            className="cursor-pointer hover:animate-bounce"
            network="email"
            fgColor={colors.secondary}
            bgColor="transparent"
          />
          <p
            className="uppercase hidden md:inline-flex text-[16px]
            text-secondary cursor-pointer animate-pulse hover:animate-none"
          >
            Get in touch
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
