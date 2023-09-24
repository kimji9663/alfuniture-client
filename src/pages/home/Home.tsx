/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import ImageSlider from "./ImageSlider";
import { chair04 } from "../../assets/images/product"
import { ArrowDown, IconLikeOff, IconLikeOn, HalfArrowRigth } from "../../assets/images"
import { jamesLee } from "../../assets/images/brand"
import { sofa04, sofa05, rankingItem01, rankingItem02, rankingItem03, rankingItem04, rankingItem05, rankingItem06 } from "../../assets/images/product"
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
export const section4Data = [
  {
    id: 1,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey1",
    comment: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 2,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey2",
    comment: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 3,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey3",
    comment: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 4,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey4",
    comment: "일상속에서 자연스러운 아름다움을 느껴보세요"
  },
  {
    id: 5,
    imgsrc: rankingItem06,
    title: "일상속에 스며든 가구, Aerobiey5",
    comment: "일상속에서 자연스러운 아름다움을 느껴보세요"
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
  const [position, setPosition] = useState(0); // 화면의 현재 위치
  const [count, setCount] = useState(0); // 화면의 현재 위치
  const slideWidth = 323; // 한 번에 슬라이드되는 픽셀 수
  const maxPosition = (section4Data.length - 1) * slideWidth; // 최대 슬라이드 위치

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

        <Box sx={{ mt: 2, mb: 3, position: "relative", display: "flex" }}>
          <img src={section3Data[0].imgsrc} alt={`1순위 이미지`} style={{ width: "100%" }}/>
          <Box sx={{width:"40px", height: "40px", backgroundColor: "#242223", color:"white", position:"absolute", left:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Typography sx={{ fontSize: 22, fontWeight: "700" }}>{section3Data[0].id}</Typography>
          </Box>
        </Box>

        <Box sx={{mb:2}}>
          <Typography sx={{ fontSize: 16, fontWeight: "700", letterSpacing: "0.15px", mb: "4px" }}>MZ 세대를 위한 가구</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: "700", letterSpacing: "-0.25px", color: "#999999" }}>심플한 디자인을 선호하는 MZ세대를 위한 가구</Typography>
        </Box>

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

      {/* 네번째 섹션 */}
      <Box sx={{ mt: 10, mb: 5 }}>
        {/* 타이틀 */}
        <Typography sx={{ fontSize: 22, fontWeight: "700", ml: 2 }}>
          TOP5 브랜드랭킹
        </Typography>
        {/* 리스트 */}
        <Box
          sx={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          {section4Data.map((item, index) => (
            <Box key={index}   sx={{
              flexBasis: "323px",
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(${position}px)`,
            }}>
              {/* 이미지 */}
              <Box sx={{ mt: 2, width: "275px", height: "222px", mr: 6 }}>
                <img src={item.imgsrc} alt={`${index + 1}순위 이미지`} style={{ width: "100%" }} />
              </Box>
              {/* 텍스트 */}
              <Box sx={{ pl: 2, pt: 2, border: "1px solid #DADADA" }}>
                <Typography sx={{ fontSize: 16, fontWeight: "700" }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: "700", letterSpacing: "-0.25px", color: "#999999" }}>{item.comment}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row-reverse", mr: 2, mb: 2 }}>
                  <HalfArrowRigth onClick={handleNextClick}/>
                </Box>
              </Box>
            </Box>
          ))}
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