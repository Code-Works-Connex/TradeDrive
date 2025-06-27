'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

import fullValetImg from '../../../public/images/imagesection1.png';
import addOnsImg from '../../../public/images/imagesection2.png';
import miniValetImg from '../../../public/images/imagesection3.png';

const MotionBox = motion(Box);

export default function Sec3() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    { title: 'FULL VALET', image: fullValetImg, onClick: () => setOpen(true) },
    { title: 'ADD-ONS', image: addOnsImg },
    { title: 'MINI VALET', image: miniValetImg },
  ];

  const exterior = [
    'Wheels, Arches & Tyres Cleaned',
    'Pre Wash and Shampoo',
    'Snow Foam',
    'Iron Fall Out',
    'Exterior Vinyl and Plastics Treated',
    'Bug and Tar Removal',
    'Premium Drying Process',
    'Tyre Dressing Applied',
    'Glass Polished',
    'Safe 2 Bucket Method',
    'Door Shuts Cleaned',
    'Hand Polish and Wax Applied',
  ];

  const interior = [
    'Rubbish Removal',
    'Interior Vacuum',
    'Interior Surfaces Cleaned',
    'Seats and Carpets Deep Cleaned',
    'Steam Clean Interior Surfaces',
    'Pedals and Controls Cleaned',
    'Glass Polished',
    'Paper Protection Mats',
    'Air Freshener',
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000',
          py: 5,
          px: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        {services.map((service, idx) => (
          <MotionBox
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={service.onClick}
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '30%' },
              textAlign: 'center',
              cursor: service.onClick ? 'pointer' : 'default',
            }}
          >
            <Box
              component="img"
              src={service.image.src}
              alt={service.title}
              sx={{
                width: '100%',
                height: { xs: 'auto', md: '300px' },
                objectFit: 'cover',
                borderRadius: 1,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.4)',
              }}
            />
            <Typography
              sx={{
                mt: 2,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {service.title}
            </Typography>
          </MotionBox>
        ))}
      </Box>

      {/* Modal with split content */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: '#111',
            color: '#fff',
            borderRadius: 2,
            px: 2,
          },
        }}
      >
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              FULL VALET
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
            }}
          >
            {/* Exterior */}
            <Box flex={1}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                EXTERIOR
              </Typography>
              <List dense>
                {exterior.map((item, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemText
                      primary={`• ${item}`}
                      primaryTypographyProps={{ fontSize: '0.95rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Interior */}
            <Box flex={1}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                INTERIOR
              </Typography>
              <List dense>
                {interior.map((item, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemText
                      primary={`• ${item}`}
                      primaryTypographyProps={{ fontSize: '0.95rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          <Typography sx={{ mt: 3, fontWeight: 600, textAlign: 'center' }}>
            Starting at £85
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
