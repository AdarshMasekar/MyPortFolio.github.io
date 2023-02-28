import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {experience} from "../utils/expereince"

const Experience = () => {
  const settings ={
    infinite:true,
    slidesToShow:1,
    slidesToScroll:-1,
    autoplay:true,
    autoplaySpeed:4000,
    speed:3000
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x:-20,
      }}
      whileInView={{
        opacity: 1,
        x:0,
      }}
      transition={{
        duration: 1,
      }} 
      className="h-screen relative flex flex-col text-center
      max-w-7xl  px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute top-24 uppercase font-bold tracking-[20px] text-2xl text-primary">
        Experience
      </h3>
      <h3 className="absolute top-36 text-[18px] font-bold uppercase tracking-[5px]  text-secondary mb-3">
        hover over a  {" "}<span className="text-primary text-2xl font-bold animate-pulse">card</span>
        {" "}for what I have worked
      </h3>
    
      <motion.div  initial={{
      opacity: 0,
      x:60,
    }}
    whileInView={{
      opacity: 1,
      x:0,
    }}
    transition={{
      duration: 1,ease:"easeIn"
    }}
     className="w-full my-0 mx-auto h-screen flex space-x-4 overflow-x-hidden py-10 px-2
      snap-x snap-mandatory 
      
      ">
        <Slider
        {...settings} className="relative slider z-20  ">
        {experience.map(({id,role,company,cmlogo,duration,techstack,tasks}) => (

          <div
          className="exp--card text-center  hover:opacity-100 opacity-90 flex flex-col rounded-2xl sm:rounded-2xl md:rounded-2xl items-center space-y-4 
          flex-shrink-0  snap-center bg-third/10 p-10  cursor-pointer transition-opacity duration-200 overflow-hidden mt-[140px]" key={id}>
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src={cmlogo} key={id}
            className="expimg w-20 h-20 rounded-full md:rounded-full relative xs:left-[33%] sm:left-[40%] lg:left-[44%] object-cover object-center "
            alt=""
          />

          <div className="exp--details px-4 xs:mx-0 md:px-10">
            <h4 className="text-xl px-4 font-bold tracking-wider text-primary  animate-pulse hover:animate-none">{role}</h4>
            <p className="font-semibold text-sm mt-1 text-secondary/80">
              {company}
            </p>
            
            <picture className="flex space-x-2  my-2 px-5 items-center justify-center">
              {techstack.map(item=>(
              <div className="mx-2" key={id}>
                 <h2 className="text-primary  capitalize">{item}</h2>
              </div>
              ))}
            </picture>

            <p className=" py-2 text-sm text-secondary">
              {duration}
            </p>

            <picture className="flex space-x-2  my-2 items-center justify-center">
            
            <h2 className="text-primary xs:hidden bg-Bg p-4 rounded-lg sm:hidden md:block lg:block">
              Projects</h2>
              {tasks.map(item=>(
              <div className="mx-2" key={id}>
                 <h2 className="text-secondary bg-Bg p-4 rounded-md  capitalize">{item}</h2>
              </div>
              ))}
            </picture>
            
          </div>
          </div>
        ))}
        </Slider>
       </motion.div>
      
    </motion.div>
  );
};

export default Experience;
