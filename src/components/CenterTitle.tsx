import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../assets/images'
import { Link } from 'react-router-dom'

const CenterTitle = () => {
  const [title] = useState(['장바구니'])

  return (
    <Box sx={{ height: '36px' }}>
      <Box sx={{ position: 'relative', marginTop: 4 }}>
        <Box sx={{ position: 'absolute', marginLeft: 2, paddingTop: 1 }}>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </Box>
        <Typography
          variant="h5"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            lineHeight: '30px',
            paddingTop: '4px',
          }}
        >
          {title[0]}
        </Typography>
        <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'center', right: 0, paddingTop: 1 }}>
          <Box sx={{ marginRight: 1 }}>
            <IconCart />
          </Box>
          <Box sx={{ marginRight: 2 }}>
            <IconNotification />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CenterTitle
