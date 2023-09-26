import React, { useState } from "react"
import { Divider, Button, Typography, Box } from "@mui/material"
import { DetailView, CoverBox } from "./detailViewPanel.styles"
import { PrimaryButton, PrimaryLightButton } from "../../styles/buttons.styles"
import { ArrowBottom } from "../../assets/images"

const DetailViewPanel = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleViewHeight = () => {
    setViewMore(!viewMore)
  }

  return (
    <Box sx={{mx:2, mt:7, mb: "22px"}}>
      <DetailView sx={{ height: viewMore ? 'auto' : '370px', pb: viewMore ? '58px' : 0 }}>
        <Typography sx={{color: "#666666", fontSize: 14, letterSpacing: "-0.25px", lineHeight: "24px"}}>
          James Lee는 아트, 디자인의 경계에서 미적 가치를 재해석하며 일상과 흔한 것들에 대한 이면을 찾는 작가입니다.<br/>
          <br/>
          James Lee는 2001년에 설립되었으며, 가구와 회화를 전공 했습니다. 작가 특유의 여성만이 고집 할 수 있는 감성으로 고객들에게 만족을 줄 수 있는 제품을 만드는것이 James Lee의 목표입니다.<br/>
          <br/>
          일상생활속의 가구가 그 안에서 가장 빛나일 원합니다.<br/>
          해외 가구 이지만 작가의 가치관을 느낄 수 있는 가구제품을 고객들께 추천드립니다, James Lee와 함께하는 당신의 생활이 긍정적이며 행복 하길 바랍니다.<br/>
          <br/>
          James Lee는 아트, 디자인의 경계에서 미적 가치를 재해석하며 일상과 흔한 것들에 대한 이면을 찾는 작가입니다.<br/>
          <br/>
          James Lee는 2001년에 설립되었으며, 가구와 회화를 전공 했습니다. 작가 특유의 여성만이 고집 할 수 있는 감성으로 고객들에게 만족을 줄 수 있는 제품을 만드는것이 James Lee의 목표입니다.<br/>
          <br/>
          일상생활속의 가구가 그 안에서 가장 빛나일 원합니다.<br/>
          해외 가구 이지만 작가의 가치관을 느낄 수 있는 가구제품을 고객들께 추천드립니다, James Lee와 함께하는 당신의 생활이 긍정적이며 행복 하길 바랍니다.<br/>
          <br/>
        </Typography>
        <CoverBox>
          <PrimaryButton 
            sx={{borderRadius: 0, height: "60px", fontSize: "1rem", fontWeight: "500"}}
            fullWidth 
            endIcon={
              viewMore ? <Box sx={{ transform: 'rotate(180deg)' }}><ArrowBottom/></Box> : <ArrowBottom />
            }
            onClick={handleViewHeight}
          >
            {viewMore ? '접기' : '더보기'}
          </PrimaryButton>
        </CoverBox>
      </DetailView>
    </Box>
  )
}

export default DetailViewPanel