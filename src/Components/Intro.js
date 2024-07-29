import React from "react";
import Anime from "../assets/anime2.png";
import { AiOutlineGithub,AiOutlineMail,AiOutlineLinkedin } from "react-icons/ai";

export const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 py-20 bg-secondary justify-center font-intro-font">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-gray-800 text-5xl">
          Hi, <br /> I'm Rohini
          <p className="text-2xl">I'm a Mern-Stack Developer</p>
        </h1>
        <div className="flex py-5">
          <a href='#'className="pr-5 hover:text-white text-gray-800"><AiOutlineGithub size={30}/></a>
          <a href='#' className="pr-5 hover:text-white text-gray-800" ><AiOutlineMail size={30}/></a>
          <a href='#' className="hover:text-white text-gray-800"><AiOutlineLinkedin size={30}/></a>
        </div>
      </div>

      <img src={Anime} alt="Anime pic" className="introImg md:w-1/3" />
    </section>
  );
};
