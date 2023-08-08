import React from "react"
import { Box, Button, Divider, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { sofa01 } from "../../assets/images/product"
import { ProductMainInfo } from "./productView.styles"

const ProductView = () => {
  
  return (
    <>
      <Box>
        <Button>장바구니</Button>
        <Button>알림</Button>
      </Box>{/* 타이틀 임시 */}
      <Box sx={{ height: 'calc(100% - 57px)', overflow: 'auto' }}>
        <Box sx={{ '& > img': { width: '100%' } }}>
          <img src={sofa01} alt="소파" />
        </Box>
        <ProductMainInfo sx={{ p: 2 }}>
          <Box className="product_brand">
            <Typography className="brand_name">ALFDN</Typography>
            <Box>like</Box>
          </Box>
          <Box className="product_title">
            <Typography>카멜프튼</Typography>
            <Box className="color_info">
              <span className="text">3 COLOR</span>
              <span></span>
              <span></span>
              <span></span>
            </Box>
          </Box>
          <Box className="product_price">
            <span className="price">1,594,500원</span>
            <span className="fee">배송비 및 관부가세 포함</span>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box className="product_delivery">
            <Box>
              <Box component="p" sx={{ color: '#333', fontSize: '.875rem' }}>
                배송정보
              </Box>
              <Box component="p">
                <Typography component="span" sx={{ color: '#666', fontSize: '.75rem' }}>
                  빠른배송
                </Typography>
                <Typography component="span" sx={{ color: '#FD6868', fontSize: '.75rem' }}>
                  불가능
                </Typography>
              </Box>
            </Box>
            <Box className="button">
              <Button>주문제작</Button>
            </Box>
          </Box>
        </ProductMainInfo>
        view 영역
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductView