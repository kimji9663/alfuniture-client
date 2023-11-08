import { Swiper, SwiperSlide } from "swiper/react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { SwiperWrap } from "./featuredBrand.styles"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import TitleTwoLine from "../../components/title/TitleTwoLine"
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
    slidesPerView: 1.6,
    spaceBetween: 0,
  }

  const title = ["회원님을 위한", "맞춤 브랜드를 소개해드려요."];

  return (
    <>
      <TitleTwoLine title={title} />
      <Box sx={{ px: 2, display: "flex", alignItems: "center", height: "calc(100vh - 194px)", overflow: "auto" }}>
          <SwiperWrap>
            <Swiper {...settings}>
              {featuredBrandData.map((el, index) => (
                <SwiperSlide key={el.id}>
                  <Box className="slide_item">
                    <img src={el.img} alt={el.name} />
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
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FeaturedBrand