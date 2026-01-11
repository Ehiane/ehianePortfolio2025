import React, { useState } from 'react';
import { Box, IconButton, Button, Typography } from '@mui/material';
import { Close, Download, ZoomIn, ZoomOut, RotateLeft, RotateRight } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const CertificateViewer3D = ({ certificate, open, onClose }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // Rotation limits to prevent full 180-degree flip
    const MAX_ROTATE_Y = 60; // horizontal rotation limit
    const MAX_ROTATE_X = 30; // vertical tilt limit

    if (!certificate) return null;

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        // Calculate new rotation with limits
        const newRotateY = Math.max(-MAX_ROTATE_Y, Math.min(MAX_ROTATE_Y, rotateY + deltaX * 0.5));
        const newRotateX = Math.max(-MAX_ROTATE_X, Math.min(MAX_ROTATE_X, rotateX - deltaY * 0.5));

        setRotateY(newRotateY);
        setRotateX(newRotateX);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleZoomIn = () => {
        setZoom(Math.min(zoom + 0.2, 2));
    };

    const handleZoomOut = () => {
        setZoom(Math.max(zoom - 0.2, 0.5));
    };

    const handleRotateLeft = () => {
        setRotateY(Math.max(-MAX_ROTATE_Y, rotateY - 15));
    };

    const handleRotateRight = () => {
        setRotateY(Math.min(MAX_ROTATE_Y, rotateY + 15));
    };

    const handleReset = () => {
        setRotateX(0);
        setRotateY(0);
        setZoom(1);
    };

    const handleDownload = () => {
        // Always download the certificate image file
        const link = document.createElement('a');
        link.href = certificate.image;
        link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Full-screen Backdrop */}
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
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 1400,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* 3D Viewer Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                            }}
                        >
                            {/* Header Controls */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    p: 3,
                                    zIndex: 10,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'white',
                                        fontFamily: '"Playfair Display", serif',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    3D Certificate Viewer
                                </Typography>

                                <IconButton
                                    onClick={onClose}
                                    sx={{
                                        color: 'white',
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        },
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </Box>

                            {/* 3D Certificate Display */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    perspective: '2000px',
                                    cursor: isDragging ? 'grabbing' : 'grab',
                                    userSelect: 'none',
                                }}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <motion.div
                                    animate={{
                                        rotateX: rotateX,
                                        rotateY: rotateY,
                                        scale: zoom,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 20,
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        width: '80%',
                                        maxWidth: '900px',
                                        aspectRatio: '1.414', // A4 paper ratio
                                        position: 'relative',
                                    }}
                                >
                                    {/* Certificate Front */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                            position: 'relative',
                                            backfaceVisibility: 'hidden',
                                        }}
                                    >
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                backgroundColor: 'white',
                                            }}
                                            draggable={false}
                                        />

                                        {/* Glossy overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent 40%, transparent 60%, rgba(255,255,255,0.05))',
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    </Box>

                                    {/* Shadow beneath certificate */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: '-50px',
                                            left: '10%',
                                            right: '10%',
                                            height: '50px',
                                            background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.5), transparent)',
                                            filter: 'blur(30px)',
                                            transform: 'rotateX(90deg)',
                                            opacity: 0.6,
                                        }}
                                    />
                                </motion.div>
                            </Box>

                            {/* Bottom Controls */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    p: 3,
                                    zIndex: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    alignItems: 'center',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                }}
                            >
                                {/* Rotation & Zoom Controls */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '50px',
                                        p: 1,
                                    }}
                                >
                                    <IconButton
                                        onClick={handleRotateLeft}
                                        size="small"
                                        sx={{
                                            color: 'white',
                                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                                        }}
                                    >
                                        <RotateLeft />
                                    </IconButton>
                                    <IconButton
                                        onClick={handleRotateRight}
                                        size="small"
                                        sx={{
                                            color: 'white',
                                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                                        }}
                                    >
                                        <RotateRight />
                                    </IconButton>
                                    <Box sx={{ width: '1px', bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                                    <IconButton
                                        onClick={handleZoomOut}
                                        size="small"
                                        sx={{
                                            color: 'white',
                                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                                        }}
                                    >
                                        <ZoomOut />
                                    </IconButton>
                                    <IconButton
                                        onClick={handleZoomIn}
                                        size="small"
                                        sx={{
                                            color: 'white',
                                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                                        }}
                                    >
                                        <ZoomIn />
                                    </IconButton>
                                </Box>

                                {/* Action Buttons */}
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button
                                        variant="outlined"
                                        onClick={handleReset}
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        Reset View
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<Download />}
                                        onClick={handleDownload}
                                        sx={{
                                            bgcolor: 'primary.main',
                                            color: '#000',
                                            '&:hover': {
                                                bgcolor: 'primary.light',
                                            },
                                        }}
                                    >
                                        Download
                                    </Button>
                                </Box>

                                {/* Instructions */}
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        textAlign: 'center',
                                        fontFamily: 'monospace',
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    Drag to rotate • Click controls to adjust
                                </Typography>
                            </Box>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CertificateViewer3D;
