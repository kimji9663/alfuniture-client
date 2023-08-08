import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { SwiperWrap } from "./featuredBrand.styles"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import { thumb_brand01 } from "../../assets/images"

type ISwiperProps = { 
  loop?: boolean
  spaceBetween?: number 
  scrollbar?: { 
    draggable: boolean 
    el: null 
  }
  slidesPerView?: "auto" | number | undefined
}

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

  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ marginTop: 2 }}>SKIP</Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography sx={{ fontSize: "1.5rem" }}>
              회원님을 위한
              맞춤 브랜드를 소개해드려요.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ px: 2, display: 'flex', alignItems: 'center', height: 'calc(100vh - 202px)' }}>
          <SwiperWrap>
            <Swiper {...settings}>
              <SwiperSlide>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" className="title">
                    Aerobiey
                  </Typography>
                  <Typography component="p">
                    60년 경력의 노하우와 감각으로<br />
                    프랑스 가구를 대표하는 브랜드
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" className="title">
                    OneRain
                  </Typography>
                  <Typography component="p">
                    60년 경력의 노하우와 감각으로<br />
                    프랑스 가구를 대표하는 브랜드
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" className="title">
                    OneRain
                  </Typography>
                  <Typography component="p">
                    60년 경력의 노하우와 감각으로<br />
                    프랑스 가구를 대표하는 브랜드
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" className="title">
                    OneRain
                  </Typography>
                  <Typography component="p">
                    60년 경력의 노하우와 감각으로<br />
                    프랑스 가구를 대표하는 브랜드
                  </Typography>
                </Box>
              </SwiperSlide>
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