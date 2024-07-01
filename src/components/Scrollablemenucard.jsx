import React, { useState, useRef, useEffect } from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import Categoryitem from "./Categoryitem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Arrow from "./Arrow";

const items = [1, 2, 3, 4, 5, 6, 7, 8]; // Replace with your actual data

export default function Scrollablemenucard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const itemWidth = 180; // Adjust the width based on the actual width of your items
  const itemsToScroll = 3; // Number of items to scroll at a time
  const spaceBetweenItems = -40; // Space between items

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  const handleScroll = (direction) => {
    if (direction === "forward") {
      setCurrentIndex((prevIndex) =>
        Math.min(
          prevIndex + itemsToScroll,
          items.length - Math.floor(containerWidth / itemWidth)
        )
      );
    } else {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToScroll, 0));
    }
  };

  return (
    <Container sx={{}} ref={containerRef}>
      <Box>
        <Typography
          sx={{
            color: "#585c5c",
            fontSize: "14px",
            marginBottom: "30px",
            marginLeft: "3vh",
          }}
        >
          Adults need around 2000 kcal a day
        </Typography>
        <Typography
          sx={{
            color: "#2e3333",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "20px",
            marginLeft: "3vh",
          }}
        >
          Popular with other people
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {currentIndex > 0 && (
            <IconButton
              onClick={() => handleScroll("backward")}
              sx={{ position: "absolute", left: 0, zIndex: 1 }}
            >
              <Arrow direction="back" />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${currentIndex * (itemWidth + spaceBetweenItems)}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto", // Prevent the item from shrinking
                  marginRight: `${spaceBetweenItems}px`, // Space between items
                  width: `${itemWidth}px`, // Fixed width for each item
                }}
              >
                <Categoryitem />
              </Box>
            ))}
          </Box>
          {currentIndex <
            items.length - Math.floor(containerWidth / itemWidth) && (
            <IconButton
              onClick={() => handleScroll("forward")}
              sx={{ position: "absolute", right: 0, zIndex: 1 }}
            >
              <Arrow />
            </IconButton>
          )}
        </Box>
      </Box>
    </Container>
  );
}
