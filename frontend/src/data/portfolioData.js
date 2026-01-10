// Portfolio Data - Ehiane Kelvin Oigiagbe

export const personalInfo = {
    name: "Ehiane Oigiagbe",
    fullName: "Ehiane Kelvin Oigiagbe",
    title: "Software Engineer & QA Specialist",
    tagline: "Building Robust",
    taglineAccent: "Digital Experiences.",
    bio: "BSc Computer Science from Washington State University. Previously, I worked as a Software Test Engineer Intern at Schweitzer Engineering Laboratories. I build quality-driven interfaces and robust solutions, guided by the philosophy that the best code is tested code.",
    location: "Washington, USA",
    // bannerImage: "/images/Pogba_dab.gif",
    bannerImage: "/images/banner/paul_pogba_1.gif",
    profileImage: "/images/PenDrawnEhiane.jpg",
};

export const roles = [
    {
        company: "Schweitzer Engineering Laboratories",
        role: "Associate Software Engineer",
        date: "Sep 2023 — 2026",
        logo: "SEL",
        subRoles: [
            {
                title: "Associate Software Engineer",
                date: "2026",
                description: "Incoming"
            },
            {
                title: "Software Test Engineer Intern",
                date: "Sep 2023 — Dec 2024",
                description: "Developed and executed comprehensive test strategies for critical power system protection software. Collaborated with cross-functional teams to ensure product quality and reliability."
            }
        ]
    },
    {
        company: "Jeroyaf Accounting and Tax Services",
        role: "Software Engineer",
        date: "June 2025 — Present",
        logo: "JAT",
        description:
            "Developing and maintaining software solutions for accounting and tax management systems. Building robust applications that streamline financial operations and client services.",
    },
    {
        company: "Washington State University",
        role: "Clerical Assistant",
        date: "Sep 2022 — Aug 2023",
        logo: "WSU",
        description:
            "Provided administrative support and managed clerical operations. Handled documentation, data entry, and office coordination tasks to ensure smooth departmental operations.",
    },
];

export const projects = [
    {
        id: "tree-inspect",
        title: "TreeInspect",
        role: "Full Stack",
        description: "My own mini Tree visualizer. Always wanted to build this since my sophomore year, was too scared to do so lol",
        longDescription: "TreeInspect is a powerful tree data structure visualization tool designed to help developers and students understand tree algorithms visually. Built with TypeScript and modern web technologies.",
        stack: ["TypeScript", "React", "Node.js"],
        gradient: "from-green-500 to-emerald-500",
        bgColor: "#10b981",
        img: "/images/previews/projects/tree_inspect-preview.png",
        live: null, // Will be updated
        github: "https://github.com/Ehiane/TreeInspect"
    },
    {
        id: "harvard-akute",
        title: "Harvard School Akute",
        role: "Full Stack",
        description: "A comprehensive school management system for Harvard School Akute.",
        longDescription: "Harvard School Akute is a full-featured school management platform that streamlines administrative tasks, student management, and academic tracking.",
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        gradient: "from-blue-500 to-indigo-500",
        bgColor: "#3b82f6",
        img: "/images/previews/projects/harvard_school_akute-preview.png",
        live: null,
        github: null
    },
    {
        id: "wage-report",
        title: "Wage Report",
        role: "Full Stack",
        description: "A modern wage reporting and analytics platform (Work in Progress - Revamping)",
        longDescription: "Wage Report is a comprehensive wage tracking and reporting system that helps organizations manage payroll data and generate insights through advanced analytics.",
        stack: ["React", "Python", "SQL", "Tailwind CSS"],
        gradient: "from-purple-500 to-pink-500",
        bgColor: "#a855f7",
        img: "https://picsum.photos/seed/wage-report/800/450", // Placeholder
        live: null,
        github: null
    },
    {
        id: "current-portfolio",
        title: "Portfolio v2.0",
        role: "Full Stack",
        description: "", // Left blank - still building
        longDescription: "", // Left blank - still building
        stack: ["React", "Tailwind CSS", "Material-UI", "Express"],
        gradient: "from-slate-500 to-zinc-500",
        bgColor: "#64748b",
        img: "/images/previews/projects/portfolio_v2-preview.png",
        live: null,
        github: "https://github.com/Ehiane/portfolio"
    },
];

export const techStack = [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://cplusplus.com" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com", invertDark: true },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "Material-UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", url: "https://mui.com" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", url: "https://dotnet.microsoft.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", url: "https://www.selenium.dev" },
    { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg", url: "https://www.cypress.io" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", url: "https://www.rust-lang.org" },
    { name: "Haskell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg", url: "https://www.haskell.org" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://www.php.net" },
];

export const socialLinks = {
    site: "https://ehiane.com",
    github: "https://github.com/Ehiane",
    linkedin: "https://www.linkedin.com/in/ehiane-oigiagbe",
    email: "mailto:ehiane@example.com" // Update with actual email
};
