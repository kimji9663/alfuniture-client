import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import HorizontalRanking  from "../../components/product/HorizontalRanking"
import { rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, onerain01, onerain02 } from "../../assets/images/product"
import { onerain, unknown } from "../../assets/images/brand"
import { Link } from "react-router-dom";
import ListItemType2 from "../../components/product/ListItemType2"

export const rankingData = [
  {
    id: 1,
    imgsrc: rankingItem01,
  },
  {
    id: 2,
    imgsrc: rankingItem02,
  },
  {
    id: 3,
    imgsrc: rankingItem03,
  },
  {
    id: 4,
    imgsrc: rankingItem04,
  },
  {
    id: 5,
    imgsrc: rankingItem05,
  }, 
]

export const brandItemData = [
  {
    id: 0,
    imgsrc: onerain01,
    shopName: 'ONERAIN',
    modelName: '[22Series] OR-210',
    productName: '원레인 그랑프리 체어',
  },
  {
    id: 1,
    imgsrc: onerain02,
    shopName: 'ONERAIN',
    modelName: '[23Series] OR-110',
    productName: '원레인 우든 테이블',
  },
]

const RankingTab = () => {
  
  return (
    <>
      <Box sx={{mt:5}}>
        <Link to="/style/ranking"style={{ textDecoration: 'none', color: 'inherit' }}>
          <HorizontalRanking data={rankingData} title="TOP5 가구랭킹" subTitle="MZ 세대를 위한 가구" discription= "심플한 디자인을 선호하는 MZ세대를 위한 가구"/>
        </Link>
        <Box sx={{mt:"60px", ml:2, mb:2}}>
          <Typography sx={{ fontSize: 22, fontWeight: "700", color:"#333333", letterSpacing: "-1px" }}>실시간 인기 브랜드</Typography>
          <Box sx={{ my: 2 , overflow: "hidden", display: "flex", alignItems:"flex-end"}}>
            <Link to="/style/brand">
              <Box sx={{ width: 'calc(100vw - 48px)', height: 'calc(94vw - 48px)', position: "relative", display: "flex", alignItems: "center", justifyContent: "center", mr: 2}}>
                <img src={onerain} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                <Typography sx={{ fontSize: 40, fontWeight: "600", color: "#FAFAFA", position: "absolute", zIndex: 100 }}>
                  ONERAIN
                </Typography>
              </Box>
            </Link>
            <Box sx={{display:"flex"}}>
              <img src={unknown} alt="" />
            </Box>
          </Box>
          <Box sx={{ width: 'calc(100vw - 48px)'}}>
             {/* 가구리스트 */}
              {brandItemData.map((product: any, index) =>
                <ListItemType2
                  key={index}
                  id={product.id}
                  imgsrc={product.imgsrc}
                  shopName={product.shopName}
                  modelName={product.modelName}
                  productName={product.productName}
                />
              )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default RankingTab
