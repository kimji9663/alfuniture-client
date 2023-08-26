import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Logo, IconCart, IconNotification } from '../assets/images'
import { Link } from 'react-router-dom'

const LogoTitle = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: 2 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
        <Box sx={{ marginRight: 2 }}>
          <IconNotification />
        </Box>
      </Box>
    </Box>
  )
}

export default LogoTitle
