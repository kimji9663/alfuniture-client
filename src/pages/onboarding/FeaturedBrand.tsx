import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap, PrimaryButton } from "../../components/navigationbar.styles"
import TitleTwoLine1 from "../../components/titleTwoLine1"
import { BrandCard } from "./funitureBrand.styles"
import { useNavigate } from "react-router-dom"
import { thumb_brand01 } from "../../assets/images"

const FeaturedBrand = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/featured_funiture")
  }

    return (
      <>
        <Box sx={{ px: 2, height: '100%', overflow: 'auto' }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ marginTop: 2 }}>SKIP</Box>
            <Box sx={{ marginTop: 2 }}>
              <Typography sx={{ fontSize: "1.5rem" }}>
                회원님을 위한
                맞춤 브랜드를 소개해드려요.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 202px)' }}>
            <Box sx={{ display: 'flex', alignItems: 'end', height: '303px', m: '-16px 0 0 -16px' }}>
              <BrandCard sx={{ mt: 2, ml: 2 }}>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" sx={{ fontSize: '1.25rem' }}>
                    Aerobiey
                  </Typography>
                  <Typography component="p">
                    60년 경력의 노하우와 감각으로<br />
                    프랑스 가구를 대표하는 브랜드
                  </Typography>
                </Box>
              </BrandCard>
              <BrandCard sx={{ mt: 2, ml: 2 }}>
                <img src={thumb_brand01} alt="Aerobiey" />
                <Box className="text">
                  <Typography component="p" sx={{ fontSize: '1.25rem' }}>
                    OneRain
                  </Typography>
                </Box>
              </BrandCard>
            </Box>
          </Box>
        </Box>
        <NaviWrap className="single">
          <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
        </NaviWrap>
      </>
    )
  }
  export default FeaturedBrand