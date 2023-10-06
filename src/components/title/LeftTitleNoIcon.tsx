import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowLeft, IconCart, IconNotification } from '../../assets/images'
import { Link, useNavigate } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const LeftTitle: FC<TitleProps> = ({title}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '41px', p:"8px 0" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ml: 2 }}>
        <ArrowLeft onClick={goBack}/>
        <Typography variant="h6" sx={{ ml: 1, display: 'flex', alignItems: 'center',fontWeight: "bold" }}>{title[0]}</Typography>
      </Box>
    </Box>
  )
}

export default LeftTitle
