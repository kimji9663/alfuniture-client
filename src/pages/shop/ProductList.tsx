import React from "react"
import PreviewItem from "../../components/product/Preview"
import ListItem from "../../components/product/ListItem"
import { Box, Button, ListItemButton } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { chair02, chair03, sofa01, table01 } from "../../assets/images/product"
import { GridBox } from "../../components/Box"
import LeftTitle from '../../components/title/LeftTitle'

export const testData = [
  {
    id: 0,
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
    id: 1,
    imgsrc: table01,
    like: false,
    likeCount: 556,
    shopName: 'ALFDEN',
    modelName: '[23Series] AD-388',
    productName: '알프든 옐로우소파',
    price: 1430000,
    colors: ['#BC862E']
  },
  {
    id: 2,
    imgsrc: chair03,
    like: false,
    likeCount: 556,
    shopName: 'James Lee',
    modelName: '[23Series] JL-309',
    productName: '제임스리 아트체어',
    price: 230000,
    colors: ['#A55555', '#494A4C', '#192552']
  },
  {
    id: 3,
    imgsrc: chair02,
    like: false,
    likeCount: 556,
    shopName: 'HC ART',
    modelName: '[21Series] HCA-309',
    productName: 'HC 아트 우든체어',
    price: 130000,
    colors: ['#A55555', '#494A4C', '#192552']
  },
]

const ProductList = () => {
  const title = ["가구"]  
  return (
    <>
      <LeftTitle title ={title}/>
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
      <Box padding='1.5rem 1rem'>
        <GridBox
          sx={{
            gridTemplateColumns: '1fr 1fr'
          }}
          columnGap='0.5rem'
          rowGap='1.5rem'
        >
        {testData.map((product: any) => 
          <PreviewItem
            key={`product-${product.id}`}
            id={product.id}
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