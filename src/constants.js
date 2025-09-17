// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import zustandLogo from './assets/tech_logo/zustand.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import socketLogo from './assets/tech_logo/socket.png';
import mcLogo from "./assets/tech_logo/mc.png";

import reactnativeLogo from './assets/tech_logo/reactnativeLogo.png';
import convexLogo from './assets/tech_logo/convexLogo.png';
import expoLogo from './assets/tech_logo/expoLogo.png';
import appwriteLogo from './assets/tech_logo/appwriteLogo.png';
import clerkLogo from "./assets/tech_logo/clerkLogo.png";

// Experience Section Logo's

import netlarxLogo from './assets/company_logo/netlarxLogo.png';
import virtualInternshipLogo from './assets/company_logo/virtualInternshipLogo.png'

// Education Section Logo's
import itmLogo from './assets/education_logo/itmLogo.png';
import amiLogo from './assets/education_logo/amiLogo.png';

// Project Section Logo's
import erpLogo from './assets/work_logo/erpLogo.png';
import swipemateLogo from './assets/work_logo/swipemateLogo.png';
import meetifyLogo from './assets/work_logo/meetifyLogo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'App Development',
    skills: [
      { name: 'React Native', logo: reactnativeLogo },
      { name: 'Expo', logo: expoLogo },
      { name: 'Appwrite', logo: appwriteLogo },
      { name: 'Convex', logo: convexLogo },
      { name: 'Clerk', logo: clerkLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: "Socket.io", logo: socketLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: netlarxLogo,
    role: "Software Developer Intern",
    company: "Netlarx Pvt. Ltd.",
    date: "March 2025 - May 2025",
    desc: "Contributed to the development of an ERP software for Kerryton Enterprises Pvt. Ltd. Designed and implemented RESTful backend APIs, built frontend features with React.js and Zustand, and integrated jsPDF for generating dynamic document templates like invoices and certificates. Collaborated with a cross-functional team to improve usability, performance, and deliver production-ready features.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "jsPDF",
      "RESTful APIs",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: virtualInternshipLogo, 
    role: "Full Stack Web Development Intern",
    company: "Virtual Internship Program",
    date: "October 2024 - December 2024",
    desc: "Completed a 10-week virtual internship focused on full-stack web development. Gained hands-on experience with frontend and backend technologies, including React, Node.js, and MongoDB. Worked on building scalable web applications with RESTful APIs, authentication, and database management.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: itmLogo, 
    school: "ITM Gwalior",
    date: "2022 - 2026",
    grade: "7.41 CGPA (Current)",
    desc: "Pursuing B.Tech in Computer Science and Engineering at ITM Gwalior. Gaining a strong foundation in programming, web development, and software engineering while working on projects and internships to apply theoretical knowledge in real-world applications.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: amiLogo, 
    school: "A.M.I Shishu Mandir, Gwalior",
    date: "2021 - 2022",
    grade: "86%",
    desc: "Completed Class 12 with a focus on Physics, Chemistry, and Mathematics (PCM).",
    degree: "Class XII - PCM",
  },
  {
    id: 2,
    img: amiLogo,
    school: "A.M.I Shishu Mandir, Gwalior",
    date: "2019 - 2020",
    grade: "92%",
    desc: "Completed Class 10 with a strong foundation in science and mathematics.",
    degree: "Class X",
  },  
];


export const projects = [
  {
    id: 0,
    title: "ERP System – Kerryton Enterprises Pvt. Ltd.",
    description:
      "Developed during my internship at Netlarx Pvt. Ltd., this ERP software solution included frontend and backend modules with RESTful APIs, React.js features, and state management via Zustand. Integrated jsPDF to dynamically generate invoices, certificates, and reports, streamlining operations for a leading aviation company.",
    image: erpLogo, // replace with ERP project screenshot/logo
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "jsPDF"],
    github: "", // internal project (if no repo, leave empty)
    webapp: "", // private project (if no live link, leave empty)
  },
  {
    id: 1,
    title: "SwipeMate – Dating Application",
    description:
      "A full-stack swipe-based dating app built using the MERN stack with secure authentication, real-time chat, and dynamic matching. Includes JWT-based login, user profile management with image uploads, swipe right/left functionality, and instant notifications with Socket.IO. Optimized for mobile responsiveness and deployed on Render.",
    image: swipemateLogo, // replace with your logo or screenshot
    tags: ["MERN Stack", "JWT", "Socket.IO", "Cloudinary", "React", "Node.js"],
    github: "https://github.com/Apoorv-Tiwari-99/SwipeMate", // replace with correct link
    webapp: "https://swipemate-73ii.onrender.com/",
  },
  {
    id: 2,
    title: "Meetify – Video Conferencing App",
    description:
      "A real-time video conferencing platform developed using MERN, WebRTC, and Socket.IO. Features include peer-to-peer audio/video streaming, real-time chat, screen sharing, and meeting management for creating, joining, and tracking sessions. Deployed on Render for scalability.",
    image: meetifyLogo, // replace with your logo or screenshot
    tags: ["MERN Stack", "WebRTC", "Socket.IO", "React", "Node.js"],
    github: "https://github.com/Apoorv-Tiwari-99/Meetify", // replace with correct link
    webapp: "https://meetifyfrontend.onrender.com/",
  },
];
  