import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import CenterTitle from "../../components/title/CenterTitle"
import { recentlyProductData } from "../../data"
import ProductList from "./ProductList"
import { C666Fs12BoldTypography } from "../../components/Typography"

const RecentlyProduct = () => {
  const [count, setCount] = useState(recentlyProductData.length)
  
  return (
    <Box sx={{minHeight:"100vh", position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <Box>
        <CenterTitle title={["최근 본 상품"]}/>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", mx:"20px", mb:2, mt:3, mr:1}}>
          <C666Fs12BoldTypography>최근 본 상품 {count}</C666Fs12BoldTypography>
          <Button sx={{borderRadius:0, color:"#333", minWidth:0, px:1, py:0}}>
            <C666Fs12BoldTypography>편집</C666Fs12BoldTypography>
          </Button>
        </Box>
        <Box>
          <ProductList data={recentlyProductData} />
        </Box>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default RecentlyProduct