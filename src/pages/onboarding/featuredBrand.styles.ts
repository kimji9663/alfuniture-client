import { css } from "@emotion/css"
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const SwiperWrap = styled(Box)(() => ({
  width: '100%',
  "& .swiper-wrapper": {
    alignItems: "end",
  },
  "& .swiper-slide": {
    transform: "scale(0.75) translate3d(-5%, 16%, 0)",
    transitionDuration: ".5s",
  },
  "& .slide_item": {
    overflow: "hidden",
  },
  "& .slide_item img": {
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    height: 'calc(70vh - 74px - 120px)',
  },
  "& .slide_item .text": {
    position: "absolute",
    bottom: 0,
    margin: "16px",
    color: "#fff",
    overflow: "hidden",
    maxHeight: "35px",
    transition: "all .5s linear",
    fontSize: ".75rem",
  },
  "& .slide_item .text .title": {
    fontSize: "1.66rem",
  },
  "& .slide_item .text .brif": {
    fontSize: ".75rem",
  },

  "& .swiper-slide.swiper-slide-active": {
    transform: "scale(1) translateY(0)",
  },
  "& .swiper-slide.swiper-slide-active .text": {
    maxHeight: "calc(100% - 32px)",
  },
  "& .swiper-slide.swiper-slide-active .title": {
    fontSize: "1.25rem",
  },
}))