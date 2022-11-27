import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";
import {motion} from "framer-motion"



type Props = {};


const Hero = ({}: Props) => {


  const [text, count] = useTypewriter({
    words: [
      "{{ React, Next, TypeScript }}",
      'console.log("Hello World")',
      "<WebDeveloper />",
      "<FrontendEngineer />",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <motion.div
    initial={{
      opacity: 0,
      // x:-500
    }}
    whileInView={{
      opacity: 1,
      // x:0
    }}
    transition={{
      duration: 1,ease:"circInOut"
    }} 
     className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-mandatory">
      <BackgroundCircles />
      <picture>
        <img
          className="relative rounded-full h-52 w-52 mx-auto object-cover opacity-70"
          src="https://avatars.githubusercontent.com/u/108608608?v=4"
          alt="AdarshMasekar_profile_pic"
        />
      </picture>
      <div className="z-20">
        <h2 className="text-2xl uppercase font-bold text-primary ml-2 mb-2 pb-4 tracking-[8px]">
          Adarsh Masekar
        </h2>

        <h1 className="text-xl font-semibold px-10">
          <span className="mr-2 text-secondary/80 ">{text}</span>
          <Cursor cursorColor="#8faeb2" />
        </h1>

        <div className="pt-12 xs:px-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#Techskills">
            <button className="heroButton">tech stacks</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton ">Experience</button>
          </Link>
         
          <Link href="#projects">
            <button className="heroButton ">Projects</button>
          </Link>
          <a href="https://drive.google.com/file/d/1oogUAmXvz_1t88VXw-9DsiucvwKy_RXF/view?usp=share_link" className="heroButton">Resume</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
