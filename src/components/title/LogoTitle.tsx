import React from 'react'
import { Box } from '@mui/material'
import { Logo, IconNotification } from '../../assets/images'
import { Link } from 'react-router-dom'

const LogoTitle = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '41px', p:"8px 0" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ml: 2 }}>
        <Link to="/home" style={{ display: 'flex', textDecoration: 'none' }}>
          <Logo />
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
        <Box sx={{ mr: 2 }}>
          <Link to="/notification" style={{ display: 'flex', textDecoration: 'none' }}>
            <IconNotification />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LogoTitle
