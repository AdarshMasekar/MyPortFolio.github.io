import React from "react";
import { SocialIcon } from "react-social-icons";
import {colors} from "./colors"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";
import {motion} from "framer-motion"


const Hero = () => {


  const [text] = useTypewriter({
    words: [
      "{{ React, Next, TypeScript }}",
      'console.log("Hello World")',
      "<WebDeveloper />",
      "<Frontend Engineer />",
    ],
    loop: true,
    delaySpeed: 5000,
  });

  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,ease:"circInOut"
    }} 
     className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-mandatory">
      <BackgroundCircles />
      <picture>
        <img
          className="relative rounded-full h-52 w-52 mx-auto object-cover opacity-100 top-8 border-primary border-2 shadow-lg shadow-primary  "
          src="https://avatars.githubusercontent.com/u/108608608?v=4"
          alt="AdarshMasekar_profile_pic"
        />
      </picture>
      <div className=" relative z-20 top-6">
        <h2 className="text-2xl uppercase font-bold text-primary ml-2 mb-2 pb-4 tracking-[8px] ">
          Adarsh Masekar
        </h2>

        <h1 className="text-xl font-semibold px-10">
          <span className="mr-2 text-secondary/80 ">{text}</span>
          <Cursor cursorColor="#8faeb2" />
        </h1>

        <div className="social-icons   relative top-12">
        <SocialIcon          
            className="cursor-pointer hover:scale-110 mr-3 bg-third/20 shadow-primary/60  shadow-md  rounded-full "
            network="github"
            fgColor={colors.secondary}
            bgColor="transparent"
            url="https://github.com/AdarshMasekar"
          />
           <SocialIcon          
            className="cursor-pointer hover:scale-110 mr-3 bg-third/20 shadow-primary/60  shadow-md  rounded-full"
            network="linkedin"
            fgColor={colors.secondary}
            bgColor="transparent"
            url="https://www.linkedin.com/in/adarsh-masekar-826a2423a/"
          />
          <SocialIcon          
            className="cursor-pointer hover:scale-110 mr-3 bg-third/20 shadow-primary/60  shadow-md  rounded-full"
            network="instagram"
            fgColor={colors.secondary}
            bgColor="transparent"
            url="https://instagram.com/adarsh_masekar?igshid=NTE5MzUyOTU="
          />
          <SocialIcon          
            className="cursor-pointer hover:scale-110 mr-3 bg-third/20 shadow-primary/60  shadow-md  rounded-full"
            network="facebook"
            fgColor={colors.secondary}
            bgColor="transparent"
            url="https://www.facebook.com/adarsh.masekar.55?mibextid=ZbWKwL"
            />

          <span className="relative resume top-2" title="Resume">
          <a className="resume" href="https://drive.google.com/file/d/19ka5FZQulybDoNthj5hBg0IOP7jbnh0w/view?usp=sharing" download="Adarsh_Masekar's_resume">
          <i className="ri-download-line text-2xl text-primary p-3 bg-third/20 shadow-primary/60  shadow-md  rounded-full"></i>
          </a>
           
             </span>
        </div>
          
        
      </div>
    </motion.div>
  );
};

export default Hero;
