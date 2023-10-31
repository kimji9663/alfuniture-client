import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import { HalfArrowRigth } from "../../assets/images/"
import { designer, brandStory } from "../../assets/images/brand"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"
import { monthlyPostSwiperData, videoSwiperData } from "../../data"
import { ISwiperProps } from "../../components/ISwiperProps"
import MonthlyPostBox from "./MonthlyPostBox"
import { HeadlineLargeBoldTypography, TitleSmallWhiteTypography, HeadlineExtraLargeBoldGray9Typography, TitleSmallGray8Typography, LabelMediumGray9Typography, LabelMediumGray7Typography, TitleLargeBoldGray9Typography } from "../../components/Typography"

const brandCollectionSettings:ISwiperProps = {
  loop: false,
  scrollbar: { draggable: true, el: null },
  slidesPerView: 2.2,
}

const MonthlyPostBoxSettings:ISwiperProps = {
  loop: true,
  scrollbar: { draggable: true, el: null },
  slidesPerView: 1,
}

const PostMagazineTabPanel = () => {
  
  return (
    <>
      {/* 첫번째 섹션 */}
      <Box sx={{ mt: 10, px: 2, mb: "30px" }}>
        <HeadlineLargeBoldTypography sx={{ py: 1 }}>
          Monthly Post
        </HeadlineLargeBoldTypography>
        <Swiper {...MonthlyPostBoxSettings}>
          {monthlyPostSwiperData.map((data, index) => (
            <SwiperSlide key={index} >
              <MonthlyPostBox key={index} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      
      {/* 두번째 섹션 */}
      <Link to="/editor_pick/henredn">
        <Box sx={{borderTop: "0.5px solid #868686", borderBottom: "0.5px solid #868686", width: "100%", display:"flex"}}>
          <Box sx={{ borderRight: "0.5px solid #868686", flex:1, display: "flex", pt: "51px", px: 2, pb: 2, position: "relative" }}>
            {/* 이미지 */}
            <img src={designer} alt="" style={{ objectFit: "cover", width: "100%" }} />
            <Box sx={{ position: "absolute", zIndex: 1, backgroundColor: "#000000", bottom: "0", left:"16px", px:2, py:1 }}>
              <TitleSmallWhiteTypography sx={{textAlign: "center"}}>에디터 pick</TitleSmallWhiteTypography>
            </Box>
          </Box>
          <Box sx={{display: "flex", width:"135px", alignItems:"center", justifyContent: "center" }}>
            <Box sx={{transform: "rotate(270deg)", display: "flex"}}>
              <HeadlineExtraLargeBoldGray9Typography>Bradley</HeadlineExtraLargeBoldGray9Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{borderBottom: "0.5px solid #868686", width: "100%", display:"flex"}}>
          <Box sx={{ borderRight: "0.5px solid #868686", flex:1, display: "flex", px: 2, py: 2, position: "relative" }}>
            <TitleSmallGray8Typography>새로운 감각의 가구 디자이너</TitleSmallGray8Typography>
          </Box>
          <Box sx={{display: "flex", width:"135px" , alignItems:"center", justifyContent: "center"}}>
          </Box>
        </Box>
      </Link>
      {/* 세번째 섹션 */}
      <Box sx={{borderLeft: "0.5px solid #868686", width: "calc(100% - 32px)", display:"flex", ml:2, pt: 10, pr:2, flexDirection:"column"}}>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <HeadlineLargeBoldTypography sx={{ py:1 }}>Brand Story</HeadlineLargeBoldTypography>
          <Link to="/brand_story/aerobiey" style={{display:"flex", alignItems:"center"}}>
            <Button sx={{borderRadius:0, display: "flex", p:0, color:"#333333"}}>
              <LabelMediumGray9Typography sx={{ pr:1}}>
                ALL
              </LabelMediumGray9Typography>
              <HalfArrowRigth/>
            </Button>
          </Link>
        </Box>
        <Box sx={{display: "flex", width: "100%"}}>
          <img src={brandStory} alt="" style={{width: "100%", objectFit:"cover", maxHeight:"230px"}}/>
        </Box>
        <Box sx={{width: "100%", pl:2, pt:2}}>
          <TitleLargeBoldGray9Typography>봄이 시작되는 3월</TitleLargeBoldGray9Typography>
          <TitleLargeBoldGray9Typography sx={{ mb:1}}>화사함이 어울리는 가구</TitleLargeBoldGray9Typography>
          <LabelMediumGray7Typography sx={{lineHeight: '20px'}}>일상속에서 자연스러운 아름다움을 느껴보세요.</LabelMediumGray7Typography>
        </Box>
        <Box sx={{width: "100%", display:"flex"}}>
          <Box sx={{width: "49px", height: "29px", borderBottom: "1px solid #3D3D3D"}}></Box>
          <Box sx={{flex:1, borderBottom: "0.5px solid #E2E2E2"}}></Box>
        </Box>
      </Box>

      {/* 네번째 섹션 */}
      <Box sx={{mt:"60px", pl:2, mb:2, overflow:"hidden"}}>
        <TitleLargeBoldGray9Typography>Brand Collection Video</TitleLargeBoldGray9Typography>
        <Swiper {...brandCollectionSettings}  style={{maxWidth: "420px",width: "100vw"}}>
          {videoSwiperData.map((item, index) => (
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
