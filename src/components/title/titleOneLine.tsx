import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const TitleOneLine: FC<TitleProps> = ({title}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' , p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>{title}</Typography>
    </Box>
  )
}

export default TitleOneLine
