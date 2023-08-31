import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowWhite } from '../../assets/images'
import { Link } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const WhiteTitle: FC<TitleProps> = ({title}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        color: 'white',
        border: '1px solid white',
        backgroundColor: 'transparent',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', margin: 2, textAlign: 'center' }}>
        <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
          <ArrowWhite />
        </Link>
      </Box>
      <Typography
        sx={{ height: '100%', paddingLeft: 2, display: 'flex', alignItems: 'center', borderLeft: '1px solid white' }}
      >
        {title[0]}
      </Typography>
    </Box>
  )
}

export default WhiteTitle
