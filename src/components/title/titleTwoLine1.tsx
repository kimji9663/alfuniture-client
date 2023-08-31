import React, { FC  } from 'react'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const TitleTwoLine1: FC<TitleProps> = ({title}) => {
  return (
    <Box sx={{paddingLeft: 2, paddingTop: 2, paddingBottom: 2}}>
      <Box sx={{ textAlign: 'right', paddingRight: 2}}>
        <Link to="/" style={{ color: 'gray' }}>
          SKIP
        </Link>
      </Box>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant="h5" >{title[0]}</Typography>
        <Typography variant="h5" >{title[1]}</Typography>
      </Box>
    </Box>
  )
}

export default TitleTwoLine1
