import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box, Link } from '@mui/material'

const TitleTwoLine1 = () => {
  const [title, setTitle] = useState(['찾고 싶은 가구를', '선택해주세요.'])
  return (
    <Box sx={{ width: '100%', marginLeft: 2 }}>
      <Box sx={{ marginTop: 2 }}>SKIP</Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography sx={{ fontSize: '1.5rem' }}>{title[0]}</Typography>
        <Typography sx={{ fontSize: '1.5rem' }}>{title[1]}</Typography>
      </Box>
    </Box>
  )
}

export default TitleTwoLine1
