import React from "react"
import { Box } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import ListItem from "../../components/product/ListItem"
import { shopProductData } from "../../data"
import TitleTwoLine from "../../components/title/TitleTwoLine"

const FeaturedProduct = () => {
  const navigate = useNavigate()

  const goToNext = () => {
    navigate("/onboarding/featured_brand")
  }

  const title = ["회원님을 위한", "가구를 소개해드려요."];

  return (
    <>
      <TitleTwoLine title={title} />
      <Box sx={{ px: 2, height: "calc(100vh - 194px)", overflow: "auto" }}>
        {/* 가구리스트 */}
        {shopProductData.map((product: any, index: any) =>
          <ListItem
            key={index}
            id={product.id}
            imgsrc={product.imgsrc}
            shopName={product.shopName}
            modelName={product.modelName}
            productName={product.productName}
            price={product.price}
            colors={product.colors}
            likeCount={product.likeCount}
          />
        )}
      </Box>
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FeaturedProduct