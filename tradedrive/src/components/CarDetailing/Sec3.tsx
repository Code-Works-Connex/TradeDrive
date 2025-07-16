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
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

import fullValetImg from '../../../public/images/imagesection1.png';
import addOnsImg from '../../../public/images/imagesection2.png';
import miniValetImg from '../../../public/images/imagesection3.png';

const MotionBox = motion(Box);

export default function Sec3() {
  const [selectedService, setSelectedService] = useState<'FULL VALET' | 'ADD-ONS' | 'MINI VALET' | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    { title: 'FULL VALET', image: fullValetImg, onClick: () => setSelectedService('FULL VALET') },
    { title: 'ADD-ONS', image: addOnsImg, onClick: () => setSelectedService('ADD-ONS') },
    { title: 'MINI VALET', image: miniValetImg, onClick: () => setSelectedService('MINI VALET') },
  ];

  const fullValetExterior = [
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

  const fullValetInterior = [
    'Rubbish Removal',
    'Interior Vacuum',
    'Interior Surfaces Cleaned',
    'Seats and Carpets Deep Cleaned',
    'Steam Clean Interior Surfaces',
    'Pedals and controls are being cleaned.',
    'Glass Polished',
    'Paper Protection Mats',
    'Air Freshener',
  ];

  const miniValetExterior = [
    'Wheels, Arches & Tyres Cleaned',
    'Pre Wash and Shampoo',
    'Snow Foam',
    'Premium Drying Process',
    'Tyre Dressing Applied',
    'Glass Polished',
    'Safe 2 Bucket Method',
    'Spray Wax Coating',
    'Door Shuts Cleaned',
  ];

  const miniValetInterior = [
    'Rubbish Removal',
    'Interior Vacuum',
    'Interior Surfaces Cleaned',
    'Pedals and Controls Cleaned',
    'Fresh Scent',
    'Glass Polished',
  ];

  const addOns = [
    {
      title: 'PAINT CORRECTION (3 Stage Machine Polish)',
      description: 'We aim to remove any swirls and minor scratches and restore the deep gloss. It can only be added to the Full Valet.',
      price: '£300',
    },
    {
      title: 'PAINT CORRECTION (1 Step Machine Polish)',
      description: 'The process involves eliminating any minor flaws in the paint job and enhancing the shine. It can only be added to the Full Valet.',
      price: '£95',
    },
    {
      title: 'CERAMIC COATING (12 Months Protection)',
      description: '',
      price: '£80',
    },
    {
      title: 'CERAMIC COATING (3 Years Protection)',
      description: '',
      price: '£225',
    },
    {
      title: 'ENGINE BAY CLEANING',
      description: '',
      price: '£30',
    },
    {
      title: 'SEATS DEEP CLEANED',
      description: 'Wet vac & steamed',
      price: '£25',
    },
    {
      title: 'FABRIC/LEATHER PROTECTION',
      description: '',
      price: '£55',
    },
    {
      title: 'WHEEL REMOVAL AND CERAMIC COATING',
      description: '',
      price: '£140',
    },
    {
      title: 'AIR CON DEODORISING',
      description: '',
      price: '£20',
    },
  ];

  const handleClose = () => setSelectedService(null);

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
              cursor: 'pointer',
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

      <Dialog
        open={!!selectedService}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, #1a1a1a, #111)',
            color: '#fff',
            borderRadius: 3,
            boxShadow: '0px 8px 30px rgba(0,0,0,0.5)',
            p: { xs: 2, sm: 4 },
            m: { xs: 1, sm: 2 },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} px={3}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: '#fff', letterSpacing: '0.05em' }}
            >
              {selectedService}
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: '#fff' }} aria-label="Close modal">
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedService === 'FULL VALET' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 4,
                px: 3,
              }}
            >
              <Box flex={1}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#ffd700' }}
                >
                  EXTERIOR
                </Typography>
                <Divider sx={{ bgcolor: '#444', mb: 2 }} />
                <List dense>
                  {fullValetExterior.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          color: '#e0e0e0',
                          lineHeight: 1.6,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box flex={1}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#ffd700' }}
                >
                  INTERIOR
                </Typography>
                <Divider sx={{ bgcolor: '#444', mb: 2 }} />
                <List dense>
                  {fullValetInterior.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          color: '#e0e0e0',
                          lineHeight: 1.6,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          ) : selectedService === 'MINI VALET' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 4,
                px: 3,
              }}
            >
              <Box flex={1}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#ffd700' }}
                >
                  EXTERIOR
                </Typography>
                <Divider sx={{ bgcolor: '#444', mb: 2 }} />
                <List dense>
                  {miniValetExterior.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          color: '#e0e0e0',
                          lineHeight: 1.6,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box flex={1}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#ffd700' }}
                >
                  INTERIOR
                </Typography>
                <Divider sx={{ bgcolor: '#444', mb: 2 }} />
                <List dense>
                  {miniValetInterior.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          color: '#e0e0e0',
                          lineHeight: 1.6,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          ) : selectedService === 'ADD-ONS' ? (
            <Box px={3}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#ffd700' }}
              >
                ADD-ONS
              </Typography>
              <Divider sx={{ bgcolor: '#444', mb: 3 }} />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: 3,
                }}
              >
                {addOns.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 2,
                      p: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        color: '#fff',
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          color: '#b0b0b0',
                          mt: 1,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Typography
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        fontWeight: 600,
                        color: '#ffd700',
                        mt: 1,
                      }}
                    >
                      Starting at {item.price}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ) : null}

          {(selectedService === 'FULL VALET' || selectedService === 'MINI VALET') && (
            <Typography
              sx={{
                mt: 4,
                fontWeight: 600,
                fontSize: { xs: '1.2rem', sm: '1.3rem' },
                textAlign: 'center',
                color: '#ffd700',
              }}
            >
              Starting at {selectedService === 'FULL VALET' ? '£85' : '£40'}
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}