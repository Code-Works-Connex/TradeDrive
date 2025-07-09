"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton, Divider, Modal } from "@mui/material";
import Image from "next/image";

import logo from "../../public/images/logo1.png";
import planeIcon from "../../public/images/footer2 (1).png";
import roadIcon from "../../public/images/footer2 (2).png";
import airportIcon from "../../public/images/footer2 (3).png";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const fullHours = [
    { day: "Monday", hours: "09:30 am - 07:00 pm" },
    { day: "Tuesday", hours: "09:30 am - 07:00 pm" },
    { day: "Wednesday", hours: "09:30 am - 07:00 pm" },
    { day: "Thursday", hours: "09:30 am - 07:00 pm" },
    { day: "Friday", hours: "09:30 am - 07:00 pm" },
    { day: "Saturday", hours: "10:00 am - 05:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  const now = new Date();
  const currentDay = now.toLocaleDateString("en-UK", { weekday: "long" });

  return (
    <Box
      sx={{
        backgroundColor: "#120202",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "stretch",
        px: { xs: 4, md: 6 },
        py: 5,
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: { xs: 2, md: 0 },
          ml: { xs: 2, md: 4 }, // <-- Increased left margin for desktop
        }}
      >
        <Box sx={{ mb: 2, display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Image src={logo} alt="Logo" width={180} height={50} />
        </Box>

        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.8,
            color: "#ccc",
            maxWidth: 370,
            mx: { xs: "auto", md: 0 },
            mb: 2,
          }}
        >
          At TradeDrive Auto, we provide expert car care services that keep your vehicle in top shape inside and out. From smart cosmetic fixes to deep diagnostics, we’ve got it all covered.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 1 }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/share/1Aqij2UtLv/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://wa.me/message/3RPST52EUMRVI1"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.tiktok.com/@tradedriveautos?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FaTiktok style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/channel/UCBoErPVRb1tayHjIz2DKM8g"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <YouTubeIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mt: 2, bgcolor: "#444", display: { xs: "block", md: "none" } }} />
      </Box>


      {/* Middle Section */}
      <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, mx: 2, bgcolor: "#444" }} />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 1, mx: { xs: 2, md: 0 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 1 }}>
          <PhoneIcon color="error" />
          <Typography variant="body1">+94 75 555 94947</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 1 }}>
          <EmailIcon color="error" />
          <Typography variant="body1">tradedriveautos@gmail.com</Typography>
        </Box>
        <Box
          component="a"
          href="https://wa.me/447555594947"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <WhatsAppIcon color="error" />
          <Typography variant="body1">Chat with us</Typography>
        </Box>

        {/* Dynamic Day + Static Time */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#bbb" }}>{currentDay}</Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>09:30 am - 07:00 pm</Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              cursor: "pointer",
              borderBottom: "2px solid red",
              pb: "1px",
              ml: { xs: 0, md: "auto" },
            }}
            onClick={handleOpenModal}
          >
            View Full Hours
          </Typography>
        </Box>
        <Divider sx={{ mt: 2, bgcolor: "#444", display: { xs: "block", md: "none" } }} />
      </Box>

      {/* Right Section */}
      <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, mx: 2, bgcolor: "#444" }} />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", mx: { xs: 2, md: 0 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, mb: 2 }}>
          <LocationOnIcon color="error" sx={{ mr: 1 }} />
          <Typography variant="body2">
            50F, Sunderland Road, <br /> Sandy, SG19 1QY
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 8 }}>
          <Box sx={{ textAlign: "center" }}>
            <Image src={planeIcon} alt="Sandy" width={60} height={60} />
            <Typography variant="body1" sx={{ mt: 1 }}>Sandy Station</Typography>
            <Typography variant="caption">4 min</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Image src={roadIcon} alt="A1" width={60} height={60} />
            <Typography variant="body1" sx={{ mt: 1 }}>A1</Typography>
            <Typography variant="caption">2 min</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Image src={airportIcon} alt="Stansted" width={60} height={60} />
            <Typography variant="body1" sx={{ mt: 1 }}>Stansted Airport</Typography>
            <Typography variant="caption">55 min</Typography>
          </Box>
        </Box>
        <Divider sx={{ mt: 2, bgcolor: "#444", display: { xs: "block", md: "none" } }} />
      </Box>

      {/* Modal for Full Hours */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#120202",
            color: "white",
            p: 3,
            borderRadius: 1,
            border: "1px solid #444",
            maxWidth: { xs: "90%", md: "350px" },
            width: "100%",
            maxHeight: "70vh",
            overflowY: "auto",
            position: "relative",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#1a1a1a",
              p: 2,
              mb: 2,
              borderBottom: "1px solid #444",
            }}
          >
            <Typography
              id="modal-title"
              variant="h6"
              sx={{ fontFamily: "Orbitron, sans-serif", color: "#fff", textAlign: "center" }}
            >
              Operating Hours
            </Typography>
          </Box>
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 8, color: "#C8102E", p: 0.5 }}
          >
            <CloseIcon />
          </IconButton>
          {fullHours.map((hour, index) => (
            <Box key={index} sx={{ mb: 2, p: 1, borderBottom: "1px dashed #444" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
                {hour.day}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                {hour.hours}
              </Typography>
            </Box>
          ))}
        </Box>
      </Modal>
    </Box>
  );
}
