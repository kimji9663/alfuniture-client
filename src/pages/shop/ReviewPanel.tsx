import React, { useState } from "react"
import { Box, Divider, Rating } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ViewTitle, AverageGrade, DetailGrade, PhotoReviewWrap, ReviewerInfo, UserPhotoWrap, ProductOptions } from "./productView.styles"
import { sofa01, sofa02, light01, light02, chair01, chair02, table01, table02 } from "../../assets/images/product"

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

const photoReviewList = [
  {
    id: 1,
    img: light01,
    discription: '조명01'
  },
  {
    id: 2,
    img: chair01,
    discription: '의자01'
  },
  {
    id: 3,
    img: sofa01,
    discription: '소파01'
  },
  {
    id: 4,
    img: table01,
    discription: '테이블01'
  },
  {
    id: 5,
    img: light02,
    discription: '조명02'
  },
  {
    id: 6,
    img: chair02,
    discription: '의자02'
  },
  {
    id: 7,
    img: sofa02,
    discription: '소파02'
  },
  {
    id: 8,
    img: table02,
    discription: '테이블02'
  }
]

const userPhotoList = [
  {
    id: 1,
    img: light01,
    discription: '조명01'
  },
  {
    id: 2,
    img: chair01,
    discription: '의자01'
  },
  {
    id: 3,
    img: sofa01,
    discription: '소파01'
  },
  {
    id: 4,
    img: sofa02,
    discription: '소파02'
  }
]

const ReviewPanel = () => {
  const [activeUserPhoto, setActiveUserPhoto] = useState(1)

  const photoReviewSettings:ISwiperProps = {
    loop: false,
    scrollbar: { draggable: true, el: null },
    slidesPerView: 3.3,
    spaceBetween: 8,
  }

  const userPhotoSettings:ISwiperProps = {
    onSlideChange: (s:any) => {
      setActiveUserPhoto(s.realIndex + 1)
    }
  }

  return (
    <Box sx={{ p: 2, mb: 7 }}>
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
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ color: '#eee' }} fontSize="inherit" />}
            />
          </div>
        </AverageGrade>

        <DetailGrade sx={{ ml: 3 }}>
          <div>
            <span className="grade_number">5점</span>
            <span className="grade_pipe">
              <Box component='span' sx={{ width: '80%' }}></Box>
            </span>
          </div>
          <div>
            <span className="grade_number">4점</span>
            <span className="grade_pipe">
              <Box component='span' sx={{ width: '60%' }}></Box>
            </span>
          </div>
          <div>
            <span className="grade_number">3점</span>
            <span className="grade_pipe">
              <Box component='span' sx={{ width: '50%' }}></Box>
            </span>
          </div>
          <div>
            <span className="grade_number">2점</span>
            <span className="grade_pipe">
              <Box component='span' sx={{ width: '20%' }}></Box>
            </span>
          </div>
          <div>
            <span className="grade_number">1점</span>
            <span className="grade_pipe">
              <Box component='span' sx={{ width: '10%' }}></Box>
            </span>
          </div>
        </DetailGrade>
      </Box>
      
      <ViewTitle component="p" sx={{ mt: 5 }}>
        포토 후기
        <span>(41)</span>
      </ViewTitle>
      <PhotoReviewWrap>
        <Swiper {...photoReviewSettings}>
          {photoReviewList.map((photoReview) => (
            <SwiperSlide key={`photo_review_${photoReview.id}`}>
              <img src={photoReview.img} alt={photoReview.discription} />
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoReviewWrap>

      <Divider sx={{ mt: 5 }} />

      <ReviewerInfo sx={{ mt: 5 }}>
        <Box className="nickname_date">
          <span className="nickname">va***</span>
          <span className="date">23.01.28</span>
        </Box>
        <Box className="grade_star" sx={{ mt: 1 }}>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ color: '#eee' }} fontSize="inherit" />}
          />
        </Box>
      </ReviewerInfo>

      <UserPhotoWrap sx={{ mt: 2 }}>
        <Swiper {...userPhotoSettings}>
          {userPhotoList.map((userPhoto) => (
            <SwiperSlide key={`user_photo_${userPhoto.id}`}>
              <img src={userPhoto.img} alt={userPhoto.discription} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination">
          {activeUserPhoto}/{userPhotoList.length}
        </div>
      </UserPhotoWrap>

      <ProductOptions sx={{ mt: 5 }}>
        <Box sx={{ display: 'flex' }}>
          <div className="title">선택옵션</div>
          <div className="options">
            <span>아이보리</span>
            <span>134*60</span>
          </div>
        </Box>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <div className="title">해쉬태그</div>
          <div className="hash_tags">
            <span>생각보다 커요</span>
            <span>색감 예뻐요</span>
            <span>가벼워요</span>
            <span>인스타감성</span>
            <span>북유럽</span>
            <span>분위기 있어요</span>
          </div>
        </Box>
      </ProductOptions>

      <Box sx={{ mt: 3, color: '#999', fontSize: '.875rem' }}>
        한 달 걸려서 받았네요. 아이보리 할까 브라운 할까 고민 많이 했는데 아이보리 하길 너무 잘한 것 같아요. 기다린 보람이 있습니다. 
        사진에서 보시다 시피 전체 인테리어와 조화를 잘 이루고 또 적당히 포인트가 되는게 정말로 취향저격입니다. 
        조금 힙하면서도 단정한  분위기를 선호한다면 저는 강추드립니다 :)
      </Box>
    </Box>
  )
}

export default ReviewPanel