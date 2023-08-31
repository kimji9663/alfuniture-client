import React from 'react'
import { Box } from '@mui/material'
import { Logo, IconNotification } from '../../assets/images'
import { Link } from 'react-router-dom'

const LogoTitle = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '36px', paddingTop: 1, paddingBottom: 1 }}>
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
