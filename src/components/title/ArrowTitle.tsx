import React from 'react';
import { Box } from '@mui/material'
import { ArrowLeft } from '../../assets/images'

interface ArrowTitleProps {
  onClick: () => void; // 클릭 이벤트의 타입을 정의
}

const ArrowTitle: React.FC<ArrowTitleProps>  = ({onClick }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '36px', paddingTop: 1, paddingBottom: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center'}} onClick={onClick}>
          <ArrowLeft />
        </Box>
      </Box>
    </Box>
  )
}

export default ArrowTitle
