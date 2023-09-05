import React, { useState } from "react"
import { Box, Divider } from "@mui/material"
import { ViewTitle, AverageGrade, DetailGrade, PhotoReview } from "./productView.styles"
import { IconStar } from "../../assets/images"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { sofa01 } from "../../assets/images/product"

type ISwiperProps = { 
  loop?: boolean
  spaceBetween?: number 
  scrollbar?: { 
    draggable: boolean 
    el: null 
  }
  slidesPerView?: "auto" | number | undefined
}

const ReviewPanel = () => {

  const settings:ISwiperProps = {
    loop: true,
    scrollbar: { draggable: true, el: null },
    slidesPerView: 3.3,
    spaceBetween: 8,
  }

  return (
    <>
      <Box sx={{ p: 2 }}>
        <ViewTitle component="p">
          구매 후기
          <span>(182)</span>
        </ViewTitle>

        <Box sx={{ display: 'flex', '& > .MuiBox-root': { flex: '1 1 50%' } }}>
          <AverageGrade>
            <div>
              <span className="now">4.0</span>
              <span className="all">/5</span>
            </div>
            <div className="grade_star">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </AverageGrade>

          <DetailGrade sx={{ ml: 3 }}>
            <Box>
              <Box component="span" className="grade_number">5점</Box>
              <Box component="span" className="grade_pipe">
                <span style={{ width: '80%' }}></span>
              </Box>
            </Box>
            <Box>
              <Box component="span" className="grade_number">4점</Box>
              <Box component="span" className="grade_pipe">
                <span style={{ width: '60%' }}></span>
              </Box>
            </Box>
            <Box>
              <Box component="span" className="grade_number">3점</Box>
              <Box component="span" className="grade_pipe">
                <span style={{ width: '50%' }}></span>
              </Box>
            </Box>
            <Box>
              <Box component="span" className="grade_number">2점</Box>
              <Box component="span" className="grade_pipe">
                <span style={{ width: '20%' }}></span>
              </Box>
            </Box>
            <Box>
              <Box component="span" className="grade_number">1점</Box>
              <Box component="span" className="grade_pipe">
                <span style={{ width: '10%' }}></span>
              </Box>
            </Box>
          </DetailGrade>
        </Box>

        <Divider sx={{ my: 2 }} />
        
        <ViewTitle component="p">
          포토 후기
          <span>(41)</span>
        </ViewTitle>
        <PhotoReview>
          <Swiper {...settings}>
            <SwiperSlide>
              <img src={sofa01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sofa01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sofa01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sofa01} alt="" />
            </SwiperSlide>
          </Swiper>
        </PhotoReview>

        <Divider sx={{ mt: 5 }} />

        <Box sx={{ mt: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>va***</span>
            <span>23.01.28</span>
          </Box>
          <Box sx={{ mt: 1, color: '#242223' }}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </Box>
          <Box>
            <Box sx={{ mt: 2, position: 'relative', '& img': { width: '100%' } }}>
              <Swiper>
                <SwiperSlide>
                  <img src={sofa01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sofa01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sofa01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sofa01} alt="" />
                </SwiperSlide>
              </Swiper>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 16, 
                  right: 12, 
                  zIndex: 1, 
                  padding: '0 8px',
                  backgroundColor: '#000', 
                  color: '#fff',
                }}
              >
                1/3
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ReviewPanel