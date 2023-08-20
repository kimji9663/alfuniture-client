import React from "react"
import PreviewItem from "../../components/product/Preview"
import ListItem from "../../components/product/ListItem"
import { Box, Button, ListItemButton } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { sofa01, table01 } from "../../assets/images/product"
import { GridBox } from "../../components/Box"

export const testData = [
  {
    imgsrc: sofa01,
    like: true,
    likeCount: 556,
    shopName: 'One Rain',
    modelName: '[3Color] OR-205',
    productName: '원레인 4인용 소파',
    price: 3230000,
    colors: ['#1B464D', '#192552', '#4414CD']
  },
  {
    imgsrc: table01,
    like: false,
    likeCount: 556,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '알프든 옐로우소파',
    price: 1430000,
    colors: ['#BC862E']
  },
]

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
        {/* 가구리스트 */}
        <GridBox
          sx={{
            gridTemplateColumns: '1fr 1fr'
          }}
          columnGap='7px'
          rowGap='24px'
        >
        {testData.map((product: any) => 
          <PreviewItem
            imgsrc={product.imgsrc}
            shopName={product.shopName}
            modelName={product.modelName}
            productName={product.productName}
            price={product.price}
            colors={product.colors}
          />
        )}
        </GridBox>
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductList