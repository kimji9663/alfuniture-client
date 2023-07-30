import React from "react"
import { NaviWrap, SecondaryButton, PrimaryButton, PrimaryLightButton } from "../components/navigationbar.styles"
import TitleOneLine from "../components/titleOneLine"
import TitleTwoLine1 from "../components/titleTwoLine1"
import TitleTwoLine2 from "../components/titleTwoLine2"
import NormalTabs from "../components/Tabs"
import NavigationBar from "../components/NavigationBar"


const Guide = () => {
  return (
    <>
      {/* 타이틀 */}
      <TitleOneLine />
      <TitleTwoLine1 />
      <TitleTwoLine2 />
      

      {/* 탭 */}
      <NormalTabs />
      
      {/* 네비게이션 바 */}
      <NavigationBar />

      {/* 버튼 2개 */}
      <NaviWrap className="pair">
        <SecondaryButton>pairButton1</SecondaryButton>
        <PrimaryButton>pairButton2</PrimaryButton>
      </NaviWrap>
      
      {/* 버튼 1개 */}
      <NaviWrap className="single">
        <PrimaryLightButton>singleButton</PrimaryLightButton>
      </NaviWrap>
    </>
  )
}

export default Guide
