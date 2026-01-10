import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { Close, OpenInNew } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const AchievementModal = ({ item, onClose, open }) => {
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
                                maxWidth: '700px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflow: 'auto',
                            }}
                        >
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
                                {/* Close Button */}
                                <IconButton
                                    onClick={onClose}
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        zIndex: 10,
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.15)',
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
                                        {item.title}
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
                                                    {item.issuer}
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
                                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                    {item.location}
                                                </Typography>
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

                                    {/* Action Buttons */}
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        {item.credentialUrl && (
                                            <Button
                                                variant="contained"
                                                href={item.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                endIcon={<OpenInNew />}
                                                sx={{
                                                    bgcolor: 'primary.main',
                                                    color: '#000',
                                                    fontWeight: 600,
                                                    px: 3,
                                                    py: 1.5,
                                                    borderRadius: '100px',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        bgcolor: 'primary.light',
                                                    },
                                                }}
                                            >
                                                View Credential
                                            </Button>
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
                                                '&:hover': {
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
