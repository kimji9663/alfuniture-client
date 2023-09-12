import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Box, IconButton, Divider, Typography, SwipeableDrawer, MenuItem } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { NaviWrap } from "../../../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton } from "../../../styles/buttons.styles"
import { ProductMainInfo, BrandInfo, OrderButton, ProductViewTabs, ViewTitle } from "./index.styles"
import { ArrowRight, IconHeartSmall, IconLikeOff, IconLikeOn } from "../../../assets/images"
import { sofa01 } from "../../../assets/images/product"
import { alfdn } from "../../../assets/images/brand"
import NoTitle from '../../../components/title/NoTitle'
import DetailViewPanel from "./DetailViewPanel"
import ReviewPanel from "./ReviewPanel"
import PersonalQna from "./PersonalQna"

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

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const goToCart = (event: React.MouseEvent) => {
    if (optionOpen) {
      navigate("/")
    }
    setOptionOpen(true)
  }

  const goToOrder = () => {
    if (optionOpen) {
      navigate("/")
    }
    setOptionOpen(true)
  }

  const handleClickLike = (event: any) => {
    setIsLike(!isLike)
  }

  const handleViewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  
  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setOptionOpen(open)
  }

  return (
    <>
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
          <BrandInfo fullWidth sx={{ mt: 3 }}>
            <Box sx={{ px: 2 }}>
              <img src={alfdn} alt="알프든" />
            </Box>
            <Box>
              <Typography sx={{ color: '#333', fontSize: '.875rem', fontWeight: 'bold', '& > svg': { ml: 1/2 } }}>
                ALFDN
                <ArrowRight />
              </Typography>
              <Typography sx={{ color: '#999', fontSize: '.75rem' }}>알프든</Typography>
            </Box>
            <Box sx={{ ml: 'auto', px: 4, '& > svg': { display: 'block' } }}>
              <IconHeartSmall />
            </Box>
          </BrandInfo>
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
          <PersonalQna />
        </ViewTabPanel>
      </Box>

      <SwipeableDrawer
        anchor='bottom'
        open={optionOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          zIndex: 1,
          '& .MuiBackdrop-root': {
            bottom: '75px',
          },
          '& .MuiPaper-root': {
            bottom: '75px',
          }
        }}
      >
        <Box
          sx={{ p: 2, width: 'auto', height: '50vh' }}
          role="presentation"
        >
          <ViewTitle>옵션 선택</ViewTitle>
          <Box sx={{ mt: 2 }}>
            <Select
              fullWidth
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>컬러 선택</em>
              </MenuItem>
              <MenuItem value={10}>브라운</MenuItem>
              <MenuItem value={20}>블루</MenuItem>
              <MenuItem value={30}>그레이</MenuItem>
            </Select>
          </Box>
        </Box>
      </SwipeableDrawer>

      <NaviWrap className="pair" sx={{ zIndex: 2 }}>
        <SecondaryButton onClick={goToCart}>장바구니</SecondaryButton>
        <PrimaryButton onClick={goToOrder}>구매하기</PrimaryButton>
      </NaviWrap>
    </>
  )
}
export default ProductView