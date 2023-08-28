import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Logo, IconCart, IconNotification } from '../../assets/images'
import { Link } from 'react-router-dom'

const LogoTitle = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 4, height: '36px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <Logo />
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
        <Box sx={{ marginRight: 2 }}>
          <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <IconNotification />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LogoTitle
