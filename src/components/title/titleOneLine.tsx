import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box, Link } from '@mui/material'

const TitleOneLine = () => {
  const [title, setTitle] = useState('SHOP ALL')
  return (
    <Box sx={{ height: "50px", display: 'flex', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ paddingLeft: 2 }}>{title}</Typography>
    </Box>
  )
}

export default TitleOneLine
