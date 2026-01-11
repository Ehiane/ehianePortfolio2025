import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const FrostedTooltip = ({
    title,
    children,
    placement = 'top',
    enterTouchDelay = 0,
    arrow = true,
    fullWidth = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const touchTimer = useRef(null);

    const calculatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const arrowSize = arrow ? 8 : 0;
        const gap = 8 + arrowSize;

        let top = 0;
        let left = 0;

        switch (placement) {
            case 'top':
                top = triggerRect.top - tooltipRect.height - gap;
                left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'bottom':
                top = triggerRect.bottom + gap;
                left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'left':
                top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
                left = triggerRect.left - tooltipRect.width - gap;
                break;
            case 'right':
                top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
                left = triggerRect.right + gap;
                break;
            default:
                top = triggerRect.top - tooltipRect.height - gap;
                left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        }

        // Keep tooltip within viewport
        const padding = 10;
        if (left < padding) left = padding;
        if (left + tooltipRect.width > window.innerWidth - padding) {
            left = window.innerWidth - tooltipRect.width - padding;
        }
        if (top < padding) {
            // If tooltip would go off top, show it below instead
            top = triggerRect.bottom + gap;
        }

        setPosition({ top, left });
    };

    useEffect(() => {
        if (isOpen) {
            calculatePosition();
            window.addEventListener('scroll', calculatePosition);
            window.addEventListener('resize', calculatePosition);
            return () => {
                window.removeEventListener('scroll', calculatePosition);
                window.removeEventListener('resize', calculatePosition);
            };
        }
    }, [isOpen]);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleTouchStart = () => {
        if (enterTouchDelay === 0) {
            setIsOpen(true);
        } else {
            touchTimer.current = setTimeout(() => {
                setIsOpen(true);
            }, enterTouchDelay);
        }
    };

    const handleTouchEnd = () => {
        if (touchTimer.current) {
            clearTimeout(touchTimer.current);
        }
        // Keep tooltip open for a moment on mobile
        setTimeout(() => {
            setIsOpen(false);
        }, 2000);
    };

    const getArrowStyles = () => {
        const arrowBase = {
            content: '""',
            position: 'absolute',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        };

        switch (placement) {
            case 'top':
                return {
                    ...arrowBase,
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '8px 8px 0 8px',
                    borderColor: 'rgba(26, 26, 26, 0.98) transparent transparent transparent',
                };
            case 'bottom':
                return {
                    ...arrowBase,
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderWidth: '0 8px 8px 8px',
                    borderColor: 'transparent transparent rgba(26, 26, 26, 0.98) transparent',
                };
            case 'left':
                return {
                    ...arrowBase,
                    right: '-8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderWidth: '8px 0 8px 8px',
                    borderColor: 'transparent transparent transparent rgba(26, 26, 26, 0.98)',
                };
            case 'right':
                return {
                    ...arrowBase,
                    left: '-8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderWidth: '8px 8px 8px 0',
                    borderColor: 'transparent rgba(26, 26, 26, 0.98) transparent transparent',
                };
            default:
                return arrowBase;
        }
    };

    return (
        <>
            <Box
                ref={triggerRef}
                component="span"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                sx={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : 'auto' }}
            >
                {children}
            </Box>

            <AnimatePresence>
                {isOpen && (
                    <Box
                        ref={tooltipRef}
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.9, y: placement === 'top' ? 5 : -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: placement === 'top' ? 5 : -5 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        sx={{
                            position: 'fixed',
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                            zIndex: 10000,
                            pointerEvents: 'none',
                            maxWidth: '320px',
                            overflow: 'hidden',
                            // Frosted glass effect
                            background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.98), rgba(20, 20, 20, 0.98))',
                            backdropFilter: 'blur(20px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            padding: '10px 14px',
                            boxShadow: `
                                0 8px 32px rgba(0, 0, 0, 0.4),
                                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                                0 0 0 1px rgba(0, 0, 0, 0.2)
                            `,
                            // Shimmer effect
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
                                animation: 'shimmer 3s infinite',
                                borderRadius: '12px',
                            },
                            '@keyframes shimmer': {
                                '0%': { left: '-100%' },
                                '100%': { left: '200%' },
                            },
                        }}
                    >
                        {/* Arrow */}
                        {arrow && (
                            <Box
                                sx={{
                                    ...getArrowStyles(),
                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                                }}
                            />
                        )}

                        {/* Content */}
                        <Box
                            sx={{
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                lineHeight: 1.5,
                                fontWeight: 400,
                                position: 'relative',
                                zIndex: 1,
                                '& a': {
                                    color: '#39d353',
                                    textDecoration: 'underline',
                                    '&:hover': {
                                        color: '#43e06a',
                                    },
                                },
                            }}
                        >
                            {title}
                        </Box>

                        {/* Glossy highlight overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '50%',
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                                borderRadius: '12px 12px 0 0',
                                pointerEvents: 'none',
                            }}
                        />
                    </Box>
                )}
            </AnimatePresence>
        </>
    );
};

export default FrostedTooltip;
