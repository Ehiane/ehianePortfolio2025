import React, { useState } from 'react';
import { Box, Typography, Snackbar } from '@mui/material';
import { GitHub, LinkedIn, Description } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../../data/portfolioData';

const Contact = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('ehiane.dev@gmail.com');
        setCopiedEmail(true);
    };

    const links = [
        {
            icon: <GitHub />,
            label: 'GitHub',
            url: socialLinks.github,
            preview: '/images/previews/github-preview.png',
            previewText: '@Ehiane'
        },
        {
            icon: <LinkedIn />,
            label: 'LinkedIn',
            url: socialLinks.linkedin,
            preview: '/images/previews/linkedin-preview.png',
            previewText: 'Ehiane Oigiagbe'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
            ),
            label: 'Email',
            isEmail: true,
            onClick: handleCopyEmail,
            emailAddress: 'ehiane.dev@gmail.com'
        },
        {
            icon: <Description />,
            label: 'Resume',
            url: 'https://drive.google.com/file/d/1bOKZAC6kS7NyEnmYqIBRCHepRPPHpu3q/view?usp=sharing',
            preview: '/images/previews/resume-preview.png',
            previewText: 'View Resume'
        },
    ];

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
                    Let's Connect
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
                    Get{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            color: 'text.secondary',
                        }}
                    >
                        in Touch
                    </Typography>
                </Typography>
            </Box>

            {/* Social Links with Hover Previews */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    position: 'relative',
                }}
            >
                {links.map((link, index) => (
                    <Box
                        key={index}
                        sx={{ position: 'relative' }}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <Box
                            component={link.isEmail ? 'button' : 'a'}
                            href={link.isEmail ? undefined : link.url}
                            onClick={link.isEmail ? link.onClick : undefined}
                            target={link.isEmail ? undefined : "_blank"}
                            rel={link.isEmail ? undefined : "noopener noreferrer"}
                            sx={{
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                px: 3,
                                py: 1.5,
                                borderRadius: '100px',
                                bgcolor: 'action.hover',
                                border: '1px solid',
                                borderColor: 'divider',
                                color: 'text.primary',
                                transition: 'all 0.3s',
                                cursor: 'pointer',
                                background: link.isEmail ? 'action.hover' : 'action.hover',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    bgcolor: 'action.selected',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            {React.cloneElement(link.icon, { sx: { fontSize: '1.25rem' } })}
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                }}
                            >
                                {link.label}
                            </Typography>
                        </Box>

                        {/* Hover Preview Modal */}
                        <AnimatePresence>
                            {hoveredLink === index && (link.preview || link.emailAddress) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '120%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 1000,
                                        pointerEvents: 'none',
                                    }}
                                >
                                    {link.emailAddress ? (
                                        // Email preview card
                                        <Box
                                            sx={{
                                                minWidth: '280px',
                                                px: 4,
                                                py: 3,
                                                borderRadius: '12px',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                bgcolor: 'rgba(10, 10, 10, 0.95)',
                                                backdropFilter: 'blur(12px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '0.75rem',
                                                    color: 'text.secondary',
                                                    mb: 0.5,
                                                    fontFamily: 'monospace',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                }}
                                            >
                                                Click to copy
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '1rem',
                                                    color: 'text.primary',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {link.emailAddress}
                                            </Typography>
                                        </Box>
                                    ) : (
                                        // Image preview with frosted glass text
                                        <Box
                                            sx={{
                                                width: '300px',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                                position: 'relative',
                                            }}
                                        >
                                            <img
                                                src={link.preview}
                                                alt={`${link.label} preview`}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                }}
                                            />
                                            {/* Frosted glass text overlay at bottom right */}
                                            {link.previewText && (
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        bottom: 12,
                                                        right: 12,
                                                        px: 2,
                                                        py: 1,
                                                        borderRadius: '8px',
                                                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                                                        backdropFilter: 'blur(12px)',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.875rem',
                                                            color: 'white',
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {link.previewText}
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                ))}
            </Box>

            {/* Copied Email Snackbar */}
            <Snackbar
                open={copiedEmail}
                autoHideDuration={2000}
                onClose={() => setCopiedEmail(false)}
                message="Email copied to clipboard!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />

            {/* Quote Section */}
            <Box
                sx={{
                    mt: 8,
                    pt: 6,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontStyle: 'italic',
                        fontSize: '1.25rem',
                        color: 'text.secondary',
                        mb: 2,
                    }}
                >
                    "The best code is tested code."
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                    }}
                >
                    Built with React, Material-UI, and lots of coffee ☕
                </Typography>
            </Box>
        </Box>
    );
};

export default Contact;
