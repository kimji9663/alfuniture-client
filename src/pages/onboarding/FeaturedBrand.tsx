import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { SwiperWrap } from "./featuredBrand.styles"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import TitleTwoLine2 from "../../components/title/TitleTwoLine2"
import { ISwiperProps } from "../../components/ISwiperProps"
import { featuredBrandData } from "../../data"

const FeaturedBrand = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/featured_funiture")
  }

  const settings:ISwiperProps = {
    loop: true,
    scrollbar: { draggable: true, el: null },
    slidesPerView: "auto",
  }

  const getImgRatio = (src:string) => {
    const img = new Image()
    img.src = src
    const result = img.width/img.height < 1 ? "portrait" : "landscape"
    return result
  }

  const title = ["회원님을 위한", "맞춤 브랜드를 소개해드려요."];

  return (
    <>
      <Box sx={{ height: "100%", overflow: "auto" }}>
        <TitleTwoLine2 title={title}/>

        <Box sx={{ px: 2, display: "flex", alignItems: "center", height: "calc(100vh - 202px)" }}>
          <SwiperWrap>
            <Swiper {...settings}>
              {featuredBrandData.map((el) => (
                <SwiperSlide key={el.id}>
                  <Box className="slide_item">
                    <img src={el.img} alt={el.name} className={getImgRatio(el.img)} />
                    <Box className="text">
                      <Typography component="p" className="title">
                        {el.name}
                      </Typography>
                      <Typography component="p" className="brif">
                        {el.description}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrap>
        </Box>
      </Box>
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FeaturedBrand