import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { GitHubCalendar } from 'react-github-calendar';
import { socialLinks } from '../../data/portfolioData';

const GitHubSection = () => {
    // Extract username from GitHub URL
    const githubUsername = socialLinks.github.split('/').pop();

    // GitHub-style green theme
    const customTheme = {
        dark: ['rgba(255, 255, 255, 0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <Box>
            {/* Section Header */}
            <Box sx={{ mb: 4 }}>
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
                    Open Source
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
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
                    p: { xs: 2, md: 3 },
                    overflow: 'auto',
                }}
            >
                <GitHubCalendar
                    username={githubUsername}
                    theme={customTheme}
                    colorScheme="dark"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    style={{
                        width: '100%',
                    }}
                />
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
                            color: 'primary.main',
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
