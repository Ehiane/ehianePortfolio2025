import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// File component to display achievement items
const FileItem = ({ item }) => (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
        }}
    >
        {/* Thumbnail */}
        <Box
            sx={{
                width: '100%',
                height: '80px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.1)',
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
        </Box>

        {/* Title */}
        <Typography
            variant="body2"
            sx={{
                fontWeight: 600,
                fontSize: '0.75rem',
                color: 'text.primary',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
        >
            {item.title}
        </Typography>

        {/* Date */}
        <Typography
            variant="caption"
            sx={{
                fontSize: '0.65rem',
                color: 'text.secondary',
                fontFamily: 'monospace',
            }}
        >
            {item.date}
        </Typography>
    </Box>
);

const GlassyFolder = ({ title, icon, items, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Toggle open state on click
    const toggleFolder = () => setIsOpen(!isOpen);

    // Get first 3 items
    const displayItems = items.slice(0, 3);

    // --- Animation Variants ---

    // Files: Located at Z=0 initially. When open, they move back slightly to Z=-10
    // to ensure they are behind the open flap visually, but front of the backplate.
    const fileVariants = {
        closed: {
            y: 0,
            rotate: 0,
            scale: 1,
            x: 0,
            z: 0,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        peek: (index) => ({
            y: -60 - (index * 8),
            rotate: index === 0 ? -4 : index === 2 ? 4 : 0,
            scale: 1.02,
            z: 0,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        }),
        open: (index) => ({
            y: -150,
            x: index === 0 ? -110 : index === 2 ? 110 : 0,
            rotate: index === 0 ? -15 : index === 2 ? 15 : 0,
            scale: 1.1,
            z: 0,
            transition: {
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.05 * index
            }
        })
    };

    // Front Cover: Starts at Z=30 (Positive/Front).
    const frontVariants = {
        closed: {
            rotateX: 0,
            y: 0,
            z: 30,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        peek: {
            rotateX: -20,
            y: 0,
            z: 30,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        open: {
            rotateX: -70,
            y: 10,
            z: 30,
            transition: { type: "spring", stiffness: 180, damping: 20 }
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                userSelect: 'none',
                perspective: '1200px',
            }}
        >
            {/* 3D Scene Container */}
            <Box
                component={motion.div}
                sx={{
                    position: 'relative',
                    width: { xs: '100%', sm: '28rem', md: '32rem', lg: '36rem' },
                    height: { xs: '230px', md: '185px' },
                    cursor: 'pointer',
                    perspective: 1200,
                    transformStyle: 'preserve-3d',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={toggleFolder}
                initial={false}
                animate={isOpen ? "open" : isHovered ? "peek" : "closed"}
            >
                {/* --- Back of Folder + Tab (Layer -1) --- */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        transform: "translateZ(-30px)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Tab */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-16px',
                            left: 0,
                            width: '144px',
                            height: '40px',
                            bgcolor: '#2b2b2b',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 1px 0 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.05)',
                            transition: 'all 0.3s',
                        }}
                    />

                    {/* Back Plate */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, #333, #1a1a1a)',
                            borderRadius: '24px',
                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                            overflow: 'hidden',
                            transition: 'all 0.3s',
                        }}
                    >
                        {/* Subtle Texture */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                opacity: 0.2,
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
                            }}
                        />
                    </Box>
                </div>

                {/* --- The Files (Layer 0) --- */}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: '16px',
                        height: '120px',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        transformStyle: "preserve-3d"
                    }}
                >
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            variants={fileVariants}
                            onClick={(e) => {
                                if (isOpen) {
                                    e.stopPropagation();
                                    onItemClick(item);
                                }
                            }}
                            style={{
                                position: 'absolute',
                                width: '190px', // slightly narrower so contents sit comfortably inside wider cover
                                height: '160px',
                                backgroundColor: index === 0 ? '#2a2a2a' : index === 1 ? '#262626' : '#303030',
                                borderRadius: '12px',
                                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 8px 16px rgba(0,0,0,0.3)',
                                transformOrigin: 'bottom',
                                overflow: 'hidden',
                                pointerEvents: isOpen ? 'auto' : 'none',
                                cursor: isOpen ? 'pointer' : 'default',
                                zIndex: index === 1 ? 10 : 1,
                            }}
                        >
                            <FileItem item={item} />
                        </motion.div>
                    ))}
                </div>

                {/* --- Front of Folder (Layer +1) --- */}
                <motion.div
                    variants={frontVariants}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 50,
                        borderRadius: '24px',
                        pointerEvents: 'none',
                        transformOrigin: "bottom",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        willChange: "transform",
                        outline: "1px solid transparent"
                    }}
                >
                    {/* Glass Gradient & Blur */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), transparent)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '24px',
                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.4)',
                        }}
                    >
                        {/* Folder Icon and Title */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                            }}
                        >
                            {/* Icon */}
                            <Box
                                component="img"
                                src={icon}
                                alt={title}
                                sx={{
                                    width: '64px',
                                    height: '64px',
                                    opacity: 0.9,
                                    objectFit: 'contain',
                                }}
                            />

                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    color: 'text.primary',
                                }}
                            >
                                {title}
                            </Typography>

                            {/* Item Count */}
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '0.7rem',
                                    color: 'text.secondary',
                                    fontFamily: 'monospace',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {items.length} {items.length === 1 ? 'item' : 'items'}
                            </Typography>
                        </Box>

                        {/* Realistic Specular Sheen (Top Edge) */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                height: '1px',
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
                                opacity: 0.7,
                            }}
                        />

                        {/* Inner Depth Shadow (Bottom) */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: '50%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                borderBottomLeftRadius: '24px',
                                borderBottomRightRadius: '24px',
                            }}
                        />

                        {/* Surface Shine */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                right: '-100%',
                                bottom: 0,
                                background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent)',
                                transform: 'skewX(-12deg)',
                                opacity: 0.2,
                                pointerEvents: 'none',
                            }}
                        />
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

export default GlassyFolder;
