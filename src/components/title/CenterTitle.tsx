import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../../assets/images'
import { Link, useNavigate } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const CenterTitle : FC<TitleProps> = ({title}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    
    <Box sx={{display: 'flex', alignItems: 'center', height: '41px', p:"8px 0"  }}>
      <Box sx={{ width:"33.3%"}}>
        <Box sx={{ pl: 2}} >
          <ArrowLeft onClick={goBack}/>
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
        <Box sx={{ mr: 1 }}>
          <Link to="/cart" style={{ display: 'flex',alignItems: 'center', textDecoration: 'none' }}>
            <IconCart />
          </Link>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Link to="/notification" style={{ display: 'flex',alignItems: 'center', textDecoration: 'none' }}>
            <IconNotification />
          </Link>
        </Box>
      </Box>
    </Box>
    
  )
}

export default CenterTitle
