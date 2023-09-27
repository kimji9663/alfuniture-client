import React, { useState } from "react"
import { Divider, Button, Typography, Box } from "@mui/material"
import { DetailView, CoverBox } from "./detailViewPanel.styles"
import { PrimaryButton, PrimaryLightButton } from "../../styles/buttons.styles"
import { ArrowBottom } from "../../assets/images"
import List from "../like/List"
import { jamesLee01, jamesLee02, jamesLee03, jamesLee04 } from "../../assets/images/product"

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
    
      <List data={testData}/>
    
  )
}

export default BrandShopPanel