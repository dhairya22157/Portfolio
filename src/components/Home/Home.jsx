import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="bg-beige text-black flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Hi, I’m Dhairya a 19-year-old Computer Science and Engineering student at IIIT Delhi with a passion for creating impactful and user-friendly digital experiences. I enjoy building cool products that not only look great but also deliver seamless functionality.

          I’m always excited about collaborating on new projects, participating in hackathons, and exploring fun challenges that push the boundaries of creativity and innovation. Beyond coding, I aspire to address real-world problems by leveraging technology to make a positive societal impact. My vision is to create platforms that tackle critical issues like hunger and poverty by improving access to resources and making them more affordable.

          Feel free to reach out if you’d like to connect, brainstorm, or work on something amazing together!
        </p>
        {/* <a href="#footer">
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me 
          </button>
        </a> */}
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;