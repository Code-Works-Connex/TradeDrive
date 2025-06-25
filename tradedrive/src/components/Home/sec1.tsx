"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import the provided images (adjust paths based on your project structure)
import backgroundImage1 from "../../../public/images/homepageBanner.jpg";
import backgroundImage2 from "../../../public/images/homepageBanner1.jpg"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "60vh", md: "90vh" }, // Reduced height on mobile, full height on desktop
        margin: 0,
        overflow: "hidden",
      }}
    >
      {/* Swiper for Background Images */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        style={{
          width: "100%",
          height: "100%", // Ensure Swiper takes full height of parent
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%", // Matches parent height
              overflow: "hidden",
            }}
          >
            <Image
              src={backgroundImage1}
              alt="Car Body Shop Background 1"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              style={{ zIndex: 0 }} // Image behind overlay
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.71))",
                filter: "brightness(0.4)",
                zIndex: 1, // Gradient above image
              }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%", // Matches parent height
              overflow: "hidden",
            }}
          >
            <Image
              src={backgroundImage2}
              alt="Car Body Shop Background 2"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              style={{ zIndex: 0 }} // Image behind overlay
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.71))",
                filter: "brightness(0.4)",
                zIndex: 1, // Gradient above image
              }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "50%", md: "100px" }, // Center vertically on mobile, bottom-left on desktop
          left: { xs: 0, md: "100px" }, // Full width on mobile, left on desktop
          right: { xs: 0, md: "auto" }, // Full width on mobile
          transform: { xs: "translateY(50%)", md: "translate(0, 0)" }, // Vertical centering on mobile only
          textAlign: "left",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          zIndex: 2,
          px: { xs: 2, md: 2 }, // Padding for mobile and desktop
          maxWidth: "100%", // Ensure full width on mobile
          width: { xs: "100%", md: "auto" }, // Full width on mobile
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.9rem", md: "2.3rem" },
            margin: "8px 0",
            fontWeight: "normal",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          FULL SERVICE AND EXCELLENT QUALITY
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3.5rem", md: "6.0rem" },
            fontWeight: "bold",
            margin: 0,
            lineHeight: 1.1,
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          {activeSlide === 0 ? "Trusted Car Body Shop" : "Work Shop"}
        </Typography>
      </Box>
    </Box>
  );
}