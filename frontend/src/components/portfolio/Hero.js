import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { personalInfo } from '../../data/portfolioData';
import VerifiedIcon from '@mui/icons-material/Verified';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomBanner, setRandomBanner] = useState('');

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

    return (
        <Box>
            {/* Banner Image */}
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '200px', sm: '250px', md: '280px' },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    mb: '-60px',
                    position: 'relative',
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
                    <VerifiedIcon
                        sx={{
                            fontSize: '1.5rem',
                            color: '#3b82f6',
                        }}
                    />
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        mb: 3,
                    }}
                >
                    📍 {personalInfo.location}
                </Typography>

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
                    {personalInfo.tagline}{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            color: 'text.secondary',
                            fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                    >
                        {personalInfo.taglineAccent}
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
                    {personalInfo.bio}
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;
