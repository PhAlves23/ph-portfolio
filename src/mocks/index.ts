import {
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiInstagram,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { FaCode, FaFigma, FaMobile } from "react-icons/fa";

export const headerLinks = [
  {
    id: 1,
    label: "Home",
    path: "#",
  },
  {
    id: 2,
    label: "Serviços",
    path: "#services",
  },
  {
    id: 3,
    label: "Projetos",
    path: "#projects",
  },
  {
    id: 4,
    label: "Sobre",
    path: "#about",
  },
  {
    id: 5,
    label: "Contato",
    path: "#contact",
  },
  {
    id: 6,
    label: "Blog",
    path: "/blog",
  },
];

export const projectsItems = [
  {
    id: 1,
    title: "Finance Landing Page",
    description: "Complete Landing Page",
    image: "/financial_landing.png",
    tools: [
      {
        id: 1,
        name: "Next.js",
        path: SiNextdotjs,
      },
      {
        id: 2,
        name: "React.js",
        path: SiReact,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: SiTailwindcss,
      },
      {
        id: 4,
        name: "Git",
        path: SiGit,
      },
    ],
  },
  {
    id: 2,
    title: "Finance Landing Page",
    description: "Complete Landing Page",
    image: "/financial_landing.png",
    tools: [
      {
        id: 1,
        name: "Next.js",
        path: SiNextdotjs,
      },

      {
        id: 2,
        name: "Tailwind CSS",
        path: SiTailwindcss,
      },
      {
        id: 3,
        name: "Git",
        path: SiGit,
      },
      {
        id: 4,
        name: "Nest.js",
        path: SiNestjs,
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: SiPostgresql,
      },
    ],
  },
  {
    id: 3,
    title: "Finance Landing Page",
    description: "Complete Landing Page",
    image: "/financial_landing.png",
    tools: [
      {
        id: 1,
        name: "Next.js",
        path: SiNextdotjs,
      },
      {
        id: 2,
        name: "React.js",
        path: SiReact,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: SiTailwindcss,
      },
      {
        id: 4,
        name: "Git",
        path: SiGit,
      },
    ],
  },
  {
    id: 4,
    title: "Finance Landing Page",
    description: "Complete Landing Page",
    image: "/financial_landing.png",
    tools: [
      {
        id: 1,
        name: "Next.js",
        path: SiNextdotjs,
      },
      {
        id: 2,
        name: "React.js",
        path: SiReact,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: SiTailwindcss,
      },
      {
        id: 4,
        name: "Git",
        path: SiGit,
      },
    ],
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: SiInstagram,
    label: "Instagram",
    path: "https://www.instagram.com/ph.alves.dev/",
  },
  {
    id: 2,
    icon: SiLinkedin,
    label: "Linkedin",
    path: "https://www.linkedin.com/in/ph-alves/",
  },
  {
    id: 3,
    icon: SiGithub,
    label: "GitHub",
    path: "https://github.com/PhAlves23",
  },
];

export const serviceItems = [
  {
    id: 1,
    icon: FaCode,
    title: "Criação de sites",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi minus distinctio architecto, quam, facere error eos iure rem alias.",
  },
  {
    id: 2,
    icon: FaFigma,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi minus distinctio architecto, quam, facere error eos iure rem alias.",
  },
  {
    id: 3,
    icon: FaMobile,
    title: "Site responsivos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi minus distinctio architecto, quam, facere error eos iure rem alias.",
  },
];
