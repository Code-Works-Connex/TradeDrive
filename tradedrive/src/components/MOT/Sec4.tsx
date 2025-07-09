'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
  Checkbox,
  Alert,
  CircularProgress,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from 'next/image';
import wheelImage from '../../../public/images/mot-testing01.jpg';
import { API_ENDPOINTS } from '../../../src/api';

// Define categories array (only 'MOT Check' for this use case)
// const CATEGORIES = ['MOT Check'];

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

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    description: '',
    categories: ['MOT Check'],
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
          throw new Error('Selected service (MOT Check) is not valid. Please choose a valid service.');
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
        categories: ['MOT Check'],
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
        justifyContent: 'space-between',
        color: '#fff',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* LEFT: Image section with overlay and text */}
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Image */}
        <Image
          src={wheelImage}
          alt="MOT Check"
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 2,
          }}
        />
        {/* Text Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            p: { xs: 2, md: 2 },
            maxWidth: 600,
            color: '#fff',
          }}
        >
          <Typography variant="h5" gutterBottom>
            A valid and up-to-date MOT certificate can make a big difference when selling or trading in your vehicle. It gives potential buyers confidence that the car has been properly maintained and is in good condition. On the flip side, failing to keep your MOT current can reduce resale value and raise questions about your car’s upkeep.
          </Typography>
        </Box>
      </Box>

      {/* RIGHT: Booking Form */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#000',
            textAlign: 'left',
            p: 1,
            borderRadius: 1,
          }}
        >
          Book Your MOT Check
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
                  <PersonIcon sx={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#666' } }}
            sx={{
              mb: 2,
              input: { color: '#000' },
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
                  <EmailIcon sx={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#666' } }}
            sx={{
              mb: 2,
              input: { color: '#000' },
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
                  <PhoneIcon sx={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#666' } }}
            sx={{
              mb: 2,
              input: { color: '#000' },
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
            InputLabelProps={{ style: { color: '#666' }, shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
            inputProps={{
              min: new Date().toISOString().split("T")[0],
            }}
            sx={{
              mb: 2,
              input: {
                color: '#000',
                '&::-webkit-calendar-picker-indicator': { filter: 'invert(0.5)' },
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
                  <EditIcon sx={{ color: '#000' }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { color: '#666' } }}
            sx={{
              mb: 2,
              textarea: { color: '#000' },
              '& .MuiInput-underline:before': {
                borderBottom: '1px solid #666',
              },
            }}
          />

          <Typography
            variant="body1"
            sx={{ mb: 2, color: '#666', fontSize: '0.875rem' }}
          >
            Service: {formData.categories.join(', ')}
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                sx={{ color: '#000' }}
                required
                disabled={loading}
              />
            }
            label={
              <Typography sx={{ fontSize: '0.875rem', color: '#666' }}>
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
            color="error"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            type="submit"
            disabled={loading}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 0,
              alignSelf: { xs: 'center', md: 'flex-start' },
            }}
          >
            {loading ? 'Submitting...' : 'Book an Appointment'}
          </Button>
        </form>
      </Box>
    </Box>
  );
}