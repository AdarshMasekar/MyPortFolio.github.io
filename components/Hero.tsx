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
          src="https://lh3.googleusercontent.com/WUj2bCODJDZRdonM9n5sF_L0VG0zEfQ_kz3ncElY5i_lUY-qVU4IsVRX203W-1biucipbXNy3Hzeb3AExFITn4CJvmBNu31BRQqVtcRwKLS6UCECKQav08u-0OezIF2tlKc_oPJJSe5LkgqixEBfiJ7hSBRhN8oGoC3G3gzqaaD_zwXQ-vzxBSMiOx55yHIBQze5_9se2oHGZ9wJQmUWZ5l98ewLaP_b_G5szEpRGiORMZKFgP6tn1Qsq0MUbYhjoOpfH836J490R0ac78p5V0IMH28EAaEEQlIXPJ5PCEOuTjEVrDSbxD38baywhPdzi5BgCfM75hB9CgxMDBOqw1w-LJIXEQh8xBgtofhh9qeXZNLcaAZLB5WEyBaadBDzwbXxK7NP_bKlaLx3A6IS_MKp8JJv2BXRqRRsD5f3cvXFEd5i1zqJEVmVm81xG-BawLbL_AEtNtyYdsMJQ00W80ttmyJvWt7gMt474I4uSNcrqHeycMo5xLps5l3r-z4pIWFWlUFtT72d3EGCliwrJVGI7C92jmXQHL-ydnjHkwEoEFWShFryi7x4HAl-UqZtAx28lykWLFip32xQ1JcEiGl3OF6bSwSpPnrxT6xn-ZQmNhFHF65Z3hTk3uxwZXURlMI9IVZ7O95s6Gsq1KIklY2RyUkdnR1plYA1Zog-NaYIdsKerCYx3X64e19q0JlFCtPkJtf8A0Sq6nXyywLO-8oKudUrUgtFl6CKRlVBDZKXzn32MWhIs3pXOoNrIceBLiegpJ7WNXqXLUgflqaucvOCLNFayGXhtK4jE0EGa9Ia9A8OWtRsR2vJAEtY65_4bT8XL2OKMuXaSXBvvb5EtHvAqLxEqpJ4AlOy3kAIcqNICSHMeKjyrF8cMjNmNuvJLVk5pQjq-9sEsawDao3SfQnz6YTXXjkb_CCxBuK6ppADQpg=s750-no?authuser=0"
          alt="AdarshMasekar_profile_pic"
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
