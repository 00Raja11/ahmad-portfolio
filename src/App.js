import { useState, useEffect, useRef } from "react";

const data = {
  name: "Ahmad Raja Khan",
  title: "Full-Stack Developer & Data Analyst",
  tagline: "Building intelligent systems at the intersection of code and data.",
  contact: {
    phone: "+91 9179072774",
    email: "ahmadrajak0011@gmail.com",
    location: "Jaipur, Rajasthan",
    linkedin: "https://linkedin.com/in/ahmadraja0011",
    github: "https://github.com/00Raja11",
    leetcode: "https://leetcode.com/u/ahmadraja0011/",
    resume: "https://drive.google.com/file/d/1TWaSosZMPJClPDnl-nSiNAZufoMANI4B/view?usp=drive_link",
  },
  about:
    "Detail-oriented Computer Science student and developer with hands-on experience in full-stack development, AI/ML integration, and data analysis. I love crafting solutions that are both technically sound and user-friendly — from RAG-powered legal assistants to agriculture platforms serving farmers.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 – 2026",
    institute: "NIMS University, Jaipur, Rajasthan",
    sgpa: "7.60",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Computer Networking",
      "Design & Analysis of Algorithms",
    ],
  },
  experience: [
    {
      title: "Frontend Developer Intern",
      period: "01/2026 – Present",
      company: "VetityNova Business Solution",
      location: "Delhi",
      stack: "React.js, Node.js, Express.js, MongoDB",
      description: [
        "Develop responsive and interactive user interfaces using React.js for production web applications.",
        "Collaborate with backend developers integrating APIs built with Node.js and Express.js.",
        "Debug issues, optimize performance, and maintain clean reusable code using Git workflows.",
      ],
      color: "#6C8B9E",
      icon: "briefcase",
    },
  ],
  skills: {
    "Languages": ["Python", "Java", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["React", "Node.js", "Flask", "TailwindCSS", "Streamlit", "LangChain"],
    "Databases": ["MongoDB", "SQL", "FAISS (Vector DB)"],
    "Data & Analytics": ["Advanced Excel", "Power BI", "KPI Tracking", "Dashboard Creation", "Data Validation"],
    "AI / ML": ["RAG", "LLM Integration", "LLaMA 3.1"],
    "Tools": ["Git", "AWS", "Postman", "Linux", "MS Office"],
  },
  projects: [
    {
      title: "RAG Application for Law Assistance",
      stack: "Python · Streamlit · FAISS · LangChain · LLaMA 3.1",
      color: "#C8A97E",
      icon: "scale",
      bullets: [
        "Built a RAG-based system to answer Indian law queries using natural language.",
        "Implemented FAISS vector retrieval integrated with LLaMA 3.1 for accurate responses.",
        "Delivered citation-backed answers with an average response time of 3.2 seconds.",
        "Achieved 92% retrieval accuracy and 94% citation accuracy.",
      ],
      stats: [
        { label: "Retrieval Accuracy", value: "92%" },
        { label: "Citation Accuracy", value: "94%" },
        { label: "Avg Response", value: "3.2s" },
      ],
      github: "https://github.com/00Raja11/Rag_legal_chatbot",
      demo: "https://raglegalchatbot-27ryarodkseun3crryjyyt.streamlit.app/",
    },
    {
      title: "Agriculture Assistance Platform",
      stack: "React · Node.js · MongoDB · REST APIs",
      color: "#7EA97E",
      icon: "seedling",
      bullets: [
        "Developed a full-stack agriculture platform to assist farmers with crop-related information.",
        "Implemented secure REST APIs for managing user data, crop details, and recommendations.",
        "Built a responsive frontend using React ensuring usability across devices.",
        "Focused on performance optimization and clean code architecture for maintainability.",
      ],
      stats: [
        { label: "Stack", value: "MERN" },
        { label: "APIs", value: "REST" },
        { label: "Design", value: "Responsive" },
      ],
      github: "https://github.com/00Raja11/agri",
      demo: "https://agri-1.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      stack: "HTML · CSS · JavaScript · React",
      color: "#7E9EC8",
      icon: "monitor",
      bullets: [
        "Developed a responsive personal portfolio website to showcase projects, skills, and achievements.",
        "Designed interactive UI components and smooth navigation for better user experience.",
        "Integrated project links, GitHub repositories, and contact forms for seamless accessibility.",
        "Ensured mobile-friendly design using CSS media queries and modern layouts.",
      ],
      stats: [
        { label: "Framework", value: "React" },
        { label: "Design", value: "Mobile-First" },
        { label: "UI", value: "Interactive" },
      ],
      github: "https://github.com/00Raja11/ahmad-portfolio",
      demo: "https://ahmad-portfolio-psi.vercel.app/",
    },
  ],
  achievements: [
    { icon: "trophy", text: "Built AI-powered RAG legal assistant achieving 92% retrieval accuracy" },
    { icon: "code", text: "Solved 150+ problems on LeetCode demonstrating strong algorithmic ability" },
    { icon: "cricket", text: "Led 3rd Year team to victory in Sparda Sports Meet 2025 cricket tournament" },
    { icon: "chart", text: "Recognized for accuracy and efficiency in data handling and reporting tasks" },
    { icon: "users", text: "Actively contributed to collaborative development and technical workshops" },
  ],
};

