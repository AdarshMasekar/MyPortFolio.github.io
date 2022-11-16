import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: "string";
  email: "string";
  subject: "string";
  message: "string";
};

const Contact = (props: Props) => {
  //react-hook-form
  const { register, handleSubmit } = useForm<Inputs>();
  //const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:patpichadev@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. %0A%0A%0A${formData.message}%0A%0A%0ABest Regard%0A%0A${formData.name}%0A(${formData.email})`;
  };

  return (
    <div
      className="h-screen relative flex flex-col text-center
      max-w-7xl px-10 mx-auto items-center justify-evenly"
      >
      <h3 className="absolute top-24 uppercase font-bold tracking-[20px] text-2xl text-[#69C9C1]">
        Contact
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[5px] text-xs text-[#69C9C1]/80">
        PING ME{" "}
        <span className="text-[#f98547] text-lg font-bold animate-pulse">
          MESSAGE
        </span>{" "}
        AND BOUNCING THE IDEA !
      </h3>

      <div className="absolute top-56 flex flex-col space-y-14 ">
        <div className="flex items-center justify-center space-x-10  md:space-x-10 xl:space-x-20">
          <a href="https://goo.gl/maps/yuZKK7o8FYZjcS84A">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center ">
              <MapPinIcon className="flex  text-[#69C9C1] w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-[#69C9C1]/80 uppercase">
                location
              </h4>
              <p className="hidden md:inline-flex">Karwar India</p>
            </div>
          </a>

          <a href="tel:+4897952593">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center">
              <DevicePhoneMobileIcon className="flex text-[#69C9C1] w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-[#69C9C1]/80 uppercase ">
                call me
              </h4>
              <p className="hidden md:inline-flex">+91 959 126 5305</p>
            </div>
          </a>

          <a href="mailto:patpicha.sit@gmail.com">
            <div className="flex flex-col flex-shrink-0 items-center  space-y-2 justify-center">
              <EnvelopeIcon className="flex  text-[#69C9C1] w-7 h-7 hover:animate-bounce" />
              <h4 className="md:inline-flex text-[#69C9C1]/80 uppercase">email</h4>
              <p className="hidden md:inline-flex">adarshmasekar@gmail.com</p>
            </div>
          </a>

              <a href="https://github.com/PattyCutie">
          <div className="flex flex-col flex-shrink-0 items-center space-y-2 justify-center">
            <CodeBracketIcon className="flex  text-[#69C9C1] w-7 h-7 hover:animate-bounce" />
            <h4 className="md:inline-flex text-[#69C9C1]/80 uppercase">github</h4>
            <p className="hidden md:inline-flex">
            https://github.com/AdarshMasekar/
            </p>
          </div>
              </a>
        </div>

        <h3 className="text-xs text-[#69C9C1] tracking-[2px]">
          I AM VERY <span className="text-lg text-[#f88f3e]"> RESPONSIVE</span>{" "}
          AND <span className="text-lg text-[#f88f3e]/80">ALWAYS HAPPY</span> TO
          HEAR FROM YOU
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 mx-auto"
          >
          <div className="flex space-x-4">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
              required
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            {...register("message")}            
            className="contactInput overflow-hidden resize-none"
            placeholder="Write your message"
            maxLength={200}
            required
          />
          <button
            type="submit"
            className="focus:bg-[#69C9C1]>
            ] focus:text-[#fff] heroButton font-bold border-2 border-[#69C9C1]/60 text-[#69C9C1]/60 text-[16px]"
          >
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
