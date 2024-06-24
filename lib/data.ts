import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
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
    title: "Digital Specialist Engineer, Infosys Ltd.",
    project: "Warehouse Management Application",
    description:
      "Developed a responsive and user-friendly UI for a warehouse management system using React.js utilized Redux for state management, Ag-Grid for large data display, and Material UI for design enhancements.",
    icon: React.createElement(FaReact),
    date: " Dec. 2021 - Sep. 2022",
  },
  {
    title: "Digital Specialist Engineer, Infosys Ltd.",
    project: "Television Subscription Service Application",
    description:
      "Developed and implemented a responsive, user-friendly interface for a TV subscription service application, ensuring seamless navigation and an intuitive user experience using Next.js, React.js, ContextAPI& Material UI.",
    icon: React.createElement(RiNextjsFill),
    date: "Oct. 2022 - Jan 2024",
  },
  {
    title: "Digital Specialist Engineer, Infosys Ltd.",
    project: "Middle-ware Service Application",
    description:
      " Designed and implemented a middle-ware service to monitor, validate, and log requests and responses between multiple source and target systems, enhancing data integrity and system reliability. Collaborated with team in automating the deployment of 50+ services using Docker and Kubernetes.",
    icon: React.createElement(FaNode),
    date: "Feb. 2024 - present",
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
