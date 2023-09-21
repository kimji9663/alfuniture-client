/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import ImageSlider from "./ImageSlider";
import { chair04 } from "../../assets/images/product"
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'


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
      <img src={imageList[0].src}/>
      <div css={exampleStyle}>
        <div className="title">
          <div>2023 Furniture</div>
          <div>Collection</div>
        </div>
      </div>
      
      <ExampleStyle1>
        홈
      </ExampleStyle1>
      <ExampleStyle2>
        홈
      </ExampleStyle2>
      <NavigationBar/>
    </>
  )
}

export default Home
