import React, { useState } from "react"
import { Tabs, Tab, Box, IconButton, Divider, Typography } from "@mui/material"
import NavigationBar from "../../components/NavigationBar"
import { sofa01 } from "../../assets/images/product"
import { alfdn } from "../../assets/images/brand"
import { ArrowRight, IconHeartSmall } from "../../assets/images"
import { ProductMainInfo, BrandInfo, OrderButton, DetailView, MoreButton, CoverBox } from "./productView.styles"
import NoTitle from '../../components/title/NoTitle'
import { IconLikeOff, IconLikeOn } from "../../assets/images"

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
  const [tabValue, setTabValue] = useState(0)
  const [viewMore, setViewMore] = useState(false)
  const [isLike, setIsLike] = useState(false)

  const handleClickLike = (event: any) => {
    setIsLike(!isLike)
  }

  const handleViewTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleViewHeight = () => {
    setViewMore(!viewMore)
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
                <span className="text">3 COLOR</span>
                <Box component="span" sx={{ background: '#f5f5f5' }}></Box>
                <Box component="span" sx={{ background: '#f5f5f5' }}></Box>
                <Box component="span" sx={{ background: '#f5f5f5' }}></Box>
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
                <Box component="p" sx={{ mt: 1 }}>
                  <Typography component="span" sx={{ color: '#666', fontSize: '.75rem' }}>
                    빠른배송
                  </Typography>
                  <Typography component="span" sx={{ ml: 1, color: '#FD6868', fontSize: '.75rem' }}>
                    불가능
                  </Typography>
                </Box>
              </Box>
              <Box className="button">
                <OrderButton fullWidth>주문제작</OrderButton>
              </Box>
            </Box>
          </ProductMainInfo>
          <BrandInfo fullWidth sx={{ mt: 3 }}>
            <Box sx={{ px: 2 }}>
              <img src={alfdn} alt="" />
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
        
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          '.MuiTab-root.Mui-selected': { color: '#333' },
          '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
        }}>
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
        </Box>

        <ViewTabPanel value={tabValue} index={0}>
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
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={1}>
          리뷰
        </ViewTabPanel>

        <ViewTabPanel value={tabValue} index={2}>
          문의사항
        </ViewTabPanel>
      </Box>
      <NavigationBar />
    </>
  )
}
export default ProductView