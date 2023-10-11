/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"

import {Paper, IconButton, Typography, Box, FormControl, Tabs, Tab } from '@mui/material'
import { styled, withStyles } from "@mui/material/styles"
import StyleTabPanel from './StyleTabPanel';
import RankingTabPanel from './RankingTabPanel';
import PostMagazineTabPanel from './PostMagazineTabPanel';
import { styleBanner01, styleBanner02, styleBanner03 } from "../../assets/images/banner"
import { Swiper, SwiperSlide } from "swiper/react"

export const testData = [
  {
    img: styleBanner01,
    newItem: true,
    brandName: "One Rain",
    discription: "미니멀과 디테일의 균형적인 가구",
  },
  {
    img: styleBanner03,
    newItem: true,
    brandName: "Umasqu",
    discription: "혁신적인 가구 디자인의 한획을 긋다",
  },
  {
    img: styleBanner01,
    newItem: true,
    brandName: "One Rain",
    discription: "미니멀과 디테일의 균형적인 가구",
  },
  {
    img: styleBanner03,
    newItem: true,
    brandName: "Umasqu",
    discription: "혁신적인 가구 디자인의 한획을 긋다",
  },
]

const imageList = [
  {
    discription: "styleBanner01",
    img: styleBanner01
  },
  {
    discription: "styleBanner02",
    img: styleBanner02
  },
]

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const RectCheckbox = styled(FormControl)(({ }) => ({
  '& input': {
    display: 'none',
  },
  '& label': {
    padding: '6px 16px',
    border: '1px solid #DADADA',
    fontSize: '0.875rem',
    color: '#999999',
  },
  '& input:checked + label': {
    border: '1px solid #242223',
    backgroundColor: '#242223',
    color: '#fff',
  },
}))

function profileProps(index: number) {
  return {
    id: `like-tab-${index}`,
    'aria-controls': `like-tabpanel-${index}`,
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`like-tabpanel-${index}`}
      aria-labelledby={`like-tab-${index}`}
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
type ISwiperProps = { 
  loop?: boolean
  spaceBetween?: number 
  scrollbar?: { 
    draggable: boolean 
    el: null 
  }
  slidesPerView?: "auto" | number | undefined
  onSlideChange?: (swiper: any) => void
}

const brandCollectionSettings:ISwiperProps = {
  loop: true,
  scrollbar: { draggable: true, el: null },
  slidesPerView: 1.3,
}

const Style = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  
  return (
    <Box sx={{height: 'calc(100vh - 74px)'}}>
      <LogoTitle/>
      {/* 첫번째 섹션 */}
      <Box sx={{pt:"57px", borderTop: "1px solid #EEEEEE", pb:3}}>
        <Swiper {...brandCollectionSettings} style={{ marginLeft: "16px", marginRight: "16px" }}>
          {testData.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isNext, isPrev }) => (
                <Box sx={{ mt: 2, height: "100%", objectFit: "cover" }}>
                  <>
                    { isPrev && (
                      <>
                        <Box sx={{ width: "243px", height: "361px", overflow: "hidden", position: "relative" }}>
                          <img src={item.img} alt="" style={{ width: "100%" }} />
                          {item.newItem && ( 
                            <Box sx={{ px: 2, py: 1, position: "absolute", bottom: 0, right: 0, color: "#FFFFFF", backgroundColor: "#242223" }}>
                              <Typography sx={{ fontSize: 14, fontWeight: "400", lineHeight: "16.8px" }}>NEW</Typography>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ pb: 3, mt: 4 }}>
                          <Typography sx={{ fontSize: 50, fontWeight: "400", lineHeight: "19px", mb: 3, color: "#333333" }}>{item.brandName}</Typography>
                          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#666666" }}>{item.discription}</Typography>
                        </Box>
                      </>
                    )}
                    {isActive && (
                      <>
                        <Box sx={{ width: "243px", height: "361px", overflow: "hidden", position: "relative" }}>
                          <img src={item.img} alt="" style={{ width: "100%" }} />
                          {item.newItem && ( 
                            <Box sx={{ px: 2, py: 1, position: "absolute", bottom: 0, right: 0, color: "#FFFFFF", backgroundColor: "#242223" }}>
                              <Typography sx={{ fontSize: 14, fontWeight: "400", lineHeight: "16.8px" }}>NEW</Typography>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ pb: 3, mt: 4 }}>
                          <Typography sx={{ fontSize: 50, fontWeight: "400", lineHeight: "19px", mb: 3, color: "#333333" }}>{item.brandName}</Typography>
                          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "#666666" }}>{item.discription}</Typography>
                        </Box>
                      </>
                    )}
                    {isNext && (
                      <Box sx={{height: "481px"}}>
                        <Box sx={{ width: "243px", height: "100%", overflow: "hidden", position: "relative" }}>
                          <img src={item.img} alt="" style={{ width: "100%", height: "100%" }} />
                        </Box>
                      </Box>
                    )}
                  </>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      
      {/* 두번째 섹션 */}
        <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '.MuiTab-root.Mui-selected': { color: '#333', fontWeight: "700" },
            '.MuiTabs-indicator': { height: '1px', backgroundColor: '#333' },
          }}>
            <Tabs 
              value={tabValue}
              variant="fullWidth" 
              onChange={handleLikeTab} 
              aria-label="main category"
            >
              <Tab label="스타일" {...profileProps(0)} />
              <Tab label="랭킹" {...profileProps(1)} />
              <Tab label="포스트매거진" {...profileProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <StyleTabPanel/>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <RankingTabPanel/>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <PostMagazineTabPanel/>
          </TabPanel>
      
      <NavigationBar/>
    </Box>
  )
}

export default Style;