const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"];

// Comprehensive SVG Icons
const Icons = {
  // Contact Icons
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  LeetCode: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207s.387-1.46-.207-1.94l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
    </svg>
  ),
  Resume: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  Education: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.453l9 4.5v6.097l-9 4.5-9-4.5v-6.097l9-4.5z"/>
      <path d="M12 6.453L3 10.953l9 4.5 9-4.5-9-4.5z"/>
      <path d="M12 15.453v4.5"/>
    </svg>
  ),
  
  // Achievement Icons
  Trophy: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9V3h12v6"/>
      <path d="M18 9c0 3.5-2.5 6-6 6s-6-2.5-6-6"/>
      <path d="M12 15v5"/>
      <path d="M8 20h8"/>
      <path d="M5 3h14"/>
      <circle cx="12" cy="9" r="2"/>
    </svg>
  ),
  Code: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Cricket: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15 15 0 0 1 0 20"/>
      <path d="M12 2a15 15 0 0 0 0 20"/>
    </svg>
  ),
  Chart: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/>
      <path d="M3 12v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/>
      <line x1="12" y1="2" x2="12" y2="8"/>
      <line x1="7" y1="5" x2="7" y2="7"/>
      <line x1="17" y1="5" x2="17" y2="7"/>
    </svg>
  ),
  Users: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  
  // Project Icons
  Scale: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"/>
      <path d="M4 6h16"/>
      <path d="M4 18h16"/>
      <path d="M6 6L8 18"/>
      <path d="M18 6L16 18"/>
    </svg>
  ),
  Seedling: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-7"/>
      <path d="M12 15c-3 0-6-2-6-6v-4h4c3 0 6 2 6 6v4z"/>
      <path d="M12 15c3 0 6-2 6-6v-4h-4c-3 0-6 2-6 6v4z"/>
    </svg>
  ),
  Monitor: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  
  // Experience Icon
  Briefcase: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  
  // Additional Icons
  PaintPalette: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
    </svg>
  ),
};

// Color themes for the color changer
const COLOR_THEMES = [
  { name: "Warm Brown", primary: "#8C6D4F", secondary: "#C8A97E", bg: "#F5F2EE", accent: "#6B4F3A" },
  { name: "Ocean Blue", primary: "#4A7B9D", secondary: "#7EA9C8", bg: "#EEF2F5", accent: "#2C5A7A" },
  { name: "Forest Green", primary: "#5A7A4A", secondary: "#8EA97E", bg: "#F0F5EE", accent: "#3A5A2C" },
  { name: "Royal Purple", primary: "#7A5A8A", secondary: "#B89EC8", bg: "#F5EEF8", accent: "#5A3A6A" },
  { name: "Sunset Orange", primary: "#C87A4A", secondary: "#E8B89E", bg: "#F8F5EE", accent: "#A85A2C" },
  { name: "Classic", primary: "#2C2A27", secondary: "#B8A898", bg: "#F5F2EE", accent: "#1A1815" },
];

