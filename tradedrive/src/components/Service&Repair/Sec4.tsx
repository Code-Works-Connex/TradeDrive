"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";

// Replace with your actual image
import mechanicImage from "../../../public/images/MOTimage2.png"; // Example path

export default function Sec4() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 }, backgroundColor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ color: "#C8102E", mb: 2 }}>
            Why Service Your Car With Us?
          </Typography>
          <List sx={{ pl: 1 }}>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText primary="• Friendly, experienced mechanics who care about your car." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText primary="• Honest advice & clear communication — no unnecessary upsells." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText primary="• Fast turnaround to get you back on the road sooner." />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemText primary="• Top-quality parts to protect your investment." />
            </ListItem>
          </List>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: { xs: 220, sm: 300, md: 360 },
         
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src={mechanicImage}
            alt="Mechanic at work"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            placeholder="blur"
          />
        </Box>
      </Box>
    </Box>
  );
}
