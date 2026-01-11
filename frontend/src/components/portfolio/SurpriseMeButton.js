import React from 'react';
import { Button, Box } from '@mui/material';

const SurpriseMeButton = ({ onClick }) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Button
                onClick={onClick}
                className="ai-mode-btn"
                sx={{
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50px',
                    color: '#ffffff',
                    fontSize: { xs: '0.5rem', sm: '0.95rem' },
                    fontWeight: 400,
                    fontFamily: '"Playfair Display", serif',
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0.8, sm: 1.2 },
                    textTransform: 'none',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    overflow: 'visible',
                    zIndex: 1,
                    '&:hover, &:active': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                        boxShadow: `
                            0 0 15px rgba(255, 0, 0, 0.3),
                            0 0 20px rgba(255, 127, 0, 0.3),
                            0 0 25px rgba(255, 255, 0, 0.2),
                            0 0 30px rgba(0, 255, 0, 0.2),
                            0 0 35px rgba(0, 255, 255, 0.2),
                            0 0 40px rgba(0, 0, 255, 0.1),
                            0 0 45px rgba(136, 0, 255, 0.1),
                            inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `,
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                    },
                    '&:active': {
                        transform: 'translateY(0px)',
                    },
                }}
            >
                Surprise me
            </Button>

            {/* SVG Border Animation */}
            <svg
                style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    width: 'calc(100% + 4px)',
                    height: 'calc(100% + 4px)',
                    pointerEvents: 'none',
                    overflow: 'visible',
                }}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff0000" stopOpacity="0.1" />
                        <stop offset="5%" stopColor="#ff0000" stopOpacity="0.3" />
                        <stop offset="10%" stopColor="#ff7700" stopOpacity="0.5" />
                        <stop offset="15%" stopColor="#ffff00" stopOpacity="0.7" />
                        <stop offset="25%" stopColor="#00ff00" stopOpacity="0.85" />
                        <stop offset="35%" stopColor="#00ffff" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#0000ff" stopOpacity="1" />
                        <stop offset="65%" stopColor="#8800ff" stopOpacity="1" />
                        <stop offset="80%" stopColor="#ff00ff" stopOpacity="1" />
                        <stop offset="90%" stopColor="#ff0066" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ff0000" stopOpacity="1" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <rect
                    x="1"
                    y="1"
                    width="98"
                    height="38"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="url(#rainbowGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="347 53"
                    filter="url(#glow)"
                    style={{
                        animation: 'dash 3s linear infinite',
                    }}
                />

                <style>
                    {`
                        @keyframes dash {
                            to {
                                stroke-dashoffset: -400;
                            }
                        }

                        @media (prefers-reduced-motion: reduce) {
                            svg rect {
                                animation: dash 10s linear infinite;
                            }
                        }
                    `}
                </style>
            </svg>
        </Box>
    );
};

export default SurpriseMeButton;
