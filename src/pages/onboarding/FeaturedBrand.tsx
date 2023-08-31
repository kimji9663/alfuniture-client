import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { SwiperWrap } from "./featuredBrand.styles"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import { thumb_brand01 } from "../../assets/images"
import { chair01, light01 } from "../../assets/images/product"
import TitleTwoLine2 from '../../components/title/TitleTwoLine2'

type ISwiperProps = { 
  loop?: boolean
  spaceBetween?: number 
  scrollbar?: { 
    draggable: boolean 
    el: null 
  }
  slidesPerView?: "auto" | number | undefined
}

const itemList = [
  {
    id: 1,
    img: light01,
    name: 'Aerobiey',
    description: '60년 경력의 노하우와 감각으로 프랑스 가구를 대표하는 브랜드'
  },
  {
    id: 2,
    img: chair01,
    name: 'OneRain',
    description: '미니멀과 디테일의 균형에 집중하는 영국 프리미엄 가구 브랜드'
  },
  {
    id: 3,
    img: thumb_brand01,
    name: 'James Lee',
    description: '디자인과 아트의 경계에서 미적 가치를 재해석 하며 일상에 녹아드는 프리미엄 가구 브랜드'
  }
]

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
    const result = img.width/img.height < 1 ? 'portrait' : 'landscape'
    return result
  }

  const title = ['회원님을 위한', '맞춤 브랜드를 소개해드려요.'];

  return (
    <>
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <TitleTwoLine2 title={title}/>

        <Box sx={{ px: 2, display: 'flex', alignItems: 'center', height: 'calc(100vh - 202px)' }}>
          <SwiperWrap>
            <Swiper {...settings}>
              {itemList.map((el) => (
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