import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import MetallicLogo3D from './three/MetallicLogo3D';

const IntroAnimation = ({ onComplete }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [showText, setShowText] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Rotation limits
    const MAX_ROTATE_Y = 30;
    const MAX_ROTATE_X = 20;

    // Sway animation for intro text
    const swayVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            }
        },
    };

    useEffect(() => {
        // Check if user has seen intro before
        // const hasSeenIntro = localStorage.getItem('hasSeenIntro');

        // For development, always show intro
        // Uncomment to enable localStorage skip
        // if (hasSeenIntro) {
        //     setShowIntro(false);
        //     onComplete();
        //     return;
        // }

        // Detect mobile device
        const isMobileDevice = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        setIsMobile(isMobileDevice);

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

        // Remove previous transition time so it starts fresh
        localStorage.removeItem('logoTransitionTime');

        // Complete animation after logo reaches navbar
        setTimeout(() => {
            setShowIntro(false);
            localStorage.setItem('hasSeenIntro', 'true');

            // Dispatch custom event to notify Navbar
            window.dispatchEvent(new CustomEvent('introCompleted'));

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
                                      scale: 0.45,
                                      x: -window.innerWidth / 2 + 105,
                                      y: -window.innerHeight / 2 + 90,
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
                        <div style={{
                            width: '280px',
                            height: '280px',
                            position: 'relative'
                        }}>
                            <Suspense fallback={
                                <img
                                    src="/images/mettalic_ehiane_logo.png"
                                    alt="Logo"
                                    style={{ width: '280px', height: '280px', objectFit: 'contain' }}
                                />
                            }>
                                <MetallicLogo3D
                                    rotateX={rotateX}
                                    rotateY={rotateY}
                                    isAnimating={isAnimating}
                                    width={280}
                                    height={280}
                                />
                            </Suspense>
                        </div>
                    </motion.div>

                    {/* Click/Tap to Start Text */}
                    <AnimatePresence>
                        {showText && !isAnimating && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                variants={swayVariants}
                                style={{ marginTop: isMobile ? '-80px' : '-40px' }}
                            >
                                <Typography
                                    sx={{
                                        color: '#F1F4E3',
                                        fontSize: '1rem',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        letterSpacing: '0.05em',
                                        textAlign: 'center',
                                        background: 'linear-gradient(90deg, #e5e7eb 0%, #e5e7eb 50%, #71717a 50%, #71717a 100%)',
                                        backgroundSize: '200% 100%',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'colorFill 5.5s ease-in-out infinite',
                                        '@keyframes colorFill': {
                                            '0%': {
                                                backgroundPosition: '100% 0',
                                            },
                                            '80%': {
                                                backgroundPosition: '-100% 0',
                                            },
                                            '100%': {
                                                backgroundPosition: '-100% 0',
                                            },
                                        },
                                    }}
                                >
                                    {isMobile ? 'Tap the logo to start' : 'Drag to rotate • Click or Tap to Start'}
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
