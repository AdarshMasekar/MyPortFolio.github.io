import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";

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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <picture>
        <img
          className="relative rounded-full h-52 w-52 mx-auto object-cover"
          src="https://assets.leetcode.com/users/avatars/avatar_1668616677.png" alt="AdarshMasekar_profile_pic"
        />
      </picture>
      <div className="z-20">
        <h2 className="text-2xl uppercase font-bold text-[#66E1B4] ml-2 mb-2 pb-4 tracking-[12px]">
          Adarsh Masekar
        </h2>

        <h1 className="text-xl font-semibold px-10">
          <span className="mr-2 text-[#009589]/80 ">{text}</span>
          <Cursor cursorColor="#66E1B4" />
        </h1>

        <div className="pt-12">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="experience">
            <button className="heroButton ">Experience</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">tech stacks</button>
          </Link>
          <Link href="projects">
            <button className="heroButton ">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
