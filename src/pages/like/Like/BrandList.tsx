import React from "react"
import { Typography, Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { styled } from "@mui/material/styles"
import { HalfArrow } from "../../../assets/images"
import { aerobiey, alfdn, clods, jameslee } from "../../../assets/images/logo"
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

const itemList = [
  {
    id: 'james_lee',
    name: 'James Lee',
    logo: jameslee
  },
  {
    id: 'alfdn',
    name: 'ALFDN',
    logo: alfdn
  },
  {
    id: 'rerobiey',
    name: 'Rerobiey',
    logo: aerobiey
  },
  {
    id: 'clods',
    name: 'CLODS',
    logo: clods
  }
]

const BrandList = () => {

  const navigate = useNavigate();
  const goToBrand = () => {
    navigate("/style/brand")
  }

  return (
    <>
      <Typography sx={{ py: 3, px: 2, fontSize: '0.875rem' }}>{itemList.length+"개의 브랜드"}</Typography>
      <AvatarList sx={{ py: 0 }}>
      {itemList.map((el, index) => (
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
