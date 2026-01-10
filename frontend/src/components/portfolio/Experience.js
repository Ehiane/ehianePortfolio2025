import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { roles } from '../../data/portfolioData';

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                        Career Path
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
                        Experience{' '}
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
                            & Roles
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
                    2022 — Present
                </Typography>
            </Box>

            {/* Timeline */}
            <Box sx={{ position: 'relative' }}>
                {roles.map((role, index) => (
                    <Box
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            mb: 3,
                            position: 'relative',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {/* Timeline Dot - All Green */}
                        <Box
                            sx={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                bgcolor: '#22c55e', // All green
                                mt: 1,
                                flexShrink: 0,
                                transition: 'all 0.3s ease',
                                boxShadow: hoveredIndex === index
                                    ? '0 0 12px #22c55e'
                                    : 'none',
                            }}
                        />

                        {/* Content */}
                        <Box sx={{ flex: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 1,
                                    flexWrap: 'wrap',
                                    gap: 1,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontStyle: 'italic',
                                            fontSize: '1.5rem',
                                            fontWeight: 400,
                                            transition: 'color 0.3s ease',
                                            color: hoveredIndex === index ? '#9ca3af' : 'text.primary',
                                        }}
                                    >
                                        {role.company}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            mt: 0.5,
                                        }}
                                    >
                                        {role.role}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.75rem',
                                        fontFamily: 'monospace',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {role.date}
                                </Typography>
                            </Box>

                            {/* Expandable Description - Dropdown on Hover */}
                            <Box
                                sx={{
                                    maxHeight: hoveredIndex === index ? '500px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'max-height 1.2s ease-in-out',
                                    pt: hoveredIndex === index ? 2 : 0,
                                    pb: hoveredIndex === index ? 2 : 0,
                                    mt: hoveredIndex === index ? 1 : 0,
                                    visibility: hoveredIndex === index ? 'visible' : 'hidden',
                                }}
                            >
                                {role.subRoles ? (
                                    // Display sub-roles as bullet points
                                    <Box sx={{ pl: 2 }}>
                                        {role.subRoles.map((subRole, subIndex) => (
                                            <Box key={subIndex} sx={{ mb: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                    <Box
                                                        sx={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            bgcolor: '#22c55e',
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: 'text.primary',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {subRole.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            fontSize: '0.7rem',
                                                            fontFamily: 'monospace',
                                                        }}
                                                    >
                                                        ({subRole.date})
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        lineHeight: 1.7,
                                                        pl: 2,
                                                    }}
                                                >
                                                    {subRole.description}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                ) : (
                                    // Regular description
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.7,
                                            pr: 2,
                                        }}
                                    >
                                        {role.description}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Experience;
