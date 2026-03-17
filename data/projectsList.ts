import AuthorityImage from "@/public/images/projects_gallery/authority.png";
import GlanceImage from "@/public/images/projects_gallery/glance.png";
import GroovityImage from "@/public/images/projects_gallery/groovity.png";
import SemicolonImage from "@/public/images/projects_gallery/semicolon.png";
import ChatterboxImage from "@/public/images/projects_gallery/chatterbox.png";
import MnemoImage from "@/public/images/projects_gallery/mnemo.png";

import HTML5 from "@/public/images/stack/html5.svg";
import CSS3 from "@/public/images/stack/css3.svg";
import JS from "@/public/images/stack/javascript.svg";
import JQuery from "@/public/images/stack/jquery.svg";
import TS from "@/public/images/stack/typescript.svg";
import Python from "@/public/images/stack/python.webp";
import React from "@/public/images/stack/react.svg";
import Next from "@/public/images/stack/nextdotjs.svg";
import TanStack from "@/public/images/stack/tanstack.png";
import Node from "@/public/images/stack/nodedotjs.svg";
import Express from "@/public/images/stack/express.svg";
import PostgreSQL from "@/public/images/stack/postgresql.svg";
import MongoDB from "@/public/images/stack/mongodb.svg";
import Convex from "@/public/images/stack/convex-logo.png";
import Prisma from "@/public/images/stack/prisma.svg";
import Drizzle from "@/public/images/stack/drizzle.svg";
import Supabase from "@/public/images/stack/supabase.png";
import Neon from "@/public/images/stack/neon.png";
import EJS from "@/public/images/stack/ejs.svg";
import MUI from "@/public/images/stack/mui.svg";
import Shadcn from "@/public/images/stack/shadcnui.svg";
import DaisyUI from "@/public/images/stack/daisyui.svg";
import Tailwind from "@/public/images/stack/tailwindcss.svg";
import SASS from "@/public/images/stack/sass.svg";
import TensorFlow from "@/public/images/stack/tensorflow.svg";
import PyTorch from "@/public/images/stack/pytorch.svg";
import Scikit from "@/public/images/stack/scikitlearn.svg";
import HuggingFace from "@/public/images/stack/hf-logo.webp";
import Git from "@/public/images/stack/git.svg";
import GitHub from "@/public/images/stack/github.svg";
import Postman from "@/public/images/stack/postman.svg";
import Docker from "@/public/images/stack/docker.svg";
import JSON from "@/public/images/stack/json.svg";
import Markdown from "@/public/images/stack/markdown.svg";

export const projectsList = [
  {
    image: SemicolonImage,
    title: "Semicolon",
    link: "https://semicolon-two.vercel.app/",
    tag: "A code playground with a slice of social media goodness",
    techStack: ["TypeScript", "Tailwind", "Next.js", "Convex"],
    description:
      "A NextJS, web-based code editor/playground that supports various different languages and sharing code snippets. Users can browse through the shared snippets with the help of a comprehensive search bar, as well as, leave comments, and add snippets to 'favorites'. Every user can access their profile to check various stats and shared snippets.",
  },
  {
    image: GroovityImage,
    title: "Groovity",
    link: "https://groovity.onrender.com/",
    tag: "A web app to play music and chat with friends in real-time",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Socket.io",
    ],
    description:
      "A web app for playing music, made with MERN. Contains an admin panel for organizing, deleting, and adding songs and albums. Shows friends' activity and allows chatting with them in real-time.",
  },
  {
    image: GlanceImage,
    title: "Glance",
    link: "https://glance-3pwz.onrender.com/",
    tag: "An open source X clone",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "TypeScript",
      "Tailwind",
    ],
    description:
      "A Twitter/X clone that supports various features, such as following, adding posts and comments, liking, profile page customization, posts filtering, among others. Made with MERN. Supports logging in and signing up, with proper cookies and sessions creation.",
  },
  {
    image: AuthorityImage,
    title: "Authority",
    link: "https://authority-sigma.vercel.app/",
    tag: "A comprehensive and reusable authentication toolkit",
    techStack: [
      "NextJS",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "TypeScript",
      "Tailwind",
    ],
    description:
      "A comprehensive authentication toolkit. Supports authentication using credentials, OAuth (Google & GitHub), password verification and restoration, email verification, cookies and sessions creation, etc... Made with NextJS and Auth.js.",
  },
  {
    image: ChatterboxImage,
    title: "Chatterbox",
    link: "https://chatterbox-mgsj.onrender.com/",
    tag: "A visually appealing, real-time chatting app",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "JavaScript",
      "Tailwind",
      "DaisyUI",
      "Socket.io",
    ],
    description:
      "A MERN, real-time messaging app, that allows image and text sharing. Supports profile customization, an online status indication, and more. Provides a wide variety of themes to choose from, provided by DaisyUI.",
  },
  {
    image: MnemoImage,
    title: "Mnemo.ai",
    link: "https://mnemo-ai-mu.vercel.app",
    tag: "A note taking app with AI summarization capabilities",
    techStack: [
      "NodeJS",
      "TypeScript",
      "NextJS",
      "Tailwind",
      "Supabase",
      "Puter.js",
    ],
    description:
      "A web app for taking notes. Offers full CRUD capabilities, as well as AI note summarization and question answering. Supports full log in and sign up flows.",
  },
];

