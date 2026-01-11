import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GlassyFolder from './GlassyFolder';
import AchievementModal from './AchievementModal';
import { achievements } from '../../data/portfolioData';
import { typography, spacing } from '../../theme/designTokens';

const BeyondCode = ({ onOpen3DViewer }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFolderType, setSelectedFolderType] = useState(null);

    const handleItemClick = (item, folderType) => {
        setSelectedItem(item);
        setSelectedFolderType(folderType);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        // Keep selectedItem for a moment to allow exit animation
        setTimeout(() => {
            setSelectedItem(null);
            setSelectedFolderType(null);
        }, 300);
    };

    const handleOpen3DViewerLocal = () => {
        setModalOpen(false);
        onOpen3DViewer(selectedItem);
    };

    const folders = [
        {
            title: 'Certifications',
            icon: '/images/stickers/certificate.png',
            items: achievements.certifications,
            type: 'certification',
        },
        {
            title: 'Events',
            icon: '/images/stickers/events.png',
            items: achievements.events,
            type: 'event',
        },
        {
            title: 'Leadership',
            icon: '/images/stickers/leadership.png',
            items: achievements.leadership,
            type: 'leadership',
        },
    ];

    return (
        <Box>
            {/* Section Header */}
            <Box sx={{ mb: spacing.sectionHeaderMb }}>
                <Typography
                    variant="overline"
                    sx={{
                        fontSize: typography.caption,
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
                    variant="h4"
                    sx={{
                        fontSize: typography.h4,
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
            <Grid container spacing={spacing.gridSpacing}>
                {folders.map((folder, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <GlassyFolder
                            title={folder.title}
                            icon={folder.icon}
                            items={folder.items}
                            onItemClick={(item) => handleItemClick(item, folder.type)}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Achievement Modal */}
            <AchievementModal
                item={selectedItem}
                open={modalOpen}
                onClose={handleCloseModal}
                isCertification={selectedFolderType === 'certification'}
                onView3D={handleOpen3DViewerLocal}
            />
        </Box>
    );
};

export default BeyondCode;
