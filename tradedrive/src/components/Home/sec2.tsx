import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import image1 from '../../../public/images/img1.png';
import image2 from '../../../public/images/img2.png';
import image3 from '../../../public/images/img3.png';
import image4 from '../../../public/images/img4.png';

export default function Sec2() {
    const items = [
        {
            image: image1,
            title: 'Alloy Wheels Straightning',
            description:
                'Alloy wheel straightening repairs bent wheels from impacts using hydraulic machines and heat, restoring shape, safety, and saving replacement costs.',
        },
        {
            image: image2,
            title: 'Dents And Scratures',
            description:
                'Dents and scratches are vehicle surface damages, dents from impacts, scratches from marks requiring repair to restore appearance.',
        },
        {
            image: image3,
            title: 'Car Detailing',
            description:
                "Car detailing is a thorough cleaning and polishing process to enhance a vehicle's interior and exterior appearance.",
        },
        {
            image: image4,
            title: 'Ceramic Coating',
            description:
                'Ceramic coating is a protective SiO2 based layer for cars that enhances shine, resists scratches and UV damage, and simplifies cleaning.',
        },
    ];

    return (
        <Box
            sx={{
                padding: { xs: 2, md: 10 },
                backgroundColor: '#000',
                minHeight: { xs: '70vh', md: '40vh' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100%',
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            width: 300,
                            height: 350,
                            overflow: 'hidden',
                            textAlign: 'center',
                            '&:hover .static-text': {
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            },
                            '&:hover .image-overlay': {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                            '&:hover img': {
                                filter: 'brightness(50%)',
                                transition: 'filter 0.3s ease',
                            },
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={350}
                            objectFit="cover"
                        />
                        <Box
                            className="static-text"
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                color: '#fff',
                                fontFamily: 'Orbitron, sans-serif',
                                fontSize: '1.4rem',
                                opacity: 1,
                                transition: 'opacity 0.3s ease',
                            }}
                        >
                            {item.title}
                        </Box>
                        <Box
                            className="image-overlay"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transform: 'translateY(100%)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                                padding: 2,
                                textAlign: 'center',
                                overflowY: 'auto',
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    fontSize: { xs: '0.8rem', sm: '1rem' },
                                    lineHeight: 1.4,
                                    maxWidth: '90%',
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
