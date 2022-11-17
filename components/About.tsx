import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      // viewport={{ once: true }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 mb-4 uppercase font-bold tracking-[20px] text-2xl text-[#69c9c1]">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://lh3.googleusercontent.com/WUj2bCODJDZRdonM9n5sF_L0VG0zEfQ_kz3ncElY5i_lUY-qVU4IsVRX203W-1biucipbXNy3Hzeb3AExFITn4CJvmBNu31BRQqVtcRwKLS6UCECKQav08u-0OezIF2tlKc_oPJJSe5LkgqixEBfiJ7hSBRhN8oGoC3G3gzqaaD_zwXQ-vzxBSMiOx55yHIBQze5_9se2oHGZ9wJQmUWZ5l98ewLaP_b_G5szEpRGiORMZKFgP6tn1Qsq0MUbYhjoOpfH836J490R0ac78p5V0IMH28EAaEEQlIXPJ5PCEOuTjEVrDSbxD38baywhPdzi5BgCfM75hB9CgxMDBOqw1w-LJIXEQh8xBgtofhh9qeXZNLcaAZLB5WEyBaadBDzwbXxK7NP_bKlaLx3A6IS_MKp8JJv2BXRqRRsD5f3cvXFEd5i1zqJEVmVm81xG-BawLbL_AEtNtyYdsMJQ00W80ttmyJvWt7gMt474I4uSNcrqHeycMo5xLps5l3r-z4pIWFWlUFtT72d3EGCliwrJVGI7C92jmXQHL-ydnjHkwEoEFWShFryi7x4HAl-UqZtAx28lykWLFip32xQ1JcEiGl3OF6bSwSpPnrxT6xn-ZQmNhFHF65Z3hTk3uxwZXURlMI9IVZ7O95s6Gsq1KIklY2RyUkdnR1plYA1Zog-NaYIdsKerCYx3X64e19q0JlFCtPkJtf8A0Sq6nXyywLO-8oKudUrUgtFl6CKRlVBDZKXzn32MWhIs3pXOoNrIceBLiegpJ7WNXqXLUgflqaucvOCLNFayGXhtK4jE0EGa9Ia9A8OWtRsR2vJAEtY65_4bT8XL2OKMuXaSXBvvb5EtHvAqLxEqpJ4AlOy3kAIcqNICSHMeKjyrF8cMjNmNuvJLVk5pQjq-9sEsawDao3SfQnz6YTXXjkb_CCxBuK6ppADQpg=s750-no?authuser=0"
        alt=""
        className="mt-32 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-md md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-400px] my-10"
      />

      <div className="space-y-10 px-0 sm:my-3 md:px-10">
        <h4 className="text-[#69c9c1] text-lg uppercase tracking-[10px]">
          Get to{" "}
          <span className="text-[#ff713e] text-2xl font-semibold animate-pulse">
            know
          </span>{" "}
          me
        </h4>
        <p className="text-md tracking-widest leading-8 ">
          I am Graduate student from <span className="underline text-[#ff713e]">Computer science</span> branch , My current CGPA is <span className="text-bold text-[#ff713e]">8.3</span> ,
          I have done Internship in <span className="text-semibold text-[#ff713e]/90">Datascience</span> ,
          My Technical skills include <span className="text-semi-bold text text-[#ff713e]"> Python , C++ , HTML/CSS , REACT</span> etc .
          I have Been active on  <span className="text-bold text-xl text-[#ff713e]"><a href="https://leetcode.com/adarshmasekar/">Leetcode</a>  <a href="https://www.codingninjas.com/codestudio/profile/Adarsh_55">Coding Ninjas</a></span> platforms for practicing problem solving skills and enhancing how to use my DSA knowledge in realworld .
        </p>
      </div>
      
    
    </motion.div>
  );
};

export default About;
