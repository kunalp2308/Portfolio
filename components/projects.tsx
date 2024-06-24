"use client";

import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import { Project } from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.4);
  return (
    <section id="projects" className=" scroll-mt-28 mb-28" ref={ref}>
      <h2 className=" text-3xl font-medium capitalize mb-8 text-center">
        My Projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Link href={project.link} target="_blank">
              <Project {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
