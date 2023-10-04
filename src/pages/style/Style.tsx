/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import { sofa04, sofa05, rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, rankingItem06 } from "../../assets/images/product"
import {Paper, IconButton, Typography, Box, FormControl, Tabs, Tab } from '@mui/material'
import { styled } from "@mui/material/styles"
import StyleList from './StyleList';
import { styleBanner01, styleBanner02 } from "../../assets/images/banner"
import HorizontalRanking  from "../../components/product/HorizontalRanking"



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

export const section2Data = [
  {
    id: 0,
    imgsrc: sofa04,
    like: true,
    likeCount: 556,
    shopName: 'James Lee - Sofa',
    modelName: '[23Series] JL-305',
    productName: 'Basic Sofa',
    price: 969000,
  },
  {
    id: 1,
    imgsrc: sofa05,
    like: false,
    likeCount: 556,
    shopName: 'James Lee - Sofa',
    modelName: '[23Series] JL-305',
    productName: 'soft_sofa',
    price: 230000,
  },
]

export const rankingData = [
  {
    id: 1,
    imgsrc: rankingItem01,
  },
  {
    id: 2,
    imgsrc: rankingItem02,
  },
  {
    id: 3,
    imgsrc: rankingItem03,
  },
  {
    id: 4,
    imgsrc: rankingItem04,
  },
  {
    id: 5,
    imgsrc: rankingItem05,
  },
  
]


const Style = () => {

  
  const [tabValue, setTabValue] = useState(0)
  const [isLike, setIsLike] = useState(false)

  const handleLikeTab = (event:React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
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
  const [position, setPosition] = useState(0); // 화면의 현재 위치
  const [count, setCount] = useState(0); // 화면의 현재 위치
  const slideWidth = 323; // 한 번에 슬라이드되는 픽셀 수

  const handleNextClick = () => {
    // "Next" 버튼 클릭 시 화면을 오른쪽으로 이동
    setPosition((prevPosition) => {
      const nextPosition = prevPosition - slideWidth
      if(count < 4){
        setCount(count + 1);
      }else{
        setCount(0);
        return 0
      }
      return nextPosition
    });
  };
  const brandRankingSettings:ISwiperProps = {
    loop: false,
    scrollbar: { draggable: true, el: null },
    slidesPerView: 1.2,
  }

  const photoBannerSettings:ISwiperProps = {
    loop: false,
    scrollbar: { draggable: true, el: null },
    slidesPerView: 1,
  }
  return (
    <Box sx={{height: 'calc(100vh - 74px)'}}>
      <LogoTitle/>
      
      {/* 첫번째 섹션 */}
      
      {/* <Box sx={{ width: "301px"}}>
        <Swiper {...photoBannerSettings} >
          {imageList.map((photoReview, index) => (
            <SwiperSlide key={`photo_review_${index}`}>
              <img src={photoReview.img} alt={photoReview.discription} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}
      <Box sx={{pt:"57px", pl: 2, borderTop: "1px solid #EEEEEE", pb:3, overflow:"hidden", display:"flex"}}>
        <Box sx={{mr:2}}>
          <Box sx={{width:"243px", height: "361px", overflow:"hidden", position:"relative"}}>
            <img src={imageList[0].img} alt="" style={{objectFit:"cover", objectPosition:"center"}}/>
            <Box sx={{ px:2, py:1, position: "absolute", bottom: 0, right: 0, color: "#FFFFFF", backgroundColor:"#242223" }}>
              <Typography sx={{ fontSize: 14, fontWeight: "400", lineHeight:"16.8px" }}>NEW</Typography>
            </Box>
          </Box>
          <Box sx={{ pb: 3, mt:4 }}>
            <Typography sx={{ fontSize: 50, fontWeight: "400", lineHeight:"19px", mb:3, color:"#333333" }}>One Rain</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: "400", color:"#666666" }}>미니멀과 디테일의 균형적인 가구</Typography>
          </Box>
        </Box>
        <Box sx={{width:"236px", height:"479px", overflow:"hidden"}}>
          <img src={imageList[1].img} alt="" style={{objectFit:"cover", objectPosition:"center"}}/>
        </Box>
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

          <LikeTabPanel value={tabValue} index={0}>
            <StyleList/>
          </LikeTabPanel>

          <LikeTabPanel value={tabValue} index={1}>
            <Box sx={{mt:5}}>
              <HorizontalRanking data={rankingData} title="TOP5 가구랭킹" subTitle="MZ 세대를 위한 가구" discription= "심플한 디자인을 선호하는 MZ세대를 위한 가구"/>
              <Box sx={{mt:"60px", ml:2, mb:2}}>
                <Typography sx={{ fontSize: 22, fontWeight: "700", color:"#333333", letterSpacing: "-1px" }}>실시간 인기 브랜드</Typography>
              </Box>
            </Box>
          </LikeTabPanel>

          <LikeTabPanel value={tabValue} index={2}>
            {/* <BrandShopPanel/> */}
          </LikeTabPanel>
      
      <NavigationBar/>
    </Box>
  )
}

export default Style;
