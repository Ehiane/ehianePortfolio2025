import React, { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/portfolio/Hero';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';
import GitHubSection from '../components/portfolio/GitHubSection';
import BeyondCode from '../components/portfolio/BeyondCode';
import TechStack from '../components/portfolio/TechStack';
import Contact from '../components/portfolio/Contact';
import CertificateViewer3D from '../components/portfolio/CertificateViewer3D';
import { spacing } from '../theme/designTokens';

const HomePage = () => {
    // Consistent spacing between sections
    const sectionSpacing = spacing.sectionGap;

    // Shared 3D Certificate Viewer state
    const [viewer3DOpen, setViewer3DOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleOpen3DViewer = (certificate) => {
        setSelectedCertificate(certificate);
        setViewer3DOpen(true);
    };

    const handleClose3DViewer = () => {
        setViewer3DOpen(false);
        setTimeout(() => setSelectedCertificate(null), 300);
    };

    return (
        <Box
            sx={{
                maxWidth: '800px',
                mx: 'auto',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 8, md: 12 },
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            {/* 1. Hero Section (Banner + Profile) */}
            <Box sx={{ mb: sectionSpacing }}>
                <Hero onOpen3DViewer={handleOpen3DViewer} />
            </Box>

            {/* 2. Experience Section */}
            <Box id="experience" sx={{ mb: sectionSpacing }}>
                <Experience />
            </Box>

            {/* 3. Projects (Selected Works) */}
            <Box id="projects" sx={{ mb: sectionSpacing }}>
                <Projects />
            </Box>

            {/* 4. GitHub Section */}
            <Box id="github" sx={{ mb: sectionSpacing }}>
                <GitHubSection />
            </Box>

            {/* 5. Beyond Code (Achievements) */}
            <Box id="achievements" sx={{ mb: sectionSpacing }}>
                <BeyondCode onOpen3DViewer={handleOpen3DViewer} />
            </Box>

            {/* 6. Tech Stack */}
            <Box id="tech-stack" sx={{ mb: sectionSpacing }}>
                <TechStack />
            </Box>

            {/* 7. Contact Section */}
            <Box id="contact">
                <Contact />
            </Box>

            {/* Shared 3D Certificate Viewer */}
            <CertificateViewer3D
                certificate={selectedCertificate}
                open={viewer3DOpen}
                onClose={handleClose3DViewer}
            />
        </Box>
    );
};

export default HomePage;
