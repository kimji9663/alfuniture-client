import React, { useState } from "react"
import { Tabs, Tab, Box, IconButton, Divider, Typography } from "@mui/material"
import { ArrowRight, IconHeartSmall, IconLikeOff, IconLikeOn } from "../../../assets/images"

import { alfdn } from "../../../assets/images/brand"



const BrandInfo = () => {
  
  return (
    <Box sx={{display:"felx", alignItems:"center", px:1, border: "1px solid #DADADA", borderRadius: 0, textAlign:"left"}}>
      <Box sx={{ px: 2 }}>
        <img src={alfdn} alt="알프든" />
      </Box>
      <Box>
        <Typography sx={{ color: '#333', fontSize: '.875rem', fontWeight: 'bold', '& > svg': { ml: 1/2 } }}>
          ALFDN
          <ArrowRight />
        </Typography>
        <Typography sx={{ color: '#999', fontSize: '.75rem' }}>알프든</Typography>
      </Box>
      <Box sx={{ ml: 'auto', px: 4, '& > svg': { display: 'block' } }}>
        <IconHeartSmall />
      </Box>
    </Box>
  )
}
export default BrandInfo