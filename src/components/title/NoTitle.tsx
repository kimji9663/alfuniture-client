import React from 'react'
import { Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../../assets/images'
import { Link, useNavigate  } from 'react-router-dom'

const NoTitle = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '41px', p:"8px 0" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ml: 2 }}>
        <ArrowLeft onClick={goBack}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
        <Box sx={{ mr: 1 }}>
          <Link to="/cart" style={{ display: 'flex', textDecoration: 'none' }}>
            <IconCart />
          </Link>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Link to="/notification" style={{ display: 'flex', textDecoration: 'none' }}>
            <IconNotification />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NoTitle
