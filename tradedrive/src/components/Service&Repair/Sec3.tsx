"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Your actual image imports
import img1 from "../../../public/images/coolingsystem.jpeg";
import img2 from "../../../public/images/breakpad.jpg";
import img3 from "../../../public/images/oil-change-oil-filter-replacement.jpg";
import img4 from "../../../public/images/exhaust.jpeg";
import img5 from "../../../public/images/scheduledServices.png";
import img6 from "../../../public/images/images.jpeg";
import img7 from "../../../public/images/clutch.jpg";
import img8 from "../../../public/images/batterycheck.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Sec3() {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: "black",

        // ✅ Styling swiper buttons with MUI
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "#fff", // white arrows
        },
        "& .swiper-pagination-bullet": {
          backgroundColor: "#ccc",
          opacity: 0.7,
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#4fc3f7", // active bullet color
          opacity: 1,
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={4}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 180, sm: 200, md: 220 },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                placeholder="blur"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
