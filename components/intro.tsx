"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import profile_pic from "../public/profilePic.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export const Intro = () => {
  const ease = [0.43, 0.13, 0.23, 0.96];
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className=" flex items-center justify-center">
        <div className=" relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile_pic}
              alt="profile_pic"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.div
            className=" absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.div>
        </div>
      </div>
      <motion.h1
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="font-bold">Hello, I'm Kunal.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span>web application</span>. My focus is specially{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className=" flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-700"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className=" group bg-white  px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="  bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full
        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
         cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/philomathkunal/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="  bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full
        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
         cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/kunalp2308"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
