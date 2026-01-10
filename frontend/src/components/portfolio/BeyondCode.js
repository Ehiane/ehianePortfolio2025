import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GlassyFolder from './GlassyFolder';
import AchievementModal from './AchievementModal';
import { achievements } from '../../data/portfolioData';

const BeyondCode = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        // Keep selectedItem for a moment to allow exit animation
        setTimeout(() => setSelectedItem(null), 300);
    };

    const folders = [
        {
            title: 'Certifications',
            icon: '/images/stickers/certificate.png',
            items: achievements.certifications,
        },
        {
            title: 'Events',
            icon: '/images/stickers/events.png',
            items: achievements.events,
        },
        {
            title: 'Leadership',
            icon: '/images/stickers/leadership.png',
            items: achievements.leadership,
        },
    ];

    return (
        <Box>
            {/* Section Header */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="overline"
                    sx={{
                        fontSize: '9px',
                        fontFamily: 'monospace',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        display: 'block',
                        mb: 0.5,
                    }}
                >
                    Achievements
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        fontFamily: '"Playfair Display", serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                    }}
                >
                    Beyond{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            color: 'text.secondary',
                        }}
                    >
                        Code
                    </Typography>
                </Typography>
            </Box>

            {/* Folders Grid */}
            <Grid container spacing={3}>
                {folders.map((folder, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <GlassyFolder
                            title={folder.title}
                            icon={folder.icon}
                            items={folder.items}
                            onItemClick={handleItemClick}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Achievement Modal */}
            <AchievementModal
                item={selectedItem}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </Box>
    );
};

export default BeyondCode;
