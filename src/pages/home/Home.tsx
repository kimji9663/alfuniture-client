/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import ImageSlider from "./ImageSlider";
import { chair04 } from "../../assets/images/product"
import { ArrowDown, IconLikeOff, IconLikeOn } from "../../assets/images"
import { jamesLee } from "../../assets/images/brand"
import { sofa04, sofa05, rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05 } from "../../assets/images/product"
import {Paper, IconButton, Typography, Box} from '@mui/material'

export const section2Data = [
  {
    id: 0,
    imgsrc: sofa04,
    like: true,
    likeCount: 556,
    productName: 'James Lee - Sofa',
    modelName: '[23Series] JL-305',
    productOption: 'Basic Sofa',
    price: 969000,
  },
  {
    id: 1,
    imgsrc: sofa05,
    like: false,
    likeCount: 556,
    productName: 'James Lee - Sofa',
    modelName: '[23Series] JL-305',
    productOption: 'soft_sofa',
    price: 230000,
  },
]

export const section3Data = [
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


const Home = () => {
  const imageList = [
    {
      name: "chair01",
      src: chair04
    },
    {
      name: "chair02",
      src: chair04
    },
    {
      name: "chair03",
      src: chair04
    },
    {
      name: "chair04",
      src: chair04
    },
]
  return (
    <>
      <LogoTitle/>
      
      {/* 첫번째 섹션 */}
      <Box>
        <img src={imageList[0].src}/>
        <Box sx={{ mt: 3, mb: "39px", ml: 2 }}>
          <Typography sx={{ fontSize: 32, fontWeight: "700" }}>2023 Furniture</Typography>
          <Typography sx={{ fontSize: 32, fontWeight: "700" }}>Collection</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb:3,
            borderBottom: "1px solid #DADADA"
          }}>
          <IconButton sx={{
            border: '0.5px solid #616161',
            borderRadius: '50%', 
            width: '28px', 
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl:"10px",
          }}>
            <ArrowDown />
          </IconButton>
        </Box>
      </Box>
      
      {/* 두번째 섹션 */}
      <Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Box sx={{ mt: 10, mb: "39px", ml: 5, }}>
            <Typography sx={{ fontSize: 22, fontWeight: "700", letterSpacing: "-2%", mb: "17px"}}>이달의 아티스트</Typography>
            <Box sx={{position:"relative", display:"flex"}}>
              <img src={jamesLee}/>
              <Box sx={{ ml: 4, mb: "33px", position:"absolute", bottom:0, left:0, color:"white"}}>
                <Typography sx={{ fontSize: 35, fontWeight: "700", mb: 1}}>James Lee</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: "400", letterSpacing: "-0.25%"}}>알퍼니처가 선정한</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: "400", letterSpacing: "-0.25%"}}>노르웨이 출신의 이달의 작가</Typography>
              </Box>
            </Box>
          </Box>
          
        </Box>
        <Box sx={{ mx:2 }}>
          <Box>
            {section2Data.map((item, index) => (
              <Box key={item.id} sx={{display: "flex", 
              borderTop: "1px solid #999999",
              borderBottom: index === section2Data.length - 1 ? "1px solid #999999" : "none", 
            }}>
                
                <Box sx={{pr: "18px", display: "flex", py: 2, height: "90px", borderRight: "1px solid #999999",}}>
                  <img src={item.imgsrc} alt={item.productName} />
                </Box>
                
                <Box sx={{pl: "18px", width: "100%", py: 2}}>
                  <Box>
                    <Typography sx={{fontWeight: "700", fontSize: 14, mb:"4px"}}>{item.productName}</Typography>
                    <Typography sx={{fontWeight: "700", fontSize: 12, letterSpacing:"-0.25px", color: "#999999"}}>{item.modelName}</Typography>
                    <Typography sx={{fontWeight: "700", fontSize: 12, letterSpacing:"-0.25px", color: "#999999"}}>{item.productOption}</Typography>
                  </Box>
                  <Box sx={{display: "flex", justifyContent: "space-between",mt: "10px"}}>
                    
                    <Typography sx={{fontSize: 12, fontWeight: "700"}}>{item.price.toLocaleString()} 원</Typography>
                    
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "20px", height: "20px", mr: "4px"}}>
                        {item.like ? <IconLikeOn />: <IconLikeOff/>}
                      </Box>
                      <Typography sx={{fontSize: 12, fontWeight: "700", letterSpacing:"0.4px", color: "#999999"}}>{item.likeCount}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* 세번째 섹션 */}
      <Box sx={{ mt: 10, px: 2 }}>
        <Typography sx={{ fontSize: 22, fontWeight: "700" }}>TOP5 가구랭킹</Typography>

        {/* 1순위 이미지 */}
        <Box sx={{ mt: 2, mb: 3, position: "relative", display: "flex" }}>
          <img src={section3Data[0].imgsrc} alt={`1순위 이미지`} style={{ width: "100%" }}/>
          <Box sx={{width:"40px", height: "40px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Typography sx={{ fontSize: 22, fontWeight: "700" }}>{section3Data[0].id}</Typography>
          </Box>
        </Box>

        {/* 설명 */}
        <Box sx={{mb:2}}>
          <Typography sx={{ fontSize: 16, fontWeight: "700", letterSpacing: "0.15px", mb: "4px" }}>MZ 세대를 위한 가구</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "700", letterSpacing: "-0.25px", color: "#999999" }}>심플한 디자인을 선호하는 MZ세대를 위한 가구</Typography>
        </Box>

        {/* 2~5순위 이미지가 들어갈 곳 */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {section3Data.slice(1, 5).map((item, index) => (
            <Box key={item.id} sx={{borderTop: item.id === 2 ? "1px solid #DADADA" : "none",}}>
              <Box  sx={{position: "relative", display: "flex", mt:3 }}>
                <img  src={item.imgsrc} alt={`순위 ${item.id}`} style={{ width: "76px", height: "76px" }} />
                <Box sx={{width:"24px", height: "24px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <Typography sx={{ fontSize: 14, fontWeight: "700" }}>{item.id}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 세번째 섹션 */}
      <Box>
        {/* 타이틀 */}
        <Box></Box>
        {/* 리스트 */}
        <Box>
          {/* 반복할 상품정보 */}
          <Box>
            {/* 이미지 */}
            <Box></Box>
            {/* 텍스트 */}
            <Box>
              <Typography></Typography>
              <Typography></Typography>
              <IconButton></IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <ExampleStyle1>
        홈
      </ExampleStyle1>
      <ExampleStyle2>
        홈
      </ExampleStyle2> */}
      <NavigationBar/>
    </>
  )
}

export default Home
