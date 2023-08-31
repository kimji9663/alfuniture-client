import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import TitleTwoLine1 from '../../components/title/titleTwoLine1'

const StyleSelection = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/featured_product")
  }

  const title = ['좋아하는 스타일을', '선택해주세요.'];

    return (
      <>
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          <TitleTwoLine1 title={title}/>
          <Box sx={{ px: 2, display: 'flex', alignItems: 'center', height: 'calc(100vh - 202px)' }}>
            스타일리스트
          </Box>
        </Box>
        <NaviWrap className="single">
          <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
        </NaviWrap>
      </>
    )
  }
  export default StyleSelection