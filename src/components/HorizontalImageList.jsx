import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const moveLeft = (numImages) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${numImages * 120}px); }
`;

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  width: "100%", // Ensure container takes full width
  height: "auto", // Adjust height based on content
  marginTop: theme.spacing(2), // Add top margin
}));

const ImageRow = styled("div")(({ theme, numImages }) => ({
  display: "flex",
  position: "relative",
  animation: `${moveLeft(numImages)} 20s linear infinite`,
}));

const ImageCard = styled(Card)(({ theme, width }) => ({
  width: width === 240 ? 240 : 120,
  height: 120,
  marginRight: theme.spacing(0.5), // Adjust margin between cards
}));

const imagesRow1 = [
  { src: "image1_120x120.jpg", width: 120 },
  { src: "image2_240x120.jpg", width: 240 },
  { src: "image3_120x120.jpg", width: 120 },
  { src: "image4_240x120.jpg", width: 240 },
];

const imagesRow2 = [
  { src: "image5_240x120.jpg", width: 240 },
  { src: "image6_120x120.jpg", width: 120 },
  { src: "image7_240x120.jpg", width: 240 },
  { src: "image8_120x120.jpg", width: 120 },
];

export default function HorizontalImageList() {
  const totalImagesRow1 = imagesRow1.length;
  const totalImagesRow2 = imagesRow2.length;

  return (
    <ImageContainer>
      <ImageRow numImages={totalImagesRow1}>
        {imagesRow1.map((image, index) => (
          <ImageCard key={index} width={image.width}>
            <CardMedia
              component="img"
              image={image.src}
              alt={`image-${index}`}
              sx={{ width: image.width, height: 120 }}
            />
          </ImageCard>
        ))}
        {imagesRow1.map((image, index) => (
          <ImageCard key={index + totalImagesRow1} width={image.width}>
            <CardMedia
              component="img"
              image={image.src}
              alt={`image-${index + totalImagesRow1}`}
              sx={{ width: image.width, height: 120 }}
            />
          </ImageCard>
        ))}
      </ImageRow>
      <ImageRow numImages={totalImagesRow2}>
        {imagesRow2.map((image, index) => (
          <ImageCard key={index} width={image.width}>
            <CardMedia
              component="img"
              image={image.src}
              alt={`image-${index}`}
              sx={{ width: image.width, height: 120 }}
            />
          </ImageCard>
        ))}
        {imagesRow2.map((image, index) => (
          <ImageCard key={index + totalImagesRow2} width={image.width}>
            <CardMedia
              component="img"
              image={image.src}
              alt={`image-${index + totalImagesRow2}`}
              sx={{ width: image.width, height: 120 }}
            />
          </ImageCard>
        ))}
      </ImageRow>
    </ImageContainer>
  );
}
