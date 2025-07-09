'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
  Alert,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import wheelImage from '../../../public/images/alloyWheel/alloywheel3.png';
import { API_ENDPOINTS } from '../../../src/api';

// // Define categories array (aligned with backend)
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

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    description: '',
    categories: ['Alloy Wheel Rework'], // Default to array with 'Alloy Wheel Rework'
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
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time for comparison
      if (selectedDate < today) {
        newErrors.date = 'Booking date must be today or in the future';
      }
    }
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
          date: formData.date ? formData.date : null,
          description: formData.description.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.message || 'Failed to create booking';
        // Map backend errors to user-friendly messages
        if (errorMsg.includes('Invalid category value')) {
          throw new Error('Selected category is not valid. Please choose a valid service.');
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
        categories: ['Alloy Wheel Rework'],
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
      {/* LEFT: Background section with overlay and text */}
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
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${wheelImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 2,
          }}
        />
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
            At Alloy Wheel Experts, we specialize in delivering top-tier wheel
            repair solutions with precision and care. Whether you’re dealing
            with curb damage, bent rims, or minor cracks, our skilled
            technicians are equipped to restore your wheels to like-new
            condition.
          </Typography>
          <Typography variant="h5" sx={{ mt: 3 }}>
            Trust us to bring your wheels back to peak condition, using
            industry-leading techniques and the highest quality standards.
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
          Book Now
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
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
            disabled={loading}
            aria-label="Booking date"
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
            placeholder="How can we help you?"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={2}
            aria-label="Booking description"
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