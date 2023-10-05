import React, { useState } from "react"
import { Tabs, Tab, Box, IconButton, Divider, Typography, Button } from "@mui/material"
import { ArrowRight, IconHeartSmall, IconLikeOff, IconLikeOn } from "../assets/images"

import { alfdn } from "../assets/images/brand"

interface BrandButtonProps {
  brandData: {
    name: string;
    description: string;
    image: string;
    isLiked: boolean;
  };
}

const BrandButton: React.FC<BrandButtonProps> = ({ brandData }) => {
  
  return (
    <Button sx={{ display: "felx", alignItems: "center", py: 1, px: 0, border: "1px solid #DADADA", borderRadius: 0, textAlign: "left", width: "100%" }}>
      <Box sx={{ px: 2, width: "72px", height: "66px" }}>
        <img src={brandData.image} alt={brandData.name} style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box>
        <Typography sx={{ color: '#333', fontSize: '.875rem', fontWeight: 'bold', '& > svg': { ml: 1 / 2 } }}>
          {brandData.name}
          <ArrowRight />
        </Typography>
        <Typography sx={{ color: '#999', fontSize: '.75rem' }}>{brandData.description}</Typography>
      </Box>
      <Box sx={{ ml: 'auto', px: 4, '& > svg': { display: 'block' } }}>
        <IconHeartSmall />
      </Box>
    </Button>
  )
}
export default BrandButton