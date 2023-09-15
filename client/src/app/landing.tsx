/* eslint-disable react/no-unescaped-entities */
"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion";

const Landing = () => {
  function scrollto(idPath:string) {
    console.log(idPath)
    const aboutSection = document.getElementById(idPath);
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className="bg-[#09123D] h-screen relative">
      <div className="w-screen h-[40vh] sm:w-[70vh] sm:h-[40vh] bg-pink-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]" />
      <Sidebar/>
      <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" />
      <Image
      src="/photos/topRight.png"
      width={700}
      height={700}
      className=" absolute top-[0vh] -[10vh] md:top-0 md:right-0 z-[0] blur-[3px]"
      alt="Picture of the topmesh"
      />
      <Image
      src="/photos/puzzle-piece-outline.png"
      width={200}
      height={200}
      className="absolute bottom-[-2em] left-[-3em]"
      alt="Picture of the puzzle"
      />
      <div className="text-white flex justify-between h-screen items-center mx-5 md:mx-10 md:pb-20">
        {/* left part */}
        <div className="relative mt-20 md:w-screen xl:w-[100vh]">
          <div className="w-full flex font-bold text-white text-5xl mt-5 fontGamja xl:text-6xl   mt-4">
            A DEVELOPER WHO CARES ABOUT USER EXPERIENCE
          </div>
         
          <div className="w-full flex flex-wrap text-sm xl:text-2xl bg-gradient-to-r from-[#F8F9FD] to-[#99B7F1] fontGamja bg-clip-text text-transparent">
            ENTER A WORLD OF ENDLESS POSSIBLE USER EXPERIENCE-YOUR ULTIMATE
            DESINATION FOR SOFTWARE
          </div>
                   <div className="z-[0] w-full md:w-full/5 my-4 mr-20  md:pr-0 xl:my-6 h-12 xl:h-12 font-semi-bold cursor-pointer bg-gradient-to-b from-indigo-700 to-fuchsia-500 hover:bg-gradient-to-b hover:from-indigo-900 hover:to-purple-500 rounded-full flex justify-center items-center text-2xl xl:text-3xl">
            {" "}
            Let's Talk
          </div>
          <div className="flex  text-md sm:text-xl  ">
            <span className="flex flex-wrap  my-2 sm:my-1  bg-gradient-to-r from-[#ECFDFE] to-[#a8b9f2] bg-clip-text text-transparent" >
              Reach out to me via:
              </span>
            {/* E-mail */}
            <div className="flex flex-wrap h-10 w-10  rounded-full bg-gradient-to-b from-indigo-700 to-purple-500 ml-2 sm:ml-5 cursor-pointer hover:bg-gradient-to-b hover:from-indigo-900 hover:to-purple-500">
              <svg
              // onClick={(e) => scrollto("about")}
                className="h-full w-full px-2 py-2 justify-center items-center"
                viewBox="0 0 52 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 5C5.60625 5 4.875 5.75 4.875 6.66667V8.96875L22.3945 23.7188C24.4969 25.4896 27.5133 25.4896 29.6156 23.7188L47.125 8.96875V6.66667C47.125 5.75 46.3937 5 45.5 5H6.5ZM4.875 15.4375V33.3333C4.875 34.25 5.60625 35 6.5 35H45.5C46.3937 35 47.125 34.25 47.125 33.3333V15.4375L32.7031 27.5833C28.8031 30.8646 23.1867 30.8646 19.2969 27.5833L4.875 15.4375ZM0 6.66667C0 2.98958 2.91484 0 6.5 0H45.5C49.0852 0 52 2.98958 52 6.66667V33.3333C52 37.0104 49.0852 40 45.5 40H6.5C2.91484 40 0 37.0104 0 33.3333V6.66667Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Instagram */}
            <div className="h-10 w-10  flex rounded-full bg-gradient-to-b from-indigo-700 to-purple-500 ml-2 xs:ml-7 cursor-pointer hover:bg-gradient-to-b hover:from-indigo-900 hover:to-purple-500">
              <svg
                className="h-full w-full px-2 py-2  justify-center items-center"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0115 11.0448C18.6293 11.0448 12.6749 16.1547 12.6749 22.4899C12.6749 28.825 18.6293 33.935 26.0115 33.935C33.3936 33.935 39.3481 28.825 39.3481 22.4899C39.3481 16.1547 33.3936 11.0448 26.0115 11.0448ZM26.0115 29.9307C21.2409 29.9307 17.3409 26.5938 17.3409 22.4899C17.3409 18.386 21.2293 15.0491 26.0115 15.0491C30.7936 15.0491 34.682 18.386 34.682 22.4899C34.682 26.5938 30.782 29.9307 26.0115 29.9307ZM43.0043 10.5766C43.0043 12.0608 41.6115 13.2461 39.8936 13.2461C38.1641 13.2461 36.7829 12.0508 36.7829 10.5766C36.7829 9.10239 38.1758 7.90708 39.8936 7.90708C41.6115 7.90708 43.0043 9.10239 43.0043 10.5766ZM51.8374 13.286C51.64 9.71001 50.6883 6.54243 47.6356 3.93267C44.5945 1.3229 40.9034 0.506103 36.7365 0.326807C32.4418 0.117627 19.5695 0.117627 15.2749 0.326807C11.1195 0.496143 7.42843 1.31294 4.37575 3.9227C1.32307 6.53247 0.382891 9.70005 0.173962 13.276C-0.0697876 16.9616 -0.0697876 28.0082 0.173962 31.6938C0.371284 35.2698 1.32307 38.4374 4.37575 41.0471C7.42843 43.6569 11.1079 44.4737 15.2749 44.653C19.5695 44.8622 32.4418 44.8622 36.7365 44.653C40.9034 44.4836 44.5945 43.6668 47.6356 41.0471C50.6766 38.4374 51.6284 35.2698 51.8374 31.6938C52.0811 28.0082 52.0811 16.9715 51.8374 13.286ZM46.2891 35.6483C45.3838 37.6006 43.6311 39.1047 41.3445 39.8916C37.9204 41.0571 29.7954 40.7881 26.0115 40.7881C22.2275 40.7881 14.0909 41.0471 10.6784 39.8916C8.40343 39.1147 6.65075 37.6106 5.73378 35.6483C4.37575 32.7098 4.68914 25.7372 4.68914 22.4899C4.68914 19.2426 4.38736 12.26 5.73378 9.33149C6.63914 7.37915 8.39182 5.87505 10.6784 5.08813C14.1025 3.9227 22.2275 4.19165 26.0115 4.19165C29.7954 4.19165 37.932 3.93267 41.3445 5.08813C43.6195 5.86509 45.3722 7.36919 46.2891 9.33149C47.6472 12.27 47.3338 19.2426 47.3338 22.4899C47.3338 25.7372 47.6472 32.7198 46.2891 35.6483Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* linkedin */}
            <div className="h-10 w-10  flex rounded-full bg-gradient-to-b from-indigo-700 to-purple-500 ml-2 xs:ml-7 cursor-pointer hover:bg-gradient-to-b hover:from-indigo-900 hover:to-purple-500">
              <svg
                className="h-full w-full px-2 py-2  justify-center items-center"
                viewBox="0 0 46 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2966 35.0002H0.759821V11.633H10.2966V35.0002ZM5.52308 8.44551C2.47353 8.44551 0 6.52363 0 4.20332C2.18274e-08 3.08879 0.581894 2.01991 1.61767 1.23181C2.65345 0.443722 4.05827 0.000976562 5.52308 0.000976562C6.98789 0.000976562 8.39271 0.443722 9.42849 1.23181C10.4643 2.01991 11.0462 3.08879 11.0462 4.20332C11.0462 6.52363 8.57161 8.44551 5.52308 8.44551ZM45.9897 35.0002H36.4735V23.6252C36.4735 20.9143 36.4016 17.4377 31.5151 17.4377C26.5568 17.4377 25.797 20.383 25.797 23.4299V35.0002H16.2704V11.633H25.4171V14.8205H25.5505C26.8237 12.9846 29.9339 11.0471 34.5739 11.0471C44.2257 11.0471 46 15.883 46 22.1643V35.0002H45.9897Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="w-full  cursor-pointer mt-20 justify-center flex md:hidden   animate-custom-bounce">
        <svg 
                onClick={(e) => scrollto("about")}

        width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6694 34.0078C22.4696 34.9111 20.5212 34.9111 19.3214 34.0078L3.96429 22.4453C2.76451 21.5419 2.76451 20.075 3.96429 19.1716C5.16406 18.2683 7.1125 18.2683 8.31228 19.1716L21.5002 29.1009L34.6882 19.1789C35.8879 18.2755 37.8364 18.2755 39.0362 19.1789C40.2359 20.0822 40.2359 21.5492 39.0362 22.4525L23.679 34.015L23.6694 34.0078ZM39.0266 8.57026L23.6694 20.1328C22.4696 21.0361 20.5212 21.0361 19.3214 20.1328L3.96429 8.57026C2.76451 7.66694 2.76451 6.19995 3.96429 5.29663C5.16406 4.39331 7.1125 4.39331 8.31228 5.29663L21.5002 15.2259L34.6882 5.30386C35.8879 4.40054 37.8364 4.40054 39.0362 5.30386C40.2359 6.20718 40.2359 7.67417 39.0362 8.57749L39.0266 8.57026Z" fill="white"/>
</svg>

        </div>
        </div>
        {/* right part */}
        <div className="relative hidden md:flex h-screen/2 ml-10 xl:ml-20 ">
        <Image
      src="/photos/monster.png"
      width={700}
      height={900}
      className="z-0 h-screen pt-20 xl:px-20 hidden md:flex"
      alt="Picture of the Monster"
    />
        </div>
        <div className="h-full  cursor-pointer hidden ml-5 md:flex justify-center items-end animate-custom-bounce">
        <svg 
        onClick={(e) => scrollto("about")}
        width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6694 34.0078C22.4696 34.9111 20.5212 34.9111 19.3214 34.0078L3.96429 22.4453C2.76451 21.5419 2.76451 20.075 3.96429 19.1716C5.16406 18.2683 7.1125 18.2683 8.31228 19.1716L21.5002 29.1009L34.6882 19.1789C35.8879 18.2755 37.8364 18.2755 39.0362 19.1789C40.2359 20.0822 40.2359 21.5492 39.0362 22.4525L23.679 34.015L23.6694 34.0078ZM39.0266 8.57026L23.6694 20.1328C22.4696 21.0361 20.5212 21.0361 19.3214 20.1328L3.96429 8.57026C2.76451 7.66694 2.76451 6.19995 3.96429 5.29663C5.16406 4.39331 7.1125 4.39331 8.31228 5.29663L21.5002 15.2259L34.6882 5.30386C35.8879 4.40054 37.8364 4.40054 39.0362 5.30386C40.2359 6.20718 40.2359 7.67417 39.0362 8.57749L39.0266 8.57026Z" fill="white"/>
</svg>

        </div>
      </div>
    </div>
  );
};

export default Landing;
