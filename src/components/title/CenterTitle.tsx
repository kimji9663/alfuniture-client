import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../../assets/images'
import { Link } from 'react-router-dom'

const CenterTitle = () => {
  const [title] = useState(['장바구니'])

  return (
    
    <Box sx={{display: 'flex', alignItems: 'center', height: '36px',marginTop: 4 }}>
      <Box sx={{ width:"33.3%"}}>
        <Box sx={{ paddingLeft: 2}}>
        <Link to="/" style={{ display: 'flex',alignItems: 'center', textDecoration: 'none' }}>
          <ArrowLeft />
        </Link>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          width:"33.3%",
          textAlign: "center"
        }}
      >
        {title[0]}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-end', right: 0,width:"33.3%"}}>
        <Box sx={{ marginRight: 1 }}>
          <Link to="/" style={{ display: 'flex',alignItems: 'center', textDecoration: 'none' }}>
            <IconCart />
          </Link>
        </Box>
        <Box sx={{ marginRight: 2 }}>
          <Link to="/" style={{ display: 'flex',alignItems: 'center', textDecoration: 'none' }}>
            <IconNotification />
          </Link>
        </Box>
      </Box>
    </Box>
    
  )
}

export default CenterTitle
