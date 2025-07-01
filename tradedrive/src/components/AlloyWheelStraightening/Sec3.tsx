"use client";

import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import wheelImage from "../../../public/images/alloyWheel/alloywheel3.png";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import Checkbox from "@mui/material/Checkbox"; // Correct import for Checkbox

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* LEFT: Background section with overlay and text */}
      <Box
        sx={{
          position: "relative",
          flex: 1,
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${wheelImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)", // darker overlay
            zIndex: 2,
          }}
        />

        {/* Text Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            p: { xs: 2, md: 2 },
            maxWidth: 600,
            color: "#fff",
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
          backgroundColor: "#fff",
          p: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#000",
            textAlign: "left",
            // backgroundColor: "#f0f0f0",
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
                <PersonIcon sx={{ color: "#000" }} /> {/* Changed to black */}
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: "#000" }, // Changed to black
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #666",
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
                <EmailIcon sx={{ color: "#000" }} /> {/* Changed to black */}
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: "#000" }, // Changed to black
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #666",
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
                <PhoneIcon sx={{ color: "#000" }} /> {/* Changed to black */}
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: "#000" }, // Changed to black
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #666",
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
            input: { color: "#000" }, // Changed to black
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #666",
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
                <EditIcon sx={{ color: "#000" }} /> {/* Changed to black */}
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            input: { color: "#000" }, // Changed to black
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid #666",
            },
          }}
        />

        <FormControlLabel
          control={<Checkbox sx={{ color: "#000" }} />} // Changed to black
          label={
            <Typography sx={{ fontSize: "0.875rem", color: "#666" }}>
              I agree that my data is collected and stored.
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="error"
          startIcon={<SendIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 0,
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
