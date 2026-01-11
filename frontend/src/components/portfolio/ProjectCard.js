import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { techStack } from '../../data/portfolioData';
import { typography, spacing, sizing } from '../../theme/designTokens';
import FrostedTooltip from './FrostedTooltip';

const ProjectCard = ({ project, index }) => {
    // Map project stack strings to the full techStack objects to get icons
    const stackItems = project.stack.map(techName => {
        return techStack.find(t => t.name === techName) || { name: techName, icon: null };
    });

    const handleCardClick = () => {
        if (project.live) {
            window.open(project.live, '_blank', 'noopener,noreferrer');
        }
    };

    const imageBox = (
        <Box
            onClick={handleCardClick}
            sx={{
                position: 'relative',
                width: '100%',
                height: '250px',
                aspectRatio: '16/9',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: project.live ? 'pointer' : 'default',
                '&:hover, &:active': {
                    transform: project.live ? 'scale(1.01)' : 'none',
                },
                '&:hover::before, &:active::before': {
                    transform: 'translate(-100%, -100%)',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-100%',
                    right: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.15), transparent)',
                    transform: 'translate(100%, 100%)',
                    transition: 'transform 0.3s ease-out',
                    zIndex: 10,
                    pointerEvents: 'none',
                },
            }}
        >
                {/* Background Base */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: project.bgColor || '#F5F4F0',
                        transition: 'colors 0.3s',
                    }}
                />

                {/* Browser/Preview Container */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: '8px', md: '16px' },
                        right: { xs: '8px', md: '16px' },
                        top: { xs: '24px', md: '32px' },
                        bottom: '-8px',
                        borderRadius: '8px 8px 0 0',
                        bgcolor: '#fff',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        overflow: 'hidden',
                        transition: 'transform 0.5s ease-out',
                        '&:hover, &:active': {
                            transform: 'translateY(-6px)',
                        },
                    }}
                >
                    {/* Browser Toolbar */}
                    <Box
                        sx={{
                            height: '24px',
                            bgcolor: '#fff',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            px: 1.5,
                            gap: 0.75,
                        }}
                    >
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                bgcolor: '#e2e8f0',
                            }}
                        />
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                bgcolor: '#e2e8f0',
                            }}
                        />
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                bgcolor: '#e2e8f0',
                            }}
                        />
                    </Box>

                    {/* Image Placeholder */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            bgcolor: '#f9fafb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {project.img ? (
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    transition: 'transform 0.7s',
                                }}
                            />
                        ) : (
                            <Typography
                                sx={{
                                    fontSize: '3rem',
                                    fontFamily: '"Playfair Display", serif',
                                    fontStyle: 'italic',
                                    color: '#e2e8f0',
                                    opacity: 0.3,
                                    userSelect: 'none',
                                }}
                            >
                                {project.title.charAt(0)}
                            </Typography>
                        )}

                        {/* Coming Soon overlay when no live link */}
                        {!project.live && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    pointerEvents: 'none',
                                    p: { xs: 2, md: 3 },
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/stickers/coming-soon.png"
                                    alt="Coming soon"
                                    sx={{
                                        width: { xs: '70%', md: '55%' },
                                        maxWidth: '340px',
                                        opacity: 0.9,
                                        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.25))',
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
            }}
        >
            {/* Image/Gradient Area - with optional tooltip for Portfolio v2.0 */}
            {project.id === 'current-portfolio' ? (
                <FrostedTooltip
                    title={
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '0.85rem', fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>
                                <Typography
                                    component="a"
                                    href="https://en.wikipedia.org/wiki/Recursion_(computer_science)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#ffffff',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                        display: 'inline',
                                        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                                    }}
                                >
                                    recursion
                                </Typography>
                                ? 🤔
                            </Typography>
                        </Box>
                    }
                    placement="top"
                >
                    <Box>{imageBox}</Box>
                </FrostedTooltip>
            ) : (
                imageBox
            )}
            <Box sx={{ px: spacing.cardPadding }}>
                {/* Header: Title & Links */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: 1,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontStyle: 'italic',
                                fontSize: typography.h6,
                                fontWeight: 400,
                            }}
                        >
                            {project.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                                mt: 0.25,
                                fontSize: '0.875rem',
                            }}
                        >
                            {project.role}
                        </Typography>
                    </Box>

                    {/* Quick Action Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 0.75,
                            opacity: { xs: 1, md: 0 },
                            transition: 'opacity 0.3s',
                            '&:hover, &:active': {
                                opacity: 1,
                            },
                        }}
                        className="action-buttons"
                    >
                        {project.live ? (
                            <FrostedTooltip
                                title="Live Demo"
                                placement="top"
                                enterTouchDelay={0}
                            >
                                <IconButton
                                    size="small"
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: 'action.hover',
                                        '&:hover, &:active': {
                                            bgcolor: 'action.selected',
                                        },
                                    }}
                                >
                                    <OpenInNew sx={{ fontSize: '0.875rem' }} />
                                </IconButton>
                            </FrostedTooltip>
                        ) : (
                            <FrostedTooltip
                                title="Coming Soon"
                                placement="top"
                                enterTouchDelay={0}
                            >
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 0.75,
                                        borderRadius: '100px',
                                        bgcolor: 'action.hover',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        color: 'text.secondary',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Coming Soon
                                </Box>
                            </FrostedTooltip>
                        )}
                        {project.github && (
                            <FrostedTooltip
                                title="GitHub Repo"
                                placement="top"
                                enterTouchDelay={0}
                            >
                                <IconButton
                                    size="small"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: 'action.hover',
                                        '&:hover, &:active': {
                                            bgcolor: 'action.selected',
                                        },
                                    }}
                                >
                                    <GitHub sx={{ fontSize: '0.875rem' }} />
                                </IconButton>
                            </FrostedTooltip>
                        )}
                    </Box>
                </Box>

                {/* Description */}
                {project.description && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                            fontSize: '0.875rem',
                            mb: 2,
                        }}
                    >
                        {project.description}
                    </Typography>
                )}

                {/* Tech Stack - Overlapping Circles */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pl: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            marginLeft: { xs: '-4px', md: '-8px' },
                            '& > *': {
                                marginLeft: { xs: '-4px', md: '-8px' },
                            },
                            '&:hover > *, &:active > *': {
                                marginLeft: { xs: '2px', md: '4px' },
                            },
                            transition: 'all 0.3s',
                            maxWidth: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        {stackItems.map((tech, i) => (
                            <TechCircle key={i} tech={tech} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const TechCircle = ({ tech }) => {
    return (
        <FrostedTooltip title={tech.name} placement="top" enterTouchDelay={0}>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: sizing.techCircle,
                    height: sizing.techCircle,
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    cursor: 'help',
                    '&:hover, &:active': {
                        borderColor: 'text.secondary',
                        transform: 'scale(1.1)',
                        zIndex: 20,
                    },
                }}
            >
                {tech.icon ? (
                    <Box
                        component="img"
                        src={tech.icon}
                        alt={tech.name}
                        sx={{
                            width: { xs: 18, sm: 19, md: 20 },
                            height: { xs: 18, sm: 19, md: 20 },
                            objectFit: 'contain',
                            opacity: 0.8,
                            filter: tech.invertDark ? 'invert(1)' : 'none',
                        }}
                    />
                ) : (
                    <Box
                        sx={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            bgcolor: 'action.disabled',
                        }}
                    />
                )}
            </Box>
        </FrostedTooltip>
    );
};

export default ProjectCard;
