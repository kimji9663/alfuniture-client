import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import { alfdn05 } from "../../assets/images/brand"
import NavigationBar from "../../components/NavigationBar"
import List from "../like/Like/List"
import LeftTitle from "../../components/title/LeftTitle"
import { styleBrandProductData } from "../../data"
import { ScrollToTop } from '../../App'

const Brand = () => {
  ScrollToTop();
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
        <List data={styleBrandProductData}/>
      </Box>
      <Box sx={{position:"sticky", bottom:0, width:"100%"}}>
        <NavigationBar />
      </Box>
    </Box>
  )
}

export default Brand;
