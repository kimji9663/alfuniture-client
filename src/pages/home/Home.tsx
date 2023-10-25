/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import { ISwiperProps } from "../../components/ISwiperProps"
import { ArrowDown, HalfArrowRigth } from "../../assets/images"
import { jamesLee } from "../../assets/images/brand"
import { IconButton, Typography, Box } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom";
import ListItem from "../../components/product/ListItem"
import { homeBannerData, homeBrandProductData, rankingProductData, brandRankingData } from "../../data"
import HorizontalRanking from "../../components/product/HorizontalRanking"

const Home = () => {
  
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
    <>
      <LogoTitle/>
      
      {/* 첫번째 섹션 */}
      <Box sx={{ height: 'calc(100vh - 74px - 57px)', overflow: 'hidden' }}>
        <Box sx={{ 
          width: "301px",
          height: 'calc(100vh - 159px - 53px - 74px - 57px)',
          overflow: 'hidden',
        }}>
          <Swiper {...photoBannerSettings} >
            {homeBannerData.map((photoReview, index) => (
              <SwiperSlide key={`photo_review_${index}`}>
                <img src={photoReview.img} alt={photoReview.discription} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        
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
            p:0,
            pl:"5px",
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
              <Link to="/profile">
                <img src={jamesLee}/>
                <Box sx={{ ml: 4, mb: "33px", position:"absolute", bottom:0, left:0, color:"white"}}>
                  <Typography sx={{ fontSize: 35, fontWeight: "700", mb: 1}}>James Lee</Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: "400", letterSpacing: "-0.25%"}}>알퍼니처가 선정한</Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: "400", letterSpacing: "-0.25%"}}>노르웨이 출신의 이달의 작가</Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mx:2 }}>
          <Box>
            {/* 가구리스트 */}
          {homeBrandProductData.map((product: any, index: any) =>
            <ListItem
              key={index}
              id={product.id}
              imgsrc={product.imgsrc}
              shopName={product.shopName}
              modelName={product.modelName}
              productName={product.productName}
              price={product.price}
              colors={product.colors}
              likeCount={product.likeCount}
            />
          )}
          </Box>
        </Box>
      </Box>
      
      {/* 세번째 섹션 */}
      <Box sx={{mt:10}}>
        <Link to="/style/ranking"style={{ textDecoration: 'none', color: 'inherit' }}>
          <HorizontalRanking data={rankingProductData} title="TOP5 가구랭킹" subTitle="MZ 세대를 위한 가구" discription= "심플한 디자인을 선호하는 MZ세대를 위한 가구"/>
        </Link>
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
          <Swiper {...brandRankingSettings}  style={{maxWidth: "420px",width: "100vw"}}>
            {brandRankingData.map((item, index) => (
              <SwiperSlide key={`photo_review_${index}`} style={{marginRight: 0}}>
                <Box key={index}   sx={{
                  flexBasis: "323px",
                  transition: "transform 0.3s ease-in-out",
                }}>
                  {/* 이미지 */}
                  <Box sx={{ mt: 2, width: "275px", height: "222px", mr: 6 }}>
                    <img src={item.imgsrc} alt={`${index + 1}순위 이미지`} style={{ width: "100%" }} />
                  </Box>
                  {/* 텍스트 */}
                  <Box sx={{ pl: 2, pt: 2, border: "1px solid #DADADA", borderLeft: "none" }}>
                    <Typography sx={{ fontSize: 16, fontWeight: "700" }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: "700", letterSpacing: "-0.25px", color: "#999999" }}>{item.discription}</Typography>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse", mr: 2, mb: 2 }}>
                      <HalfArrowRigth/>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <NavigationBar/>
    </>
  )
}

export default Home
