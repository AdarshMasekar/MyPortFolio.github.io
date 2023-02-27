import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: "string";
  email: "string";
  subject: "string";
  message: "string";
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adarshmasekar@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. %0A%0A%0A${formData.message}%0A%0A%0ABest Regard%0A%0A${formData.name}%0A(${formData.email})`;
  };

  return (
    <motion.div
    initial={{
      opacity: 0,
      x:70,
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
        Contact
      </h3>
      <h3 className="absolute top-36 uppercase font-bold tracking-[5px] text-[18px] text-bold text-secondary">
        PING ME{" "}
        <span className="text-primary text-2xl font-bold animate-pulse">
          MESSAGE
        </span>{" "}
        AND BOUNCING THE IDEA !
      </h3>

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
        duration: 1,ease:"easeInOut"
      }} 
       className="absolute top-48  mt-8 flex flex-col space-y-5 lg:w-[95%] h-[90%]  md:w-[90%]">
        <div className="items-center justify-center  grid grid-cols-2 lg:grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-2 ">
          <a href="https://goo.gl/maps/uWvrh5bDZR1y1fro8">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center ">
              <MapPinIcon className="flex  text-primary w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-primary/90 uppercase ">
                location
              </h4>
              <p className=" md:inline-flex hidden text-third">Karwar, India</p>
            </div>
          </a>

          <a href="tel:+919591265305">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center">
              <DevicePhoneMobileIcon className="flex text-primary w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-primary/90 uppercase ">
                call me
              </h4>
              <p className=" md:inline-flex hidden text-third ">+91 959 126 5305</p>
            </div>
          </a>

          <a href="mailto:adarshmasekar@gmail.com">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center">
              <EnvelopeIcon className="flex  text-primary w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-primary/90 uppercase">email</h4>
              <p className=" md:inline-flex hidden text-third">adarshmasekar@gmail.com</p>
            </div>
          </a>

              <a href="https://github.com/adarshmasekar">
          <div className="flex flex-col flex-shrink-0 items-center space-y-2 justify-center">
            <CodeBracketIcon className="flex  text-primary w-7 h-7 hover:animate-bounce" />
            <h4 className="md:inline-flex text-primary/90 uppercase">github</h4>
            <p className=" md:inline-flex text-start hidden text-third">
            https://github.com/AdarshMasekar/
            </p>
          </div>
              </a>
        </div>

      
        <h3 className=" uppercase pt-2 tracking-[5px] text-sm font-bold text-primary/90">
        I AM VERY <span className="text-lg text-secondary"> RESPONSIVE</span>{" "} AND
        <span className="text-secondary text-lg font-bold animate-pulse"> ALWAYS HAPPY
          
        </span>{" "}TO <span className=" font-bold">HEAR FROM YOU </span>
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 mx-12 sm:p-4 lg:w-[95%] md:w-[90%]"
          >
    
            <input
              {...register("name")}
              className="contactInput focus:text-primary/90 text-primary/90 "
              type="text"
              placeholder="Name"
              required
            />
           

          <input
              {...register("email")}
              className="contactInput focus:text-primary/90 text-primary/90  "
              type="email"
              placeholder="Email"
              required
            />
          <input
            {...register("subject")}
            className="contactInput focus:text-primary/90 text-primary/90   "
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            {...register("message")}            
            className="contactInput focus:text-primary/90 text-primary/90   "
            placeholder="Write your message"
            maxLength={200}
            required
          />
          <button
            type="submit"
            className="heroButton focus:bg-primary>
            ] focus:text-secondary  font-bold border-2 border-primary/90 text-primary/70 text-[16px]"
          >
            send message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;