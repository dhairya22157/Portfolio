import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[#fef6e4] text-black p-8 md:p-16 rounded-lg shadow-lg flex flex-col items-center gap-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#f07167]">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        {/* Left Section - Image */}
        <div className="flex-shrink-0">
          <img
            src={AboutImg}
            alt="About Me"
            className="rounded-full shadow-md w-60 md:w-80"
          />
        </div>

        {/* Right Section - Details */}
        <div className="flex flex-col gap-6 w-full">
          <p className="text-md md:text-lg text-[#011627]">
            I love listening to songs, playing games, and enjoy playing chess. You can connect with me to play chess on Lichess:{" "}
            <a
              href="https://lichess.org/@/dhairya22157"
              className="text-[#f07167] underline hover:text-[#d9534f]"
            >
              lichess.org/@/dhairya22157
            </a>
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#f07167]">My Expertise</h2>
          
          {/* Full Stack Developer */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="text-[#f07167]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#011627]">
                  Full Stack Developer
                </h3>
                <p className="text-sm md:text-md leading-tight text-[#011627]">
                  Skilled in both frontend and backend development, creating seamless and efficient web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Machine Learning Enthusiast */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="text-[#f07167]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#011627]">
                  Machine Learning Enthusiast
                </h3>
                <p className="text-sm md:text-md leading-tight text-[#011627]">
                  Passionate about solving complex problems using machine learning and data science techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Algorithm Solver */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="text-[#f07167]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#011627]">
                  Algorithm Solver
                </h3>
                <p className="text-sm md:text-md leading-tight text-[#011627]">
                  Enjoys tackling algorithmic challenges and optimizing solutions using data structures and algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Résumé */}
          <div data-aos="fade-up">
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1ah8I9gOSi9fnbQ3hwR3ohcf3EWmKnDJ-/view?usp=sharing"
              target="_blank"
            >
              <div id="resume" className="coolbox bg-[#ffe4e1] shadow-md p-6 rounded-lg hover:bg-[#ffcccc]">
                <div className="flexbox flex items-start gap-4">
                  <h6 className="text-xl md:text-2xl font-semibold text-[#011627]">Resume</h6>
                  <span>
                    <IoArrowForward size={20} className="text-[#f07167]" />
                  </span>
                </div>
                <p className="text-sm md:text-md leading-tight text-[#011627]">
                  Check out some of the stuff I've worked on and teams I've been a part of.
                </p>
              </div>
            </a>
          </div>

          {/* About this website */}
          <div className="bg-[#fef6e4] text-black p-8 md:p-16 rounded-lg shadow-lg flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f07167]">
              About this website
            </h2>
            <p className="text-md md:text-lg text-[#011627]">
              My website has always been a playground for me to try out new tech and
              experiment with new features. The main motive for this website was to
              showcase the projects I've worked on over the last few years. This
              website is built with React and TailWind CSS
            </p>
            <p className="text-md md:text-lg text-[#011627]">
              The website has been deployed to Vercel and it takes advantage of its
              serverless functions for features like the real-time Spotify currently
              playing indicator and contact form. It's Open Sourced at{" "}
              <a
                href="https://github.com/dhairya22157"
                className="text-[#f07167] underline"
              >
                github.com/dhairya22157/Personal_Portfoliio
              </a>
              . Leave a star!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
