import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackRoundCircles from "./BackRoundCircles";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "A Full-Stack Developer",
      "Designer",
      "Software Engineering Undergrad, SUST",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden space-y-8">
      <BackRoundCircles />
      <img
        src="https://avatars.githubusercontent.com/u/68494604?v=4"
        alt="Fahim Iftekhar Efto"
        className="relative rounded-fill mx-auto h-40 w-40"
      />

      <h2 className="uppercase pb-2 tracking-[15px] font-bold text-center text-lg">
        Fahim Iftekhar Efto
      </h2>
      <h1 className="text-4xl lg:text-6xl text-center">
        <span>{text}</span>
        <Cursor cursorColor="red"></Cursor>
      </h1>
      <div className="z-20 p-5">
        <div className="p-3 ">
          <button className="herobtn" id="#about">
            About
          </button>
          <button className="herobtn" id="#experience">
            Experience
          </button>
          <button className="herobtn" id="#skills">
            Skills
          </button>
          <button className="herobtn" id="#project">
            Project
          </button>
        </div>
      </div>
    </div>
  );
}
