import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard.js";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
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
      className="flex relative overflow-hidden flex-col text-center
      md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase font-bold tracking-[20px] text-2xl text-[#69C9C1]">
        Experience
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[5px] text-xs text-[#51a79f]">
        hover over a  {" "}<span className="text-[#ff713e] text-lg font-bold animate-pulse">card</span>
        {" "}for what I have worked
      </h3>
    
      <div className="w-full my-0 mx-auto  flex space-x-20 overflow-x-scroll p-10
      snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-[#EC9EC0]/10 scrollbar-thumb-[#69C9C1]/60 scrollbar-thumb-rounded">
        
        <ExpCard  cmplogo="https://technologics.in/wp-content/uploads/2020/10/TECHNOLOGICS-LOGO.png" role="Datascience Intern" company="Technologics global private limited" duration="27-08-2022 to 27-09-2022" tech1="https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png" tech2="https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png?v=637737823900000000" tech3="https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png" task1="Learnt Python Libraries like Numpy Pandas Seaborn etc" task2="Done Projects on Face Mask Detection " task3="Done Project on Titanic Dataset" task4="Done Analyisis on IPL Dataset" />
        <ExpCard  cmplogo="https://seeklogo.com/images/F/flag-of-the-japan-self-defense-forces-logo-722812237B-seeklogo.com.png" role="Web Development Self Learning" company="Course by Angela Yu" duration="20-10-2022 to present" tech1="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" tech2="https://cdn-icons-png.flaticon.com/512/174/174854.png" tech3="https://cdn-icons-png.flaticon.com/512/732/732190.png" task1="Learnt HTML/CSS Javascript Bootstrap Tailwind  Reactjs Typescript " task2="Done Project on Simple Landing page " task3="Done Project on Simple Login Page" task4="Learning Backend Technologies Like MongoDB"/>
       
      </div>
      
    </motion.div>
  );
};

export default Experience;
