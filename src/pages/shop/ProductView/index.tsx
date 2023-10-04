import { Global } from "@emotion/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Box, IconButton, Divider, Typography } from "@mui/material"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../../styles/buttons.styles"
import { ProductMainInfo, OrderButton, ProductViewTabs } from "./index.styles"
import { ArrowRight, IconHeartSmall, IconLikeOff, IconLikeOn } from "../../../assets/images"
import { sofa01 } from "../../../assets/images/product"
import { alfdn } from "../../../assets/images/brand"
import NoTitle from '../../../components/title/NoTitle'
import DetailViewPanel from "./DetailViewPanel"
import ReviewPanel from "./ReviewPanel"
import PersonalQnaPanel from "./PersonalQnaPanel"
import OrderSelector from "./OrderSelector"
import BrandButton from "../../../components/BrandButton"

const brandData = {
  name: "ALFDN",
  description: "알프든",
  image: alfdn, 
  isLiked: true, 
};


const globalStyle = {
  '.MuiModal-root': {
    maxWidth: '420px',
    margin: 'auto',

    '.MuiBackdrop-root': {
      maxWidth: '420px',
      margin: 'auto',
    },
    '.MuiDrawer-paper': {
      maxWidth: '420px',
      margin: 'auto',
    },
  },
  '#basic-menu.MuiModal-root': {
    maxWidth: 'none',
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const viewProps = (index: number) => {
  return {
    id: `view-tab-${index}`,
    'aria-controls': `view-tabpanel-${index}`,
  }
}

const ViewTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`view-tabpanel-${index}`}
      aria-labelledby={`view-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

const ProductView = () => {
  const navigate = useNavigate()
  const [tabValue, setTabValue] = useState(0)
  const [isLike, setIsLike] = useState(false)
  const [optionOpen, setOptionOpen] = useState(false)

  const goToCart = (event: React.MouseEvent) => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후
      // 장바구니로 이동하시겠습니까? 모달 띄움
      // 이동하기 클릭 시 장바구니로 이동
      navigate("/") // 장바구니 링크로
    }
    setOptionOpen(true)
  }

  const goToOrder = () => {
    if (optionOpen) {
      // 필수 옵션이 모두 선택 되었는지 체크 후 주문하기 이동
      navigate("/order") // 주문하기 링크로
    }
    setOptionOpen(true)
  }

  const handleClickLike = (event: React.MouseEvent) => {
    setIsLike(!isLike)
  }

  const handleViewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const toggleDrawer = (val:boolean) => {
    setOptionOpen(val)
    //console.log(val)
  }

  return (
    <>
      <Global styles={globalStyle} />
      <NoTitle/>
      <Box sx={{ height: 'calc(100% - 57px)', overflow: 'auto' }}>
        <Box sx={{ '& > img': { width: '100%' } }}>
          <img src={sofa01} alt="소파" />
        </Box>
        <Box sx={{ p: 2 }}>
          <ProductMainInfo>
            <Box className="product_brand">
              <Typography className="brand_name">ALFDN</Typography>
              <IconButton
                onClick={handleClickLike}
              >
                {isLike ? <IconLikeOn /> : <IconLikeOff />}
              </IconButton>
            </Box>
            <Box className="product_title">
              <Typography>카멜프튼</Typography>
              <Box className="color_info">
                <Box component="span" className="text">3 COLOR</Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#494A4C' }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#192552' }}></Box>
                <Box component="span" className="color" sx={{ backgroundColor: '#D67531' }}></Box>
              </Box>
            </Box>
            <Box className="product_price">
              <span className="price">1,594,500원</span>
              <span className="fee">배송비 및 관부가세 포함</span>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box className="product_delivery">
              <Box>
                <Box component="p" className="delivery_title">
                  배송정보
                </Box>
                <Box component="p" className="delivery_info">
                  <Box component="span" sx={{ color: '#666' }}>
                    빠른배송
                  </Box>
                  <Box component="span" sx={{ ml: 1, color: '#FD6868' }}>
                    불가능
                  </Box>
                </Box>
              </Box>
              <Box className="button">
                <OrderButton fullWidth>주문제작</OrderButton>
              </Box>
            </Box>
          </ProductMainInfo>
          <BrandButton brandData={brandData}/>
        </Box>
        
        
        <ProductViewTabs>
          <Tabs
            value={tabValue}
            variant="fullWidth" 
            onChange={handleViewTab} 
            aria-label="main category"
          >
            <Tab label="상품설명" {...viewProps(0)} />
            <Tab label="리뷰" {...viewProps(1)} />
            <Tab label="문의사항" {...viewProps(2)} />
          </Tabs>
        </ProductViewTabs>

        <ViewTabPanel value={tabValue} index={0}>
          <DetailViewPanel />
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={1}>
          <ReviewPanel />
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={2}>
          <PersonalQnaPanel />
        </ViewTabPanel>
      </Box>

      <OrderSelector open={optionOpen} toggleDrawer={toggleDrawer} />

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={goToCart}>장바구니</SecondaryButton>
        <PrimaryButton onClick={goToOrder}>구매하기</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default ProductView