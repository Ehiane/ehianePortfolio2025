// User data extracted from resume and portfolio requirements
export const userData = {
  personal: {
    name: "Ehiane Oigiagbe",
    title: "Full-Stack Engineer",
    subtitle: "AI Explorer. Systems Thinker.",
    description: "Innovative software engineer with expertise in full-stack development, AI integration, and systems architecture. Passionate about building scalable solutions that bridge technology and human experience.",
    location: "Available Worldwide",
    email: "ehiane@example.com", // Update with actual email
    github: "https://github.com/ehiane", // Update with actual GitHub
    linkedin: "https://www.linkedin.com/in/ehiane-oigiagbe/",
  },
  
  terminalSequence: [
    "> initializing protocol...",
    "> loading personal modules...", 
    "> compiling thoughts...",
    "> syncing timeline...",
    "> welcome, explorer_"
  ],
  
  projects: [
    {
      id: "milestone",
      name: "Milestone Inventory Tracking App",
      description: "Capstone Project:  Full-stack inventory system for nonprofit organization",
      fullDescription: "At a nonprofit serving individuals with developmental disabilities, equipment tracking was manual and error-prone. I co-led the development of a full-stack inventory system with role-based access, automated testing, and real-time status updates. As a result, the organization now tracks over 150+ items with improved accountability.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Jest", "Cypress", "Role-based Auth"],
      highlights: [
        "Role-based access control system",
        "Automated testing implementation",
        "Real-time status updates",
        "Security enhnaced API routes "
      ],
      metrics: {
        items: "150+",
        test_coverage: "100%",
        impact: "Improved Accountability"
      },
      status: "Live",
      linkedin: "https://www.linkedin.com/posts/ehiane-oigiagbe_mern-activity-7320861307308503041-ZYF_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4",
      youtube: "https://youtu.be/J20Uh5-bNbM?si=8sU6y7fBWDth88jC",
      stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
      hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
      gridSize: "large"
    },
    {
      id: "hackronomics",
      name: "Hackronomics",
      description: " AI-Powered Financial Assistant - Hackathon Award Winning project",
      fullDescription: "At WSU’s 2025 CrimsonCode Hackathon, our team created Hackronomics, a web app designed to help users track spending and receive AI-driven financial suggestions. I engineered the frontend in React and integrated MongoDB with OpenAI to categorize transactions and suggest affordable alternatives using natural language prompts. Our solution earned the “Best Use of MongoDB” award for its innovative application of AI to personal finance.",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "Data Visualization", "Three.js", "REST APIs"],
      highlights: [
        "Won 'Best Use of MongoDB' award",
        "AI expense categorization",
        "Personalized savings insights",
        "Data visualization dashboards"
      ],
      metrics: {
        achievement: "Best Use of MongoDB",
        ai: "OpenAI Integration",
        insights: "Personalized"
      },
      github: "https://github.com/Ehiane/Hackronomics",
      linkedin: "https://www.linkedin.com/posts/ehiane-oigiagbe_hackathon-mongodb-hackronomics-activity-7297717726150545408-2LLW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4",
      stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
      hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
      gridSize: "large"
    },
    {
      id: "fundraiser",
      name: "Fundraiser Management System",
      description: " Mock Donation platform for scholarship fund tracking and management",
      fullDescription: "Our class project simulated a donation platform for students to raise and track scholarship funds. I designed the UI, implemented C# backend logic, and wrote NUnit tests to ensure correct donation processing. It successfully supported multiple fundraising workflows and demonstrated robust validation and modular architecture.",
      techStack: ["C#", "Winforms", ".NET", "XML", "NUnit", "Software Design Patterns", "Entity Framework"],
      highlights: [
        "Robust donation processing",
        "Multiple fundraising workflows",
        "Comprehensive NUnit testing",
        "Modular architecture design"
      ],
      metrics: {
        workflows: "Multiple",
        testing: "NUnit",
        architecture: "Modular"
      },
      github: "https://github.com/Ehiane/FundraiserApplication_WinForms",
      stillImage: "/assets/bentoGrids/Fundraiser/Fundraiser_still.png",
      hoverVideo: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
      gridSize: "small"
    },
    {
      id: "spreadsheet",
      name: "Spreadsheet Engine",
      description: "Win-forms Powered Spreadsheet application made from scratch",
      fullDescription: "To deepen my understanding of data structures and expression parsing, I built a spreadsheet app with formula support and cell referencing. I implemented undo/redo stacks, color formatting, and a cell dependency engine in C#. The result was a fully functional desktop app with over 80 passing unit tests.",
      techStack: ["C#", "WinForms", ".NET", "OOP", "Data Structures", "Expression Parsing", "Unit Testing"],
      highlights: [
        "Formula support and cell referencing",
        "Undo/redo functionality",
        "Color formatting features",
        "80+ passing unit tests"
      ],
      metrics: {
        tests: "80+",
        features: "Full Formula Support",
        architecture: "Cell Dependency Engine"
      },
      github: "https://github.com/Ehiane/spreadsheet_application",
      stillImage: "/assets/bentoGrids/SpreadSheet/SpreadSheet_still.png",
      hoverVideo: "/assets/bentoGrids/SpreadSheet/SpreadSheet_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "imdb",
      name: "IMDb Movie Sentiment Analysis",
      description: "LSTM model for movie review sentiment classification",
      fullDescription: "To explore NLP, I trained an LSTM model on 50K IMDb reviews to classify positive vs. negative sentiments. I used Keras and TensorFlow with tokenization and dropout layers to reduce overfitting. The model reached 84% accuracy and provided visual insights on emotional patterns in film reviews.",
      techStack: ["Python", "TensorFlow", "word-embeddings", "LSTM", "NLP", "deep-learingng", "neural-network"],
      highlights: [
        "50K IMDb reviews dataset",
        "84% accuracy achieved",
        "LSTM neural network",
        "Visual sentiment insights"
      ],
      metrics: {
        reviews: "50K",
        accuracy: "84%",
        model: "LSTM"
      },
      github: "https://github.com/Ehiane/imdb-movie-sentiment-analysis",
      stillImage: "/assets/bentoGrids/IMDB/imdb_still.png",
      hoverVideo: "/assets/bentoGrids/IMDB/imdb_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "yelp-data",
      name: "Yelp Data Analysis & Insights",
      description: " ETL pipeline and analytics for Yelp's massive dataset",
      fullDescription: "For a database project, I needed to extract insights from Yelp's massive dataset. I created an ETL pipeline using pandas and PostgreSQL, enabling efficient search, filtering, and trend analysis across cities and categories. The system visualized key business patterns and helped users make location-based decisions.",
      techStack: ["Python", "Pandas", "PostgreSQL", "ETL", "Data Visualization", "Analytics"],
      highlights: [
        "Massive dataset processing",
        "ETL pipeline implementation",
        "Trend analysis across cities",
        "Location-based decision insights"
      ],
      metrics: {
        data: "6M+",
        cities: "Multi-city",
        insights: "Location-based"
      },
      github: "https://github.com/ehiane/yelp-analytics",
      youtube: "https://www.youtube.com/watch?v=VPdj3VkV9Es",
      
      stillImage: "/assets/bentoGrids/YelpData/yelp_data_still.png",
      hoverVideo: "/assets/bentoGrids/YelpData/yelp_data_hover.mp4",
      gridSize: "small"
    },
    {
      id: "harvard-school",
      name: "Harvard School Akute Website",
      description: "Mobile and Web-responsive website for Nigerian school with SEO integration",
      fullDescription: "My mother's school in Nigeria needed an online presence to improve visibility and admissions. I developed a mobile-responsive website using HTML, CSS, JS, and PHP, integrating SEO and basic analytics. Within a term, enrollment increased by 13%, and the school earned WAEC and NECO certifications.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "SEO", "Google Analytics"],
      highlights: [
        "Mobile-responsive design",
        "SEO optimization",
        "13% enrollment increase",
        "WAEC and NECO certifications"
      ],
      metrics: {
        enrollment: "+13%",
        certifications: "WAEC & NECO",
        optimization: "SEO"
      },
      status: "Live",
      demo: "https://harvardschoolakute.com/",
      stillImage: "/assets/bentoGrids/HarvardSchool/Harvard School_still.png",
      hoverVideo: "/assets/bentoGrids/HarvardSchool/Harvard School_hover.mp4",
      gridSize: "large"
    },
    {
      id: "faculty-research",
      name: "Student-Faculty Research Portal",
      description: "Mock Flask-based web portal for research collaboration at WSU",
      fullDescription: "Built as a mock class project at WSU, this portal showcased our first hands-on application of software engineering principles, from Agile methodology to version control and comprehensive documentation. I developed a secure Flask-based web app that allowed students to discover and apply to research projects while giving faculty a dashboard to manage applications. Designed to simulate real-world workflow, it successfully demonstrated how to turn an idea into a functional, scalable solution during pilot testing with over 100 users.",
      techStack: ["Flask", "Python", "SQLite", "Authentication", "Dashboard", "Web Development", "agile development", "Test driven devlopment", "Technical Documentation"],
      highlights: [
        "Agile-based workflow",
        "Version controlled code",
        "secure authentication",
        "Test driven devlopment"
      ],
      metrics: {
        test_coverage: "98%",
        phase: "Pilot Testing",
        impact: "Streamlined Access"
      },
      github: "https://github.com/Ehiane/StudentFacultyResearchPortal",
      youtube: "https://youtu.be/6KkSGxuj5pA",
      stillImage: "/assets/bentoGrids/FacultyResearch/FacultyResearch_still.png",
      hoverVideo: "/assets/bentoGrids/FacultyResearch/FacultyResearch_hover.mp4",
      gridSize: "medium"
    },
    {
      id: "python-100-days",
      name: "100 Days of Code — Python Projects",
      description: "Daily Python challenge: 30+ projects from beginner to intermediate level",
      fullDescription: "This self-paced challenge, inspired by Angela Yu's Udemy course, guided me through building over 30 Python mini-projects across topics like data handling, OOP, automation, and game design. I learned how to turn basic concepts like loops, conditionals, and dictionaries into fun and interactive programs—ranging from text-based games to GUI apps using Tkinter. The experience solidified my Python fundamentals and helped me build a habit of daily coding and iterative debugging.",
      techStack: ["Python", "OOP", "Tkinter", "Turtle Graphics", "File I/O", "pandas", "GUI Apps", "APIs", "smtplib", "Random library"],
      highlights: [
        "Daily code challenges completed",
        "OOP and Functional programming projects", 
        "GUI applications with Tkinter",
        "Game development and automation scripts"
      ],
      metrics: {
        days: "30+",
        projects: "25+",
        gui_apps: "6",
        games: "7"
      },
      github: "https://github.com/Ehiane/100_days_of_code_in_python-Projects",
      stillImage: "/assets/bentoGrids/100DaysOfCode/100Days_still.png",
      hoverVideo: "/assets/bentoGrids/100DaysOfCode/100Days_hover.mp4",
      gridSize: "large"
    }
  ],

  professionalInvolvements: [
    {
      id: "nsbe-leadership",
      name: "NSBE Leadership",
      description: "National Society of Black Engineers - Multiple Leadership Positions",
      fullDescription: "Progressive leadership roles within NSBE, from Director of National Communications to Secretary to Co-Director of Conferences. Led event planning, team coordination, and organizational communication initiatives.",
      role: "Communications Director | Secretary | Conferences Co-Director",
      period: "2022-2025",
      company: "National Society of Black Engineers (NSBE)",
      tags: ["Leadership", "Event Planning", "Project Management", "Communication", "Team Coordination"],
      highlights: [
        "Revived WSU's National Presence after 4yr hiatus",
        "Led technical workshops on conference readiness",
        "Large-scale event coordination"
      ],
      achievements: [
        "Led national communication initiatives",
        "Managed organizational documentation",
        "Coordinated major conferences and events",
        "Advanced leadership skills development"
      ],
      type: "leadership",
      gridSize: "large",
      icon: "/assets/professional_icons/nsbe.png"
    },
    {
      id: "cougar-card-center",
      name: "Cougar Card Center",
      description: "Campus student services and support operations",
      fullDescription: "Worked at Washington State University's Cougar Card Center, providing student services, managing card operations, and developing customer service and administrative skills.",
      role: "Clerical Assistant I",
      period: "2022 - 2023",
      company: "Washington State University",
      tags: ["Customer Service", "Student Services", "Communication"],
      highlights: [
        "Student ID card management",
        "Customer service excellence",
        "Campus operations experience"
      ],
      achievements: [
        "Enhanced customer service skills",
        "Streamlined card processing operations",
        "Improved student experience",
        "Developed administrative expertise"
      ],
      type: "work",
      gridSize: "medium",
      icon: "/assets/professional_icons/wsu.png"
    },
    {
      id: "sel-internship",
      name: "SEL Internship",
      description: "Software Quality Assurance and Testing at Schweitzer Engineering Laboratories",
      fullDescription: "Interned at SEL focusing on software quality assurance processes, test script development, and failure data analysis. Gained hands-on experience with enterprise-level testing methodologies and quality control systems.",
      role: "Test Engineer (Software) Intern",
      period: "2023",
      company: "Schweitzer Engineering Laboratories (SEL)",
      tags: ["Testing Frameworks", "Quality Assurance", "Test Scripts", "Data Analysis", "Bug Tracking"],
      highlights: [
        "Developed comprehensive test scripts",
        "Analyzed software failure data",
        "Supported QA processes and procedures",
        "Enterprise-level testing experience"
      ],
      achievements: [
        "Improved test coverage efficiency",
        "Identified critical system vulnerabilities", 
        "Streamlined QA documentation process"
      ],
      type: "internship",
      gridSize: "large",
      icon: "/assets/professional_icons/sel.png"
    },
    {
      id: "plum",
      name: "Plum AI",
      description: "AI calendar scheduling service",
      fullDescription: "Contributed to the development of an intelligent calendar scheduling agent that parses data from your Google and Apple calendars and suggest best times for you.",
      role: "Software Engineer",
      period: "Feb 2025 - May 2025",
      company: "Pangeon.com",
      tags: ["React", "TypeScript", "Node.js", "TensorFlow", "MongoDB", "AWS"],
      highlights: [
        "AI-powered financial advice",
        "Automated expense categorization",
        "Investment portfolio optimization",
        "Real-time spending alerts"
      ],
      achievements: [
        "Developed AI recommendation engine",
        "Implemented secure authentication",
        "Optimized data processing pipelines"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/plum.png"
    },
    {
      id: "jeroyaf",
      name: "Jeroyaf Accounting & Tax Services",
      description: "Accounting automation and internal tooling project",
      fullDescription: "Worked on a suite of internal tools to automate bookkeeping, streamline tax prep, and improve client onboarding. Contributed to building secure software systems integrated with third-party APIs (QuickBooks, ProSeries), and supported sensitive financial workflows with a focus on accuracy, compliance, and performance optimization.",
      role: "Software Engineer",
      period: "Jun 2025 - Present",
      company: "Jeroyaf Accounting and Tax Services",
      tags: ["Python", "Flask", "SQL", "QuickBooks API", "ProSeries", "Automation"],
      highlights: [
        "Bookkeeping automation",
    "Internal tools development",
    "Secure financial workflows",
    "Third-party API integrations"
      ],
      achievements: [
        "Automated repetitive accounting tasks",
    "Integrated QuickBooks and ProSeries APIs",
    "Improved internal workflow accuracy",
    "Supported tax season scalability"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/jeroyaf.png"
    }
  ],
  
  skills: {
    languages: [
      "Python", "C", "C++", "C#", "JavaScript", "Swift", "TypeScript", "Haskell", "XML", "HTML", "CSS"
    ],
    concepts: [
      "Data Structures and Algorithms", "Scalability", "OOP", "Software Design Patterns", "Agile Development"
    ],
    frameworks: [
      "Flask", "React.js", "Node.js", "Express.js", ".Net", "SQL Alchemy"
    ],
    systems: [
      "CI/CD Pipelines", "API Development", "Scalable Web Applications"
    ],
    databases: [
      "SQL", "SQLite", "MySQL", "PostgreSQL", "MongoDB", "RDBMS"
    ],
    development: [
      "Git/GitHub", "Jira", "Postman", "Linux", "PowerBI", "REST APIs", "Power Query", "MS Excel"
    ],
    testing: [
      "NUnit", "Selenium", "Cypress", "Unittest", "Pytest", "TDD (Test Driven Development)"
    ],
    analytics: [
      "PowerBI", "Power Query", "MS Excel", "Data Visualization", "Statistical Analysis"
    ],
    methodologies: [
      "Agile", "Scrum", "TDD", "Code Review", "Version Control", "Documentation"
    ]
  },
  
  experience: [
    {
      title: "Senior Full-Stack Engineer",
      company: "Tech Innovation Labs",
      period: "2022 - Present",
      description: "Leading development of AI-powered applications and distributed systems architecture.",
      achievements: [
        "Built scalable microservices handling 1M+ daily requests",
        "Implemented ML models improving user engagement by 40%",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022", 
      description: "Developed full-stack applications with focus on user experience and performance optimization.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Built responsive web applications serving 100K+ users",
        "Collaborated with design teams to implement pixel-perfect UIs"
      ]
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2020",
    achievements: ["Summa Cum Laude", "Outstanding Student in Software Engineering"]
  }
}
