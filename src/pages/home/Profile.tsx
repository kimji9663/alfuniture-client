/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import NavigationBar from "../../components/NavigationBar"
import { jamesLee } from "../../assets/images/brand"
import { IconHeartBig, IconHeartBigRed } from "../../assets/images"
import {Paper, IconButton, Typography, Box, FormControl, Tabs, Tab } from '@mui/material'
import { styled } from "@mui/material/styles"
import DetailViewPanel from "./DetailViewPanel"
import BrandShopPanel from "./BrandShopPanel"

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

function LikeTabPanel(props: TabPanelProps) {
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

const itemList = [
  {
    id: '1',
    name: '금속디자인',
  },
  {
    id: '2',
    name: '미드센추리',
  },
  {
    id: '3',
    name: '스테인리스 스틸',
  },
  {
    id: '4',
    name: '반짝이는 가구',
  },
  {
    id: '5',
    name: '금속 가구',
  },
  {
    id: '6',
    name: '북유럽',
  },
]

const Profile = () => {

  const [tabValue, setTabValue] = useState(0)
  const [isLike, setIsLike] = useState(false)

  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleClickLike = (event: React.MouseEvent) => {
    setIsLike(!isLike)
  }

  
  
  return (
    <>
      <img src={jamesLee} style={{width: "100vw", maxWidth: "420px"}}/>
      <Box sx={{mt: 3, ml: 2, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box>
          <Typography sx={{ fontSize: 24, fontWeight: "500", letterSpacing: "-2%" }}>James Lee</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "400", letterSpacing: "-0.25px", color: "#333333" }}>노르웨이 출신의 작가</Typography>
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
      {itemList.map((el) => (
          <RectCheckbox key={el.id} sx={{ ml: 1, mb: 1 }}>
            <input
              type="checkbox"
              id={`check_${el.id}`}
            />
            <label htmlFor={`check_${el.id}`}>{el.name}</label>
          </RectCheckbox>
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
            <Tab label="프로필" {...profileProps(0)} />
            <Tab label="브랜드샵" {...profileProps(1)} />
          </Tabs>
        </Box>

        <LikeTabPanel value={tabValue} index={0}>
          <DetailViewPanel/>
        </LikeTabPanel>

        <LikeTabPanel value={tabValue} index={1}>
          <BrandShopPanel/>
        </LikeTabPanel>
      
      <NavigationBar/>
    </>
  )
}

export default Profile
