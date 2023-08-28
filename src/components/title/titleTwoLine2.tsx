import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box, Link } from '@mui/material'

const TitleTwoLine2 = () => {
  const [title, setTitle] = useState(['좋아하는 스타일을', '선택해주세요.'])
  return (
    
    <Box sx={{ marginTop: 4, paddingLeft: 2  }}>
      <Typography variant="h6">{title[0]}</Typography>
      <Typography variant="h6">{title[1]}</Typography>
    </Box>
  )
}

export default TitleTwoLine2
