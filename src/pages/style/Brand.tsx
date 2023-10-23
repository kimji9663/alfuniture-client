import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import { alfdn01, alfdn02, alfdn03, alfdn04, alfdn05 } from "../../assets/images/brand"
import NavigationBar from "../../components/NavigationBar"
import List from "../like/Like/List"
import LeftTitle from "../../components/title/LeftTitle"

export const testData = [
  {
    id: 0,
    imgsrc: alfdn01,
    like: true,
    likeCount: 556,
    shopName: 'ALFDN',
    modelName: '[SET] AD-012',
    productName: '알프든 테이블 도자기 세트',
    price: 230000,
    colors: ['#CBC6C3']
  },
  {
    id: 1,
    imgsrc: alfdn02,
    like: false,
    likeCount: 556,
    shopName: 'ALFDN',
    modelName: '[23Series] AD-316',
    productName: '알프든 체어',
    price: 1230000,
    colors: ['#282629', '#CBC6C3']
  },
  {
    id: 2,
    imgsrc: alfdn03,
    like: false,
    likeCount: 556,
    shopName: 'ALFDN',
    modelName: '[SET] AD-322',
    productName: 'Wooden Table, Chair set',
    price: 830000,
    colors: ['#3F2916', '#D67531']
  },
  {
    id: 3,
    imgsrc: alfdn04,
    like: false,
    likeCount: 556,
    shopName: 'ALFDN',
    modelName: '[23Series] AD-405',
    productName: 'Basic sofa',
    price: 2430000,
    colors: ['#192552', '#A6A8A7']
  },
]

const Brand = () => {
  
  return (
    <Box sx={{minHeight:"100vh", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <Box>
        <LeftTitle title={["브랜드"]} />
        <Box sx={{ position: "relative", overflow: 'hidden' }}>
          <Box sx={{ position: "absolute", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", top: "55px" }}>
            <Typography sx={{ fontSize: 20, fontWeight: "700", color: "#FFFFFF" }}>ALFDN</Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <img src={alfdn05} alt="" style={{ objectFit: "cover", width: "100%" }} />
          </Box>
        </Box>
        <List data={testData}/>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default Brand;
