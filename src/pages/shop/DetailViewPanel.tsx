import React, { useState } from "react"
import { Divider, Button } from "@mui/material"
import { DetailView, MoreButton, CoverBox, MoreInfomation } from "./productView.styles"
import { HalfArrow } from "../../assets/images"

const DetailViewPanel = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleViewHeight = () => {
    setViewMore(!viewMore)
  }

  return (
    <>
      <DetailView sx={{ height: viewMore ? 'auto' : '502px', pb: viewMore ? '58px' : 0 }}>
        <img src="https://cdn.imweb.me/upload/S202012142df41e7544ce6/8f30f47c5ce2d.jpg" alt="" />
        <CoverBox>
          <MoreButton 
            variant="outlined" 
            fullWidth
            onClick={handleViewHeight}
          >
            상품설명 {viewMore ? '접기' : '더보기'}
          </MoreButton>
        </CoverBox>
      </DetailView>
      <MoreInfomation>
        <Divider />
        <Button fullWidth>
          상품정보
          <HalfArrow />
        </Button>
        <Button fullWidth>
          취급시 주의사항
          <HalfArrow />
        </Button>
        <Button fullWidth>
          교환, 환불안내
          <HalfArrow />
        </Button>
        <Button fullWidth>
          AS안내
          <HalfArrow />
        </Button>
      </MoreInfomation>
    </>
  )
}

export default DetailViewPanel