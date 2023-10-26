import React, { useState } from "react"
import { Box, Typography } from "@mui/material"
import HorizontalRanking  from "../../components/product/HorizontalRanking"
import { Link } from "react-router-dom";
import ListItemType2 from "../../components/product/ListItemType2"
import {rankingProductData} from "../../data"
import { Swiper, SwiperSlide } from "swiper/react"
import { brandRakingSwiperData } from "../../data"
import { ISwiperProps } from "../../components/ISwiperProps"
import { C333Fs22Fw700Ls1Typography, CFAFFs40Typography } from "../../components/Typography"

const brandCollectionSettings:ISwiperProps = {
  loop: true,
  scrollbar: { draggable: true, el: null },
  slidesPerView: 1.05,
}

const RankingTabPanel = () => {

  return (
    <>
      <Box sx={{mt:5}}>
        <Link to="/style/ranking"style={{ textDecoration: 'none', color: 'inherit' }}>
          <HorizontalRanking data={rankingProductData} title="TOP5 가구랭킹" subTitle="MZ 세대를 위한 가구" discription= "심플한 디자인을 선호하는 MZ세대를 위한 가구"/>
        </Link>
        <Box sx={{mt:"60px", ml:2, mb:2}}>
          <C333Fs22Fw700Ls1Typography>실시간 인기 브랜드</C333Fs22Fw700Ls1Typography>
          <Swiper {...brandCollectionSettings}>
          {brandRakingSwiperData.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isNext, isPrev }) => (
                <Box >
                  <>
                    { isPrev && (
                      <>
                        <Box sx={{ my: 2 , overflow: "hidden", display: "flex", alignItems:"flex-end"}}>
                          <Link to="/style/brand">
                            <Box sx={{ width: 'calc(100vw - 48px)', height: 'calc(94vw - 48px)',maxHeight:"calc(420px - 48px)", maxWidth:"calc(420px - 48px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", mr: 2}}>
                              <img src={item.imgsrc} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                              <CFAFFs40Typography sx={{ fontSize: 40, fontWeight: "600", color: "#FAFAFA", position: "absolute", zIndex: 100 }}>
                                {item.shopName}
                              </CFAFFs40Typography>
                            </Box>
                          </Link>
                        </Box>
                        <Box sx={{ width: 'calc(100vw - 48px)', maxWidth:"calc(420px - 48px)"}}>
                          {/* 가구리스트 */}
                            {item.productList.map((product: any, index) =>
                              <ListItemType2
                                key={index}
                                id={product.id}
                                imgsrc={product.imgsrc}
                                shopName={product.shopName}
                                modelName={product.modelName}
                                productName={product.productName}
                              />
                            )}
                        </Box>
                      </>
                    )}
                    {isActive && (
                      <>
                        <Box sx={{ my: 2 , overflow: "hidden", display: "flex", alignItems:"flex-end"}}>
                          <Link to="/style/brand">
                            <Box sx={{ width: 'calc(100vw - 48px)', height: 'calc(94vw - 48px)',maxHeight:"calc(420px - 48px)", maxWidth:"calc(420px - 48px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", mr: 2}}>
                              <img src={item.imgsrc} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                              <CFAFFs40Typography>
                                {item.shopName}
                              </CFAFFs40Typography>
                            </Box>
                          </Link>
                        </Box>
                        <Box sx={{ width: 'calc(100vw - 48px)', maxWidth:"calc(420px - 48px)"}}>
                          {/* 가구리스트 */}
                            {item.productList.map((product: any, index) =>
                              <ListItemType2
                                key={index}
                                id={product.id}
                                imgsrc={product.imgsrc}
                                shopName={product.shopName}
                                modelName={product.modelName}
                                productName={product.productName}
                              />
                            )}
                        </Box>
                      </>
                    )}
                    {isNext && (
                      <Box sx={{ my: 2 , overflow: "hidden", display: "flex", alignItems:"flex-end"}}>
                        <Link to="/style/brand">
                          <Box sx={{ width: 'calc(100vw - 48px)', height: 'calc(94vw - 48px)',maxHeight:"calc(420px - 48px)", maxWidth:"calc(420px - 48px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", mr: 2}}>
                            <img src={item.imgsrc} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                            <CFAFFs40Typography>
                              {item.shopName}
                            </CFAFFs40Typography>
                          </Box>
                        </Link>
                      </Box>
                    )}
                  </>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        </Box>
      </Box>
    </>
  )
}

export default RankingTabPanel
