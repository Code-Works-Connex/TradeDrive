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
import { useRouter } from 'next/navigation'; // ✅ Import useRouter for client navigation

import image1 from '../../../public/images/imagedent1.jpg';
import image2 from '../../../public/images/imagedent2.jpg';

export default function Sec4() {
  const router = useRouter(); // ✅ Initialize router

  const handleContactClick = () => {
    router.push('/contact'); // ✅ Redirect to your Contact Us page
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
      }}
    >
      {/* Left side images */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50%' },
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

      {/* Right side content */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          textAlign: { xs: 'center', md: 'left' },
          mt: { md: 0 },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            color: '#333',
            textTransform: 'uppercase',
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
          }}
        >
          WE CAN HELP WITH A COLLISION REPAIR
        </Typography>

        <Typography
          sx={{
            color: '#666',
            mb: 3,
            maxWidth: 500,
            mx: { xs: 'auto', md: '0' },
          }}
        >
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </Typography>

        <List dense disablePadding>
          {[
            'Adipiscing elit, sed do eiusmod',
            'Tempor incididunt',
            'Labore et dolore magna',
          ].map((text, index) => (
            <ListItem
              key={index}
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
            onClick={handleContactClick} // ✅ Button click triggers navigation
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
