/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import LogoTitle from '../../components/title/LogoTitle'
import {TabPanel, TabProps} from '../../components/Tabs'
import { ISwiperProps } from '../../components/ISwiperProps'
import NavigationBar from "../../components/NavigationBar"
import { Box, Tabs, Tab } from '@mui/material'
import StyleTabPanel from './StyleTabPanel';
import RankingTabPanel from './RankingTabPanel';
import PostMagazineTabPanel from './PostMagazineTabPanel';
import { Swiper, SwiperSlide } from "swiper/react"
import { styleBannerData } from "../../data"
import { ScrollToTop } from '../../App'
import { TitleSmallTypography, HeadlineExtraLargeGray9Typography, TitleSmallGray8Typography } from '../../components/Typography'

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

  ScrollToTop();
  return (
    <Box sx={{height: 'calc(100vh - 74px)'}}>
      <LogoTitle/>
      {/* 첫번째 섹션 */}
      <Box sx={{pt:"57px", borderTop: "1px solid #EEEEEE", pb:3}}>
        <Swiper {...brandCollectionSettings} style={{ marginLeft: "16px", marginRight: "16px" }}>
          {styleBannerData.map((item, index) => (
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
                              <TitleSmallTypography sx={{lineHeight: "17px"}}>NEW</TitleSmallTypography>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ pb: 3, mt: 4 }}>
                          <HeadlineExtraLargeGray9Typography sx={{ mb: 3 }}>{item.brandName}</HeadlineExtraLargeGray9Typography>
                          <TitleSmallGray8Typography>{item.discription}</TitleSmallGray8Typography>
                        </Box>
                      </>
                    )}
                    {isActive && (
                      <>
                        <Box sx={{ width: "243px", height: "361px", overflow: "hidden", position: "relative" }}>
                          <img src={item.img} alt="" style={{ width: "100%" }} />
                          {item.newItem && ( 
                            <Box sx={{ px: 2, py: 1, position: "absolute", bottom: 0, right: 0, color: "#FFFFFF", backgroundColor: "#242223" }}>
                              <TitleSmallTypography sx={{lineHeight: "17px"}}>NEW</TitleSmallTypography>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ pb: 3, mt: 4 }}>
                          <HeadlineExtraLargeGray9Typography sx={{ mb: 3 }}>{item.brandName}</HeadlineExtraLargeGray9Typography>
                          <TitleSmallGray8Typography>{item.discription}</TitleSmallGray8Typography>
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
              <Tab label="스타일" {...TabProps(0)} />
              <Tab label="랭킹" {...TabProps(1)} />
              <Tab label="포스트매거진" {...TabProps(2)} />
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
