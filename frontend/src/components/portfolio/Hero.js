import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Tooltip } from '@mui/material';
import { personalInfo } from '../../data/portfolioData';
import VerifiedIcon from '@mui/icons-material/Verified';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomBanner, setRandomBanner] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // Array of available banners
    const banners = [
        '/images/banner/paul_pogba_1.gif',
        '/images/banner/paul_pogba_2.gif',
        '/images/banner/paul_pogba_3.gif',
        '/images/banner/Pogba_dab.gif'
    ];

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

    return (
        <Box>
            {/* Banner Image */}
            <Tooltip
                title="Paul Pogba - My favorite football player"
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
                        height: { xs: '200px', sm: '250px', md: '280px' },
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
                        width: { xs: 100, sm: 120 },
                        height: { xs: 100, sm: 120 },
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
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
                            }}
                        />
                    </Tooltip>
                </Box>

                {/* Tagline */}
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: { xs: '1.75rem', md: '2.25rem' },
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
                        }}
                    >
                        Things
                    </Typography>
                    {' That Help '}
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
                        }}
                    >
                        People
                    </Typography>
                </Typography>

                {/* Bio */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                        maxWidth: '650px',
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
                    </Tooltip>
                    . I care about how software behaves in the real world, not just how it looks on a screen.
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;
