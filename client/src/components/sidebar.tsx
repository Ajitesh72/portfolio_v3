import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[2] fixed">
        {!isOpen&&
        <svg onClick={toggleSidebar} className="ml-5 mt-5 md:ml-10 cursor-pointer" fill="" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        }
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed text-white inset-y-0 left-0 w-96 bg-gradient-to-b from-indigo-900 to-purple-900  border-r border-purple-900"
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
                <li>
                  <Link href="/"><i className="fas fa-home mr-5 w-10"></i>Home</Link>
                </li>
                <li className="mt-5">
                  <Link href="/about">  <i className="fas fa-user mr-5 w-7"></i> ABOUT ME</Link>
                </li>
                <li className="mt-5">
                  <Link href="/about"><i className="fas fa-code mr-5"></i>DEVELOPMENT</Link>
                </li>
                <li className="mt-5">
                  <Link href="/about"><i className="fas fa-briefcase mr-5 w-10 "></i>EXPERIENCE</Link>
                </li>
                <li className="mt-5">
                  <Link href="/about"><i className="fas fa-envelope mr-5 w-10"></i>CONTACT</Link>
                </li>
                <li className="mt-5">
                  <Link href="/about"><i className="fas fa-file-alt mr-5 w-10"></i>RESUME</Link>
                </li>
                {/* Add more sidebar links as needed */}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
