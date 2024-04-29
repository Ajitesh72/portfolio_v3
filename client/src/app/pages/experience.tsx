/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Experience() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    // Check if the user's browser is Firefox
    setIsFirefox(navigator.userAgent.toLowerCase().indexOf("firefox") > -1);
  }, []);
  const experiences = {
    "dj-sd4s": {
      name: "DJS-S4DS",
      logo: "/images/s4ds.png",
      background: "bg-white",
      position: "Technical Lead(Full Stack Developer)",
      start: "September 2022",
      end: "Current",
      highlight: "text-green-400",
      points: [
        "Led a team of 10+ Tech Team to organize numerous events that comprised pan-India workshops and hackathons to promote Data Science and AI.",
        "Used technologies like React, GCP, Tailwind CSS to build Xtract Website.",
        "Developed the Backend for the PS-Selection quiz using Firebase, integrated user leaderboards, and deployed the application on Vercel(GoDaddy Domain)",
      ],
    },
    arb: {
      name: "ArbDossier",
      logo: "/images/arb.jpeg",
      background: "moving-gradient-1",
      position: "SDE Intern",
      start: "June",
      end: "July 2023",
      highlight: "text-blue-400",
      points: [
        "Implemented Machine Learning pipelines that extract arbitration case data from USA Case reports using selenium, utilizing Pinecone vector-database ensuring optimal performance for querying for clients in USA.",
        "Employed Tableau for in-depth data visualization, providing stakeholders with insightful and actionable information.",
        "Developed SaaS tools for automating workflows of lawyers that reduced manual effort.",
      ],
    },
    hackconcode: {
      name: "MLH & Concode",
      logo: "/images/concode.jpeg",
      background: "moving-gradient-1",
      position: "Most Creative Project at HackConcode by MLH and Concode",
      start: "June",
      end: "July 2023",
      highlight: "text-blue-400",
      points: [
        "Won the Most creative Project at HackConode, organized by MLH & Concode",
        "Create an interactive, responsive blog application named storyteller",
        "Tech Stack-GCP,Node.js,React.js, CSS",
      ],
    },
    IVY: {
      name: "IVY UNIFY",
      logo: "/images/concode.jpeg",
      background: "moving-gradient-1",
      position: "OPEN SOURCE CONTRIBUTOR",
      start: "November 2023",
      end: "Current",
      highlight: "text-blue-400",
      points: [
        "hired for a freelance gig on upwork to work on the open source codebase of IVY-UNIFY",
        "Currently working on the integration of neural network model on frontend",
      ],
    },
    IIT: {
      name: "IIT Bombay",
      logo: "/images/iit_b.jpeg",
      background: "moving-gradient-1",
      position: "Research Intern",
      start: "April 2024",
      end: "Current",
      highlight: "text-blue-400",
      points: [
        // "hired for a freelance gig on upwork to work on the open source codebase of IVY-UNIFY",
        "Currently working as a Research Intern at IIT Bombay, focusing on innovative GAN-Based Missing Data Imputation techniques",
      ],
    },
    Infiheal: {
      name: "Infiheal",
      logo: "/images/infiheal_logo.png",
      background: "moving-gradient-1",
      position: "Full Stack Web Developer",
      start: "October 2023",
      end: "Current",
      highlight: "text-blue-400",
      points: [
        "Developed Flask REST framework-based APIs for an NLP-based client matching Therapist dashboard.",
        "Worked on a Mental Health Chatbot within an Agile framework, employing Angular for client side logic,Flask and node.js for backend APIs.Implemented containerization using Docker, and hosted the API’s on an AWS EC2 instance and client side images on AWS S3 for better performance.",
      ],
    },
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="300"
      className="relative h-[240vh] sm:h-[200vh] "
    >
      <div
        className="w-screen h-[50vh] xs:h-[40vh]  sm:w-[70vh] sm:h-[40vh] bg-pink-300 absolute left-0 top-0 z-0 rounded-full blur-[300px]"
        style={{
          display: isFirefox ? "none" : "block",
        }}
      />
      {/* <div className="w-0 h-[40vh]  sm:w-[70vh] sm:h-[20vh] bg-pink-300 absolute right-0 bottom-[30vh] rounded-full blur-[300px]" /> */}
      <div className="font-bold text-[#C5D0DC] text-5xl sm:text-7xl pt-20 sm:pl-10 mx-5 md:mx-10">
        003
      </div>
      <div className="flex flex-wrap justify-start sm:justify-end items-center  mt-5 sm:mt-0 sm:mx-5 md:mx-10 text-3xl sm:text-5xl md:text-7xl font-bold  ">
        <div className="mx-5 md:mx-0">
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className="text-end text-4xl md:text-7xl pb-5 sm:pb-10 bg-gradient-to-r from-[#ECFDFE] to-[#86A1F6] bg-clip-text text-transparent "
          >
            EXPERIENCE
          </div>
        </div>
      </div>
      <div className="text-white w-full h-full flex flex-col items-center mt-10 mb-10">
        <div className="w-[36vh] xs:w-[46vh] sm:w-[100vh] h-[50vh] bg-white  relative">
          <div className="h-full w-full flex justify-center items-center cursor-pointer">
            <Image
              data-aos="fade-down"
              src="/photos/s4ds.png"
              width={200}
              height={400}
              className="fit-content"
              alt="s4ds"
            />
            <div
              data-aos="fade-up"
              className="absolute h-full w-full p-5 sm:p-10 md:p-5 hover:bg-gray-800/80 hover:backdrop-blur-lg text-transparent hover:text-black top-0 left-0 transition-transform transform translateY-0 hover:translateY-100 "
            >
              {/* main content starts */}
              <div className="h-full w-full opacity-0 hover:opacity-100 overflow-y-scroll">
                <h1 className="font-bold text-gray-200  text-xl lg:text-2xl">
                  {experiences["dj-sd4s"].position}
                </h1>
                <h1 className="font-bold {experience.highlight} text-lg text-[#4ADD80] lg:text-lg mb-1">
                  @{experiences["dj-sd4s"].name}
                </h1>
                <p className="text-gray-200 mb-5 font-mono text-md">
                  <time>{experiences["dj-sd4s"].start}</time> -{" "}
                  <time>{experiences["dj-sd4s"].end}</time>
                </p>
                <ul className="text-base font-semibold   list-square ml-4">
                  {experiences["dj-sd4s"].points.map((point, index) => (
                    <li className="square-list-item text-white" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* main content ends */}
            </div>
          </div>
        </div>

        <div className="sm:flex w-[36vh] xs:w-[46vh] sm:w-[100vh] h-[100vh] sm:h-[50vh] ">
          <div className="moving-gradient-1 w-[36vh] xs:w-[46vh] sm:w-[50vh] h-[50vh] sm:h-full  flex justify-center items-center relative cursor-pointer">
            <Image
              data-aos="fade-down"
              src="/photos/arb.jpeg"
              width={200}
              height={400}
              className="fit-content"
              alt="s4ds"
            />
            <div
              data-aos="fade-up"
              className="absolute h-full w-full p-5 sm:p-10 md:p-5 hover:bg-gray-800/80 hover:backdrop-blur-lg text-transparent hover:text-black top-0 left-0 transition-transform transform translateY-0 hover:translateY-100 "
            >
              {/* main content starts */}
              <div className="h-full w-full opacity-0 hover:opacity-100 overflow-y-scroll">
                <h1 className="font-bold text-gray-200  text-xl lg:text-2xl">
                  {experiences["arb"].position}
                </h1>
                <h1 className="font-bold {experience.highlight} text-lg text-[#4ADD80] lg:text-lg mb-1">
                  @{experiences["arb"].name}
                </h1>
                <p className="text-gray-200 mb-5 font-mono text-md">
                  <time>{experiences["arb"].start}</time> -{" "}
                  <time>{experiences["arb"].end}</time>
                </p>
                <ul className="text-base font-semibold   list-square ml-4">
                  {experiences["arb"].points.map((point, index) => (
                    <li className="square-list-item text-white" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* main content ends */}
            </div>
          </div>
          {/* <div className="moving-gradient-1 w-[42vh] xs:w-[50vh] h-[50vh] sm:h-full  flex justify-center items-center relative cursor-pointer">
            <Image
              data-aos="fade-down"
              src="/photos/ivy.png"
              width={200}
              height={400}
              className="fit-content bg-black"
              alt="s4ds"
            />
            <div
              data-aos="fade-up"
              className="absolute h-full w-full p-5 sm:p-10 md:p-5 hover:bg-gray-800/80 hover:backdrop-blur-lg text-transparent hover:text-black top-0 left-0 transition-transform transform translateY-0 hover:translateY-100 "
            > */}
              {/* main content starts */}
              {/* <div className="h-full w-full opacity-0 hover:opacity-100 overflow-y-scroll">
                <h1 className="font-bold text-gray-200  text-xl lg:text-2xl">
                  {experiences["IVY"].position}
                </h1>
                <h1 className="font-bold {experience.highlight} text-lg text-[#4ADD80] lg:text-lg mb-1">
                  @{experiences["IVY"].name}
                </h1>
                <p className="text-gray-200 mb-5 font-mono text-md">
                  <time>{experiences["IVY"].start}</time> -{" "}
                  <time>{experiences["IVY"].end}</time>
                </p>
                <ul className="text-base font-semibold   list-square ml-4">
                  {experiences["IVY"].points.map((point, index) => (
                    <li className="square-list-item text-white" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* main content ends */}
            {/* </div> */}
          <div className="moving-gradient-1 w-[36vh] xs:w-[46vh] sm:w-[50vh] h-[50vh] sm:h-full  flex justify-center items-center relative cursor-pointer">
            <Image
              data-aos="fade-down"
              src="/photos/iit_b.png"
              width={200}
              height={400}
              className="fit-content bg-white"
              alt="s4ds"
            />
            <div
              data-aos="fade-up"
              className="absolute h-full w-full p-5 sm:p-10 md:p-5 hover:bg-gray-800/80 hover:backdrop-blur-lg text-transparent hover:text-black top-0 left-0 transition-transform transform translateY-0 hover:translateY-100 "
            >
              {/* main content starts */}
              <div className="h-full w-full opacity-0 hover:opacity-100 overflow-y-scroll">
                <h1 className="font-bold text-gray-200  text-xl lg:text-2xl">
                  {experiences["IIT"].position}
                </h1>
                <h1 className="font-bold {experience.highlight} text-lg text-[#4ADD80] lg:text-lg mb-1">
                  @{experiences["IIT"].name}
                </h1>
                <p className="text-gray-200 mb-5 font-mono text-md">
                  <time>{experiences["IIT"].start}</time> -{" "}
                  <time>{experiences["IIT"].end}</time>
                </p>
                <ul className="text-base font-semibold   list-square ml-4">
                  {experiences["IIT"].points.map((point, index) => (
                    <li className="square-list-item text-white" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* main content ends */}
            </div>
          </div>
        </div>

        <div className="w-[36vh] xs:w-[46vh] sm:w-[100vh] h-[50vh] bg-[#d8d8d7] border-t border-gray-200  relative cursor-pointer">
          <div className="h-full w-full flex justify-center items-center">
            <Image
              data-aos="fade-down"
              src="/photos/infiheal_logo.png"
              width={200}
              height={400}
              className="fit-content"
              alt="infiheal"
            />
            <div
              data-aos="fade-up"
              className="absolute h-full w-full p-5 sm:p-10 md:p-5 hover:bg-gray-800/80 hover:backdrop-blur-lg text-transparent hover:text-black top-0 left-0 transition-transform transform translateY-0 hover:translateY-100 "
            >
              {/* main content starts */}
              <div className="h-full w-full opacity-0 hover:opacity-100 overflow-y-scroll">
                <h1 className="font-bold text-gray-200  text-xl lg:text-2xl">
                  {experiences["Infiheal"].position}
                </h1>
                <h1 className="font-bold {experience.highlight} text-lg text-[#4ADD80] lg:text-lg mb-1">
                  @{experiences["Infiheal"].name}
                </h1>
                <p className="text-gray-200 mb-5 font-mono text-md">
                  <time>{experiences["Infiheal"].start}</time> -{" "}
                  <time>{experiences["Infiheal"].end}</time>
                </p>
                <ul className="text-base font-semibold   list-square ml-4">
                  {experiences["Infiheal"].points.map((point, index) => (
                    <li className="square-list-item text-white" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* main content ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
