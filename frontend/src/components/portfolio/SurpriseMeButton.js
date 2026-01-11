import React from 'react';
import { Button } from '@mui/material';

const SurpriseMeButton = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
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
                '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    boxShadow: `
                        0 0 15px rgba(34, 197, 94, 0.3),
                        0 0 30px rgba(34, 197, 94, 0.2),
                        0 0 45px rgba(34, 197, 94, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `,
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                },
                '&:active': {
                    transform: 'translateY(0px)',
                },
            }}
        >
            Surprise me
        </Button>
    );
};

export default SurpriseMeButton;
