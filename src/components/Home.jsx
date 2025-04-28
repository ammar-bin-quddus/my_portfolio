import React from "react";
import profilePic from "../assets/profile.JPG";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf"

const Home = () => {
  return (
    <div
      id="home"
      className="text-white flex w-full justify-between items-start P-10 md:p-20"
    >
      <div className="md:w-1/2 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Hello, I'm Ammar"]}
          />
        </h1>
        <q className="text-sm md:text-2xl tracking-tight">
          Be willing to learn something new, fail but stick with it.
        </q>
        <br />
        <a href={resume} download>
          <button
            className="mt-5 md:md-10 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Download Resume
          </button>
        </a>
      </div>
      <div className="md:w-2/4 flex justify-center items-center">
        <img className="md:w-2/5" src={profilePic} alt="profilePic" />
      </div>
    </div>
  );
};

export default Home;
