import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  Gsap,
  Locomotive,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets/";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer/Beginer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Three Js",
    icon: threejs,
  },
  // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
      //   name: "Redux Toolkit",
      //   icon: redux,
      // },
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
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

];

const projects = [

  {
    name: "Hayasaka",
    description:
      "A dynamic full-stack music streaming web application.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to Manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can Create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
      "PWA (Progressive Web App) support. ",
    ],
    tags: [
    ],
    image: carrent,
    source_code_link: "https://",
    live_link: "https://",
  },
 
];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
