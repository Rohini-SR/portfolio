import AnimeImg from "../assets/anime.png";
import { AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

export const Intro = () => {
  return (
    <section className="intro flex px-5 py-32 justify-center">
      <div className="w-1/2 flex flex-col">
        <h1 className="heading text-white font-intro-font">
          Hi,
          <br/>
          I'm Rohini
          <p className="">I'm a Mern Stack Developer</p>
        </h1>
        <div className="flex">
            <a href="#"><AiOutlineGithub size={30}/></a>
            <a href="#" className="px-3"><AiOutlineMail size={30}/></a>
            <a href="#" className="px-1"><AiOutlineWhatsApp size={30}/></a>
        </div>
      </div>

      <img className="image w-1/2 justify-center" src={AnimeImg} />
    </section>
  );
};
