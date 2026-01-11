import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { roles } from '../../data/portfolioData';
import { typography, spacing, sizing } from '../../theme/designTokens';

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Helper: get visible sub-roles based on `visible` flag
    const getVisibleSubRoles = (role) => {
        if (!role.subRoles) return [];
        return role.subRoles.filter((sr) => sr.visible !== false);
    };

    // Helper: pick displayed role title/date based on visibility
    const getDisplayRole = (role) => {
        const visible = getVisibleSubRoles(role);
        return visible.length > 0 ? visible[0].title : role.role;
    };

    const getDisplayDate = (role) => {
        const visible = getVisibleSubRoles(role);
        return visible.length > 0 ? visible[0].date : role.date;
    };

    // Helper: parse start date from a range like "Sep 2023 — Dec 2024" or "June 2025 — Present"
    const monthMap = {
        jan: 0, january: 0,
        feb: 1, february: 1,
        mar: 2, march: 2,
        apr: 3, april: 3,
        may: 4,
        jun: 5, june: 5,
        jul: 6, july: 6,
        aug: 7, august: 7,
        sep: 8, sept: 8, september: 8,
        oct: 9, october: 9,
        nov: 10, november: 10,
        dec: 11, december: 11,
    };

    const parseStartDate = (range) => {
        if (!range || typeof range !== 'string') return new Date(0).getTime();
        const startPart = range.split('—')[0].trim();
        const parts = startPart.split(' ');
        // Expect formats like "Sep 2023" or "June 2025"
        if (parts.length === 2) {
            const m = monthMap[parts[0].toLowerCase()] ?? 0;
            const y = parseInt(parts[1], 10);
            if (!Number.isNaN(y)) return new Date(y, m, 1).getTime();
        }
        // Fallback: extract year
        const yearMatch = startPart.match(/(19|20)\d{2}/);
        const y = yearMatch ? parseInt(yearMatch[0], 10) : 0;
        return new Date(y, 0, 1).getTime();
    };

    // Sort roles by computed start date (desc) using display date
    const sortedRoles = [...roles].sort((a, b) => {
        const aTime = parseStartDate(getDisplayDate(a));
        const bTime = parseStartDate(getDisplayDate(b));
        return bTime - aTime; // descending
    });

    return (
        <Box>
            {/* Section Header */}
            <Box
                sx={{
                    mb: spacing.sectionHeaderMb,
                    pb: { xs: 3, sm: 3.5, md: 4 },
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
                            fontSize: typography.caption,
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
                            fontSize: typography.h4,
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
                        fontSize: typography.caption,
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
                {sortedRoles.map((role, index) => (
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
                            transition: 'all 0.5s ease-in-out',
                        }}
                    >
                        {/* Timeline Dot - All Green */}
                        <Box
                            sx={{
                                width: sizing.timelineDot,
                                height: sizing.timelineDot,
                                borderRadius: '50%',
                                bgcolor: '#22c55e', // All green
                                mt: 1,
                                flexShrink: 0,
                                transition: 'all 0.5s ease-in-out',
                                transitionDelay: hoveredIndex === index ? '0.1s' : '0s',
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
                                            fontSize: typography.h6,
                                            fontWeight: 400,
                                            transition: 'color 0.5s ease-in-out',
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
                                        {getDisplayRole(role)}
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
                                    {getDisplayDate(role)}
                                </Typography>
                            </Box>

                            {/* Expandable Description - Dropdown on Hover */}
                            <Box
                                sx={{
                                    maxHeight: hoveredIndex === index ? '500px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'max-height 1.2s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s ease-in-out, margin 0.5s ease-in-out',
                                    pt: hoveredIndex === index ? 2 : 0,
                                    pb: hoveredIndex === index ? 2 : 0,
                                    mt: hoveredIndex === index ? 1 : 0,
                                    visibility: hoveredIndex === index ? 'visible' : 'hidden',
                                }}
                            >
                                {role.subRoles ? (
                                    // Display sub-roles as bullet points
                                    <Box sx={{ pl: 2 }}>
                                        {role.subRoles
                                            .filter((subRole) => subRole.visible !== false)
                                            .map((subRole, subIndex) => (
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
                                                            fontSize: typography.caption,
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
