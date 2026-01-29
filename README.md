# Ehiane Oigiagbe - Portfolio v2.0

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://www.ehiane.com/)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/Ehiane/ehianePortfolio2025)

A modern, interactive portfolio website showcasing my journey as a software engineer, featuring 3D animations, dynamic content, and a sleek user experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Version History](#version-history)
  - [Version 1.0 - The Beginning](#version-10---the-beginning)
  - [Version 2.0 - Current](#version-20---current)
- [Key Components](#key-components)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This portfolio website serves as a comprehensive showcase of my professional experience, projects, technical skills, and achievements. Built with modern web technologies, it features interactive 3D elements, smooth animations, and a responsive design that works seamlessly across all devices.

**Live Site:** [www.ehiane.com](https://www.ehiane.com/)

## ✨ Features

- **Interactive 3D Landing Animation** - Engaging metallic logo with drag-to-rotate functionality
- **Dynamic Content Sections**
  - Professional experience timeline
  - Featured project showcase with live demos and GitHub links
  - Real-time GitHub contribution calendar
  - Certifications, events, and leadership roles
  - Comprehensive tech stack with icons and links
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern, eye-friendly dark color scheme
- **Interactive Elements** - Hover effects, tooltips, and dynamic interactions
- **Performance Optimized** - Fast loading times and smooth scrolling

## 🛠️ Tech Stack

### Frontend Framework
- **React** (v18.2.0) - UI library
- **React Router** (v7.6.0) - Navigation and routing

### Styling & UI
- **Tailwind CSS** (v3.3.3) - Utility-first CSS framework
- **Material-UI** (v5.14.5) - Component library
- **Emotion** - CSS-in-JS styling
- **Framer Motion** (v12.25.0) - Animation library

### 3D Graphics
- **Three.js** (v0.160.1) - 3D library
- **React Three Fiber** (v8.18.0) - React renderer for Three.js
- **React Three Drei** (v9.122.0) - Useful helpers for R3F

### Additional Libraries
- **React GitHub Calendar** (v5.0.4) - GitHub contribution visualization
- **React Tooltip** (v5.30.0) - Interactive tooltips
- **Axios** (v1.5.0) - HTTP client
- **date-fns** (v2.30.0) - Date utility library

### Development Tools
- **Create React App** - Build tooling
- **PostCSS** & **Autoprefixer** - CSS processing
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ehiane/ehianePortfolio2025.git
   cd ehianePortfolio2025
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Available Scripts

```bash
npm start      # Runs the app in development mode
npm test       # Launches the test runner
npm run build  # Builds the app for production
npm run eject  # Ejects from Create React App (one-way operation)
```

## 📁 Project Structure

```
ehiane-new-portfolio/
├── frontend/
│   ├── public/
│   │   ├── images/          # Image assets
│   │   └── index.html       # HTML template
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── portfolio/   # Portfolio-specific components
│   │   │   ├── three/       # 3D components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── IntroAnimation.js
│   │   ├── pages/           # Page components
│   │   │   └── HomePage.js
│   │   ├── data/            # Static data and content
│   │   ├── services/        # API and service functions
│   │   ├── theme/           # Theme configuration
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── node_modules/
├── .gitignore
└── README.md
```

## 📜 Version History

### Version 1.0 - Cosmic OS (The Galaxy Explorer)

**The Philosophy:**
"I felt most portfolio websites were too static, so I challenged myself to build an experience instead of just a page."

Inspired by a "Cosmic OS" theme, Version 1.0 was a cinematic, interactive journey through space where projects existed as explorable planets in a 3D galaxy. The goal was to create something memorable and fun to explore.

#### Tech Stack
- **React.js** - Frontend framework
- **Three.js** - 3D galaxy rendering
- **Framer Motion** - Smooth animated transitions
- **TypeScript** - Type-safe development
- **JavaScript** - Core functionality
- **Midjourney** - Asset generation
- **GitHub Copilot** - Development assistance

#### Key Features
- **3D Galaxy Navigation** - Projects displayed as planets in an explorable cosmic environment
- **Cinematic Experience** - Interactive and visually stunning animations
- **Space Theme** - Full cosmic aesthetic with stars, planets, and space elements
- **Responsive & Performant** - Optimized for smooth performance across devices
- **Interactive Exploration** - Users could navigate through space to discover projects

#### Demo
https://github.com/user-attachments/assets/your-v1-demo-video.mp4

> *Replace the link above with your actual demo video*

---

### Version 2.0 - Professional Portfolio (Current)

**The Evolution:**
While Version 1.0 was fun and creative, I wanted to create something more professional that better represented me as a software engineer while still showing personality.

#### What Changed
- **More Professional Aesthetic** - Moved away from the cartoony space theme to a sleek, modern design
- **Personal Touch** - Added character through personal elements like Pogba (my favorite footballer) and detailed achievements
- **Comprehensive Content** - Expanded sections for experience, certifications, leadership roles, and accomplishments
- **Cleaner Navigation** - Traditional scrolling experience with smooth animations
- **Career-Focused** - Better showcase of professional experience and technical skills

#### Design Philosophy
- Interactive 3D landing with a metallic, holographic logo
- Dark theme optimized for professional presentation
- Smooth animations and transitions throughout (still using Framer Motion)
- Content-first approach with clear information hierarchy
- Personal elements mixed with professional achievements

#### Visual Highlights

**Landing Screen:**
Interactive 3D metallic logo with drag-to-rotate capability

**Hero Section:**
Bold typography with "Building Software To Help People" tagline

**Experience Timeline:**
Chronological display of professional roles with detailed descriptions

**Project Showcase:**
Card-based layout with live demos, GitHub links, and tech stack badges

**Personal Touch:**
Pogba GIFs, achievements, certifications, conference attendance, and leadership roles

**GitHub Activity:**
Real-time contribution heatmap showing coding consistency

**Tech Stack Grid:**
Comprehensive display of languages, frameworks, tools, and AI technologies

**Contact Section:**
Easy access to social links, email, and resume download

#### Demo
https://github.com/user-attachments/assets/your-v2-demo-video.mp4

> *Replace the link above with your actual demo video*

## 🎨 Key Components

### IntroAnimation.js
The landing experience featuring a 3D metallic logo built with Three.js and React Three Fiber. Users can drag to rotate the logo or click to proceed to the main content.

### Navbar.js
A responsive navigation bar with smooth scrolling to different sections, social media links, and a mobile-friendly menu.

### HomePage.js
The main page component that orchestrates all sections of the portfolio including hero, experience, projects, GitHub activity, achievements, tech stack, and contact.

### Footer.js
Contains attribution, copyright information, and additional links.

### Portfolio Components
Specialized components in `components/portfolio/` for displaying projects, experience cards, tech stack icons, and other portfolio-specific UI elements.

### Three Components
3D graphics components in `components/three/` handling the Three.js integration and animations.

## 🚢 Deployment

The portfolio is deployed and accessible at [www.ehiane.com](https://www.ehiane.com/)

### Build for Production

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build` folder, ready for deployment to any static hosting service.

### Deployment Options

- **Netlify** - Recommended for easy deployment with continuous integration
- **Vercel** - Great for React applications
- **GitHub Pages** - Free hosting for public repositories
- **Custom Server** - Deploy to any web server

## 📄 License

This project is open source and available for reference and learning purposes.

## 📧 Contact

**Ehiane Oigiagbe**

- Website: [www.ehiane.com](https://www.ehiane.com/)
- GitHub: [@Ehiane](https://github.com/Ehiane)
- LinkedIn: [Ehiane Oigiagbe](https://www.linkedin.com/in/ehiane-oigiagbe)
- Email: ehiane.dev@gmail.com

---

**"Building Software To Help People"**

*Inspired by the design work of [Tushar Negi](https://tushaar.me/)*

---

© 2026 All rights reserved.
