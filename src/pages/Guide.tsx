import React from 'react'
import { NaviWrap } from '../components/navigationbar.styles'
import { SecondaryButton, PrimaryButton, PrimaryLightButton } from '../styles/buttons.styles'
import TitleOneLine from '../components/title/titleOneLine'
import TitleTwoLine1 from '../components/title/titleTwoLine1'
import TitleTwoLine2 from '../components/title/titleTwoLine2'
import LeftTitle from '../components/title/LeftTitle'
import NoTitle from '../components/title/NoTitle'
import LogoTitle from '../components/title/LogoTitle'
import WhiteTitle from '../components/title/WhiteTitle'
import CenterTitle from '../components/title/CenterTitle'
import NormalTabs from '../components/Tabs'
import NavigationBar from '../components/NavigationBar'

const Guide = () => {
  return (
    <>
      {/* 타이틀 */}
      <TitleOneLine />
      <TitleTwoLine1 />
      <TitleTwoLine2 />
      <LeftTitle />
      <NoTitle />
      <CenterTitle />
      <LogoTitle />
      <WhiteTitle />

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
