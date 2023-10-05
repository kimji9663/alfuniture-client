import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'
import { ArrowWhite } from '../../assets/images'
import { Link, useNavigate  } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const WhiteTitle: FC<TitleProps> = ({title}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        color: '#DADADA',
        border: '1px solid white',
        backgroundColor: 'transparent',
        position :"fixed", top:0, left:0, zIndex: "999"
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', m: 2, textAlign: 'center' }}>
        <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
          <ArrowWhite onClick={goBack}/>
        </Link>
      </Box>
      <Typography
        sx={{ height: '100%', pl: 2, display: 'flex', alignItems: 'center', borderLeft: '1px solid #DADADA' }}
      >
        {title[0]}
      </Typography>
    </Box>
  )
}

export default WhiteTitle
