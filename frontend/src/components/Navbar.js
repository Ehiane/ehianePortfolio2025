import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, LightMode, DarkMode, Menu as MenuIcon, Close } from '@mui/icons-material';
import { socialLinks } from '../data/portfolioData';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const iconLinks = [
        { Icon: GitHub, href: socialLinks.github },
        { Icon: LinkedIn, href: socialLinks.linkedin },
        { Icon: Email, href: socialLinks.email },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 w-full pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Left: Logo */}
            <div className="pointer-events-auto px-4 py-2 rounded-full transition-colors duration-300">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: 'none', border: 'none' }}
                    aria-label="Back to top"
                >
                    <img
                        src="/images/ehiane_2026_logo.png"
                        alt="Ehiane Kelvin Oigiagbe logo"
                        className="h-12 w-12 object-contain"
                    />
                </button>
            </div>

            {/* Right: Links and toggles */}
            <div className="pointer-events-auto px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md border border-zinc-800">
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
                        onClick={() => scrollToSection('contact')}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Contact
                    </button>
                </div>

                <div className="hidden md:block h-4 w-[1px] bg-zinc-700 mx-2" />

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

                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center justify-center p-2 rounded-full hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
                        aria-label="Toggle Menu"
                        style={{ background: 'none', border: 'none' }}
                    >
                        <MenuIcon sx={{ fontSize: 20, color: '#d4d4d8' }} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-40 flex items-start justify-center md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    <motion.div
                        className="relative mt-16 w-[90%] max-w-sm rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-2xl p-8 flex flex-col items-center gap-6"
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
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
                            className="text-2xl font-medium text-zinc-300 hover:text-white transition-all duration-300"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-2xl font-medium text-zinc-300 hover:text-white transition-all duration-300"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-2xl font-medium text-zinc-300 hover:text-white transition-all duration-300"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Contact
                        </button>

                        <div className="w-full h-px bg-zinc-800" />

                        <div className="flex items-center justify-center gap-6">
                            {iconLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    <item.Icon sx={{ fontSize: 24 }} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
