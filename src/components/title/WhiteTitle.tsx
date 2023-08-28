import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../../assets/images'
import { Link } from 'react-router-dom'

const WhiteTitle = () => {
  const [title] = useState(['모던한 인테리어 디자인'])
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 4, height: '50px', color:"white", border: '1px solid white',backgroundColor: 'transparent' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', margin: 2, textAlign: "center" }}>
          <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
            <ArrowLeft />
          </Link>
        </Box>
        <Typography  sx={{height:"100%", paddingLeft: 2, display: 'flex', alignItems: 'center', borderLeft: '1px solid white' }}>{title[0]}</Typography>
    </Box>
  )
}

export default WhiteTitle
