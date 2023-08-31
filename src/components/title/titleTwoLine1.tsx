import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const TitleTwoLine1 = () => {
  const [title, setTitle] = useState(['찾고 싶은 가구를', '선택해주세요.'])
  return (
    <Box sx={{marginTop: 2,  paddingLeft: 2}}>
      <Box sx={{ textAlign: 'right', paddingRight: 2}}>
        <Link to="/" style={{ color: 'gray' }}>
          SKIP
        </Link>
      </Box>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant="h6" >{title[0]}</Typography>
        <Typography variant="h6" >{title[1]}</Typography>
      </Box>
    </Box>
  )
}

export default TitleTwoLine1
