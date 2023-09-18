/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"
import ImageSlider from "./ImageSlider";
import { chair04 } from "../../assets/images/product"


const Home = () => {
  const imageList = {
    chair1: chair04,
    chair2: chair04,
    chair3: chair04,
    chair4: chair04,
    chair5: chair04,
  }
  return (
    <>
      <LogoTitle/>
      <ImageSlider images={imageList} />
      <div css={exampleStyle}>
        홈
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
