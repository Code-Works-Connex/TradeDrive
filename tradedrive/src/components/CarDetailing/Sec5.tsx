'use client';
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

import bookingImage from '../../../public/images/detailingsec5.png'; // ✅ your image

export default function Sec5() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#000',
        width: '100%',
        minHeight: '60vh',
      }}
    >
      {/* Left Column - Image (Hidden on Mobile) */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          height: '70vh',
        }}
      >
        <img
          src={bookingImage.src}
          alt="Booking"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 0,
            padding: 10,
          }}
        />
      </Box>

      {/* Right Column - Form */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: `'Courier New', Courier, monospace`,
            color: '#fff',
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Book A Slot
        </Typography>

        <TextField
          fullWidth
          variant="standard"
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: '#fff' },
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #666',
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: '#fff' },
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #666',
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="Phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: '#fff' },
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #666',
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={{
            mb: 2,
            input: { color: '#fff' },
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #666',
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="How can we help you?"
          multiline
          rows={2}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EditIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            textarea: { color: '#fff' },
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #666',
            },
          }}
        />

        <FormControlLabel
          control={<Checkbox sx={{ color: '#fff' }} />}
          label={
            <Typography sx={{ fontSize: '0.875rem', color: '#aaa' }}>
              I agree that my data is collected and stored.
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          startIcon={<SendIcon />}
          sx={{
            backgroundColor: '#2979ff',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 600,
            px: 4,
            py: 1.2,
            alignSelf: { xs: 'center', md: 'flex-start' },
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
