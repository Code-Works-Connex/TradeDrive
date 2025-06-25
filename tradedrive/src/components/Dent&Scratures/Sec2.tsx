'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Sec2() {
  return (
    <Box
      sx={{
        bgcolor: '#f0f0f0',
        p: { xs: 2, md: 7 },
        minHeight: '50vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}
    >
      {/* Left Column - Book Now Form */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#000',
            textAlign: 'left',
            backgroundColor: '#f0f0f0',
            p: 1,
            borderRadius: 1,
          }}
        >
          Book Now
        </Typography>

        <TextField
          fullWidth
          variant="standard"
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: '#757575' }} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="Email Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#757575' }} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="Phone Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon sx={{ color: '#757575' }} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
        />

        <TextField
          fullWidth
          variant="standard"
          type="date"
          placeholder="Select Date"
          InputLabelProps={{ shrink: true }}
          sx={{
            mb: 2,
            '& .MuiInput-underline:before': {
              borderBottom: '1px solid #d3d3d3',
            },
          }}
        />

        <TextField
          fullWidth
          variant="standard"
          placeholder="How can we help you? Feel free to get in touch!"
          multiline
          rows={3}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EditIcon sx={{ color: '#757575' }} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, '& .MuiInput-underline:before': { borderBottom: '1px solid #d3d3d3' } }}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="I agree that my data is collected and stored."
          sx={{ mb: 2, '& .MuiTypography-root': { fontSize: '0.875rem', color: '#757575' } }}
        />

        <Button
          variant="contained"
          color="warning"
          startIcon={<SendIcon />}
          sx={{
            textTransform: 'uppercase',
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 0,
            backgroundColor: '#f57c00',
            '&:hover': { backgroundColor: '#ef6c00' },
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Right Column - What We Do Section */}
      <Box
        sx={{
          flex: 1,
          p: 5,
          bgcolor: '#fff',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            mb: 1,
            color: '#757575',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          WHAT WE DO
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#000',
          }}
        >
          FULL-SERVICE Dents & Scratch Restoration
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          At Trade Drive, we offer expert dent and scratch repair services designed to restore your vehicle's appearance with precision and care. Whether it's a minor dent, a deep scratch, or paint damage, our skilled technicians use industry-leading techniques and equipment to get your car looking as good as new. We understand that your time is valuable. That's why our process is fast, efficient, and designed to cause as little disruption to your day as possible. Our team works with attention to detail, ensuring high-quality results without unnecessary delays.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f0f0f0',
            p: 1,
            borderRadius: 1,
            width: 'fit-content',
          }}
        >
          <IconButton sx={{ color: '#757575' }}>
            <PhoneIcon />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, ml: 1 }}
          >
            1 800 458 56 97
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
