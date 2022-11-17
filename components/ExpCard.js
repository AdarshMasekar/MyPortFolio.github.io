import React from "react";
import { motion } from "framer-motion";



function ExpCard({role,company,cmplogo,duration,tech1,tech2,tech3,task1,task2,task3,task4}){
  return (
    <motion.article
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 1.5,
    }}
      className="text-center flex flex-col rounded-lg sm:rounded-lg md:rounded-lg items-center space-y-7 
      flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
      bg-[#EC9EC0]/20 p-10 hover:opacity-100 opacity-40
      cursor-pointer transition-opacity duration-200 overflow-hidden mt-[140px]"
    >
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
        src={cmplogo}
        className="w-20 h-20 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        alt=""
      />

      <div className="px-4 sm:mx-2 md:px-10">
        <h4 className="text-xl px-4 font-bold tracking-wider text-[#ff7733]  animate-pulse hover:animate-none">{role}</h4>
        <p className="font-semibold text-sm mt-1 text-[#69C9C1]/80">
          {company}
        </p>
        <picture className="flex space-x-2 my-2 items-center justify-center">
          <img
            className="h-8 w-8 rounded-full"
            src={tech1}
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
           src={tech2}  alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
           src={tech3}  alt=""
          />
        </picture>

        <p className=" py-2 text-sm text-[#69C9C1]">
          {duration}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm text-left px-10 ">
          <li>
            {task1}
          </li>
          <li>
            {task2}
          </li>
          <li>
           {task3}
          </li>
          <li>
          {task4}
          </li>
        </ul>
      </div>
    </motion.article>
  );
};

export default ExpCard;
