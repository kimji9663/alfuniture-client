import { css } from "@emotion/css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const SwiperWrap = styled(Box)(() => ({
  '& .swiper-wrapper': {
    alignItems: 'end',
  },
  '& .swiper-slide': {
    width: '67%',
    maxWidth: '260px',
    transform: 'scale(0.75) translateY(15%)',
    transitionDuration: '.5s',
  },
  '& .slide_item': {
    overflow: 'hidden',
    width: '100%',
    aspectRatio: '1/1.28',
  },
  '& .slide_item img': {
    display: 'block',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '& .slide_item .landscape': {
    height: '100%',
  },  
  '& .slide_item .portrait': {
    width: '100%',
  },
  '& .slide_item .text': {
    position: 'absolute',
    bottom: 0,
    margin: '16px',
    color: '#fff',
    overflow: 'hidden',
    maxHeight: '35px',
    transition: 'all .5s linear',
    fontSize: '.75rem',
  },
  '& .slide_item .text .title': {
    fontSize: '1.66rem',
  },
  '& .slide_item .text .brif': {
    fontSize: '.75rem',
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