import HTML5 from "@/public/assets/images/stack/html5.svg";
import CSS3 from "@/public/assets/images/stack/css3.svg";
import JS from "@/public/assets/images/stack/javascript.svg";
import JQuery from "@/public/assets/images/stack/jquery.svg";
import TS from "@/public/assets/images/stack/typescript.svg";
import Python from "@/public/assets/images/stack/python.webp";
import React from "@/public/assets/images/stack/react.svg";
import Next from "@/public/assets/images/stack/nextdotjs.svg";
import Node from "@/public/assets/images/stack/nodedotjs.svg";
import Express from "@/public/assets/images/stack/express.svg";
import PostgreSQL from "@/public/assets/images/stack/postgresql.svg";
import MongoDB from "@/public/assets/images/stack/mongodb.svg";
import Convex from "@/public/assets/images/stack/convex-logo.png";
import Prisma from "@/public/assets/images/stack/prisma.svg";
import Motoko from "@/public/assets/images/stack/motoko.webp";
import EJS from "@/public/assets/images/stack/ejs.svg";
import MUI from "@/public/assets/images/stack/mui.svg";
import Shadcn from "@/public/assets/images/stack/shadcnui.svg";
import DaisyUI from "@/public/assets/images/stack/daisyui.svg";
import Tailwind from "@/public/assets/images/stack/tailwindcss.svg";
import SASS from "@/public/assets/images/stack/sass.svg";
import TensorFlow from "@/public/assets/images/stack/tensorflow.svg";
import PyTorch from "@/public/assets/images/stack/pytorch.svg";
import Scikit from "@/public/assets/images/stack/scikitlearn.svg";
import HuggingFace from "@/public/assets/images/stack/hf-logo.webp";
import Git from "@/public/assets/images/stack/git.svg";
import GitHub from "@/public/assets/images/stack/github.svg";
import Postman from "@/public/assets/images/stack/postman.svg";
import Docker from "@/public/assets/images/stack/docker.svg";
import ICP from "@/public/assets/images/stack/internetcomputer.svg";
import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

export default function Stack() {
    return (
        <Card title="Tech Stack">
            <div className="flex flex-col gap-5 mt-2">
                {
                    myStack.map((item, i) => (
                        <div key={i} className="grid items-center gap-9" style={{ gridTemplateColumns: "50px 1fr" }}>
                            {/* Stack type */}
                            <div className="flex flex-wrap break-words whitespace-pre">
                                <p className="text-secondary-foreground">{item.name}</p>
                            </div>
                            {/* Individual stack item */}
                            <div className="flex flex-wrap gap-3">
                                {item.stack.map((entry) => (
                                    <Tooltip
                                        key={entry.id}
                                        title={entry.title}
                                        icon={entry.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </Card>
    );
}

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
                title: "MaterialUI",
                icon: MUI
            },
            {
                id: 4,
                title: "Shadcn",
                icon: Shadcn
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
            },
            {
                id: 3,
                title: "Motoko",
                icon: Motoko
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
            }
        ]
    },
    {
        name: "DBs",
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
                title: "Convex",
                icon: Convex
            },
            {
                id: 3,
                title: "Prisma",
                icon: Prisma
            }
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
                title: "Internet Computer",
                icon: ICP
            }
        ]
    }
];