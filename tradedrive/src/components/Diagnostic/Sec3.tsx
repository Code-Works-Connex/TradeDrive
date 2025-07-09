'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from 'next/image';
import diagnosticBg from '../../../public/images/banner2dent.jpg';
import { API_ENDPOINTS } from '../../../src/api';
import { List, ListItem, ListItemText } from '@mui/material';

// Define categories array (aligned with backend)
// const CATEGORIES = ['Alloy Wheel Rework', 'Dents & Scratches', 'Car Detailing', 'Service & repair', 'Diagnostic', 'MOT check'];

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  description: string;
  categories: string[];
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  description?: string;
  categories?: string;
  agree?: string;
}

export default function Sec3() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    description: '',
    categories: ['Diagnostic'], // Fixed trailing space
    agree: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setError('');
    setSuccess('');
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (7-20 characters, digits, spaces, or +)';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Booking date is required';
    else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Booking date must be today or in the future';
      }
    }
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.categories.length) newErrors.categories = 'At least one category is required';
    if (!formData.agree) newErrors.agree = 'You must agree to data collection';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(API_ENDPOINTS.booking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          categories: formData.categories,
          status: 'Pending',
          date: formData.date,
          description: formData.description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.message || 'Failed to create booking';
        if (errorMsg.includes('Invalid category value')) {
          throw new Error('Selected service (Diagnostic) is not valid. Please choose a valid service.');
        } else if (errorMsg.includes('Name, phone, and email are required')) {
          throw new Error('Please provide all required fields (name, phone, email).');
        }
        throw new Error(errorMsg);
      }

      setSuccess('Booking created successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        description: '',
        categories: ['Diagnostic'],
        agree: false,
      });
      setErrors({});
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
      {/* Left Column - Image and Content */}
      <Box
  sx={{
    flex: 1,
    position: 'relative',       // needed for overlay & image stacking
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    px: { xs: 2, md: 4 },
    py: { xs: 4, md: 0 },
    overflow: 'hidden',
    minHeight: '60vh',
  }}
>
  {/* Background Image */}
  <Image
    src={diagnosticBg}
    alt="Diagnostic Service Background"
    fill
    style={{ objectFit: 'cover' }}
    priority
  />

  {/* Dark Overlay */}
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // semi-transparent dark overlay
      zIndex: 1,
    }}
  />

  {/* Text Content */}
  <Box
    sx={{
      position: 'relative',
      zIndex: 2,
      color: '#fff',            // white text for contrast
      maxWidth: 600,
      width: '100%',
    }}
  >
    <Typography variant="h4" sx={{ color: 'red', mb: 2, textAlign: 'center' }}>
      Why Choose Our Diagnostic Services?
    </Typography>

    <List sx={{ pl: 2, color: 'white' }}>
      {[
        'Latest diagnostic scanners for all vehicle makes & models.',
        'Experienced technicians who get to the root cause, not just the error code.',
        'Honest recommendations  we only suggest repairs you actually need.',
        'Quick turnaround to get you back on the road faster.',
      ].map((item, index) => (
        <ListItem key={index} sx={{ py: 0.5 }}>
          <ListItemText
            primary={item}
            primaryTypographyProps={{ sx: { color: 'white' } }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
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
            fontSize: { xs: '1rem', md: '2rem' },
            color: '#fff',
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Book Your Diagnostic Check Today
        </Typography>

        {/* Display success or error messages */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }} aria-live="polite">
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} aria-live="polite">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            required
            aria-label="Full name"
            aria-required="true"
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
            aria-label="Email address"
            aria-required="true"
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            required
            aria-label="Phone number"
            aria-required="true"
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
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
            label="Booking Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            required
            aria-label="Booking date"
            aria-required="true"
            disabled={loading}
            InputLabelProps={{ style: { color: '#aaa' }, shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            inputProps={{
              min: new Date().toISOString().split("T")[0],
            }}
            sx={{
              mb: 2,
              input: {
                color: '#fff',
                '&::-webkit-calendar-picker-indicator': {
                  filter: 'invert(1)',
                },
              },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <TextField
            fullWidth
            variant="standard"
            placeholder="How can we help you?"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={2}
            required
            aria-label="Booking description"
            aria-required="true"
            disabled={loading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            sx={{
              mb: 2,
              textarea: { color: '#fff' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <Typography
            variant="body1"
            sx={{ mb: 2, color: '#aaa', fontSize: '0.875rem' }}
          >
            Service: {formData.categories.join(', ')}
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                sx={{ color: '#fff' }}
                required
                disabled={loading}
              />
            }
            label={
              <Typography sx={{ fontSize: '0.875rem', color: '#aaa' }}>
                I agree that my data is collected and stored.
              </Typography>
            }
            sx={{ mb: 2 }}
          />
          {errors.agree && (
            <Typography sx={{ color: '#f44336', fontSize: '0.75rem', mb: 2 }}>
              {errors.agree}
            </Typography>
          )}

          <Button
            variant="contained"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            type="submit"
            disabled={loading}
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
            {loading ? 'Submitting...' : 'Book an Appointment'}
          </Button>
        </form>
      </Box>
    </Box>
  );
}