import { motion } from "framer-motion";
import React from "react";

import Skills from "./Skills.js"

type Props = {};

const TechSkills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[1500px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto 
    items-center"
    >
      <h3 className="uppercase absolute top-24 font-bold tracking-[20px] text-2xl text-[#69c9c1]">
        tech stacks
      </h3>
      <h3 className="absolute top-36 uppercase mb-0 tracking-[5px] text-xs text-[#69c9c1]/70">
        hover over a{" "}
        <span className="text-[#ff952b] text-lg font-semibold animate-pulse">
          skill
        </span>{" "}
        for currency proficiency
      </h3>

      <div className="grid grid-cols-5 gap-10 absolute top-60">
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" lvl="90" stack="PYTHON"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" lvl="80" stack="C++"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/3161/3161133.png" lvl="70" stack="SQL"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" lvl="60" stack="REACT"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/226/226777.png" lvl="50" stack="JAVA"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/174/174854.png" lvl="90" stack="HTML"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/732/732190.png" lvl="80" stack="CSS"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" lvl="80" stack="BOOTSTRAP"/>
        <Skills tech="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" lvl="80" stack="TAILWIND"/>
        <Skills tech="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" lvl="70" stack="JAVASCRIPT"/>
        <Skills tech="https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png" lvl="80" stack="NUMPY"/>
        <Skills tech="https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png?v=637737823900000000" lvl="70" stack="PANDAS"/>
        <Skills tech="https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png" lvl="70" stack="MATPLOTLIB"/>
        <Skills tech="https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png" lvl="70" stack="SEABORN"/>
        <Skills tech="https://3.bp.blogspot.com/-yvrV6MUueGg/ToICp0YIDPI/AAAAAAAAADg/SYKg4dWpyC43AAfrDwBTR0VYmYT0QshEgCPcBGAYYCw/s1600/OpenCV_Logo.png" lvl="60" stack="OPENCV"/>

       
      </div>
    </motion.div>
  );
};

export default TechSkills;
