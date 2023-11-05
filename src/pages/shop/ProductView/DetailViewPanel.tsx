import React, { useState } from "react"
import { Divider, Button } from "@mui/material"
import { DetailView, MoreButton, CoverBox, MoreInfomation } from "./detailViewPanel.styles"
import { HalfArrow } from "../../../assets/images"
import img_product_view from "../../../assets/images/img_product_view.png"

const DetailViewPanel = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleViewHeight = () => {
    setViewMore(!viewMore)
  }

  return (
    <>
      <DetailView sx={{ height: viewMore ? "auto" : "502px", pb: viewMore ? "58px" : 0 }}>
        <img src={img_product_view} alt="" />
        <CoverBox>
          <MoreButton 
            variant="outlined" 
            fullWidth
            onClick={handleViewHeight}
          >
            상품설명 {viewMore ? "접기" : "더보기"}
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