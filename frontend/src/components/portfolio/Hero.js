import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Avatar } from '@mui/material';
import { personalInfo, achievements } from '../../data/portfolioData';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { typography, sizing } from '../../theme/designTokens';
import SurpriseMeButton from './SurpriseMeButton';
import CertificateViewer3D from './CertificateViewer3D';
import FrostedTooltip from './FrostedTooltip';

// Static banners defined at module scope to avoid useEffect lint warning
const banners = [
    '/images/banner/paul_pogba_1.gif',
    '/images/banner/paul_pogba_2.gif',
    '/images/banner/paul_pogba_3.gif',
    '/images/banner/Pogba_dab.gif'
];

// Greeting messages for profile picture tooltip
const greetings = [
    "Hey there! 👋",
    "Hello, World! 🌍",
    "Welcome! 👋 Glad you're here",
    "What's up! 🚀",
    "Hey! Thanks for stopping by 😊",
    "Welcome in! Take a look around ✨",
    "Hey friend! 👋 Nice to meet you",
    "Yo! 🎉 Check out what I've been building"
];

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomBanner, setRandomBanner] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [greeting, setGreeting] = useState('');

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

    // Show greeting tooltip on every page load
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        setGreeting(greetings[randomIndex]);

        // Show greeting shortly after load
        const showTimer = setTimeout(() => {
            setShowGreeting(true);
        }, 500);

        // Hide greeting after a few seconds
        const hideTimer = setTimeout(() => {
            setShowGreeting(false);
        }, 7000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
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
            <FrostedTooltip
                title="Paul Pogba - My favorite footballer."
                placement="top"
                fullWidth
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
                            '&:hover, &:active': {
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
            </FrostedTooltip>

            {/* Profile Avatar */}
            <Box
                sx={{ ml: 3, position: 'relative', zIndex: 2, width: sizing.avatar, height: sizing.avatar, overflow: 'visible' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
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

                {/* Greeting Tooltip anchored to avatar but outside the clipped circle */}
                <AnimatePresence>
                    {showGreeting && (
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            sx={{
                                position: 'absolute',
                                top: '-44px',
                                left: '50%',
                                transform: 'translateX(-60%)',
                                zIndex: 10000,
                                pointerEvents: 'none',
                                whiteSpace: 'nowrap',
                                // Frosted glass effect
                                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.98), rgba(20, 20, 20, 0.98))',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: '12px',
                                padding: '10px 16px',
                                boxShadow: `
                                    0 8px 32px rgba(0, 0, 0, 0.4),
                                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                    0 0 0 1px rgba(0, 0, 0, 0.2)
                                `,
                                overflow: 'hidden',
                                // Arrow
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderStyle: 'solid',
                                    borderWidth: '8px 8px 0 8px',
                                    borderColor: 'rgba(26, 26, 26, 0.98) transparent transparent transparent',
                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                                },
                                // Shimmer effect
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
                                    animation: 'shimmer 3s infinite',
                                    borderRadius: '12px',
                                },
                                '@keyframes shimmer': {
                                    '0%': { left: '-100%' },
                                    '100%': { left: '200%' },
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {greeting}
                            </Typography>

                            {/* Glossy highlight overlay */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '50%',
                                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                                    borderRadius: '12px 12px 0 0',
                                    pointerEvents: 'none',
                                }}
                            />
                        </Box>
                    )}
                </AnimatePresence>
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
                        <FrostedTooltip
                            title={
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box
                                        component="img"
                                        src="/images/validation_spongebob_meme.gif"
                                        alt="Validation GIF"
                                        sx={{
                                            width: '120px',
                                            height: 'auto',
                                            borderRadius: '12px',
                                            display: 'block',
                                            margin: '0 auto',
                                        }}
                                    />
                                </Box>
                            }
                            placement="top"
                            enterTouchDelay={0}
                        >
                            <VerifiedIcon
                                sx={{
                                    fontSize: '1.5rem',
                                    color: '#3b82f6',
                                    cursor: 'pointer',
                                    transition: 'transform 0.4s ease, filter 0.2s',
                                    '&:hover, &:active': {
                                        transform: 'scale(1.1) rotate(360deg)',
                                    },
                                    '&:active': {
                                        transform: 'scale(1.05) rotate(360deg)',
                                        filter: 'brightness(1.2)',
                                    },
                                }}
                            />
                        </FrostedTooltip>
                        <FrostedTooltip
                            title={
                                <Box sx={{ textAlign: 'center', py: 0.5 }}>
                                    <Box
                                        component="img"
                                        src="/images/us_flag_gif.gif"
                                        alt="US Flag"
                                        sx={{
                                            width: '48px',
                                            height: 'auto',
                                            mb: 0.5,
                                            borderRadius: '4px',
                                            display: 'block',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <Typography sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                                        Washington, USA
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                                        {currentTime}
                                    </Typography>
                                </Box>
                            }
                            placement="top"
                            enterTouchDelay={0}
                        >
                            <Box
                                component="img"
                                src="/images/stickers/location.png"
                                alt="Location"
                                sx={{
                                    height: '36px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover, &:active': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:active': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                        </FrostedTooltip>
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
                            '&:hover, &:active': {
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
                            '&:hover, &:active': {
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
                    <FrostedTooltip
                        title={
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    component="img"
                                    src="/images/wsuCougarsFlag.gif"
                                    alt="WSU Cougars Flag"
                                    sx={{
                                        width: '48px',
                                        height: 'auto',
                                        mb: 0.5,
                                        borderRadius: '4px',
                                        display: 'block',
                                        margin: '0 auto',
                                    }}
                                />
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
                        placement="top"
                        enterTouchDelay={0}
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
                                    '&:hover, &:active': {
                                        color: '#39d353',
                                    },
                                }}
                            >
                                Washington State University
                            </Typography>
                        </motion.span>
                    </FrostedTooltip>
                    {' '}and former Software Test Engineer Intern at{' '}
                    <FrostedTooltip
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
                        placement="top"
                        enterTouchDelay={0}
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
                                    '&:hover, &:active': {
                                        color: '#39d353',
                                    },
                                }}
                            >
                                Schweitzer Engineering Laboratories
                            </Typography>
                        </motion.span>
                    </FrostedTooltip>
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
