/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import NavigationBar from "../../components/NavigationBar"
import { jamesLee } from "../../assets/images/brand"
import { IconHeartBig, IconHeartBigRed } from "../../assets/images"
import { IconButton, Box, Tabs, Tab } from '@mui/material'
import DetailViewPanel from "./DetailViewPanel"
import BrandShopPanel from "./BrandShopPanel"
import {RectCheckboxNonChecked} from "../../styles/checkbox.styles"
import {profileTagData} from "../../data"
import { ScrollToTop } from "../../App"
import { TabPanel, TabProps } from "../../components/Tabs"
import { LabelMediumGray9ypography, HeadlineSmallTypography } from "../../components/Typography"

const Profile = () => {
  const [tabValue, setTabValue] = useState(0)
  const [isLike, setIsLike] = useState(false)
  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  const handleClickLike = (event: React.MouseEvent) => {
    setIsLike(!isLike)
  }
  ScrollToTop();
  return (
    <>
      <img src={jamesLee} style={{width: "100vw", maxWidth: "420px"}}/>
      <Box sx={{mt: 3, ml: 2, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box>
          <HeadlineSmallTypography>James Lee</HeadlineSmallTypography>
          <LabelMediumGray9ypography>노르웨이 출신의 작가</LabelMediumGray9ypography>
        </Box>
        <Box sx={{ mr: 2}}>
          
          <IconButton
            onClick={handleClickLike}
          >
            {isLike ? <IconHeartBig /> : <IconHeartBigRed />}
          </IconButton>
        </Box>
      </Box>
      <Box sx={{my:4}}>
      {profileTagData.map((el) => (
          <RectCheckboxNonChecked key={el.id} sx={{ ml: 1, mb: 1 }}>
            <input
              type="checkbox"
              id={`check_${el.id}`}
            />
            <label htmlFor={`check_${el.id}`}>{el.name}</label>
          </RectCheckboxNonChecked>
        ))}
      </Box>
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
            <Tab label="프로필" {...TabProps(0)} />
            <Tab label="브랜드샵" {...TabProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <DetailViewPanel/>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <BrandShopPanel/>
        </TabPanel>
      
      <NavigationBar/>
    </>
  )
}

export default Profile
