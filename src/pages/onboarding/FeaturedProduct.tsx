import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"

const FeaturedProduct = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/featured_brand")
  }

    return (
      <>
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ marginTop: 2 }}>SKIP</Box>
            <Box sx={{ marginTop: 2 }}>
              <Typography sx={{ fontSize: "1.5rem" }}>
                회원님을 위한
                가구를 소개해드려요.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ px: 2, display: 'flex', alignItems: 'center', height: 'calc(100vh - 202px)' }}>
            가구리스트
          </Box>
        </Box>
        <NaviWrap className="single">
          <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
        </NaviWrap>
      </>
    )
  }
  export default FeaturedProduct