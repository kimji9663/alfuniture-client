import React from "react"
import NormalTabs from "../components/Tabs"
import NavigationBar from "../components/NavigationBar"
import TitleTwoLine1 from "../components/titleTwoLine1"

const Home = () => {
  return (
    <>
      <TitleTwoLine1 />
      <div>홈</div>
      <NormalTabs />
      <NavigationBar/>
    </>
  )
}

export default Home
