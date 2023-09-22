/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import ImageSlider from "./ImageSlider";
import { chair04 } from "../../assets/images/product"
import { ArrowDown, IconLikeOff, IconLikeOn } from "../../assets/images"
import { jamesLee } from "../../assets/images/brand"
import { sofa04, sofa05 } from "../../assets/images/product"
import Carousel from 'react-material-ui-carousel'
import {Paper, IconButton, Typography, Box} from '@mui/material'
export const testData = [
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
    productOption: 'Basic Sofa',
    price: 969000,
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
      {/* <Carousel>
        {imageList.map((item, i)=>(
          <Paper key={i}><img src={item.src} alt="" /></Paper>
        ))}
      </Carousel> */}
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
          {/* 랜더하려고 하는 곳 */}
          <Box>
            {testData.map((item) => (
              <Box key={item.id} sx={{display: "flex"}}>
                {/* 이미지 */}
                <Box sx={{p: 2, pl:0}}>
                  <img src={item.imgsrc} alt={item.productName} />
                </Box>
                {/* 상품정보 */}
                <Box>
                  {/* 상품명 */}
                  <Typography sx={{fontWeight: "700", fontSize: 14, mb:"4px"}}>{item.productName}</Typography>
                  {/* 모델명 */}
                  <Typography sx={{fontWeight: "700", fontSize: 12, letterSpacing:"-0.25px", color: "#999999"}}>{item.modelName}</Typography>
                  {/* 상품옵션 */}
                  <Typography sx={{fontWeight: "700", fontSize: 12, letterSpacing:"-0.25px", color: "#999999"}}>{item.productOption}</Typography>
                  <Box>
                    {/* 가격 */}
                    <Typography>{item.price}원</Typography>
                    {/* 좋아요 */}
                    <Box>
                      {/* <img src={item.like ? IconLikeOn : IconLikeOff} alt="좋아요" /> */}
                      {/* <img src={IconLikeOff} alt="좋아요" /> */}
                      <Typography>{item.likeCount}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* 세번째 섹션 */}

      <ExampleStyle1>
        홈
      </ExampleStyle1>
      <ExampleStyle2>
        홈
      </ExampleStyle2>
      {/* <NavigationBar/> */}
    </>
  )
}

export default Home
