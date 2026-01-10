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
        live: "https://treeinspect.netlify.app/",
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
        live: "https://harvardschoolakute.com/",
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
        stack: ["React", "Tailwind CSS", "Express"],
        gradient: "from-slate-500 to-zinc-500",
        bgColor: "#64748b",
        img: "/images/previews/projects/portfolio_v2-preview.png",
        live: "https://www.ehiane.com/",
        github: "https://github.com/Ehiane/ehianePortfolio2025"
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
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", url: "https://expressjs.com", invertDark: true },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", url: "https://dotnet.microsoft.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", url: "https://www.selenium.dev" },
    { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg", url: "https://www.cypress.io" },
    { name: "Haskell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg", url: "https://www.haskell.org" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://www.php.net" },
    { name: "Claude Code", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg", url: "https://claude.ai" },
    { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", url: "https://gemini.google.com" },
    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png", url: "https://openai.com/chatgpt" },
    { name: "Google AI Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Google_AI_Studio_icon_(July_2025).svg", url: "https://aistudio.google.com" },
    { name: "Google Stitch", icon: "https://learnai.tw/wp-content/uploads/2025/06/Google-Stitch-Logo.png", url: "https://www.mongodb.com/products/platform/stitch" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://www.figma.com" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://www.postman.com" },
];

export const socialLinks = {
    site: "https://ehiane.com",
    github: "https://github.com/Ehiane",
    linkedin: "https://www.linkedin.com/in/ehiane-oigiagbe",
    email: "mailto:ehiane@example.com" // Update with actual email
};

export const achievements = {
    certifications: [
        {
            id: 'cert-1',
            title: 'Technical Interview Prep',
            issuer: 'CodePath',
            date: 'December 2025',
            description: 'Comprehensive technical interview preparation program covering data structures, algorithms, and problem-solving strategies for technical interviews.',
            credentialUrl: null, // PDF available
            image: '/images/achievements/certifications/codepath.png'
        },
        {
            id: 'cert-2',
            title: 'SQL Certification',
            issuer: 'HackerRank',
            date: 'August 2025',
            description: 'Demonstrated proficiency in SQL fundamentals including queries, joins, aggregations, and database management.',
            credentialUrl: 'https://www.hackerrank.com/certificates/7f40e51ff282',
            image: '/images/achievements/certifications/Hackerrank-sql.png',
            certificatePdf: '/images/achievements/certifications/Hackerrank SQL_basic certificate-compressed.pdf'
        },
        {
            id: 'cert-3',
            title: 'SQL to Document Model',
            issuer: 'MongoDB',
            date: 'September 2025',
            description: 'Learned data modeling techniques and best practices for migrating from SQL databases to MongoDB document-based models.',
            credentialUrl: 'https://www.credly.com/badges/d32f1518-8bab-4b78-a8fb-e334089f2a9b/linked_in_profile',
            image: '/images/achievements/certifications/mongodb_relational_to_document.png',
            certificatePdf: '/images/achievements/certifications/mongodb_relational_to_document_model.pdf'
        }
    ],
    events: [
        {
            id: 'event-1',
            title: 'AfroTech 2025',
            date: 'October 2025',
            location: 'Houston, TX',
            role: 'Attendee',
            description: 'Attended one of the largest Black tech conferences, connecting with industry leaders, exploring emerging technologies, and participating in workshops focused on career growth and innovation in tech.',
            image: 'https://picsum.photos/seed/afrotech/600/400'
        },
        {
            id: 'event-2',
            title: 'NSBE National Convention 2025',
            date: 'February 2025',
            location: 'Chicago, IL',
            role: 'Attendee',
            description: 'Participated in the National Society of Black Engineers annual convention, engaging with industry professionals, attending technical workshops, and networking with fellow engineers.',
            image: 'https://picsum.photos/seed/nsbe25/600/400'
        },
        {
            id: 'event-3',
            title: 'NSBE National Convention 2024',
            date: 'March 2024',
            location: 'Atlanta, GA',
            role: 'Attendee',
            description: 'Attended technical sessions, career fair, and networking events at the NSBE National Convention, gaining insights into industry trends and building professional connections.',
            image: 'https://picsum.photos/seed/nsbe24/600/400'
        }
    ],
    leadership: [
        {
            id: 'lead-1',
            title: 'Director of Conferences',
            organization: 'National Society of Black Engineers (NSBE)',
            date: 'July 2024 — May 2025',
            description: 'Led conference planning and execution, coordinated logistics for regional and national events, and managed communication between chapters to ensure successful conference experiences.',
            image: 'https://picsum.photos/seed/nsbe-doc/600/400'
        },
        {
            id: 'lead-2',
            title: 'Secretary',
            organization: 'National Society of Black Engineers (NSBE)',
            date: 'August 2023 — July 2024',
            description: 'Managed organizational documentation, recorded meeting minutes, maintained member records, and ensured effective communication across the chapter leadership team.',
            image: 'https://picsum.photos/seed/nsbe-sec/600/400'
        }
    ]
};
