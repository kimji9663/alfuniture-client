import { css } from "@emotion/css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const SwiperWrap = styled(Box)(() => ({
  '& .swiper-wrapper': {
    alignItems: 'end',
  },
  '& .swiper-slide': {
    width: '67%',
    transform: 'scale(0.75) translateY(15%)',
    transitionDuration: '.5s',
  },
  '& .swiper-slide img': {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  '& .swiper-slide .text': {
    position: 'absolute',
    bottom: 0,
    margin: '16px',
    color: '#fff',
    overflow: 'hidden',
    maxHeight: '35px',
    transition: 'all .5s linear',
  },
  '& .swiper-slide .title': {
    fontSize: '1.66rem',
  },

  '& .swiper-slide.swiper-slide-active': {
    transform: 'scale(1) translateY(0)',
  },
  '& .swiper-slide.swiper-slide-active .text': {
    maxHeight: 'calc(100% - 32px)',
  },
  '& .swiper-slide.swiper-slide-active .title': {
    fontSize: '1.25rem',
  },
}))