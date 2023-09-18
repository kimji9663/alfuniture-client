/** @jsxImportSource @emotion/react */
import React from "react"
import { ExampleStyle1, ExampleStyle2, exampleStyle } from "./home.styles"
import LogoTitle from '../../components/title/LogoTitle'
import NavigationBar from "../../components/NavigationBar"

const Home = () => {
  return (
    <>
      <LogoTitle/>
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
