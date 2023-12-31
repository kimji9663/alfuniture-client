import React from "react"
import { NaviWrap } from "../components/navigationbar.styles"
import { SecondaryButton, PrimaryButton, PrimaryLightButton } from "../styles/buttons.styles"
import TitleOneLine from "../components/title/TitleOneLine"
import TitleTwoLine from "../components/title/TitleTwoLine"
import LeftTitle from "../components/title/LeftTitle"
import NoTitle from "../components/title/NoTitle"
import LogoTitle from "../components/title/LogoTitle"
import WhiteTitle from "../components/title/WhiteTitle"
import CenterTitle from "../components/title/CenterTitle"
import ArrowTitle from "../components/title/ArrowTitle"
import NormalTabs from "../components/Tabs"
import NavigationBar from "../components/NavigationBar"

const titleOneLine = ["SHOP ALL"];
const titleTwoLine = ["좋아하는 스타일을", "선택해주세요"];
const leftTitle = ["브랜드"];
const centerTitle = ["장바구니"];
const whiteTitle = ["모던한 인테리어 디자인"];

const Guide = () => {
  return (
    <>
      
      {/* 타이틀 */}
      <TitleOneLine title={titleOneLine}/>
      <TitleTwoLine title={titleTwoLine} onClick={() => {}} skip={true} />
      <LeftTitle title={leftTitle}/>
      <NoTitle />
      <CenterTitle title={centerTitle}/>
      <LogoTitle />
      <WhiteTitle title={whiteTitle}/>
      <ArrowTitle onClick={() => {}} />


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
