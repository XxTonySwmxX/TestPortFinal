import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress, Figma, Shopify",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Deco3Ddesign",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed responsive website for Danish architectural firm.",
      "Showcased design expertise",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Demonstrated proficiency in web development.",
    ],
  },
  {
    title: "Babylon Js Developer",
    companyName: "SuperNova CNFT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jul 2022",
    points: [
      "Contributed as a web developer and graphic designer.",
      "Crafted a futuristic 3D responsive website for an NFT project.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Merged technical and creative skills.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Upstart13",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Merged technical and creative skills.",
    ],
  },
  {
    title: "Web Development",
    companyName: "B&G Auto Sales",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Collaborated with Out-Sider (Norway) and B&G Auto Sales (U.S.).",
      "Developed a website for entertainers and artists (Out-Sider).",
      "Custom-designed a responsive website for car sales and purchase (B&G Auto Sales).",
      "Demonstrated adaptability and versatility in global projects.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Sergio's design elevated our entertainment company's website, captivating our audience with creativity and flair.",
    name: "Vegard Kvalvik",
    designation: "CEO",
    company: "SuperNova",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    testimonial:
      "Sergio's dedication to our project was outstanding. He transformed our vision into a stunning, responsive website.",
    name: "Andreas Norlev",
    designation: "CEO",
    company: "Deco3Ddesign",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sergio's custom design elevated our online presence, delivering a responsive website for our automotive business",
    name: "Brian Ladoucer",
    designation: "CTO",
    company: "B&G Auto Sales",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
