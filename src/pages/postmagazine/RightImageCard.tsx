import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TitleLargeBoldGray9Typography, TitleSmallGray7Typography } from "../../components/Typography";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const RightImageCard: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <Box sx={{ mt: 5, px: 2 }}>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{ width: "85px" }}></Box>
        <img src={imageSrc} alt="" style={{ flex: 1 }} />
      </Box>
      <Box sx={{ height: "55px", width: "54px", borderBottom: "1px solid #868686", mb: 3 }}></Box>
      <TitleLargeBoldGray9Typography sx={{ mb: 2 }}>
        {title}
      </TitleLargeBoldGray9Typography>
      <TitleSmallGray7Typography sx={{ mr: 5 }}>
        {description}
      </TitleSmallGray7Typography>
    </Box>
  );
};

export default RightImageCard;
