import React from 'react';
import { Box } from '@mui/material'
import { ArrowLeft } from '../../assets/images'

interface ArrowTitleProps {
  onClick: () => void; // 클릭 이벤트의 타입을 정의
}

const ArrowTitle: React.FC<ArrowTitleProps>  = ({onClick }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '41px', p: "8px 0" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ml: 2 }}>
          <ArrowLeft onClick={onClick}/>
      </Box>
    </Box>
  )
}

export default ArrowTitle