// Popup Modal Component
function PopupModal({ isOpen, onClose, title, message, type = "info" }) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch(type) {
      case "success": return "✅";
      case "error": return "❌";
      case "warning": return "⚠️";
      default: return "ℹ️";
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.3s ease',
    }} onClick={onClose}>
      <div style={{
        backgroundColor: '#FEFCFA',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '440px',
        width: '90%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
        transform: 'scale(1)',
        animation: 'scaleIn 0.3s ease',
        position: 'relative',
        textAlign: 'center',
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          fontSize: '48px',
          marginBottom: '16px',
          display: 'block',
        }}>
          {getIcon()}
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '28px',
          fontWeight: 600,
          color: '#2C2A27',
          marginBottom: '12px',
        }}>{title}</h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          color: '#5C4F42',
          lineHeight: '1.6',
          marginBottom: '24px',
        }}>{message}</p>
        <button onClick={onClose} style={{
          padding: '10px 32px',
          background: '#8C6D4F',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'all 0.3s ease',
        }}
        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}>
          Close
        </button>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function useScrollSpy() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const handler = () => {
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(link);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numeric = parseInt(value);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isNaN(numeric)) {
        let start = 0;
        const step = Math.ceil(numeric / 30);
        const timer = setInterval(() => {
          start += step;
          if (start >= numeric) { setCount(numeric); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numeric]);
  return <span ref={ref}>{isNaN(numeric) ? value : count + value.replace(/[0-9]/g, "")}</span>;
}

// Enhanced Animated Background Component
function AnimatedBackground({ colorTheme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        // Mouse interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x += (dx / distance) * force * 0.5;
          this.y += (dy / distance) * force * 0.5;
        }

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        const pulseOpacity = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Use color theme for particles
        const color = colorTheme || "#8C6D4F";
        ctx.fillStyle = color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
        if (!color.includes('rgb')) {
          ctx.fillStyle = hexToRgba(color, pulseOpacity);
        }
        ctx.fill();
      }
    }

    function hexToRgba(hex, opacity) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result) {
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
      return `rgba(140, 109, 79, ${opacity})`;
    }

    const initParticles = () => {
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = 0.15 * (1 - distance / 180);
            const color = colorTheme || "#8C6D4F";
            ctx.beginPath();
            ctx.strokeStyle = hexToRgba(color, opacity);
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Create gradient circles
    const drawGradientCircles = () => {
      const time = Date.now() * 0.0001;
      const color = colorTheme || "#8C6D4F";
      
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time + i * 2));
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.7 + i * 1.5));
        const radius = 150 + 50 * Math.sin(time * 0.5 + i);
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const baseColor = hexToRgba(color, 0);
        const midColor = hexToRgba(color, 0.03);
        const endColor = hexToRgba(color, 0);
        
        gradient.addColorStop(0, midColor);
        gradient.addColorStop(0.5, midColor);
        gradient.addColorStop(1, endColor);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGradientCircles();
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");
  const [currentTheme, setCurrentTheme] = useState(0);
  const active = useScrollSpy();

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleResumeDownload = () => {
    window.open(data.contact.resume, '_blank');
    showPopup("Resume", "Opening your resume in a new tab...", "success");
  };

  const showPopup = (title, message, type = "info") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalType(type);
    setModalOpen(true);
  };

  const handleButtonClick = (action, name) => {
    switch(action) {
      case "projects":
        showPopup("View Projects", "Taking you to the projects section where you can see all my work!", "info");
        setTimeout(() => scrollTo("Projects"), 500);
        break;
      case "contact":
        showPopup("Get in Touch", "I'd love to hear from you! Check out my contact details below.", "info");
        setTimeout(() => scrollTo("Contact"), 500);
        break;
      case "github":
        showPopup("GitHub", "Opening my GitHub profile with all my projects and contributions.", "success");
        break;
      case "demo":
        showPopup("Live Demo", "Opening the live demo in a new tab. Enjoy exploring!", "success");
        break;
      default:
        showPopup("Hello!", `You clicked on ${name || "something"}`, "info");
    }
  };

  const changeTheme = () => {
    const nextTheme = (currentTheme + 1) % COLOR_THEMES.length;
    setCurrentTheme(nextTheme);
    const theme = COLOR_THEMES[nextTheme];
    showPopup("Theme Changed", `Switched to "${theme.name}" theme! 🎨`, "success");
    
    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--bg-color', theme.bg);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
  };

  const currentColorTheme = COLOR_THEMES[currentTheme];

  return (
    <div style={{ 
      fontFamily: "'Georgia', 'Times New Roman', serif", 
      background: currentColorTheme.bg || "#F5F2EE", 
      color: "#2C2A27", 
      minHeight: "100vh",
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.5s ease',
    }}>
      {/* Popup Modal */}
      <PopupModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        message={modalMessage}
        type={modalType}
      />

      {/* Animated Background */}
      <AnimatedBackground colorTheme={currentColorTheme.primary} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${currentColorTheme.bg || "#F5F2EE"}; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${currentColorTheme.bg || "#F5F2EE"}; }
        ::-webkit-scrollbar-thumb { background: ${currentColorTheme.primary || "#B8A898"}; border-radius: 10px; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .sans { font-family: 'DM Sans', sans-serif; }
        .nav-link { cursor: pointer; position: relative; transition: color 0.3s; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: ${currentColorTheme.primary || "#8C6D4F"}; transition: width 0.3s; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: ${currentColorTheme.primary || "#8C6D4F"} !important; }
        .card { background: #FEFCFA; border: 1px solid #E8E0D5; border-radius: 12px; transition: transform 0.3s, box-shadow 0.3s; position: relative; z-index: 1; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(44,42,39,0.10); }
        .skill-pill { display: inline-block; padding: 4px 14px; border-radius: 20px; font-size: 13px; margin: 4px; font-family: 'DM Sans', sans-serif; font-weight: 400; background: #EDE8E2; color: #5C4F42; border: 1px solid #D8CFC4; transition: background 0.2s, color 0.2s; cursor: default; }
        .skill-pill:hover { background: ${currentColorTheme.primary || "#8C6D4F"}; color: #FEFCFA; border-color: ${currentColorTheme.primary || "#8C6D4F"}; }
        .hero-line { opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s; }
        .hero-line.visible { opacity: 1; transform: translateY(0); }
        .stat-box { background: #F0EBE4; border-radius: 8px; padding: 12px 18px; text-align: center; }
        .section-label { font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #9C8878; font-weight: 500; }
        .divider { width: 48px; height: 2px; background: linear-gradient(90deg, ${currentColorTheme.primary || "#8C6D4F"}, ${currentColorTheme.secondary || "#B8A898"}); border-radius: 2px; margin: 12px 0 28px 0; }
        .contact-item { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #FEFCFA; border: 1px solid #E8E0D5; border-radius: 10px; margin-bottom: 10px; font-family: 'DM Sans', sans-serif; font-size: 14px; transition: all 0.3s ease; position: relative; z-index: 1; cursor: pointer; }
        .contact-item:hover { border-color: ${currentColorTheme.primary || "#8C6D4F"}; transform: translateX(6px); box-shadow: 0 4px 16px rgba(140,109,79,0.1); }
        .contact-item svg { color: ${currentColorTheme.primary || "#8C6D4F"}; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .theme-btn { 
          background: ${currentColorTheme.primary || "#8C6D4F"}; 
          color: #fff; 
          border: none; 
          padding: 10px 18px; 
          border-radius: 50px; 
          cursor: pointer; 
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }
        .theme-btn:hover {
          transform: scale(1.05) rotate(-5deg);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          border: 2px solid rgba(255,255,255,0.3);
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
          .theme-btn span { display: none; }
          .theme-btn { padding: 8px 12px; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: "rgba(245,242,238,0.92)", 
        backdropFilter: "blur(12px)", 
        borderBottom: "1px solid #E8E0D5" 
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px", color: "#2C2A27", display: 'flex', alignItems: 'center', gap: 12 }}>
            A<span style={{ color: currentColorTheme.primary || "#8C6D4F" }}>.</span>R<span style={{ color: currentColorTheme.primary || "#8C6D4F" }}>.</span>K
            
            {/* Color Theme Changer Button */}
            <button 
              onClick={changeTheme}
              className="theme-btn"
              title="Change Color Theme"
            >
              <Icons.PaintPalette />
              <span>Theme</span>
              <span className="color-dot" style={{ background: currentColorTheme.primary }}></span>
            </button>
          </div>
          <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
            {NAV_LINKS.map((l) => (
              <span key={l} onClick={() => scrollTo(l)} className={`nav-link sans ${active === l ? "active" : ""}`}
                style={{ fontSize: 14, fontWeight: 400, color: active === l ? currentColorTheme.primary : "#5C4F42", letterSpacing: "0.3px" }}>
                {l}
              </span>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#5C4F42" }} className="hamburger">☰</button>
        </div>
        {menuOpen && (
          <div style={{ background: "#FEFCFA", borderTop: "1px solid #E8E0D5", padding: "16px 24px" }}>
            {NAV_LINKS.map((l) => (
              <div key={l} onClick={() => scrollTo(l)} style={{ padding: "10px 0", fontSize: 15, color: "#5C4F42", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{l}</div>
            ))}
            <div onClick={changeTheme} style={{ padding: "10px 0", fontSize: 15, color: currentColorTheme.primary, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              🎨 Change Theme
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        padding: "100px 24px 60px", 
        maxWidth: 1100, 
        margin: "0 auto",
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%" }}>
          <div>
            <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0s" }}>
              <span className="section-label">Portfolio</span>
            </div>
            <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
              <h1 className="serif" style={{ fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 600, lineHeight: 1.05, color: "#2C2A27", marginTop: 16 }}>
                Ahmad<br /><span style={{ color: currentColorTheme.primary || "#8C6D4F" }}>Raja</span> Khan
              </h1>
            </div>
            <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
              <p className="sans" style={{ fontSize: 15, color: currentColorTheme.primary || "#8C6D4F", fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 12 }}>
                Full-Stack Developer · Data Analyst
              </p>
            </div>
            <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.45s" }}>
              <p className="sans" style={{ fontSize: 16, color: "#6B5E52", lineHeight: 1.7, marginTop: 20, maxWidth: 480 }}>
                {data.tagline}
              </p>
            </div>
            <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.6s", marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button 
                onClick={() => handleButtonClick("projects")} 
                style={{ 
                  padding: "12px 28px", 
                  background: currentColorTheme.primary || "#2C2A27", 
                  color: "#F5F2EE", 
                  border: "none", 
                  borderRadius: 8, 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: 14, 
                  cursor: "pointer", 
                  fontWeight: 500, 
                  letterSpacing: "0.3px", 
                  transition: "all 0.3s ease",
                  boxShadow: `0 4px 16px ${currentColorTheme.primary ? currentColorTheme.primary + '40' : 'rgba(44,42,39,0.2)'}`
                }}
                onMouseOver={e => { e.target.style.transform = "translateY(-3px) scale(1.02)"; e.target.style.boxShadow = `0 8px 24px ${currentColorTheme.primary ? currentColorTheme.primary + '60' : 'rgba(44,42,39,0.3)'}`; }} 
                onMouseOut={e => { e.target.style.transform = "translateY(0) scale(1)"; e.target.style.boxShadow = `0 4px 16px ${currentColorTheme.primary ? currentColorTheme.primary + '40' : 'rgba(44,42,39,0.2)'}`; }}>
                View Projects
              </button>
              <button 
                onClick={() => handleButtonClick("contact")} 
                style={{ 
                  padding: "12px 28px", 
                  background: "transparent", 
                  color: "#2C2A27", 
                  border: `1.5px solid ${currentColorTheme.primary || "#C8B9A8"}`, 
                  borderRadius: 8, 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: 14, 
                  cursor: "pointer", 
                  fontWeight: 500, 
                  transition: "all 0.3s ease" 
                }}
                onMouseOver={e => { e.target.style.borderColor = currentColorTheme.primary || "#8C6D4F"; e.target.style.transform = "translateY(-3px) scale(1.02)"; e.target.style.boxShadow = `0 4px 16px ${currentColorTheme.primary ? currentColorTheme.primary + '20' : 'rgba(140,109,79,0.1)'}`; }} 
                onMouseOut={e => { e.target.style.borderColor = currentColorTheme.primary || "#C8B9A8"; e.target.style.transform = "translateY(0) scale(1)"; e.target.style.boxShadow = "none"; }}>
                Get in Touch
              </button>
            </div>
          </div>

          <div className={`hero-line ${heroVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
            <div style={{ background: "#FEFCFA", border: "1px solid #E8E0D5", borderRadius: 20, padding: 36, boxShadow: `0 24px 64px ${currentColorTheme.primary ? currentColorTheme.primary + '15' : 'rgba(44,42,39,0.08)'}` }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${currentColorTheme.secondary || "#C8A97E"}, ${currentColorTheme.primary || "#8C6D4F"})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <span className="serif" style={{ fontSize: 32, color: "#fff", fontWeight: 700 }}>A</span>
              </div>
              <p className="sans" style={{ fontSize: 14, color: "#6B5E52", lineHeight: 1.75 }}>{data.about}</p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #E8E0D5", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "center" }}>
                {[["150+", "LeetCode"], ["10+", "Projects"], ["2026", "Grad"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="serif" style={{ fontSize: 26, fontWeight: 700, color: currentColorTheme.primary || "#8C6D4F" }}>{v}</div>
                    <div className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / EDUCATION */}
      <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <span className="section-label">Background</span>
            <div className="divider" />
            <h2 className="serif" style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.15, marginBottom: 20 }}>Education &<br />Coursework</h2>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: `linear-gradient(135deg, ${currentColorTheme.secondary || "#C8A97E"}, ${currentColorTheme.primary || "#8C6D4F"})`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <Icons.Education />
                </div>
                <div>
                  <p className="sans" style={{ fontSize: 11, color: "#9C8878", letterSpacing: "1px", textTransform: "uppercase" }}>{data.education.period}</p>
                  <h3 className="serif" style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>{data.education.degree}</h3>
                  <p className="sans" style={{ fontSize: 14, color: "#6B5E52", marginTop: 4 }}>{data.education.institute}</p>
                  <div style={{ marginTop: 12, display: "inline-block", background: "#F0EBE4", padding: "4px 14px", borderRadius: 20, fontSize: 13 }} className="sans">
                    SGPA: <strong>{data.education.sgpa}</strong>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #EDE8E2" }}>
                <p className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>Relevant Coursework</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {data.education.coursework.map((c) => (
                    <span key={c} className="skill-pill">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="section-label">Info</span>
            <div className="divider" />
            <h2 className="serif" style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.15, marginBottom: 20 }}>About<br />Me</h2>
            <p className="sans" style={{ fontSize: 15, color: "#5C4F42", lineHeight: 1.8, marginBottom: 24 }}>
              I'm a final-year Computer Science student at NIMS University passionate about building impactful digital products. My work bridges full-stack development, AI/ML integration, and business data analytics.
            </p>
            <p className="sans" style={{ fontSize: 15, color: "#5C4F42", lineHeight: 1.8, marginBottom: 24 }}>
              Whether I'm architecting a RAG-based legal assistant or analyzing KPIs in Excel, I bring the same attention to clarity, efficiency, and user impact.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Location", value: "Jaipur, Rajasthan" },
                { label: "Degree", value: "B.Tech CSE" },
                { label: "Status", value: "Available for work" },
                { label: "Focus", value: "Full-Stack + AI" },
              ].map(({ label, value }) => (
                <div key={label} style={{ padding: "14px 18px", background: "#FEFCFA", border: "1px solid #E8E0D5", borderRadius: 10 }}>
                  <p className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
                  <p className="sans" style={{ fontSize: 14, color: "#2C2A27", fontWeight: 500, marginTop: 4 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ background: "rgba(248,245,240,0.9)", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-label">Experience</span>
          <div className="divider" />
          <h2 className="serif" style={{ fontSize: 42, fontWeight: 600, marginBottom: 40 }}>Professional<br />Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {data.experience.map((exp) => {
              const IconComponent = Icons[exp.icon.charAt(0).toUpperCase() + exp.icon.slice(1)];
              return (
                <div key={exp.title} className="card" style={{ padding: 32, borderLeft: `4px solid ${exp.color}` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                        <span style={{ display: 'flex', alignItems: 'center', color: exp.color }}>
                          {IconComponent ? <IconComponent /> : <span>💼</span>}
                        </span>
                        <div>
                          <span className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px" }}>
                            {exp.period}
                          </span>
                          <h3 className="serif" style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                      <p className="sans" style={{ fontSize: 16, color: exp.color, fontWeight: 600, marginBottom: 4 }}>
                        {exp.company}
                      </p>
                      <p className="sans" style={{ fontSize: 13, color: "#9C8878", marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Icons.Location /> {exp.location}
                      </p>
                      <p className="sans" style={{ fontSize: 12, color: "#6B5E52", fontWeight: 500, letterSpacing: "0.5px", marginBottom: 14 }}>
                        Stack: {exp.stack}
                      </p>
                      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                        {exp.description.map((item) => (
                          <li key={item} className="sans" style={{ fontSize: 14, color: "#5C4F42", lineHeight: 1.7, marginBottom: 6, display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ color: exp.color, marginTop: 6, flexShrink: 0 }}>▸</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: "rgba(237,232,226,0.9)", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-label">Expertise</span>
          <div className="divider" />
          <h2 className="serif" style={{ fontSize: 42, fontWeight: 600, marginBottom: 40 }}>Skills &<br />Technologies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {Object.entries(data.skills).map(([cat, items]) => (
              <div key={cat} className="card" style={{ padding: 24 }}>
                <p className="sans" style={{ fontSize: 12, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>{cat}</p>
                <div>{items.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <span className="section-label">Work</span>
        <div className="divider" />
        <h2 className="serif" style={{ fontSize: 42, fontWeight: 600, marginBottom: 40 }}>Featured<br />Projects</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {data.projects.map((p, i) => {
            const IconComponent = Icons[p.icon.charAt(0).toUpperCase() + p.icon.slice(1)];
            return (
              <div key={p.title} className="card" style={{ padding: 32, borderLeft: `4px solid ${p.color}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                      <span style={{ display: 'flex', alignItems: 'center', color: p.color }}>
                        {IconComponent ? <IconComponent /> : <span>📁</span>}
                      </span>
                      <div>
                        <span className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px" }}>Project 0{i + 1}</span>
                        <h3 className="serif" style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>{p.title}</h3>
                      </div>
                    </div>
                    <p className="sans" style={{ fontSize: 12, color: p.color, fontWeight: 600, letterSpacing: "0.5px", marginBottom: 16 }}>{p.stack}</p>
                    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                      {p.bullets.map((b) => (
                        <li key={b} className="sans" style={{ fontSize: 14, color: "#5C4F42", lineHeight: 1.7, marginBottom: 6, display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: p.color, marginTop: 6, flexShrink: 0 }}>▸</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 130 }}>
                    {p.stats.map((s) => (
                      <div key={s.label} className="stat-box">
                        <div className="serif" style={{ fontSize: 22, fontWeight: 700, color: p.color }}><AnimatedCounter value={s.value} /></div>
                        <div className="sans" style={{ fontSize: 11, color: "#9C8878", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #EDE8E2", display: "flex", gap: 12 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button 
                      onClick={() => handleButtonClick("github")}
                      style={{ 
                        padding: "8px 20px", 
                        background: p.color, 
                        color: "#fff", 
                        border: "none", 
                        borderRadius: 6, 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: 13, 
                        cursor: "pointer", 
                        fontWeight: 500, 
                        transition: "all 0.3s ease" 
                      }}
                      onMouseOver={e => { e.target.style.transform = "translateY(-2px) scale(1.02)"; e.target.style.boxShadow = `0 4px 12px ${p.color}60`; }}
                      onMouseOut={e => { e.target.style.transform = "translateY(0) scale(1)"; e.target.style.boxShadow = "none"; }}>
                      GitHub →
                    </button>
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button 
                      onClick={() => handleButtonClick("demo")}
                      style={{ 
                        padding: "8px 20px", 
                        background: "transparent", 
                        color: "#5C4F42", 
                        border: "1px solid #D8CFC4", 
                        borderRadius: 6, 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: 13, 
                        cursor: "pointer", 
                        transition: "all 0.3s ease" 
                      }}
                      onMouseOver={e => { e.target.style.borderColor = p.color; e.target.style.transform = "translateY(-2px)"; }}
                      onMouseOut={e => { e.target.style.borderColor = "#D8CFC4"; e.target.style.transform = "translateY(0)"; }}>
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 48,
          textAlign: "center",
          padding: "32px",
          background: "linear-gradient(135deg, #FEFCFA 0%, #F5F2EE 100%)",
          borderRadius: "16px",
          border: "1px solid #E8E0D5"
        }}>
          <p className="sans" style={{ fontSize: 16, color: "#5C4F42", marginBottom: 16, fontWeight: 400 }}>
            Want to see more of my work?
          </p>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button 
              onClick={() => handleButtonClick("github")}
              style={{
                padding: "14px 36px",
                background: currentColorTheme.primary || "#2C2A27",
                color: "#F5F2EE",
                border: "none",
                borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                cursor: "pointer",
                fontWeight: 500,
                letterSpacing: "0.5px",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.3s ease"
              }}
              onMouseOver={e => {
                e.target.style.transform = "translateY(-3px) scale(1.02)";
                e.target.style.boxShadow = `0 8px 24px ${currentColorTheme.primary ? currentColorTheme.primary + '50' : 'rgba(140,109,79,0.3)'}`;
              }}
              onMouseOut={e => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "none";
              }}>
              <span>🔗</span>
              View All Projects on GitHub
              <span>→</span>
            </button>
          </a>
          <p className="sans" style={{ fontSize: 13, color: "#9C8878", marginTop: 16, fontStyle: "italic" }}>
            Including mini-projects, experiments, and contributions
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS - Updated with SVG Icons */}
      <section id="achievements" style={{ background: "rgba(237,232,226,0.9)", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="section-label">Highlights</span>
          <div className="divider" />
          <h2 className="serif" style={{ fontSize: 42, fontWeight: 600, marginBottom: 40 }}>Achievements</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
            {data.achievements.map((a, i) => {
              const IconComponent = Icons[a.icon.charAt(0).toUpperCase() + a.icon.slice(1)];
              return (
                <div key={i} className="card" style={{ padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ display: 'flex', alignItems: 'center', color: currentColorTheme.primary || "#8C6D4F", flexShrink: 0 }}>
                    {IconComponent ? <IconComponent /> : <span>🏆</span>}
                  </span>
                  <p className="sans" style={{ fontSize: 14, color: "#5C4F42", lineHeight: 1.65 }}>{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT - Updated with SVG icons */}
      <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", position: 'relative', zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <span className="section-label">Reach Out</span>
            <div className="divider" />
            <h2 className="serif" style={{ fontSize: 42, fontWeight: 600, lineHeight: 1.15, marginBottom: 20 }}>Let's Build<br />Something Together</h2>
            <p className="sans" style={{ fontSize: 15, color: "#6B5E52", lineHeight: 1.8 }}>
              I'm open to internships, freelance projects, and full-time opportunities. If you'd like to collaborate or just have a chat, feel free to reach out through any channel below.
            </p>
            <div style={{ marginTop: 28 }}>
              <button
                onClick={handleResumeDownload}
                style={{
                  padding: "16px 32px",
                  background: `linear-gradient(135deg, ${currentColorTheme.primary || "#8C6D4F"}, ${currentColorTheme.accent || "#6B4F3A"})`,
                  color: "#FEFCFA",
                  border: "none",
                  borderRadius: 10,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.3s ease",
                  boxShadow: `0 4px 16px ${currentColorTheme.primary ? currentColorTheme.primary + '40' : 'rgba(140,109,79,0.25)'}`
                }}
                onMouseOver={e => {
                  e.target.style.transform = "translateY(-3px) scale(1.02)";
                  e.target.style.boxShadow = `0 8px 28px ${currentColorTheme.primary ? currentColorTheme.primary + '50' : 'rgba(140,109,79,0.35)'}`;
                }}
                onMouseOut={e => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = `0 4px 16px ${currentColorTheme.primary ? currentColorTheme.primary + '40' : 'rgba(140,109,79,0.25)'}`;
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Icons.Resume />
                </span>
                Download Resume
                <span style={{ fontSize: 16 }}>↓</span>
              </button>
              <p className="sans" style={{ fontSize: 12, color: "#9C8878", marginTop: 10, fontStyle: "italic" }}>
                PDF format · Updated 2026
              </p>
            </div>
          </div>
          <div>
            {[
              { icon: Icons.Email, label: "Email", value: data.contact.email, link: `mailto:${data.contact.email}` },
              { icon: Icons.Phone, label: "Phone", value: data.contact.phone, link: `tel:${data.contact.phone}` },
              { icon: Icons.Location, label: "Location", value: data.contact.location, link: `https://maps.google.com/?q=${encodeURIComponent(data.contact.location)}` },
              { icon: Icons.LinkedIn, label: "LinkedIn", value: "Ahmad Raja Khan", link: data.contact.linkedin },
              { icon: Icons.GitHub, label: "GitHub", value: "00Raja11", link: data.contact.github },
              { icon: Icons.LeetCode, label: "LeetCode", value: "ahmadraja0011", link: data.contact.leetcode },
            ].map(({ icon: Icon, label, value, link }) => (
              <a
                key={label}
                href={link}
                target={link.startsWith('http') ? "_blank" : undefined}
                rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
                style={{ textDecoration: 'none', display: 'block' }}
                onClick={() => showPopup(label, `Opening ${label}...`, "info")}
              >
                <div className="contact-item">
                  <span style={{ display: 'flex', alignItems: 'center', color: currentColorTheme.primary || "#8C6D4F" }}>
                    <Icon />
                  </span>
                  <div>
                    <p className="sans" style={{ fontSize: 11, color: "#9C8878", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
                    <p className="sans" style={{ fontSize: 14, color: "#2C2A27", fontWeight: 500 }}>{value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2C2A27", padding: "32px 24px", textAlign: "center", position: 'relative', zIndex: 1 }}>
        <p className="serif" style={{ color: "#C8B9A8", fontSize: 20, fontWeight: 600 }}>Ahmad Raja Khan</p>
        <p className="sans" style={{ color: "#8C7B6E", fontSize: 13, marginTop: 8 }}>B.Tech CSE · NIMS University · Jaipur</p>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 20 }}>
          {[
            { name: "LinkedIn", link: data.contact.linkedin },
            { name: "GitHub", link: data.contact.github },
            { name: "LeetCode", link: data.contact.leetcode }
          ].map((l) => (
            <a
              key={l.name}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sans"
              style={{ color: "#8C7B6E", fontSize: 13, cursor: "pointer", transition: "color 0.2s", textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = currentColorTheme.secondary || "#C8A97E"}
              onMouseOut={e => e.target.style.color = "#8C7B6E"}
              onClick={() => showPopup(l.name, `Opening ${l.name} profile...`, "info")}
            >
              {l.name}
            </a>
          ))}
        </div>
        <p className="sans" style={{ color: "#5C4F42", fontSize: 12, marginTop: 20 }}>© 2025 Ahmad Raja Khan · All rights reserved</p>
      </footer>
    </div>
  );
}
