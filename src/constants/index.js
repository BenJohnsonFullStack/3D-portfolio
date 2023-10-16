import {
  mobile,
  backend,
  creator,
  web,
  express,
  framerMotion,
  heroku,
  illustrator,
  jest,
  postgres,
  threejs,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  chilis,
  lobi,
  gardenom,
  portfolio,
  jobit,
  www,
  sherri,
  esraa,
  cart,
  chatbot,
  github,
  instagram,
  linkedin,
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

const socials = [
  {
    id: 1,
    title: "github",
    icon: github,
    url: "https://github.com/BenJohnsonFullStack",
  },
  {
    id: 2,
    title: "instagram",
    icon: instagram,
    url: "https://www.instagram.com/lobi_software_studio/",
  },
  {
    id: 3,
    title: "linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/benjohnsonfullstack/",
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
    name: "jest",
    icon: jest,
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
    name: "postgres",
    icon: postgres,
  },
  {
    name: "threejs",
    icon: threejs,
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
      "Ben's work was professional and captivating. He truly captured the essence of our unique yoga business.",
    name: "Sherri Johnston",
    designation: "President",
    company: "Abella Health",
    image: sherri,
  },
  {
    testimonial:
      "Ben isn't just a proficient developer, but also possesses the mindset of a technology architect. Highly recommend.",
    name: "Esraa Qandeel",
    designation: "Senior Developer",
    company: "Trilogy",
    image: esraa,
  },
  {
    testimonial:
      "Ben excels in technical skill acquisition and goes above and beyond expectations in his work.",
    name: "Rachel Cohen",
    designation: "Director - Operations & Coaching",
    company: "BloomTech",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEwf0_Zo-Y_xg/profile-displayphoto-shrink_800_800/0/1517728346849?e=1702512000&v=beta&t=ukxKY278CWhqCGGTRdzXMx4gImaWslhHC0RsZh46VfI",
  },
];

const projects = [
  {
    name: "3D Web Portfolio",
    description:
      "A portfolio web application featuring the Three.js and Framer Motion libraries, built to highlight an individual full stack developer's work experience and development projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    live_icon: www,
    source_code_link: "https://github.com/BenJohnsonFullStack/3D-portfolio",
    live_url: null,
  },
  {
    name: "Garden Om Yoga",
    description:
      " A web-based platform that allows users to browse service offerings, book classes, process online payments, and subscribe to newsletters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: gardenom,
    live_icon: www,
    source_code_link: "https://github.com/BenJohnsonFullStack/garden-om-site",
    live_url: "https://www.gardenomyoga.com/",
  },
  {
    name: "Jobit Mobile App",
    description:
      "An Android and iOS compatible mobile app that empowers users to search and apply for tech jobs that match their unique skills and qualifications.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    live_icon: www,
    source_code_link: "https://github.com/BenJohnsonFullStack/jobit",
    live_url:
      "https://expo.dev/accounts/lobisoftwarestudio/projects/jobit/updates/feb374d0-f7a9-4264-88de-675cad706b86",
  },
  {
    name: "Online Shopping Cart",
    description:
      "A fully responsive shopping cart that allows users to add and remove items. Implements quantity and price calculation and Local Storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cart,
    live_icon: null,
    source_code_link: "https://github.com/BenJohnsonFullStack/shopping-cart",
    live_url: null,
  },
  {
    name: "OpenAI Chatbot",
    description:
      "A personal chatbot assistant utilizing the OpenAI GPT 3.5 Turbo engine. Features include an automatic scroll and prisma database storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    live_icon: null,
    source_code_link: "https://github.com/BenJohnsonFullStack/chatbot",
    live_url: null,
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
