import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../assets/images'
import { Link } from 'react-router-dom'

const LeftTitle = () => {
  const [title] = useState(['브랜드'])
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: 2 }}>
        <Link to="/">
          <ArrowLeft />
        </Link>
        <Typography sx={{ fontSize: '1.5rem', marginLeft: 1 }}>{title[0]}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
        <Box sx={{ marginRight: 1 }}>
          <IconCart />
        </Box>
        <Box sx={{ marginRight: 2 }}>
          <IconNotification />
        </Box>
      </Box>
    </Box>
  )
}

export default LeftTitle
