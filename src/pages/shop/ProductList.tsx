import React from "react"
import { Box, Button, ListItemButton } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"

const ProductList = () => {
  return (
    <>
      <Box>
        가구
        <Button>장바구니</Button>
        <Button>알림</Button>
      </Box>{/* 타이틀 임시 */}
      <ListItemButton
        sx={{
          height: '52px',
          borderTop: '1px solid #DDDDDD',
          borderBottom: '1px solid #DDDDDD',
          fontSize: '.875rem',
        }}
      >
        Filter +
      </ListItemButton>
      <Box>
        list 영역
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList