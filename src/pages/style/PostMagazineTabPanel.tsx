import React, { useState } from "react"
import { Box, FormControl, Typography, Checkbox, Button } from "@mui/material"
import HorizontalRanking  from "../../components/product/HorizontalRanking"
import { rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, onerain01, onerain02 } from "../../assets/images/product"
import { HalfArrowRigth } from "../../assets/images/"
import { aerobiey01, designer, brandStory } from "../../assets/images/brand"
import { brandCollectionVideo01, brandCollectionVideo02, brandCollectionVideo03 } from "../../assets/images/banner"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"

export const testData = [
  {
    id: 1,
    imgsrc: brandCollectionVideo01,
  },
  {
    id: 2,
    imgsrc: brandCollectionVideo02,
  },
  {
    id: 3,
    imgsrc: brandCollectionVideo01,
  },
  {
    id: 4,
    imgsrc: brandCollectionVideo02,
  },
  {
    id: 5,
    imgsrc: brandCollectionVideo01,
  },
  
]

type ISwiperProps = { 
  loop?: boolean
  spaceBetween?: number 
  scrollbar?: { 
    draggable: boolean 
    el: null 
  }
  slidesPerView?: "auto" | number | undefined
  onSlideChange?: (swiper: any) => void
}
const brandCollectionSettings:ISwiperProps = {
  loop: false,
  scrollbar: { draggable: true, el: null },
  slidesPerView: 2.2,
}

const PostMagazineTabPanel = () => {
  
  return (
    <>
      {/* 첫번째 섹션 */}
      <Box sx={{mt:10, px:2, mb:"30px"}}>
        <Typography sx={{ fontSize: 36, fontWeight: "700", color:"#000000", py:1 }}>Brand Story</Typography>
        <img src={aerobiey01} alt="" style={{width:"100%", objectFit: "cover"}}/>
        <Box sx={{my:3}}>
          <Typography sx={{ fontSize: 20, fontWeight: "700", color:"#333333", lineHeight:"24px", letterSpacing:"-0.25px", mb:1 }}>오롯한 행복으로 채우는집, Wagner</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", color:"#999999", lineHeight:"20px", letterSpacing:"-0.25px" }}>일상속에서 자연스러운 아름다움을 느껴보세요.</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", color:"#999999", lineHeight:"20px", letterSpacing:"-0.25px" }}>Aerobiey - 23s</Typography>
        </Box>
        <Button sx={{color:"#333333", fontSize:"14px", border: "1px solid #999999", borderRadius:0, px:2}}>
          <Typography sx={{ fontSize: 14, fontWeight: "400", color:"#333333"}}>보러가기 &gt;</Typography>
        </Button>
      </Box>

      {/* 두번째 섹션 */}
      <Box sx={{borderTop: "0.5px solid #868686", borderBottom: "0.5px solid #868686", width: "100%", display:"flex"}}>
        <Box sx={{ borderRight: "0.5px solid #868686", flex:1, display: "flex", pt: "51px", px: 2, pb: 2, position: "relative" }}>
          {/* 이미지 */}
          <img src={designer} alt="" style={{ objectFit: "cover", width: "100%" }} />
          <Box sx={{ position: "absolute", zIndex: 1, backgroundColor: "#000000", bottom: "0", left:"16px", px:2, py:1 }}>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#FFFFFF", textAlign: "center" }}>에디터 pick</Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex", width:"135px", alignItems:"center", justifyContent: "center" }}>
          <Box sx={{transform: "rotate(270deg)", display: "flex"}}>
            <Typography sx={{ fontSize: 50, fontWeight: "700", color:"#333333"}}>Bradley</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{borderBottom: "0.5px solid #868686", width: "100%", display:"flex"}}>
        <Box sx={{ borderRight: "0.5px solid #868686", flex:1, display: "flex", px: 2, py: 2, position: "relative" }}>
          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#666666" }}>새로운 감각의 가구 디자이너</Typography>
        </Box>
        <Box sx={{display: "flex", width:"135px" , alignItems:"center", justifyContent: "center"}}>
        </Box>
      </Box>
      <Box sx={{borderLeft: "0.5px solid #868686", width: "calc(100% - 32px)", display:"flex", ml:2, pt: 10, pr:2, flexDirection:"column"}}>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Typography sx={{ fontSize: 36, fontWeight: "700", color:"#000000", py:1 }}>Brand Story</Typography>
          <Button sx={{borderRadius:0, display: "flex", p:0}}>
            <Typography sx={{ fontSize: 12, fontWeight: "400", color:"#333333", pr:1}}>
              ALL
            </Typography>
            <HalfArrowRigth/>
          </Button>
        </Box>
        <Box sx={{display: "flex", width: "100%"}}>
          <img src={brandStory} alt="" style={{width: "100%", objectFit:"cover", maxHeight:"230px"}}/>
        </Box>
        <Box sx={{width: "100%", pl:2, pt:2}}>
          <Typography sx={{ fontSize: 20, fontWeight: "700", color:"#333333", lineHeight:"29px"}}>봄이 시작되는 3월</Typography>
          <Typography sx={{ fontSize: 20, fontWeight: "700", color:"#333333", lineHeight:"29px", mb:1}}>화사함이 어울리는 가구</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", color:"#999999", lineHeight:"20px", letterSpacing:"-0.25px" }}>일상속에서 자연스러운 아름다움을 느껴보세요.</Typography>
        </Box>
        <Box sx={{width: "100%", display:"flex"}}>
          <Box sx={{width: "49px", height: "29px", borderBottom: "1px solid #3D3D3D"}}></Box>
          <Box sx={{flex:1, borderBottom: "0.5px solid #E2E2E2"}}></Box>
        </Box>
      </Box>

      {/* 세번째 섹션 */}
      <Box sx={{mt:"60px", pl:2, mb:2, overflow:"hidden"}}>
        <Typography sx={{ fontSize: 22, fontWeight: "600", color:"#333333", lineHeight:"28px"}}>Brand Collection Video</Typography>
        <Swiper {...brandCollectionSettings}  style={{maxWidth: "420px",width: "100vw"}}>
            {testData.map((item, index) => (
              <SwiperSlide key={index} >
                <Box sx={{ mt: 2, width: "calc(100% - 16px)", height: "100%", objectFit:"cover", display:"flex"}}>
                  <img src={item.imgsrc} alt="" style={{ width: "100%" }} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
      </Box>
    </>
  )
}

export default PostMagazineTabPanel
