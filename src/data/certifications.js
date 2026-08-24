import aiEngineerAssociate from "../components/files/certificates/Ai-Engineer-Associate.pdf";
import cursorHackathon from "../components/files/certificates/cursor hackaton.png";
import herCommerceHackathon from "../components/files/certificates/HerCommerce Hackathon Certification of participation (1).pdf";
import programmingFundamentals from "../components/files/certificates/programing fundamental betty _ Udacity.pdf";
import webDevelopmentPhp from "../components/files/certificates/web-development PHP.pdf";

export const certificationsData = [
  {
    id: 1,
    title: "AI Engineer Associate",
    issuer: "AI Certification",
    date: "2024",
    credentialId: "AI-ENG-01",
    img: aiEngineerAssociate,
    verify: aiEngineerAssociate,
    tags: ["AI", "Machine Learning", "Python"],
    description:
      "Learned the foundations of AI engineering, model workflows, and how to build practical AI-enabled solutions.",
  },
  {
    id: 2,
    title: "HerCommerce Hackathon - Participation",
    issuer: "HerCommerce",
    date: "2024",
    credentialId: "HC-2024",
    img: herCommerceHackathon,
    verify: herCommerceHackathon,
    tags: ["Hackathon", "Product Development"],
    description:
      "Collaborated on feature development, product ideation, and building solutions under time constraints.",
  },
  {
    id: 3,
    title: "Programming Fundamentals (Udacity)",
    issuer: "Udacity",
    date: "2023",
    credentialId: "UD-PROG-FUND",
    img: programmingFundamentals,
    verify: programmingFundamentals,
    tags: ["Programming", "Logic & Algorithms"],
    description:
      "Mastered core programming foundations including logic, problem solving, data structures, and structured programming.",
  },
  {
    id: 4,
    title: "Web Development (PHP)",
    issuer: "Web Engineering",
    date: "2023",
    credentialId: "PHP-WEB-DEV",
    img: webDevelopmentPhp,
    verify: webDevelopmentPhp,
    tags: ["Web Development", "PHP", "SQL"],
    description:
      "Learned server-side web development concepts with PHP, dynamic routing, and database integrations.",
  },
  {
    id: 5,
    title: "Cursor Hackathon Participation",
    issuer: "Cursor Build Event",
    date: "2024",
    credentialId: "CURSOR-HACK",
    img: cursorHackathon,
    verify: cursorHackathon,
    tags: ["Hackathon", "Rapid Prototyping"],
    description:
      "Participated in a fast-paced build event, testing ideas and shipping full-stack prototypes.",
  },
  {
    id: 6,
    title: "Presidential Award Recipient",
    issuer: "Addis Ababa Science and Technology University (AASTU)",
    date: "2023 – Present",
    credentialId: "GPA: 3.9 / 4.0",
    img: null,
    verify: "",
    tags: ["Academic Excellence", "Honor"],
    description:
      "Awarded the prestigious Presidential Award Recipient title at AASTU for maintaining a 3.9/4.0 GPA in Software Engineering.",
  },
];

