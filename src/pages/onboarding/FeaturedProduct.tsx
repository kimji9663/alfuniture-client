import React from "react"
import { Box, Typography } from "@mui/material"
import { NaviWrap } from "../../components/navigationbar.styles"
import { PrimaryButton } from "../../styles/buttons.styles"
import { useNavigate } from "react-router-dom"
import ListItem from "../../components/product/ListItem"
import { testData } from "../shop/ProductList"

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

        <Box sx={{ px: 2, alignItems: 'center', height: 'calc(100vh - 202px)' }}>
          {/* 가구리스트 */}
          {testData.map((product: any) =>
            <ListItem
              imgsrc={product.imgsrc}
              shopName={product.shopName}
              modelName={product.modelName}
              productName={product.productName}
              price={product.price}
              colors={product.colors}
            />
          )}
        </Box>
      </Box>
      <NaviWrap className="single">
        <PrimaryButton onClick={goToNext}>다음으로</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default FeaturedProduct