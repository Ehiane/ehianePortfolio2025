import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';
import { GitHubCalendar } from 'react-github-calendar';
import { socialLinks } from '../../data/portfolioData';
import { typography } from '../../theme/designTokens';

const GitHubSection = () => {
    // Extract username from GitHub URL
    const githubUsername = socialLinks.github.split('/').pop();

    // GitHub-style green theme
    const customTheme = {
        dark: ['rgba(255, 255, 255, 0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    // Custom tooltip renderer
    const renderBlock = (block, activity) => {
        return (
            <Tooltip
                title={`${activity.count} contributions on ${activity.date}`}
                arrow
                placement="top"
            >
                {block}
            </Tooltip>
        );
    };

    return (
        <Box>
            {/* Section Header */}
            <Box sx={{ mb: 4 }}>
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
                    Open Source
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
                    GitHub{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            color: 'text.secondary',
                        }}
                    >
                        Activity
                    </Typography>
                </Typography>
            </Box>

            {/* GitHub Contribution Graph */}
            <Box
                sx={{
                    width: '100%',
                    borderRadius: '12px',
                    bgcolor: 'action.hover',
                    border: '1px solid',
                    borderColor: 'divider',
                    p: { xs: 1, md: 3 },
                    overflow: 'hidden',
                    '& .react-activity-calendar__scroll-container': {
                        overflowX: { xs: 'scroll', md: 'auto' },
                        overflowY: 'hidden',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#10b981 rgba(255,255,255,0.05)',
                        '&::-webkit-scrollbar': {
                            height: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#10b981',
                            borderRadius: '4px',
                            '&:hover': {
                                backgroundColor: '#34d399',
                            },
                        },
                    },
                    // Hide calendar navigation arrows
                    '& button': {
                        display: 'none !important',
                    },
                }}
            >
                <Box
                    sx={{
                        transform: { xs: 'scale(0.85)', md: 'scale(1)' },
                        transformOrigin: 'top left',
                        width: { xs: '117.6%', md: '100%' },
                        overflow: 'visible',
                    }}
                >
                    <GitHubCalendar
                        username={githubUsername}
                        theme={customTheme}
                        colorScheme="dark"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        renderBlock={renderBlock}
                        style={{
                            width: '100%',
                        }}
                    />
                </Box>
            </Box>

            {/* Link to GitHub Profile */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Link
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        color: 'text.secondary',
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: '#39d353',
                            textDecoration: 'underline',
                        },
                    }}
                >
                    View full profile on GitHub →
                </Link>
            </Box>
        </Box>
    );
};

export default GitHubSection;
