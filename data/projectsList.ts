import AuthorityImage from "@/public/images/projects_gallery/authority.png";
import GlanceImage from "@/public/images/projects_gallery/glance.png";
import GroovityImage from "@/public/images/projects_gallery/groovity.png";
import SemicolonImage from "@/public/images/projects_gallery/semicolon.png";
import ChatterboxImage from "@/public/images/projects_gallery/chatterbox.png";

const projectsList = [
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
      "A web app for playing music and chatting with friends in real-time, made with MERN. Contains an admin panel for organizing, deleting, and adding songs and albums. Shows friends' activity in real-time.",
  },
  {
    image: GlanceImage,
    title: "Glance",
    link: "https://glance-3pwz.onrender.com/",
    tag: "An open source Twitter/X clone",
    techStack: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "TypeScript",
      "Tailwind",
    ],
    description:
      "A Twitter/X clone that supports various features, such as following, adding posts and comments, liking, profile page customization, posts filtering, among others. Made with MERN. Supports logging in and signing up, and proper cookies and sessions creation.",
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
      "A comprehensive, and reusable authentication toolkit. Supports authentication using credentials, OAuth (Google & GitHub), password verification and restoration, email verification, cookies and sessions creation, etc... Made with NextJS and Auth.js.",
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
      "A MERN, real-time messaging app, that allows image and text sharing. Supports profile customization, online status indication, and more. Provides a wide variety of themes to choose from.",
  },
];

export default projectsList;
