import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  var iconsprimary = 'rgb(164 242 235)';
  var textcolor = '#6D9886';
  var primarycolor= "#3393E46"
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.0,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
       className=' opacity-75 hover:opacity-100 hover:animate-bounce hover:shadow-green-300  rounded-full'
          url="https://www.github.com/AdarshMasekar"
          fgColor={iconsprimary}
          bgColor="transparent"
        />
        <SocialIcon
       className=' opacity-75 hover:opacity-100 hover:animate-bounce  hover:shadow-green-300  rounded-full'
          url="https://www.linkedin.com/in/adarsh-masekar-826a2423a/"
          fgColor={iconsprimary}
          bgColor="transparent"
        />
        <SocialIcon
          className=' opacity-75 hover:opacity-100 hover:animate-bounce  hover:shadow-green-300  rounded-full'
          url='https://leetcode.com/adarshmasekar/'
           fgColor= {iconsprimary}
           bgColor='transparent'
           />
       
        <SocialIcon
        className=' opacity-75 hover:opacity-100 hover:animate-bounce hover:shadow-green-300  rounded-full'
           url='https://www.facebook.com/adarsh.masekar.55'
           fgColor= {iconsprimary}
           bgColor='transparent'
           />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2.0,
          }}
          className="flex flex-row items-center text-gray-300"
        >
          <SocialIcon          
            className="cursor-pointer hover:animate-bounce"
            network="email"
            fgColor={iconsprimary}
            bgColor="transparent"
          />
          <p
            className="uppercase hidden md:inline-flex text-[16px]
            text-[#66E1B4] cursor-pointer animate-pulse hover:animate-none"
          >
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
