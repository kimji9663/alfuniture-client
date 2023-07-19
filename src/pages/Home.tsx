import React from "react"
import { StyledBox, exampleStyle } from "./home.styles"
import NormalTabs from "../components/Tabs"
import NavigationBar from "../components/NavigationBar"

const Home = () => {
  return (
    <>
      <StyledBox>홈</StyledBox>
      <NormalTabs />
      <NavigationBar/>
    </>
  )
}

export default Home