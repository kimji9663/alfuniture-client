import React from "react"
import { Typography, Avatar, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { AvatarList } from "./index.styles"
import { ArrowRight } from "../../assets/images"

const itemList = [
  {
    id: 'james_lee',
    name: 'James Lee',
  },
  {
    id: 'alfdn',
    name: 'ALFDN',
  },
  {
    id: 'rerobiey',
    name: 'Rerobiey',
  },
  {
    id: 'clods',
    name: 'CLODS',
  }
]

const BrandList = () => {

  const handleListItemClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    console.log(index)
  }

  return (
    <>
      <Typography sx={{ py: 3, px: 2, fontSize: '0.875rem' }}>4개의 브랜드</Typography>
      <AvatarList sx={{ py: 0 }}>
      {itemList.map((el, index) => (
          <ListItemButton
          key={el.id}
          onClick={(event) => handleListItemClick(event, index)}
          >
          <ListItemAvatar>
              <Avatar alt={el.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary={el.name} />
          <ArrowRight />
          </ListItemButton>
      ))}
      </AvatarList>
    </>
  )
}

export default BrandList
