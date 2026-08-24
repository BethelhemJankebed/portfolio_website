import netsanetThumb from "../components/files/thumbnail/nesanet.png";
import smartHomeThumb from "../components/files/thumbnail/smarthome.jpg";
import greenSightThumb from "../components/files/thumbnail/greensight.jpg";
import adeyLinkThumb from "../components/files/thumbnail/adeylink.jpg";

export const projectsData = [
  {
    id: 1,
    name: "GreenSight",
    description:
      "Web application serving 250+ users built with React. Integrated Maps APIs to deliver interactive, location-based functionality and green area discovery.",
    tools: ["React", "Maps API", "Tailwind CSS", "REST APIs"],
    role: "Frontend Developer (TechForDev)",
    code: "https://github.com/BethelhemJankebed/GreenSight.git",
    demo: "",
    img: greenSightThumb,
    metrics: "250+ Active Users",
  },
  {
    id: 2,
    name: "Netsanet Legal Advisor Platform",
    description:
      "Digital legal advisor platform tailored for women — built with React, Next.js, and Node.js featuring AI-assisted legal guidance and user assistance.",
    tools: ["React", "Next.js", "Node.js", "AI Integration"],
    role: "Frontend & Software Developer",
    code: "https://github.com/BethelhemJankebed/Netsanet.git",
    demo: "",
    img: netsanetThumb,
    metrics: "Women Legal Tech",
  },
  {
    id: 3,
    name: "AdeyLink E-Commerce MVP",
    description:
      "E-commerce platform empowering women entrepreneurs to showcase products, connect with customers, and manage transactions seamlessly.",
    tools: ["React", "Node.js", "Express.js", "PostgreSQL"],
    role: "Full-Stack Developer",
    code: "https://github.com/BethelhemJankebed/AdeyLink_MVP.git",
    demo: "",
    img: adeyLinkThumb,
    metrics: "E-Commerce Platform",
  },
  {
    id: 4,
    name: "Smart-Home-Automation",
    description:
      "Computer-vision assisted smart home automation system built in Java. Integrates computer vision algorithms to automate home safety and environment control.",
    tools: ["Java", "Computer Vision", "OOP", "Automation"],
    role: "Software Developer",
    code: "https://github.com/BethelhemJankebed/Smart-Home-Automation.git",
    demo: "",
    img: smartHomeThumb,
    metrics: "CV & Automation",
  },
];

