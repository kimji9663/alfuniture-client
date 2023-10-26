import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { C333Fs22Fw700Lh28Typography, C999Fs14NoLhTypography } from '../../components/Typography';

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
      <C333Fs22Fw700Lh28Typography sx={{ mb: 2 }}>
        {title}
      </C333Fs22Fw700Lh28Typography>
      <C999Fs14NoLhTypography sx={{ mr: 5 }}>
        {description}
      </C999Fs14NoLhTypography>
    </Box>
  );
};

export default RightImageCard;
