import React, { FC } from 'react'
import { Typography, Box } from '@mui/material'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const TitleOneLine: FC<TitleProps> = ({title}) => {
  return (
    <Box sx={{ height: "50px", display: 'flex', alignItems: 'center' ,paddingTop: 2, paddingBottom: 2 }}>
      <Typography variant="h4" sx={{ paddingLeft: 2 }}>{title}</Typography>
    </Box>
  )
}

export default TitleOneLine
