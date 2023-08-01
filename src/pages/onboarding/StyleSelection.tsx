import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap, PrimaryButton } from "../../components/navigationbar.styles"
import TitleTwoLine1 from "../../components/titleTwoLine1"
import { RectCheckbox } from "./funitureSelection.styles"
import { useNavigate } from "react-router-dom"

const StyleSelection = () => {
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
                좋아하는 스타일을<br />
                선택해주세요.
              </Typography>
            </Box>
          </Box>
        </Box>
        <NaviWrap className="single">
          <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
        </NaviWrap>
      </>
    )
  }
  export default StyleSelection