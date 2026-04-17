import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import type { Skill } from "../types/skillData";

 export  const Skills:Skill[] = [
        {  id:1,
            Icon: FaHtml5, 
            name:"HTML",
            text:"HyperText Markup Language, Used to structure the website. "
        },
        {
           id:2,
           Icon: FaCss3Alt,
           name:"CSS",
           text:"Cascading Style Sheets, Used for style the website."

        },{
            id:3,
            Icon: IoLogoJavascript,
            name:"JavaScript",
            text:"Used for making website alive and interactive."
        }, {
            id:4,
            Icon: SiTypescript,
            name:"TypeScript",
            text:"Type-safe developement for scalable applications."
        },{
            id:5,
            Icon:FaReact,
            name:"React",
            text:"Hook,Context API, and modern state management"
        },{
            id:6,
            Icon:RiTailwindCssFill,
            name:"Tailwind CSS",
            text:"Utlity-first styling with custom design systems"
        },{
            id:7,
            Icon:FaNodeJs,
            name:"Node.js",
            text:"Building robust APIs and backend services"
        },{
            id:8,
            Icon:FaGitAlt,
            name:"Git",
            text:"Version control and collaborative workflows"
        },

    ]