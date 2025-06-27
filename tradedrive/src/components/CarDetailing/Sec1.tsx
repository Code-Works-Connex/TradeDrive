import React from 'react';
import { Box, Typography } from '@mui/material';
import detailingBanner from '../../../public/images/detailingBanner.jpg';

export default function Sec1() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', sm: '70vh', md: '80vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <img
                src={detailingBanner.src}
                alt="Car Wash"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}
            />

            {/* Overlay Content */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly darker overlay
                    px: 2, // Padding for mobile view
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mb: 1,
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 500,
                    }}
                >
                    DRIVEN BY EXCELLENCE
                </Typography>

                <Typography
                    sx={{
                        mb: 3,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: {
                            xs: '1.1rem',  // Small phones
                            sm: '2.2rem',  // Tablets
                            md: '3rem',    // Laptops
                            lg: '3.5rem'   // Large screens
                        },
                        lineHeight: 1.2,
                    }}
                >
                    Discover the ultimate car care experience
                </Typography>

            </Box>
        </Box>
    );
}
