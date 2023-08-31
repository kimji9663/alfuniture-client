import React, { FC  } from 'react'
import { Typography, Box } from '@mui/material'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const TitleTwoLine2: FC<TitleProps> = ({title}) => {
  return (
    <Box sx={{p : "16px 16px 0 16px ", mb :"80px"}}>
      <Box sx={{ height: "24px"}} />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} >{title[0]}</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} >{title[1]}</Typography>
      </Box>
    </Box>
  )
}

export default TitleTwoLine2
