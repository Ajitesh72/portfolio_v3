/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Development() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // Check if the user's browser is Firefox
    setIsFirefox(navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
  }, []);
  return (
    <div data-aos="fade-in" data-aos-delay="300" className="relative">
      <div className="w-screen h-[50vh] xs:h-[40vh]  sm:w-[70vh] sm:h-[40vh] bg-pink-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]"
      style={{
        display: isFirefox ? 'none' : 'block',
               }}
      />
      {/* <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" /> */}
      <div className="text-[#C5D0DC] flex justify-between text-5xl sm:text-7xl pt-20 sm:pl-10 mx-5 md:mx-10">
        <div data-aos="fade-right" data-aos-delay="400" className="font-bold">
          002
        </div>
      </div>
      {/* yaha sei */}
      <div className="grid grid-cols-2 gap-0 md:gap-10 items-center text-white mx-5 md:mx-10">
        <div className="col-span-2 md:col-span-1 h-[15vh] sm:h-[40vh] w-full sm:w-[50vw] md:w-full">
          {/* Content for the first box */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" sm:text-center h-full w-full flex justify-center items-center text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent  "
          >
            DEVELOPMENT PROJECTS
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 h-[30vh] md:h-[50vh] w-full sm:w-[50vw] md:w-full mt-10 md:mt-0">
          {/* Content for the second box */}
          <div className="relative h-full w-full">
            <Image
              data-tilt
              data-tilt-startX="0"
              data-tilt-startY="0"
              data-tilt-reset-to-start="false"
              data-aos="fade-right"
              data-aos-delay="400"
              src="/photos/techmate-main.png"
              width={600}
              height={600}
              className="absolute top-0 left-0 h-full w-full hover:blur-[3px] rounded-xl"
              alt="Picture of the topmesh"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 h-[30vh] md:h-[50vh] w-full sm:w-[50vw] md:w-full mt-10 md:mt-0">
          {/* Content for the third box */}
          <div className="relative h-full w-full">
            <Image
              data-tilt
              data-tilt-startX="0"
              data-tilt-startY="0"
              data-tilt-reset-to-start="false"
              data-aos="fade-left"
              data-aos-delay="400"
              src="/photos/octernship-main.png"
              width={600}
              height={600}
              className=" absolute top-0 left-0 h-full w-full hover:blur-[3px] rounded-xl"
              alt="Picture of the topmesh"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 h-[30vh] md:h-[50vh] w-full sm:w-[50vw] md:w-full mt-10 md:mt-0">
          {/* Content for the second box */}
          <div className="relative h-full w-full">
            <Image
              data-tilt
              data-tilt-startX="0"
              data-tilt-startY="0"
              data-tilt-reset-to-start="false"
              data-aos="fade-right"
              data-aos-delay="400"
              src="/photos/xtract-main.png"
              width={600}
              height={600}
              className="absolute top-0 left-0 h-full w-full hover:blur-[3px] rounded-xl "
              alt="Picture of the topmesh"
            />
          </div>
        </div>
      </div>
      <div className="pt-5 w-full text-center font-bold text-2xl underline bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent">
        <span
          className="hover:underline cursor-pointer"
          onClick={() => window.open("https://github.com/Ajitesh72", "_blank")}
        >
          CLICK HERE TO KNOW MORE ABOUT MY PROJECTS
        </span>
      </div>
      {/* yaha tak */}
      <br />
      <br />
    </div>
  );
}

export default Development;
