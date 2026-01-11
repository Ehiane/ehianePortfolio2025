import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Close, OpenInNew, LinkedIn, YouTube, GitHub, ThreeDRotation } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import FrostedTooltip from './FrostedTooltip';

const AchievementModal = ({ item, onClose, open, isCertification, onView3D }) => {
    if (!item) return null;

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 1300,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                        }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '90vw',
                                maxWidth: '775px',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            <style>{`
                                motion-div::-webkit-scrollbar {
                                    width: 8px;
                                }
                                motion-div::-webkit-scrollbar-track {
                                    background: rgba(255, 255, 255, 0.05);
                                    border-radius: 4px;
                                }
                                motion-div::-webkit-scrollbar-thumb {
                                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
                                    border-radius: 4px;
                                    backdrop-filter: blur(10px);
                                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.15) inset, 0 0 8px rgba(255, 255, 255, 0.1);
                                    border: 1px solid rgba(255, 255, 255, 0.1);
                                }
                                motion-div::-webkit-scrollbar-thumb:hover {
                                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25));
                                    box-shadow: 0 0 12px rgba(255, 255, 255, 0.25) inset, 0 0 12px rgba(255, 255, 255, 0.15);
                                }
                            `}</style>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    bgcolor: 'rgba(15, 15, 15, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Close Button - Top Right */}
                                <IconButton
                                    onClick={onClose}
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        zIndex: 10,
                                        // Frosted dark-silver glass for visibility on light backgrounds
                                        background: 'linear-gradient(135deg, rgba(120,120,120,0.35), rgba(90,90,90,0.35))',
                                        backdropFilter: 'blur(12px) saturate(120%)',
                                        WebkitBackdropFilter: 'blur(12px) saturate(120%)',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.18)',
                                        boxShadow: '0 6px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)',
                                        '&:hover, &:active': {
                                            background: 'linear-gradient(135deg, rgba(130,130,130,0.45), rgba(100,100,100,0.45))',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)',
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid rgba(57,211,83,0.8)',
                                            outlineOffset: '2px',
                                        },
                                    }}
                                >
                                    <Close />
                                </IconButton>

                                {/* Hero Image */}
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '300px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '100px',
                                            background: 'linear-gradient(to top, rgba(15, 15, 15, 0.95), transparent)',
                                        }}
                                    />
                                </Box>

                                {/* Content */}
                                <Box sx={{ p: 4 }}>
                                    {/* Title */}
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: '"Playfair Display", serif',
                                            fontStyle: 'italic',
                                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                                            fontWeight: 400,
                                            mb: 2,
                                        }}
                                    >
                                        {item.title === '2024 NSBE National Convention' ? (
                                            <>
                                                2024{' '}
                                                <FrostedTooltip
                                                    title="National Society of Black Engineers"
                                                    placement="top"
                                                    enterTouchDelay={0}
                                                >
                                                    <span style={{ borderBottom: '2px dotted rgba(255,255,255,0.3)', cursor: 'help' }}>
                                                        NSBE
                                                    </span>
                                                </FrostedTooltip>
                                                {' '}National Convention
                                            </>
                                        ) : (
                                            item.title
                                        )}
                                    </Typography>

                                    {/* Metadata */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 2,
                                            mb: 3,
                                            pb: 3,
                                            borderBottom: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        {item.issuer && (
                                            <Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        color: 'text.secondary',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        fontFamily: 'monospace',
                                                        display: 'block',
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    Issuer
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                    {item.issuer === 'CodePath' ? (
                                                        <Typography
                                                            component="a"
                                                            href="https://www.codepath.org/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{
                                                                color: '#39d353',
                                                                textDecoration: 'underline',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            CodePath
                                                        </Typography>
                                                    ) : item.issuer === 'HackerRank' ? (
                                                        <Typography
                                                            component="a"
                                                            href="https://www.hackerrank.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{
                                                                color: '#39d353',
                                                                textDecoration: 'underline',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            HackerRank
                                                        </Typography>
                                                    ) : item.issuer === 'MongoDB' ? (
                                                        <Typography
                                                            component="a"
                                                            href="https://www.mongodb.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{
                                                                color: '#39d353',
                                                                textDecoration: 'underline',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            MongoDB
                                                        </Typography>
                                                    ) : (
                                                        item.issuer
                                                    )}
                                                </Typography>
                                            </Box>
                                        )}

                                        {item.organization && (
                                            <Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        color: 'text.secondary',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        fontFamily: 'monospace',
                                                        display: 'block',
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    Organization
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                    {item.organization}
                                                </Typography>
                                            </Box>
                                        )}

                                        {item.location && (
                                            <Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        color: 'text.secondary',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        fontFamily: 'monospace',
                                                        display: 'block',
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    Location
                                                </Typography>
                                                {item.title === 'AfroTech 2025' ? (
                                                    <FrostedTooltip
                                                        title="George R. Brown Convention Center in Houston, Texas"
                                                        placement="top"
                                                        enterTouchDelay={0}
                                                    >
                                                        <Typography 
                                                            variant="body2" 
                                                            sx={{ 
                                                                fontWeight: 600,
                                                                borderBottom: '2px dotted rgba(255,255,255,0.3)',
                                                                cursor: 'help',
                                                                display: 'inline-block',
                                                            }}
                                                        >
                                                            {item.location}
                                                        </Typography>
                                                    </FrostedTooltip>
                                                ) : item.title === '2024 NSBE National Convention' ? (
                                                    <FrostedTooltip
                                                        title="Georgia World Congress Center"
                                                        placement="top"
                                                        enterTouchDelay={0}
                                                    >
                                                        <Typography 
                                                            variant="body2" 
                                                            sx={{ 
                                                                fontWeight: 600,
                                                                borderBottom: '2px dotted rgba(255,255,255,0.3)',
                                                                cursor: 'help',
                                                                display: 'inline-block',
                                                            }}
                                                        >
                                                            {item.location}
                                                        </Typography>
                                                    </FrostedTooltip>
                                                ) : item.title === 'NSBE National Convention 2025' ? (
                                                    <FrostedTooltip
                                                        title="McCormick Place convention center"
                                                        placement="top"
                                                        enterTouchDelay={0}
                                                    >
                                                        <Typography 
                                                            variant="body2" 
                                                            sx={{ 
                                                                fontWeight: 600,
                                                                borderBottom: '2px dotted rgba(255,255,255,0.3)',
                                                                cursor: 'help',
                                                                display: 'inline-block',
                                                            }}
                                                        >
                                                            {item.location}
                                                        </Typography>
                                                    </FrostedTooltip>
                                                ) : (
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                        {item.location}
                                                    </Typography>
                                                )}
                                            </Box>
                                        )}

                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    fontSize: '0.7rem',
                                                    color: 'text.secondary',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    fontFamily: 'monospace',
                                                    display: 'block',
                                                    mb: 0.5,
                                                }}
                                            >
                                                Date
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                {item.date}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Description */}
                                    {item.title === 'Hackathon-Win' ? (
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                mb: 4,
                                            }}
                                        >
                                            Collaborated with a{' '}
                                            <FrostedTooltip
                                                title="L-R: Bruno Sanchez, Will Rae, me, Osaze Ogieriakhi"
                                                placement="top"
                                                enterTouchDelay={0}
                                            >
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        borderBottom: '2px dotted rgba(255,255,255,0.3)',
                                                        cursor: 'help',
                                                        display: 'inline',
                                                    }}
                                                >
                                                    multidisciplinary
                                                </Typography>
                                            </FrostedTooltip>
                                            {' '}team to build {item.githubUrl ? (
                                                <Typography
                                                    component="a"
                                                    href={item.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: '#fff',
                                                        textDecoration: 'none',
                                                        borderBottom: '2px dotted rgba(255,255,255,0.3)',
                                                        cursor: 'pointer',
                                                        display: 'inline',
                                                        '&:hover, &:active': {
                                                            borderBottomColor: 'rgba(255,255,255,0.6)'
                                                        }
                                                    }}
                                                >
                                                    Hackronomics
                                                </Typography>
                                            ) : (
                                                'Hackronomics'
                                            )} in a 24-hour hackathon, earning Best Use of MongoDB and continuing development beyond the competition.
                                        </Typography>
                                    ) : item.title === 'Director of Conferences' ? (
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                mb: 4,
                                            }}
                                        >
                                            Partnered with{' '}
                                            <FrostedTooltip
                                                title="Co-Director of Conferences"
                                                placement="top"
                                                enterTouchDelay={0}
                                            >
                                                <Typography
                                                    component="a"
                                                    href="https://www.linkedin.com/in/valike-tamakloe-596632215/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: '#0A66C2',
                                                        textDecoration: 'none',
                                                        borderBottom: '2px dotted rgba(10, 102, 194, 0.5)',
                                                        cursor: 'pointer',
                                                        display: 'inline',
                                                        '&:hover, &:active': {
                                                            color: '#004182',
                                                            borderBottomColor: 'rgba(0, 65, 130, 0.7)',
                                                        },
                                                    }}
                                                >
                                                    Valike Tamakloe
                                                </Typography>
                                            </FrostedTooltip>
                                            {' '}and the rest of the Executive board to plan and execute regional and national conferences, coordinating logistics and communication across chapters.
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                mb: 4,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    )}

                                    {/* Action Buttons */}
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        {isCertification && (
                                            <Button
                                                variant="contained"
                                                onClick={onView3D}
                                                startIcon={<ThreeDRotation />}
                                                sx={{
                                                    bgcolor: 'primary.main',
                                                    color: '#000',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: 'primary.light',
                                                    },
                                                }}
                                            >
                                                View in 3D
                                            </Button>
                                        )}
                                        {item.credentialUrl && (
                                            <Button
                                                variant="contained"
                                                href={item.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                endIcon={<OpenInNew />}
                                                sx={{
                                                    bgcolor: '#39d353',
                                                    color: '#000',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#43e06a',
                                                    },
                                                }}
                                            >
                                                View Credential
                                            </Button>
                                        )}
                                        {item.certificatePdf && (
                                            <Button
                                                component="a"
                                                href={item.certificatePdf}
                                                download
                                                sx={{
                                                    bgcolor: '#39d353',
                                                    color: '#000',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#43e06a',
                                                    },
                                                }}
                                            >
                                                Download Certificate
                                            </Button>
                                        )}
                                        {item.issuer === 'CodePath' && (
                                            <Button
                                                component="a"
                                                href="/images/achievements/certifications/CodePath_Ehiane_Oigiagbe_TIP02_Certificate.pdf"
                                                download
                                                sx={{
                                                    bgcolor: '#39d353',
                                                    color: '#000',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#43e06a',
                                                    },
                                                }}
                                            >
                                                Download Certificate
                                            </Button>
                                        )}
                                        {item.title === 'AfroTech 2025' && (
                                            <Button
                                                variant="contained"
                                                component="a"
                                                href="https://www.linkedin.com/posts/ehiane-oigiagbe_afrotech25-activity-7390393639547547649-aWFZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<LinkedIn />}
                                                sx={{
                                                    bgcolor: '#0A66C2',
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#004182',
                                                    },
                                                }}
                                            >
                                                View LinkedIn Post
                                            </Button>
                                        )}
                                        {item.title === '2024 NSBE National Convention' && (
                                            <>
                                                <Button
                                                    variant="contained"
                                                    component="a"
                                                    href="https://www.linkedin.com/posts/ehiane-oigiagbe_nsbe-nsbe50-engineering-activity-7178045896356483072-N1wD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    startIcon={<LinkedIn />}
                                                    sx={{
                                                        bgcolor: '#0A66C2',
                                                        color: '#fff',
                                                        fontWeight: 600,
                                                        px: 3,
                                                        py: 1.5,
                                                        borderRadius: '100px',
                                                        textTransform: 'none',
                                                        '&:hover, &:active': {
                                                            bgcolor: '#004182',
                                                        },
                                                    }}
                                                >
                                                    View LinkedIn Post
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    component="a"
                                                    href="https://youtu.be/5hGJAf4xEcU?si=xZN6wuYNLdMoN2Or"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    startIcon={<YouTube />}
                                                    sx={{
                                                        bgcolor: '#FF0000',
                                                        color: '#fff',
                                                        fontWeight: 600,
                                                        px: 3,
                                                        py: 1.5,
                                                        borderRadius: '100px',
                                                        textTransform: 'none',
                                                        '&:hover, &:active': {
                                                            bgcolor: '#CC0000',
                                                        },
                                                    }}
                                                >
                                                    Watch on YouTube
                                                </Button>
                                            </>
                                        )}
                                        {item.title === 'NSBE National Convention 2025' && (
                                            <Button
                                                variant="contained"
                                                component="a"
                                                href="https://www.linkedin.com/posts/ehiane-oigiagbe_nsbe2025-chicago-stem-activity-7304994090096488448-y4f4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnTtAMBmoNJRlQWeYEy2ywCMLykjyUqkh4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<LinkedIn />}
                                                sx={{
                                                    bgcolor: '#0A66C2',
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#004182',
                                                    },
                                                }}
                                            >
                                                View LinkedIn Post
                                            </Button>
                                        )}
                                        {item.title === 'Director of Conferences' && (
                                            <Button
                                                variant="contained"
                                                component="a"
                                                href="https://youtu.be/YkkpqBQHDns?si=KpTgQBAv-piyvrjh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<YouTube />}
                                                sx={{
                                                    bgcolor: '#FF0000',
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover, &:active': {
                                                        bgcolor: '#CC0000',
                                                    },
                                                }}
                                            >
                                                Watch on YouTube
                                            </Button>
                                        )}
                                        {item.title === 'Hackathon-Win' && (
                                            <>
                                                <Button
                                                    variant="contained"
                                                    component="a"
                                                    href={item.linkedinUrl || '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    startIcon={<LinkedIn />}
                                                    disabled={!item.linkedinUrl}
                                                    sx={{
                                                        bgcolor: '#0A66C2',
                                                        color: '#fff',
                                                        fontWeight: 600,
                                                        px: 3,
                                                        py: 1.5,
                                                        borderRadius: '100px',
                                                        textTransform: 'none',
                                                        '&:hover, &:active': {
                                                            bgcolor: '#004182',
                                                        },
                                                    }}
                                                >
                                                    View LinkedIn Post
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    component="a"
                                                    href={item.githubUrl || '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    startIcon={<GitHub />}
                                                    disabled={!item.githubUrl}
                                                    sx={{
                                                        bgcolor: '#24292F',
                                                        color: '#fff',
                                                        fontWeight: 600,
                                                        px: 3,
                                                        py: 1.5,
                                                        borderRadius: '100px',
                                                        textTransform: 'none',
                                                        '&:hover, &:active': {
                                                            bgcolor: '#1F2328',
                                                        },
                                                    }}
                                                >
                                                    View GitHub Repo
                                                </Button>
                                            </>
                                        )}
                                        <Button
                                            variant="outlined"
                                            onClick={onClose}
                                            sx={{
                                                borderColor: 'divider',
                                                color: 'text.primary',
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: '100px',
                                                textTransform: 'none',
                                                '&:hover, &:active': {
                                                    borderColor: 'text.secondary',
                                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                                },
                                            }}
                                        >
                                            Close
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AchievementModal;
