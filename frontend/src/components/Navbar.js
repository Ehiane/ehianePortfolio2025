import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, LightMode, DarkMode, Menu as MenuIcon, Close } from '@mui/icons-material';
import { socialLinks } from '../data/portfolioData';
import MetallicLogo3D from './three/MetallicLogo3D';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBouncing, setIsBouncing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMetallicLogo, setShowMetallicLogo] = useState(true);

    const iconLinks = [
        { Icon: GitHub, href: socialLinks.github },
        { Icon: LinkedIn, href: socialLinks.linkedin },
        { Icon: Email, href: socialLinks.email },
    ];

    // Smart navbar: hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar at the top of the page
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else {
                // Show navbar when scrolling up, hide when scrolling down
                if (currentScrollY < lastScrollY) {
                    // Scrolling up
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down & past 100px
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Handle metallic to normal logo transition
    useEffect(() => {
        const checkIntroStatus = () => {
            const introCompleted = localStorage.getItem('hasSeenIntro');
            const transitionTime = localStorage.getItem('logoTransitionTime');
            const now = Date.now();

            console.log('Navbar logo transition check:', { introCompleted, transitionTime, now });

            if (introCompleted) {
                if (!transitionTime) {
                    // Intro just completed, show metallic logo for 2.0s
                    console.log('Setting 3s timer for logo transition');
                    const timer = setTimeout(() => {
                        console.log('Transitioning to normal logo NOW');
                        setShowMetallicLogo(false);
                        localStorage.setItem('logoTransitionTime', Date.now().toString());
                    }, 2000);

                    return timer;
                } else if (now - parseInt(transitionTime) >= 2000) {
                    // Transition already happened in a previous session
                    console.log('Transition already completed, showing normal logo');
                    setShowMetallicLogo(false);
                } else {
                    // Still within the 3s window
                    const remainingTime = 2000 - (now - parseInt(transitionTime));
                    console.log('Setting timer for remaining time:', remainingTime);
                    const timer = setTimeout(() => {
                        console.log('Transitioning to normal logo NOW (remaining time)');
                        setShowMetallicLogo(false);
                    }, remainingTime);

                    return timer;
                }
            } else {
                console.log('Intro not completed yet, showing normal logo by default');
                setShowMetallicLogo(false);
            }
        };

        // Check initial status
        const initialTimer = checkIntroStatus();

        // Listen for intro completion
        const handleIntroCompleted = () => {
            console.log('Intro just completed! Starting metallic logo transition');
            setShowMetallicLogo(true);
            setTimeout(() => {
                setShowMetallicLogo(false);
                localStorage.setItem('logoTransitionTime', Date.now().toString());
            }, 2000);
        };

        window.addEventListener('introCompleted', handleIntroCompleted);

        return () => {
            if (initialTimer) clearTimeout(initialTimer);
            window.removeEventListener('introCompleted', handleIntroCompleted);
        };
    }, []);

    const bounceVariants = {
        initial: { scale: 1 },
        bounce: {
            scale: [1, 1.35, 0.85, 1.2, 0.9, 1.15, 0.95, 1.08, 0.98, 1.04, 1],
            transition: {
                duration: 2.5,
                times: [0, 0.15, 0.27, 0.38, 0.47, 0.55, 0.62, 0.7, 0.78, 0.9, 1],
                ease: "easeOut",
            },
        },
    };

    const handleLogoBounce = () => {
        setIsBouncing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setIsBouncing(false), 2000);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-6 w-full pointer-events-none overflow-x-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: (isVisible || isMobileMenuOpen) ? 0 : -100
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ marginTop: '-30px' }}
        >
            {/* Left: Logo */}
            <div className="pointer-events-auto px-4 py-3 rounded-full transition-colors duration-300" style={{ marginBottom: '0px' }}>
                <motion.button
                    onClick={handleLogoBounce}
                    className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: 'none', border: 'none' }}
                    aria-label="Back to top"
                    animate={isBouncing ? "bounce" : "initial"}
                    variants={bounceVariants}
                >
                    <div style={{ width: '98px', height: '98px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode="wait">
                            {showMetallicLogo ? (
                                <motion.div
                                    key="metallic"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2 }}
                                    style={{ width: '120px', height: '120px', position: 'absolute', top: -5, left: -11 }} // mid transition logo
                                >
                                    <Suspense fallback={
                                        <img
                                            src="/images/mettalic_ehiane_logo.png"
                                            alt="Ehiane Kelvin Oigiagbe logo"
                                            style={{ width: '120px', height: '120px', objectFit: 'contain', top:-5, left:-11 }}
                                        />
                                    }>
                                        <MetallicLogo3D
                                            rotateX={0}
                                            rotateY={0}
                                            isAnimating={false}
                                            width={120}
                                            height={120}
                                        />
                                    </Suspense>
                                </motion.div>
                            ) : (
                                <motion.img
                                    key="normal"
                                    src="/images/ehiane_2026_logo.png"
                                    alt="Ehiane Kelvin Oigiagbe logo"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                    style={{ width: '55px', height: '55px', objectFit: 'contain', display: 'block' }}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </motion.button>
            </div>

            {/* Right: Links and toggles */}
            <div className="pointer-events-auto px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800" style={{ marginBottom: '0px' }}>
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('github')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        GitHub
                    </button>
                    <button
                        onClick={() => scrollToSection('tech-stack')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Tech Stack
                    </button>
                    <button
                        onClick={() => scrollToSection('achievements')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Achievements
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Contact
                    </button>
                </div>

                <div className="hidden md:block h-4 w-[1px] bg-zinc-700 mx-2" />

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-3">
                    {iconLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors transform hover:scale-110 active:scale-95 duration-200 flex items-center justify-center p-1"
                        >
                            <item.Icon sx={{ fontSize: 20 }} />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center justify-center p-1 rounded-full hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                        aria-label="Toggle Menu"
                        style={{ background: 'none', border: 'none' }}
                    >
                        <MenuIcon sx={{ fontSize: 14, color: '#d4d4d8' }} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 flex items-start justify-center md:hidden pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            className="relative mt-16 w-[90%] max-w-sm rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 shadow-2xl p-8 flex flex-col items-start gap-5"
                            initial={{ y: -40, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -40, opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors"
                                aria-label="Close menu"
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <Close sx={{ fontSize: 24 }} />
                            </button>

                            <button
                                onClick={() => scrollToSection('experience')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('github')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                GitHub
                            </button>
                            <button
                                onClick={() => scrollToSection('tech-stack')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Tech Stack
                            </button>
                            <button
                                onClick={() => scrollToSection('achievements')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Achievements
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-base font-normal text-zinc-300 hover:text-white transition-all duration-300 w-full text-left"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Contact
                            </button>

                            <div className="w-full h-px bg-zinc-800 my-2" />

                            <div className="flex items-center justify-center gap-6 w-full">
                                {iconLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <item.Icon sx={{ fontSize: 24 }} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
