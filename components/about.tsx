"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-34 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className=" text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3">
        I'm working as{" "}
        <span className="font-medium">full-stack web development</span> in my
        current organisation. My technical expertise lies in{" "}
        <span className="font-medium">JavaScript,</span> with a focus on
        frameworks and libraries such as{" "}
        <span className="font-medium"> React.js </span> and{" "}
        <span className="font-medium"> Next.js </span> for{" "}
        <span className="font-medium"> front-end development </span>,{" "}
        <span className="font-medium"> Node.js </span> and{" "}
        <span className="font-medium"> Express.js </span> for
        <span className="font-medium"> back-end services </span>, and
        <span className="font-medium"> MongoDB </span> &{" "}
        <span className="font-medium"> MongoDB </span> for
        <span className="font-medium"> database management. </span>{" "}
        Additionally, I am also familiar with{" "}
        <span className="font-medium">TypeScript</span>, and I have utilized CSS
        frameworks like <span className="font-medium"> Tailwind </span> and
        <span className="font-medium"> MaterialUI</span> to create visually
        appealing, responsive and user-friendly interfaces.
      </p>
    </motion.section>
  );
};
