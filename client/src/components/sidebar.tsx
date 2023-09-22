import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Add a scroll event listener to track scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY < lastScrollY ? true : false);
      if (scrollY === 0) {
        setIsScrolled(false);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function scrollto(idPath: string, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault(); // Prevent the default behavior of anchor tags

    console.log(idPath);
    setIsOpen(false);
    const aboutSection = document.getElementById(idPath);
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  return (
    <div className="z-[2] fixed">
      {!isOpen && (
        <div
          className={`fixed top-0 left-0 w-screen  ${
            isScrolled ? "bg-violet-900" : ""
          }`}
        >
          <svg
            onClick={toggleSidebar}
            className={`ml-5 mt-2 mb-2 md:mt-5 md:mb-5 md:ml-10 cursor-pointer ${
              isScrolled ? "fill-white" : "fill-black h-[3em]"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed text-white inset-y-0 left-0 w-96  bg-gradient-to-b from-indigo-900 to-purple-900  border-r border-purple-900"
          >
            <svg
              onClick={toggleSidebar}
              className=" cursor-pointer ml-5 mt-5 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="3em"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/* </button> */}
            {/* </div> */}

            {/* Sidebar Links */}
            <nav className="md:flex flex-col h-full ml-7 mt-20 text-3xl">
              <ul>
                <li data-aos="fade-left" data-aos-delay="50">
                  <a href="#" onClick={(e) => scrollto("home", e)}>
                    <i className="fas fa-home mr-5 w-10"></i>Home
                  </a>
                </li>
                <li className="mt-5" data-aos="fade-right" data-aos-delay="100">
                  <a href="#" onClick={(e) => scrollto("about", e)}>
                    {" "}
                    <i className="fas fa-user mr-5 w-7"></i> ABOUT ME
                  </a>
                </li>
                <li className="mt-5" data-aos="fade-up" data-aos-delay="150">
                  <a href="#" onClick={(e) => scrollto("development", e)}>
                    <i className="fas fa-code mr-5"></i>DEVELOPMENT
                  </a>
                </li>
                <li className="mt-5" data-aos="fade-down" data-aos-delay="200">
                  <a href="#" onClick={(e) => scrollto("experience", e)}>
                    <i className="fas fa-briefcase mr-5 w-10 "></i>EXPERIENCE
                  </a>
                </li>
                <li className="mt-5" data-aos="fade-left" data-aos-delay="250">
                  <a href="#" onClick={(e) => scrollto("contact", e)}>
                    <i className="fas fa-envelope mr-5 w-10"></i>CONTACT
                  </a>
                </li>
                <li className="mt-5" data-aos="fade-right" data-aos-delay="300">
                  <a
                    href="#"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ajitesh-dubey-4b5852220/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fas fa-file-alt mr-5 w-10"></i>RESUME
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
