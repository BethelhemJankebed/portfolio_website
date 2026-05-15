import aiEngineerAssociate from "../components/files/certificates/Ai-Engineer-Associate.pdf";
import cursorHackathon from "../components/files/certificates/cursor hackaton.png";
import herCommerceHackathon from "../components/files/certificates/HerCommerce Hackathon Certification of participation (1).pdf";
import profilePhoto from "../components/files/certificates/photo_2026-05-14_21-52-24.jpg";
import programmingFundamentals from "../components/files/certificates/programing fundamental betty _ Udacity.pdf";
import webDevelopmentPhp from "../components/files/certificates/web-development PHP.pdf";

export const certificationsData = [
  {
    id: 1,
    title: "AI Engineer Associate",
    issuer: "AI / Certification",
    date: "",
    credentialId: "",
    img: aiEngineerAssociate,
    verify: aiEngineerAssociate,
    tags: ["AI", "Certification"],
    description:
      "Learned the foundations of AI engineering, model workflows, and how to build practical AI-enabled solutions.",
  },
  {
    id: 2,
    title: "HerCommerce Hackathon - Participation",
    issuer: "HerCommerce",
    date: "",
    credentialId: "",
    img: herCommerceHackathon,
    verify: herCommerceHackathon,
    tags: ["Hackathon", "Participation"],
    description:
      "Learned how to collaborate on a product idea, solve a challenge under time pressure, and present a domain-focused solution.",
  },
  {
    id: 3,
    title: "Programming Fundamentals (Udacity)",
    issuer: "Udacity",
    date: "",
    credentialId: "",
    img: programmingFundamentals,
    verify: programmingFundamentals,
    tags: ["Programming", "Fundamentals"],
    description:
      "Built core programming foundations including logic, problem solving, variables, control flow, and structured thinking.",
  },
  {
    id: 4,
    title: "Web Development (PHP)",
    issuer: "Web Development",
    date: "",
    credentialId: "",
    img: webDevelopmentPhp,
    verify: webDevelopmentPhp,
    tags: ["Web Development", "PHP"],
    description:
      "Learned server-side web development concepts with PHP and how dynamic web applications are built.",
  },
  {
    id: 5,
    title: "Cursor Hackathon Participation",
    issuer: "Cursor Hackathon",
    date: "",
    credentialId: "",
    img: cursorHackathon,
    verify: cursorHackathon,
    tags: ["Hackathon", "Participation"],
    description:
      "Participated in a fast-paced build event and learned how to work quickly, test ideas, and ship a working prototype.",
  },
  {
    id: 6,
    title: "Presidential Award",
    issuer: "University Award",
    date: "",
    credentialId: "",
    img: profilePhoto,
    verify: profilePhoto,
    tags: ["Photo"],
    description:
      "Presidential award recognition from the university for achieving a 3.9 GPA.",
  },
];
