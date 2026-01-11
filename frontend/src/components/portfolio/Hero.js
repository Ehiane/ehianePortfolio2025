import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Avatar, Tooltip } from '@mui/material';
import { personalInfo, achievements } from '../../data/portfolioData';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { typography, sizing } from '../../theme/designTokens';
import SurpriseMeButton from './SurpriseMeButton';
import CertificateViewer3D from './CertificateViewer3D';

// Static banners defined at module scope to avoid useEffect lint warning
const banners = [
    '/images/banner/paul_pogba_1.gif',
    '/images/banner/paul_pogba_2.gif',
    '/images/banner/paul_pogba_3.gif',
    '/images/banner/Pogba_dab.gif'
];

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomBanner, setRandomBanner] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [viewerOpen, setViewerOpen] = useState(false);

    // Sway animation for organization tooltips
    const swayVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            }
        },
    };

    // Randomly select a banner on component mount
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * banners.length);
        setRandomBanner(banners[randomIndex]);
    }, []);

    // Update current time in PST
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
            const hours = pstTime.getHours();
            const minutes = String(pstTime.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;
            setCurrentTime(`${displayHours}:${minutes} ${ampm} PST`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Handle surprise button click - open random certificate viewer
    const handleSurpriseClick = () => {
        const certificates = achievements.certifications;
        const randomIndex = Math.floor(Math.random() * certificates.length);
        setSelectedCertificate(certificates[randomIndex]);
        setViewerOpen(true);
    };

    // Handle shuffle banner
    const handleShuffleBanner = () => {
        const randomIndex = Math.floor(Math.random() * banners.length);
        setRandomBanner(banners[randomIndex]);
    };

    return (
        <Box sx={{ mt: 4 }}>
            {/* Banner Image */}
            <Tooltip
                title="Paul Pogba - My favorite footballer."
                arrow
                sx={{
                    '& .MuiTooltip-tooltip': {
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333333',
                        borderRadius: '8px',
                        padding: '8px 12px',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: sizing.bannerHeight,
                        borderRadius: '16px',
                        overflow: 'hidden',
                        mb: '-60px',
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={randomBanner}
                        alt="Banner"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                    {/* Shuffle Button */}
                    <Box
                        onClick={(e) => {
                            e.stopPropagation();
                            handleShuffleBanner();
                        }}
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            zIndex: 10,
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            color: '#ffffff',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.4s ease',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.15)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            },
                            '&:active': {
                                transform: 'translateY(0px)',
                            },
                        }}
                    >
                        <ShuffleIcon sx={{ fontSize: '1rem' }} />
                    </Box>
                </Box>
            </Tooltip>

            {/* Profile Avatar */}
            <Box
                sx={{ pl: 3, position: 'relative', zIndex: 2 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    sx={{
                        width: sizing.avatar,
                        height: sizing.avatar,
                        position: 'relative',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        border: '4px solid',
                        borderColor: 'background.default',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                    }}
                >
                    {/* Pen Drawn Image - Default */}
                    <Avatar
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: isHovered ? 0 : 1,
                            transition: 'opacity 0.6s ease-in-out',
                        }}
                    />
                    {/* Real Photo - On Hover */}
                    <Avatar
                        src="/images/notPenDrawn.jpeg"
                        alt={personalInfo.name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.6s ease-in-out',
                        }}
                    />
                </Box>
            </Box>

            {/* Name and Bio */}
            <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: typography.h3,
                                fontFamily: '"Playfair Display", serif',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: 'text.primary',
                            }}
                        >
                            {personalInfo.name}
                        </Typography>
                        <Tooltip
                            title="yes! it's really me 😂"
                            arrow
                            sx={{
                                '& .MuiTooltip-tooltip': {
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333333',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                },
                            }}
                        >
                            <VerifiedIcon
                                sx={{
                                    fontSize: '1.5rem',
                                    color: '#3b82f6',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, filter 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:active': {
                                        transform: 'scale(1.05)',
                                        filter: 'brightness(1.2)',
                                    },
                                }}
                            />
                        </Tooltip>
                        <Tooltip
                            title={
                                <Box sx={{ textAlign: 'center', py: 0.5 }}>
                                    <Typography sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                                        🇺🇸 Washington, USA
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                                        {currentTime}
                                    </Typography>
                                </Box>
                            }
                            arrow
                            sx={{
                                '& .MuiTooltip-tooltip': {
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333333',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/stickers/location.png"
                                alt="Location"
                                sx={{
                                    height: '36px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:active': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                        </Tooltip>
                    </Box>
                    <SurpriseMeButton onClick={handleSurpriseClick} />
                </Box>

                {/* Tagline */}
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: typography.h4,
                        fontFamily: '"Playfair Display", serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        mb: 1,
                        lineHeight: 1.2,
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                            fontStyle: 'inherit',
                        }}
                    >
                        Building
                    </Typography>
                    {' '}
                    <Typography
                        component="a"
                        onClick={() => {
                            document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        sx={{
                            fontWeight: 400,
                            color: 'text.primary',
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                            fontStyle: 'inherit',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: '#39d353',
                            },
                            '&:active': {
                                color: '#39d353',
                            },
                        }}
                    >
                        Software
                    </Typography>
                    {' To Help '}
                    <Typography
                        component="a"
                        onClick={() => {
                            document.getElementById('achievements').scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        sx={{
                            fontWeight: 400,
                            color: 'text.primary',
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                            fontStyle: 'inherit',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: '#39d353',
                            },
                            '&:active': {
                                color: '#39d353',
                            },
                        }}
                    >
                        People
                    </Typography>
                    .
                </Typography>

                {/* Bio */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                        maxWidth: '650px',
                        mt: 4,
                    }}
                >
                    Computer Science graduate from{' '}
                    <Tooltip
                        title={
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                                    Washington State University
                                </Typography>
                                <Typography 
                                    component="a"
                                    href="https://www.linkedin.com/posts/ehiane-oigiagbe_wsugrad-classof2025-computerscience-activity-7325900623353122817-3JLI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ 
                                        color: '#39d353',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    View LinkedIn Post
                                </Typography>
                            </Box>
                        }
                        arrow
                        sx={{
                            '& .MuiTooltip-tooltip': {
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333333',
                                borderRadius: '8px',
                                padding: '8px 12px',
                            },
                        }}
                    >
                        <motion.span
                            initial="initial"
                            animate="animate"
                            variants={swayVariants}
                            style={{ display: 'inline' }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: '#39d353',
                                    },
                                }}
                            >
                                Washington State University
                            </Typography>
                        </motion.span>
                    </Tooltip>
                    {' '}and former Software Test Engineer Intern at{' '}
                    <Tooltip
                        title={
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    component="img"
                                    src="https://selinc.com/favicon.ico"
                                    alt="SEL Logo"
                                    sx={{
                                        height: '40px',
                                        mb: 0.5,
                                    }}
                                />
                                <Typography sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                                    Schweitzer Engineering Laboratories
                                </Typography>
                                <Typography 
                                    component="a"
                                    href="https://selinc.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ 
                                        color: '#39d353',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    Visit Website
                                </Typography>
                            </Box>
                        }
                        arrow
                        sx={{
                            '& .MuiTooltip-tooltip': {
                                backgroundColor: '#1a1a1a',
                                border: '1px solid #333333',
                                borderRadius: '8px',
                                padding: '8px 12px',
                            },
                        }}
                    >
                        <motion.span
                            initial="initial"
                            animate="animate"
                            variants={swayVariants}
                            style={{ display: 'inline' }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: '#39d353',
                                    },
                                }}
                            >
                                Schweitzer Engineering Laboratories
                            </Typography>
                        </motion.span>
                    </Tooltip>
                    .{' '}
                    <Typography
                        component="span"
                        sx={{
                            background: 'linear-gradient(90deg, #39d353 0%, #39d353 50%, #a1a1aa 50%, #a1a1aa 100%)',
                            backgroundSize: '200% 100%',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'colorFill 5.5s ease-in-out infinite',
                            '@keyframes colorFill': {
                                '0%': {
                                    backgroundPosition: '100% 0',
                                },
                                '80%': {
                                    backgroundPosition: '-100% 0',
                                },
                                '100%': {
                                    backgroundPosition: '-100% 0',
                                },
                            },
                        }}
                    >
                        Building software that makes complex systems feel accessible
                    </Typography>
                    .
                </Typography>
            </Box>

            {/* Certificate Viewer */}
            <CertificateViewer3D
                certificate={selectedCertificate}
                open={viewerOpen}
                onClose={() => setViewerOpen(false)}
            />
        </Box>
    );
};

export default Hero;