export const myStack = [
    {
        name: "Basic",
        stack: [
            {
                id: 0,
                title: "HTML5",
                icon: HTML5
            },
            {
                id: 1,
                title: "CSS3",
                icon: CSS3
            },
            {
                id: 2,
                title: "JavaScript",
                icon: JS
            },
            {
                id: 3,
                title: "JQuery",
                icon: JQuery
            },
            {
                id: 4,
                title: "TypeScript",
                icon: TS
            },
            {
                id: 5,
                title: "Python",
                icon: Python
            },
        ]
    },
    {
        name: "Frontend",
        stack: [
            {
                id: 0,
                title: "ReactJS",
                icon: React
            },
            {
                id: 1,
                title: "Tailwind",
                icon: Tailwind
            },
            {
                id: 2,
                title: "SASS",
                icon: SASS
            },
            {
                id: 3,
                title: "Shadcn",
                icon: Shadcn
            },
            {
                id: 4,
                title: "MaterialUI",
                icon: MUI
            },
            {
                id: 5,
                title: "DaisyUI",
                icon: DaisyUI
            }
        ]
    },
    {
        name: "Backend",
        stack: [
            {
                id: 0,
                title: "NodeJS",
                icon: Node
            },
            {
                id: 1,
                title: "ExpressJS",
                icon: Express
            },
            {
                id: 2,
                title: "EJS",
                icon: EJS
            }
        ]
    },
    {
        name: "Fullstack",
        stack: [
            {
                id: 1,
                title: "NextJS",
                icon: Next
            },
            {
                id: 2,
                title: "TanStack",
                icon: TanStack
            }
        ]
    },
    {
        name: "DBMSs",
        stack: [
            {
                id: 0,
                title: "PostgreSQL",
                icon: PostgreSQL
            },
            {
                id: 1,
                title: "MongoDB",
                icon: MongoDB
            },
            {
                id: 2,
                title: "Supabase",
                icon: Supabase
            },
            {
                id: 3,
                title: "Convex",
                icon: Convex
            },
            {
                id: 4,
                title: "Neon",
                icon: Neon
            },
            {
                id: 5,
                title: "Prisma",
                icon: Prisma
            },
            {
                id: 6,
                title: "Drizzle",
                icon: Drizzle
            },
        ]
    },
    {
        name: "ML",
        stack: [
            {
                id: 0,
                title: "TensorFlow",
                icon: TensorFlow
            },
            {
                id: 1,
                title: "PyTorch",
                icon: PyTorch
            },
            {
                id: 2,
                title: "Scikit-Learn",
                icon: Scikit
            },
            {
                id: 3,
                title: "HuggingFace",
                icon: HuggingFace
            }
        ]
    },
    {
        name: "Misc.",
        stack: [
            {
                id: 0,
                title: "Git",
                icon: Git
            },
            {
                id: 1,
                title: "GitHub",
                icon: GitHub
            },
            {
                id: 2,
                title: "Postman",
                icon: Postman
            },
            {
                id: 3,
                title: "Docker",
                icon: Docker
            },
            {
                id: 4,
                title: "JSON",
                icon: JSON
            },
            {
                id: 5,
                title: "Markdown",
                icon: Markdown
            },
        ]
    }
];
