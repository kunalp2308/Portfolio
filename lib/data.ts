import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import MyHoliday from "@/public/MyHolidays.png";
import NetflixGPT from "@/public/NetflixGPT.png";
import NotesOrganizer from "@/public/NotesOrginazer.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Digital Specialist Engineer I",
    location: "Infosys, Bangalore",
    description:
      "I worked as a front-end developer for a client project which maintained warehouse stoke, products and fleet management.",
    icon: React.createElement(CgWorkAlt),
    date: " Dec. 2021 - Sep. 2022",
  },
  {
    title: "Digital Specialist Engineer II",
    location: "Infosys, Bangalore",
    description:
      "Successfully developed a responsive and intuitive user interface for a television package ordering application, enhancing the client’s customer experience and streamlining the ordering process.",
    icon: React.createElement(FaReact),
    date: "Oct. 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MyHolidays",
    description:
      "Developed & Implemented secure login, registration with JWT, hotel management, Cloudinary image uploads, and Stripe payments for a seamless user experience.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "TypeScript",
    ],
    imageUrl: MyHoliday,
    link: "https://myholidays-com.onrender.com/",
  },
  {
    title: "NetflixGPT",
    description:
      "Developed a react-based movie suggestion app utilizing the ChatGPT API for personalized recommendations, featuring a Netflix-inspired UI for an intuitive user experience.",
    tags: [
      "React",
      "JavaScript",
      "Redux",
      "Tailwind",
      "Firebase",
      "ChatGPT API",
    ],
    imageUrl: NetflixGPT,
    link: "https://netflixgpt-negk.onrender.com/",
  },
  {
    title: "Notes Organizer",
    description:
      "A React-based Notes Organizer app for managing daily tasks, utilizing localStorage for data persistence. Features include filtering by title and content, and categorization for easy organization.",
    tags: ["React", "JavaScript", "localStorage"],
    imageUrl: NotesOrganizer,
    link: "https://notesorganizerfordailytask.netlify.app/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Redux",
  "Redux Toolkit",
  "Jest",
  "Enzyme",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "Git/Github",
  "Postman",
  "Lens",
  "Python",
  "C++",
] as const;
