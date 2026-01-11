import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const SurpriseMeButton = ({ onClick }) => {
    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            {/* Animated Rainbow Border */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '50px',
                    background: 'conic-gradient(from 0deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff, #ff0000)',
                    zIndex: 0,
                    filter: 'blur(4px)',
                }}
            />

            {/* Button */}
            <Button
                onClick={onClick}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                    color: '#F1F4E3',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    px: 3,
                    py: 1.2,
                    borderRadius: '50px',
                    textTransform: 'none',
                    border: '2px solid rgba(0, 0, 0, 0.9)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.95)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    },
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                }}
            >
                Surprise me!
            </Button>
        </div>
    );
};

export default SurpriseMeButton;
