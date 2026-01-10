import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/portfolio/Hero';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';
import GitHubSection from '../components/portfolio/GitHubSection';
import BeyondCode from '../components/portfolio/BeyondCode';
import TechStack from '../components/portfolio/TechStack';
import Contact from '../components/portfolio/Contact';

const HomePage = () => {
    // Consistent spacing between sections
    const sectionSpacing = { xs: 16, md: 24 };

    return (
        <Box
            sx={{
                maxWidth: '800px',
                mx: 'auto',
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 8, md: 12 },
            }}
        >
            {/* 1. Hero Section (Banner + Profile) */}
            <Box sx={{ mb: sectionSpacing }}>
                <Hero />
            </Box>

            {/* 2. Experience Section */}
            <Box id="experience" sx={{ mb: sectionSpacing }}>
                <Experience />
            </Box>

            {/* 3. Projects (Selected Works) */}
            <Box id="projects" sx={{ mb: { xs: 4, md: 6 } }}>
                <Projects />
            </Box>

            {/* 4. GitHub Section */}
            <Box sx={{ mb: sectionSpacing }}>
                <GitHubSection />
            </Box>

            {/* 5. Beyond Code (Achievements) */}
            <Box id="achievements" sx={{ mb: sectionSpacing }}>
                <BeyondCode />
            </Box>

            {/* 6. Tech Stack */}
            <Box sx={{ mb: sectionSpacing }}>
                <TechStack />
            </Box>

            {/* 7. Contact Section */}
            <Box id="contact">
                <Contact />
            </Box>
        </Box>
    );
};

export default HomePage;
