import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
export default function Contact() {
  const color = "white";
  return (
    <div className="h-screen relative flex flex-col justify-evenly  text-center md:text-left  mx-auto items-center   ">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-2xl font-bold snap-center">
        Contact
      </h3>
      <div className="flex flex-col">
        <h4 className="text-3xl font-semibold text-center">Contact with me </h4>

        <div className="items-center">
          <div className="flex items-center mt-10 gap-5 justify-center">
            <EnvelopeIcon className="w-7 h-7 animate-pulse text-red-700" />
            <p className="font-bold text-lg">fahim.iftekhar.efto@gmal.com</p>
          </div>
          <div className="flex items-center mt-10 gap-5 justify-center">
            <MapPinIcon className="w-7 h-7 animate-pulse text-red-700" />
            <p className="font-bold text-lg">Akhalia, Sylhet, Bangladesh</p>
          </div>
          <div className="flex flex-row items-center justify-evenly mt-10 animate-pulse">
            <SocialIcon
              url="https://facebook.com/fahim.iftekhar.efto"
              fgColor={color}
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/fahim.iftekhar.efto"
              fgColor={color}
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/Fahimefto"
              fgColor={color}
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
