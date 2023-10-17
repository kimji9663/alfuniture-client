import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import ProductList from "./ProductList"
import { recentlyProduct01, recentlyProduct02, recentlyProduct03, recentlyProduct04, recentlyProduct05, recentlyProduct06, recentlyProduct07, recentlyProduct08, recentlyProduct09, sofa01, sofa02, sofa03, chair03 } from "../../assets/images/product"
import { styled } from "@mui/material/styles" 
import { OutlineButton } from "../../styles/buttons.styles"

export const testData = [
  {
    id: 0,
    imgsrc: recentlyProduct01,
    like: true,
    likeCount: 556,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-098',
    productName: '골드 무드등',
    price: 2300000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
  {
    id: 1,
    imgsrc: recentlyProduct02,
    like: false,
    likeCount: 556,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-198',
    productName: '옐로우 체어',
    price: 1230000,
    colors: ['#864000']
  },
  {
    id: 2,
    imgsrc: recentlyProduct03,
    like: false,
    likeCount: 556,
    shopName: 'OneRain',
    modelName: '[23s] OR-398',
    productName: '클래식 체어',
    price: 230000,
    colors: ['#CBC6C3']
  },
  {
    id: 3,
    imgsrc: recentlyProduct04,
    like: true,
    likeCount: 556,
    shopName: 'OneRain',
    modelName: '[23s] OR-198',
    productName: '화이트 데스크',
    price: 1000000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
  {
    id: 4,
    imgsrc: recentlyProduct05,
    like: false,
    likeCount: 556,
    shopName: 'OneRain',
    modelName: '[23s] OR-198',
    productName: '원목 인테리어',
    price: 2230000,
    colors: ['#CBC6C3']
  },
  {
    id: 5,
    imgsrc: recentlyProduct06,
    like: false,
    likeCount: 556,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-088',
    productName: '클래식 스탠딩 등',
    price: 370000,
    colors: ['#CBC6C3']
  },
  {
    id: 6,
    imgsrc: recentlyProduct07,
    like: false,
    likeCount: 556,
    shopName: 'Aerobiey',
    modelName: '[23s] AB-498',
    productName: '모던 화병',
    price: 300000,
    colors: ['#CBC6C3']
  },
  {
    id: 7,
    imgsrc: recentlyProduct08,
    like: false,
    likeCount: 556,
    shopName: 'ALFDN',
    modelName: '[Set] AD-012',
    productName: '알프든 테이블 도자기',
    price: 230000,
    colors: ['#A55555']
  },
  {
    id: 8,
    imgsrc: recentlyProduct09,
    like: true,
    likeCount: 556,
    shopName: 'OneRain',
    modelName: '[23s] OR-398',
    productName: '클래식 체어',
    price: 230000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
  {
    id: 9,
    imgsrc: sofa02,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[22s] HRD-210',
    productName: '1인 모던 쇼파 ',
    price: 6790000,
    colors: ['#864000']
  },
  {
    id: 10,
    imgsrc: sofa03,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-251',
    productName: '기획전 시티 쇼파',
    price: 2230000,
    colors: ['#CBC6C3']
  },
  {
    id: 11,
    imgsrc: sofa01,
    like: false,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-123',
    productName: '올드 가죽쇼파',
    price: 1230000,
    colors: ['#A55555']
  },
  {
    id: 12,
    imgsrc: chair03,
    like: true,
    likeCount: 556,
    shopName: 'Henredo',
    modelName: '[23s] HRD-0152',
    productName: '릴렉스 체어 (3colors)',
    price: 4834000,
    colors: ['#A55555', '#192552', '#494A4C']
  },
]


const RecentlyProduct = () => {
  const [count, setCount] = useState(testData.length)
  
  return (
    <Box sx={{minHeight:"100vh", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <Box>
        <CenterTitle title={["최근 본 상품"]}/>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mx:"20px", mb:2, mt:3}}>
          <Typography sx={{ fontSize: '12px', fontWeight: '700', color:"#666666" }}>최근 본 상품 {count}</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '700', color:"#666666" }}>편집</Typography>
        </Box>
        <Box>
          <ProductList data={testData} />
        </Box>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default RecentlyProduct