import React, { FC  } from 'react'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

interface TitleProps {
  title: string[]; // props의 타입 정의
  onClick?: () => void
  skip?: boolean
}

const TitleTwoLine: FC<TitleProps> = ({title, onClick, skip}) => {
  return (
    <Box sx={{p : "16px 16px 0 16px ", height: '120px', boxSizing: 'border-box' }}>
      {skip ? (
        <Box sx={{ textAlign: 'right', pr: 2, height: "24px", color: 'gray'}} onClick={onClick}>
          SKIP
        </Box>
      ) : null}
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} >{title[0]}</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} >{title[1]}</Typography>
      </Box>
    </Box>
  )
}

export default TitleTwoLine
