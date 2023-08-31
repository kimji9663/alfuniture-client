import React, { FC  } from 'react'
import { Typography, Box } from '@mui/material'

interface TitleProps {
  title: string[]; // props의 타입 정의
}

const TitleTwoLine2: FC<TitleProps> = ({title}) => {
  // const [title, setTitle] = useState(['좋아하는 스타일을', '선택해주세요.'])
  return (
    
    <Box sx={{ paddingLeft: 2, paddingTop: 2, paddingBottom: 2 }}>
      <Typography variant="h5">{title[0]}</Typography>
      <Typography variant="h5">{title[1]}</Typography>
    </Box>
  )
}

export default TitleTwoLine2
