import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const IntroAnimation = ({ onComplete }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [showText, setShowText] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // Rotation limits
    const MAX_ROTATE_Y = 30;
    const MAX_ROTATE_X = 20;

    useEffect(() => {
        // Check if user has seen intro before
        const hasSeenIntro = localStorage.getItem('hasSeenIntro');

        // For development, always show intro
        // Uncomment to enable localStorage skip
        // if (hasSeenIntro) {
        //     setShowIntro(false);
        //     onComplete();
        //     return;
        // }

        // Show "Click/Tap to Start" text after 0.5s
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 500);

        return () => clearTimeout(textTimer);
    }, [onComplete]);

    const handleMouseDown = (e) => {
        if (isAnimating) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isAnimating) return;

        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        const newRotateY = Math.max(-MAX_ROTATE_Y, Math.min(MAX_ROTATE_Y, rotateY + deltaX * 0.3));
        const newRotateX = Math.max(-MAX_ROTATE_X, Math.min(MAX_ROTATE_X, rotateX - deltaY * 0.3));

        setRotateY(newRotateY);
        setRotateX(newRotateX);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Complete animation after logo reaches navbar
        setTimeout(() => {
            setShowIntro(false);
            localStorage.setItem('hasSeenIntro', 'true');
            onComplete();
        }, 1300); // 1s animation + 300ms buffer
    };

    if (!showIntro) return null;

    return (
        <AnimatePresence>
            <Box
                sx={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: '#000000',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isAnimating ? 'default' : (isDragging ? 'grabbing' : 'grab'),
                    userSelect: 'none',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={handleClick}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                    }}
                >
                    {/* Interactive Logo */}
                    <motion.div
                        animate={
                            isAnimating
                                ? {
                                      scale: 0.3,
                                      x: -window.innerWidth / 2 + 100,
                                      y: -window.innerHeight / 2 + 60,
                                      rotateX: 0,
                                      rotateY: 0,
                                      transition: {
                                          duration: 1,
                                          ease: 'easeInOut',
                                      },
                                  }
                                : {
                                      rotateX,
                                      rotateY,
                                      transition: {
                                          type: 'spring',
                                          stiffness: 200,
                                          damping: 20,
                                      },
                                  }
                        }
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px',
                        }}
                    >
                        <img
                            src="/images/ehiane_2026_logo.png"
                            alt="Logo"
                            style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'contain',
                                pointerEvents: 'none',
                            }}
                            draggable={false}
                        />
                    </motion.div>

                    {/* Click/Tap to Start Text */}
                    <AnimatePresence>
                        {showText && !isAnimating && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    sx={{
                                        color: '#F1F4E3',
                                        fontSize: '1rem',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        letterSpacing: '0.05em',
                                        textAlign: 'center',
                                    }}
                                >
                                    Drag to rotate • Click or Tap to Start
                                </Typography>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
        </AnimatePresence>
    );
};

export default IntroAnimation;
