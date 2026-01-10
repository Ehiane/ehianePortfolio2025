import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';

const Projects = () => {
    return (
        <Box>
            {/* Section Header */}
            <Box
                sx={{
                    mb: 8,
                    pb: 4,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}
            >
                <Box>
                    <Typography
                        variant="overline"
                        sx={{
                            fontSize: '9px',
                            fontFamily: 'monospace',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'text.secondary',
                            display: 'block',
                            mb: 0.5,
                        }}
                    >
                        Portfolio v2.0
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontFamily: '"Playfair Display", serif',
                            fontStyle: 'italic',
                            fontWeight: 400,
                        }}
                    >
                        Selected{' '}
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
                            Projects
                        </Typography>
                    </Typography>
                </Box>
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: '10px',
                        fontFamily: 'monospace',
                        color: 'text.secondary',
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    Featured / {projects.length.toString().padStart(2, '0')}
                </Typography>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={{ xs: 6, md: 8 }}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={6} key={project.id}>
                        <ProjectCard project={project} index={index} />
                    </Grid>
                ))}
            </Grid>

            {/* "Cooking more projects" Faded Text */}
            <Box
                sx={{
                    textAlign: 'center',
                    pt: 10,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '10vw', md: '3vw' },
                        fontFamily: '"Playfair Display", serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        background: 'linear-gradient(90deg, transparent, currentColor, transparent)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        opacity: 0.15,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Cooking More...
                </Typography>
            </Box>
        </Box>
    );
};

export default Projects;
