import React from 'react';
import { Box, Typography } from '@mui/material';
import { techStack } from '../../data/portfolioData';
import { typography } from '../../theme/designTokens';
import FrostedTooltip from './FrostedTooltip';

const TechStack = () => {
    // Duplicate the tech stack array for seamless infinite scroll
    const duplicatedTechStack = [...techStack, ...techStack];

    return (
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
            {/* Section Header */}
            <Box sx={{ mb: 2 }}>
                <Typography
                    variant="overline"
                    sx={{
                        fontSize: typography.caption,
                        fontFamily: 'monospace',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        display: 'block',
                        mb: 0.5,
                    }}
                >
                    Technologies
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: typography.h5,
                        fontFamily: '"Playfair Display", serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                    }}
                >
                    Tech{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            color: 'text.secondary',
                        }}
                    >
                        Stack
                    </Typography>
                </Typography>
            </Box>

            {/* Infinite Scrolling Tech Carousel */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    '&::before, &::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        width: { xs: '60px', md: '100px' },
                        height: '100%',
                        zIndex: 2,
                        pointerEvents: 'none',
                    },
                    '&::before': {
                        left: 0,
                        background: 'linear-gradient(to right, #000000, transparent)',
                    },
                    '&::after': {
                        right: 0,
                        background: 'linear-gradient(to left, #000000, transparent)',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 2, md: 4 },
                        animation: 'scroll 40s linear infinite',
                        '&:hover': {
                            animationPlayState: 'paused',
                        },
                        '@keyframes scroll': {
                            '0%': {
                                transform: 'translateX(0)',
                            },
                            '100%': {
                                transform: `translateX(-${(techStack.length * 80)}px)`,
                            },
                        },
                    }}
                >
                    {duplicatedTechStack.map((tech, index) => (
                        <FrostedTooltip key={index} title={tech.name} placement="top" enterTouchDelay={0}>
                            <Box
                                component="a"
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: { xs: '56px', md: '64px' },
                                    height: { xs: '56px', md: '64px' },
                                    borderRadius: '12px',
                                    bgcolor: 'action.hover',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    '&:hover, &:active': {
                                        borderColor: '#39d353',
                                        transform: 'scale(0.95)',
                                        boxShadow: '0 8px 16px rgba(57, 211, 83, 0.25)',
                                    },
                                }}
                            >
                                {tech.icon ? (
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            objectFit: 'contain',
                                            opacity: 0.9,
                                            filter: tech.invertDark ? 'invert(1)' : 'none',
                                        }}
                                    />
                                ) : (
                                    <Box
                                        sx={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            bgcolor: 'action.disabled',
                                        }}
                                    />
                                )}
                            </Box>
                        </FrostedTooltip>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TechStack;
