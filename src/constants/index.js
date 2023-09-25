import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  bash,
  express,
  framerMotion,
  heroku,
  illustrator,
  jest,
  postgres,
  postman,
  threejs,
  vscode,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  chilis,
  lobi,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Design & Development",
    icon: web,
  },
  {
    title: "Full Stack Software",
    icon: mobile,
  },
  {
    title: "React Native Apps",
    icon: backend,
  },
  {
    title: "Databases and APIs",
    icon: creator,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "framerMotion",
    icon: framerMotion,
  },
  {
    name: "heroku",
    icon: heroku,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "jest",
    icon: jest,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "vscode",
    icon: vscode,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Lobi Software Studio",
    icon: lobi,
    iconBg: "black",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and accessibility and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Kitchen Manager",
    company_name: "Chili's",
    icon: chilis,
    iconBg: "#E6DEDD",
    date: "March 2022 - Feb 2023",
    points: [
      "Worked as a management team to achieve the highest unit sales in the State of Utah.",
      "Managed a staff of 30+ employees and utilized proprietary technology and performance metrics.",
      "Increased employee wages by 5% for top performers and 1% across HOH (kitchen), while increasing productivity by 1% and reducing labor as a percentage of revenue by 2%",
      "Achieved the top score among all managers in Northern Utah based on advanced performance metrics.",
    ],
  },
  {
    title: "Owner/Founder",
    company_name: "Snoots Pet Care",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Aug 2016 - April 2022",
    points: [
      "Managed and served a base of 100+ clients performing and overseeing pet care services, including dog walking, cat sitting, exotic animal care, and medication administration.",
      "Achieved a client turnover rate of <1% and an employee turnover rate of <33% over the life of the company.",
      "Increased revenue by 300+% from 2021-2022, at the height of the Covid-19 pandemic.",
      "Managed a small employee base through third-party technology to ensure a quality company culture and high standard of consistent care.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
