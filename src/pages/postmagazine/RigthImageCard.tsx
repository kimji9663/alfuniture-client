import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const RigthImageCard: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <Box sx={{ mt: 5, px: 2 }}>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{ width: "85px" }}></Box>
        <img src={imageSrc} alt="" style={{ flex: 1 }} />
      </Box>
      <Box sx={{ height: "55px", width: "54px", borderBottom: "1px solid #868686", mb: 3 }}></Box>
      <Typography sx={{ fontSize: 22, fontWeight: "700", color: "#333333", mb: 2, lineHeight: "28px" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#999999", letterSpacing: "-0.25px", mr: 5 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default RigthImageCard;
