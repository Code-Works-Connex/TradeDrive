"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "../../../public/images/alloyWheel/beforeAfter1.jpg";
import img2 from "../../../public/images/alloyWheel/beforeAfter2.jpg";
import img3 from "../../../public/images/alloyWheel/beforeAfter3.jpg"; // Add more images as needed
import img4 from "../../../public/images/alloyWheel/beforeAfter4.jpeg"; // Add more images as needed

export default function Home() {
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide objects containing combined before and after images
  const slides = [
    {
      image: img1,
      label: "before & after 1",
    },
    {
      image: img2,
      label: "before & after 2",
    },
    {
      image: img3,
      label: "before & after 3",
    },
    {
      image: img4,
      label: "before & after 4",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 2, md: 4 }, // Reduced padding on mobile
        backgroundColor: "#000",
        color: "#fff",
        // minHeight: { xs: "60vh", md: "80vh" }, // Adjusted minHeight for responsiveness
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          pt: { xs: 2, md: 5 },
          pb: { xs: 1, md: 2 },
          fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive font size
        }}
      >
        Before & After Wheel Repair
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", sm: "600px", md: "800px" }, // Responsive maxWidth
          aspectRatio: { xs: "1 / 0.5", sm: "2 / 1" }, // Adjusted aspect ratio for mobile
          overflow: "hidden",
          margin: { xs: "0 auto", md: "0" }, // Center on mobile
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={slide.image}
              alt={`Wheel ${slide.label}`}
              width={800} // Base width
              height={400} // Base height
              style={{
                objectFit: "contain",
                width: "100%", // Ensure image scales with container
                height: "100%",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}