'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import image1 from '../../../public/images/imagedent1.jpg';
import image2 from '../../../public/images/imagedent2.jpg';

export default function Sec4() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.2 },
    }),
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, md: 8 },
        bgcolor: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Left side images */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ width: '100%', maxWidth: '50%' }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: 380,
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '80%', md: '80%' },
              height: { xs: 300, sm: 350 },
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Image
              src={image1}
              alt="Paint worker"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              bottom: -30,
              left: '50%',
              width: '50%',
              height: 240,
              boxShadow: 4,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Image
              src={image2}
              alt="Sanding worker"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      </motion.div>

      {/* Right side content */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ width: '100%', maxWidth: '45%' }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            color: '#333',
            textTransform: 'uppercase',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          WE CAN FIX IT
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 1,
            mb: 2,
            color: '#000',
            lineHeight: 1.2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          WE CAN HELP WITH A COLLISION REPAIR
        </Typography>

        <Typography
          sx={{
            color: '#666',
            mb: 3,
            maxWidth: 600,
            textAlign: { xs: 'center', md: 'left' },
            mx: { xs: 'auto', md: '0' },
          }}
        >
          Our speciality is employing sophisticated tools and exact paint matching to restore your car's body to like-new condition, from little dents to extensive scratches, saving you time and money by avoiding the need to replace whole panels.
        </Typography>

        <List dense disablePadding>
          {[
            'Free Visual Inspection',
            'Transparent Estimate',
            'Final Finish & Quality Check',
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ListItem
                disableGutters
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <ListItemIcon sx={{ minWidth: '32px', color: 'orange' }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ color: '#333' }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: '#fff',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              textTransform: 'uppercase',
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#cc0000',
              },
            }}
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}
