import React, { useState } from "react"
import { jamesLee01, jamesLee02, jamesLee03, jamesLee04 } from "../../assets/images/product"
import { jamesLeeText } from "../../assets/images/brand"
import List from "../like/Like/List"
import BrandButton from "../../components/BrandButton"
import { Box } from "@mui/material"

const brandData = {
  name: "James Lee",
  description: "제임스리",
  image: jamesLeeText, 
  isLiked: true, 
};

export const testData = [
  {
    id: 0,
    imgsrc: jamesLee01,
    like: true,
    likeCount: 556,
    shopName: 'James Lee',
    modelName: '[23Series]JL-302',
    productName: 'Basic Wooden Table',
    price: 4834000,
    colors: ['#512C2C', '#A55555']
  },
  {
    id: 1,
    imgsrc: jamesLee02,
    like: false,
    likeCount: 556,
    shopName: 'James Lee',
    modelName: '[23Series]JL-303',
    productName: 'Circular Table',
    price: 6790000,
    colors: ['#A55555']
  },
  {
    id: 2,
    imgsrc: jamesLee03,
    like: false,
    likeCount: 556,
    shopName: 'James Lee',
    modelName: '[23Series]JL-354',
    productName: 'Basic Cabinet',
    price: 510000,
    colors: ['#DED3D1', '#054A5A', '#67765B']
  },
  {
    id: 3,
    imgsrc: jamesLee04,
    like: false,
    likeCount: 556,
    shopName: 'James Lee',
    modelName: '[23Series]JL-201',
    productName: 'Basic Lighting',
    price: 230000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
]

const BrandShopPanel = () => {

  return (
    <>
      <Box sx={{mt: 7, mb: 6, mx:2 }}>
        <BrandButton brandData={ brandData }/>
      </Box>
      <List data={testData}/>
    </>
      
    
  )
}

export default BrandShopPanel