import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box, Link } from '@mui/material'

const TitleTwoLine2 = () => {
  const [title, setTitle] = useState(['좋아하는 스타일을', '선택해주세요.'])
  return (
    <Box sx={{ width: '100%', marginTop: 4, marginLeft: 2 }}>
      <Typography sx={{ fontSize: '1.5rem' }}>{title[0]}</Typography>
      <Typography sx={{ fontSize: '1.5rem' }}>{title[1]}</Typography>
    </Box>
  )
}

export default TitleTwoLine2
