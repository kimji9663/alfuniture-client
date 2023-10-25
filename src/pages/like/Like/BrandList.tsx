import React from "react"
import { Typography, Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { styled } from "@mui/material/styles"
import { HalfArrow } from "../../../assets/images"
import { brandListData } from "../../../data"
import { useNavigate } from 'react-router-dom'

const AvatarList = styled(List)(() => ({
  '& > .MuiButtonBase-root': {
    borderTop: '1px solid #DADADA',
  },
  '& > .MuiButtonBase-root.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiTypography-root': {
    color: '#666',
    fontSize: '.875rem',
  },
}))
const BrandList = () => {
  const navigate = useNavigate();
  const goToBrand = () => {
    navigate("/style/brand")
  }

  return (
    <>
      <Typography sx={{ py: 3, px: 2, fontSize: '0.875rem' }}>{brandListData.length+"개의 브랜드"}</Typography>
      <AvatarList sx={{ py: 0 }}>
      {brandListData.map((el, index) => (
          <ListItemButton
          key={el.id}
          onClick={() => goToBrand()}
          >
          <ListItemAvatar>
            <Avatar alt={el.name} src={el.logo} />
          </ListItemAvatar>
          <ListItemText primary={el.name} />
          <HalfArrow />
          </ListItemButton>
      ))}
      </AvatarList>
    </>
  )
}

export default BrandList
